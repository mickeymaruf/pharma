import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs'

const Services = () => {
    const ourServices = [
        {
            _id: 1,
            title: "General Dentistry",
            desc: "Enthusiastically mesh long term high impact infrastructures efficient customer service.",
            image: "https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-1.png"
        },
        {
            _id: 2,
            title: "Radiography",
            desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            image: "https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-2.png"
        },
        {
            _id: 3,
            title: "Dental Pediatric",
            desc: "terative approaches to corporate strategy foster collaborative thinking further value.",
            image: "https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-4.png"
        },
        {
            _id: 4,
            title: "Whitening",
            desc: "Organically grow the holistic world view of disruptive innovation via better workplace.",
            image: "https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-3.png"
        }
    ]
    return (
        <section className='w-10/12 mx-auto text-gray-600 mt-28'>
            <h1 className='text-5xl text-primary font-playfair mb-2'>Be Proud Of Your Smile</h1>
            <small>
                Seamlessly visualize quality intellectual capital without superior collaboration and idea<br />-sharing. Holistically pontificate installed base portals after maintainable products.
            </small>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 text-center my-12'>
                {
                    ourServices.map(service => <div key={'service' + service._id}>
                        <img className='w-48 mx-auto' src={service.image} alt="" />
                        <h4 className='font-playfair text-2xl mt-8'>{service.title}</h4>
                        <small className='block my-1'>
                            {service.desc}
                        </small>
                        <small className='flex items-center justify-center gap-3 text-theme font-medium mt-3 text-primary'><Link>Read more</Link><BsChevronRight /></small>
                    </div>
                    )
                }
            </div>
        </section>
    );
};

export default Services;