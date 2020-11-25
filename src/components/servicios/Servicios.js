import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Servicio } from './Servicio'

export const Servicios = () => {
    return (
        <section className="servicios__section" id="servicios">
            <ScrollAnimation
                animateIn="animate__animated animate__fadeInLeft"
                animateOnce={true}
            >
                <h2>Servicios que ofrecemos</h2>
            </ScrollAnimation>

            <div className="row">
                <Servicio />
                <Servicio />
                <Servicio />
                <Servicio />
            </div>

        </section>
    )
}
