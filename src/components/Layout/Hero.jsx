import React from 'react';
import heroImg from '../../assets/4.jpg'; 
const Hero = () => {
    return <section>
        <img src={heroImg} 
        alt="offmoon"
        className="w-full h-[500px] md:h-[800px] lg:h-[550px] object-cover" />    
    </section>
}
export default Hero;