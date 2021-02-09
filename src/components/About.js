import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {
  return (
    <section className='about__section' id='about'>
      <div>
        <ScrollAnimation
          animateIn='animate__animated animate__fadeInLeft'
          animateOnce={true}
        >
          <h2>Sobre Nosotros</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__animated animate__fadeIn'
          duration={1.5}
          animateOnce={true}
        >
          <p>
            Somos una consultora de la Ciudad de Córdoba, que nace con la
            finalidad de prestar sus servicios a emprendedores y empresas.
            Nuestra particularidad consiste en que además de profesionales en
            derecho de los negocios y en el desarrollo de la gestión y mejora de
            resultados, también somos emprendedores de nuestros proyectos.
          </p>
          <br />
          <p>
            Desde el Programa de Administración de Proyectos la Consultora,
            asesora a emprendedores en su etapa inicial acompañándolo en el
            proceso de crecimiento y desarrollo hasta consolidarse como empresa.
            En cada uno de los proyectos que participamos sentimos el orgullo de
            crecer junto a ellos.
          </p>
          <br />
          <p>
            Interpretamos las necesidades de nuestros clientes de forma
            inmediata. Pensamos en un mismo sentido porque nos involucramos en
            el proyecto como si fuera propio.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};
