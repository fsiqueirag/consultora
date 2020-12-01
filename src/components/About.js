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
                    duration={1.5}
                    animateOnce={true}
                >
                    <p>Somos una consultora de la Ciudad de Córdoba, orientada a prestar servicios a empresas y emprendedores, nuestra particularidad consiste en que además de profesionales en derecho de los negocios y en el desarrollo de la gestión y mejora de resultados, somos emprendedores ya que llevamos adelante nuestros proyectos.</p><br />
                    <p>La Consultora para Emprendedores nace con la finalidad de brindar apoyo a emprendedores en su etapa inicial y acompañar su proceso de crecimiento y desarrollo hasta consolidarla como empresa, negocio o Pyme en condiciones de crecer cotidianamente. En todos y cada uno de los proyectos en que participamos sentimos el orgullo de crecer junto a ellos.</p><br />
                    <p>Sabemos que interpretamos las necesidades de los emprendedores de manera diferente que el resto, sentimos y pensamos en un mismo sentido. “No existe nadie que entienda mejor las necesidades de un emprendedor, que otro emprendedor”.   </p>
                </ScrollAnimation>
            </div>
        </section>
    )
}
