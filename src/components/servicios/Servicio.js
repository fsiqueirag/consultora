import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Servicio = () => {
    return (
        <div className="servicios__card-container col-md-6">
            <ScrollAnimation
                animateIn='animate__animated animate__fadeInUp'
                animateOnce={true}
            >
                <div className="servicios__card">
                    <span className="fas fa-laptop servicios__icon" />
                    <h3>Servicio</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, eius doloremque? Commodi assumenda optio repudiandae. Earum consectetur ut fugiat cupiditate amet cum sequi modi obcaecati quis sunt veniam, eaque alias!</p>
                </div>
            </ScrollAnimation>
        </div>
    )
}
