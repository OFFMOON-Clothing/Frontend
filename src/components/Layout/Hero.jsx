import React from 'react';
import heroImg from '../../assets/4.jpg'; 
const Hero = () => {
    return (
        <section className="relative">
            <img
                src={heroImg}
                alt="offmoon"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="text-[2.5rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] italic font-wushin font-bold tracking-normal uppercase mb-2 drop-shadow-5xl">
                        OFFMOON<br />
                    </h1>
                </div>
            </div>
        </section>
    )
}
export default Hero;