import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Servicio = ({ title, icon, content1, content2, content3, contentBold }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="servicios__card-container col-md-6">
            <ScrollAnimation
                animateIn='animate__animated animate__fadeInUp'
                animateOnce={true}
                className="servicios__scrollContainer"
            >
                <div className={`servicios__card ${isClicked && 'servicios__card-full'}`}>
                    <span className={`${icon} servicios__icon`} />
                    <h3>{title}</h3>
                    <p>{content1}</p>

                    {
                        isClicked
                        ?
                        <ScrollAnimation 
                        animateIn="animate__animated animate__fadeIn"
                        animateOnce={true}
                        >
                            <br />
                            <p>{content2}</p>
                            <br />
                            <p>{content3}</p>
                            <p className="servicios__content-bold">{contentBold}</p>
                    <button className="btn btn-dark servicios__full-btn" onClick={handleClick}>Ver menos</button>
                        </ScrollAnimation>
                        :
                    <button className="btn btn-outline-dark servicios__small-btn" onClick={handleClick}>Ver más</button>

                    }
                    
                </div>
            </ScrollAnimation>
        </div>
    )
}
