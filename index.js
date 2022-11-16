const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const run = async () => {
    try {
        const db = client.db("pharma");
        const appointmentCollection = db.collection("appointments");
        const bookingCollection = db.collection("bookings")

        app.get('/appointments', async (req, res) => {
            const date = req.query.date;
            const query = {};
            const appointments = await appointmentCollection.find(query).toArray();
            // :D get the bookings of the provided date
            const bookingQuery = { appointmentDate: date }
            const alreadyBooked = await bookingCollection.find(bookingQuery).toArray();
            appointments.forEach(appointment => {
                const appointmentsBooked = alreadyBooked.filter(book => book.treatment === appointment.name);
                const bookedSlots = appointmentsBooked.map(book => book.slot);
                const remainingSlots = appointment.slots.filter(slot => !bookedSlots.includes(slot));
                appointment.slots = remainingSlots;
            })
            res.send(appointments);
        })
        // bookings
        app.post('/bookings', async (req, res) => {
            const booking = req.body;
            const query = {
                email: booking.email,
                appointmentDate: booking.appointmentDate,
                treatment: booking.treatment
            };
            const alreadyBooked = await bookingCollection.find(query).toArray();
            if (alreadyBooked.length) {
                return res.send({ acknowledge: false, message: `You've already booked on ${booking.appointmentDate}` });
            }
            const result = await bookingCollection.insertOne(booking);
            res.send(result);
        })
    } finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send({
        status: '200',
        message: 'Pharma Server is running...'
    })
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})