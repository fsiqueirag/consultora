import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const About = () => {
    return (
        <section className="about__section" id="about">
            <div>
                <ScrollAnimation
                    animateIn="animate__animated animate__fadeInLeft"
                    animateOnce={true}
                >
                    <h2>Acerca de</h2>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="animate__animated animate__fadeIn"
                    duration="1.5"
                    animateOnce={true}
                >
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, minus! Hic deleniti harum corporis? Expedita adipisci totam ipsum dignissimos ad, sapiente tempore odit alias aut asperiores consequuntur porro suscipit fugit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, minus! Hic deleniti harum corporis? Expedita adipisci totam ipsum dignissimos ad, sapiente tempore odit alias aut asperiores consequuntur porro suscipit fugit.</p>
                </ScrollAnimation>
            </div>
        </section>
    )
}
