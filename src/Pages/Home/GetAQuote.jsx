import React from 'react';
import wave from '../../assets/wave.svg'

const GetAQuote = () => {
    const GetAQuoteStyle = {
        background: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "15rem",
        marginTop: "-10rem",
    }
    return (
        <section style={GetAQuoteStyle}>
            <div className='w-10/12 mx-auto flex items-center gap-5'>
                <div className='flex-1'>
                    <img className='w-11/12' src="https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/kid.png" alt="" />
                </div>
                <div className='text-white flex-1'>
                    <h1 className='text-5xl text-[#115278] font-playfair mb-2'>Get A Quote</h1>
                    <p className='text-sm'>
                        Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information.
                    </p>
                    <div className='my-6 flex gap-3 mb-10'>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full rounded-full max-w-xs" />
                        <button className='btn-secondary'>Subscribe Now</button>
                    </div>
                    <p className="text-xs">
                        By subscribing to our newsletter, you accept enterprise-wide strategic theme areas with functionalized infrastructures.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GetAQuote;