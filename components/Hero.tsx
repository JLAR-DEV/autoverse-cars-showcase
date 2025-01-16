"use client";

import Image from "next/image";
import CustomButton  from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    En La Laguna, encuentra el auto perfecto para tu estilo de vida
                </h1>

                <p className="hero__subtitle">
                En la región de La Laguna, un lugar lleno de historia y crecimiento, te ofrecemos una amplia variedad de vehículos que se ajustan a tus necesidades. 
                Ya sea que busques un auto para tus traslados diarios, o un compañero de aventuras para explorar cada rincón de esta hermosa zona, tenemos lo que 
                necesitas. ¡Ven y haz de cada viaje un recorrido inolvidable con el auto que siempre has querido!
                </p>

                <CustomButton
                    title="Explora nuestros autos"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;