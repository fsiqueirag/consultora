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
                    <h2>Sobre Nosotros</h2>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="animate__animated animate__fadeIn"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p>Somos una consultora de la Ciudad de Córdoba, que nace con la finalidad de prestar sus servicios a emprendedores y empresas. Nuestra particularidad consiste en que además de profesionales en derecho de los negocios y en el desarrollo de la gestión y mejora de resultados, también somos emprendedores de nuestros proyectos.</p><br />
                    <p>La Consultora para Emprendedores desde el Programa de Administración de Proyectos asesora  a emprendedores en su etapa inicial acompañando el esperado proceso de crecimiento y desarrollo hasta consolidarla como empresa. Siempre, en todos y cada uno de los proyectos en que participamos sentimos el orgullo de crecer junto a ellos.</p><br />
                    <p>Sabemos que interpretamos las necesidades de nuestros clientes de manera diferente; sentimos y pensamos en un mismo sentido, porque somos parte del proyecto como si fuera propio.</p>
                </ScrollAnimation>
            </div>
        </section>
    )
}
