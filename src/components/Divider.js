import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Divider = ({ text }) => {
    return (
        <div className="divider__container">
            <ScrollAnimation animateIn="animate__animated animate__fadeIn" animateOnce={true}>
                <p>{text}</p>
            </ScrollAnimation>
        </div>
    )
}
