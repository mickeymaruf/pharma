const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SK);
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');

// middlewares
app.use(cors());
app.use(express.json());
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ status: 'unauthorized access' });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).send({ status: 'forbidden access' });
        }
        req.decoded = decoded;
        next();
    })
}

const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const run = async () => {
    try {
        const db = client.db("pharma");
        const appointmentCollection = db.collection("appointments");
        const bookingCollection = db.collection("bookings")
        const userCollection = db.collection("users")
        const doctorsCollection = db.collection("doctors")
        const paymentsCollection = db.collection("payments")

        // NOTE: make sure use veifyAdmin after verifyJWT
        const verifyAdmin = async (req, res, next) => {
            const decodedEmail = req.decoded?.email;

            const user = await userCollection.findOne({ email: decodedEmail });
            if (user.role !== "admin") {
                return res.status(403).send({ message: 'forbidden access' });
            }
            next();
        }

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
        app.get('/appointmentSpecialty', async (req, res) => {
            const reslut = await appointmentCollection.find({}).project({ name: 1 }).toArray();
            res.send(reslut);
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
        app.get('/bookings', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded?.email;
            if (decodedEmail !== req.query.email) {
                return res.status(403).send({ status: 'forbidden access' });
            }
            const query = { email: req.query.email };
            const bookings = await bookingCollection.find(query).toArray();
            res.send(bookings);
        })
        app.get('/bookings/:_id', async (req, res) => {
            const _id = req.params._id
            const booking = await bookingCollection.findOne({ _id: ObjectId(_id) });
            res.send(booking);
        })
        // jwt
        app.get('/jwt', async (req, res) => {
            const email = req.query.email;
            const user = await userCollection.findOne({ email: email });
            if (user) {
                const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
                return res.send({ accessToken: token });
            }
            res.status(403).send({ accessToken: '' });
        })
        // users
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        })
        app.get('/users', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded?.email;
            const email = req.query.email;
            if (decodedEmail !== email) {
                return res.status(403).send({ message: 'forbidden access' });
            }

            const users = await userCollection.find({}).toArray();
            res.send(users);
        })
        app.get('/users/admin/:email', async (req, res) => {
            const email = req.params.email;
            const user = await userCollection.findOne({ email });
            res.send({ isAdmin: user?.role === 'admin' });
        })
        app.put('/users/admin/:id', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded?.email;
            const user = await userCollection.findOne({ email: decodedEmail });
            if (user.role !== 'admin') {
                return res.status(403).send({ message: 'forbidden access' });
            }

            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await userCollection.updateOne(query, updateDoc, options);
            res.send(result);
        })
        // doctors
        app.get('/doctors', verifyJWT, verifyAdmin, async (req, res) => {
            const doctors = await doctorsCollection.find({}).toArray();
            res.send(doctors);
        })
        app.post('/doctors', verifyJWT, verifyAdmin, async (req, res) => {
            const doctor = req.body;
            const result = await doctorsCollection.insertOne(doctor);
            res.send(result);
        })
        app.delete('/doctors/:id', verifyJWT, verifyAdmin, async (req, res) => {
            const query = { _id: ObjectId(req.params.id) }
            const result = await doctorsCollection.deleteOne(query);
            res.send(result);
        })
        // payment
        app.post("/create-payment-intent", async (req, res) => {
            const booking = req.body;
            const price = booking.price;
            const amount = price * 100;

            const paymentIntent = await stripe.paymentIntents.create({
                currency: "usd",
                amount,
                "payment_method_types": [
                    "card"
                ],
            })
            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        })
        app.post('/payments', async (req, res) => {
            const payment = req.body;
            const result = await paymentsCollection.insertOne(payment);
            // 
            const filter = { _id: ObjectId(payment.bookingId) }
            const updateDoc = {
                $set: {
                    paid: true,
                    transactionId: payment.transactionId
                }
            }
            const updateResult = await bookingCollection.updateOne(filter, updateDoc);
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