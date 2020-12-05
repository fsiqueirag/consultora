import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Servicio = ({ title, icon, content1, content2, content3, contentBold }) => {
    return (
        <div className="servicios__card-container col-md-6">
            <ScrollAnimation
                animateIn='animate__animated animate__fadeInUp'
                animateOnce={true}
                className="servicios__scrollContainer"
            >
                <div className="servicios__card">
                    <span className={`${icon} servicios__icon`} />
                    <h3>{title}</h3>
                    <p>{content1}</p>
                    <br />
                    <p>{content2}</p>
                    <br />
                    <p>{content3}</p>
                    <p className="servicios__content-bold">{contentBold}</p>
                </div>
            </ScrollAnimation>
        </div>
    )
}
