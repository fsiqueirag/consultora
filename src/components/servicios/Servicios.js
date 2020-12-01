import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Servicio } from './Servicio';

const servicios = [
    {
        title: 'DESARROLLO DE NEGOCIOS',
        icon: 'fas fa-briefcase',
        content1: 'El Desarrollo de Negocios consiste en el estudio de la gestión y estrategia de una unidad de negocio con la finalidad de detectar oportunidades que resultaran pendientes en los proyectos de nuestros clientes, y que imposibilitaron el crecimiento deseado. Podemos asesorarlos desde la creación y durante la consolidación, para proponer innovaciones que abarquen nuevos productos, cambios de estrategias o ampliación hacia nuevos mercados.',
        content2: 'El desarrollo de negocio consiste en la gestión encaminada a conseguir mejoras en los resultados de la gestión.  Se trabaja sobre los productos y servicios, creando nuevas estrategias, en materia de organización interna, modelado, comunicación, entre muchas otras posibles acciones.',
    },
    {
        title: 'ABOGACÍA DE LOS NEGOCIOS',
        icon: 'fas fa-balance-scale',
        content1: 'Servicio jurídico de calidad. Nuestro diferencial consiste en que hacemos un buen trabajo jurídico para nuestros clientes, tenemos una mirada generalista del desarrollo diario de la empresa o negocio. Nos esforzamos en aprender las particularidades de los negocios de nuestros clientes para anticipar sus necesidades, y así logramos que el proyecto suceda y sea seguro jurídicamente.  Somos partícipes del resultado, así brindamos nuestro compromiso. ',
    },
    {
        title: 'ACADEMIA',
        icon: 'fas fa-book',
        content1: 'Siempre supimos que la mejor forma de aprender es enseñando, nos mantiene alertas y ordenados a los nuevos conceptos. Quienes ejercemos la docencia en forma vocacional vivimos en constante instancia de aprendizaje. Nosotros somos generadores de experiencias por el ejercicio cotidiano de nuestro trabajo, eso conlleva el deseo de comunicarlo.',
        content2: 'Tenemos una amplia oferta de cursos, capacitaciones y talleres, de distintas cargas y contenidos. En nuestro blog podrán verificar la oferta y su calendario.',
        content3: 'CAPACITARCE NO ES UNA OPCIÓN ES UNA NECESIDAD.'
    },
    {
        title: 'MENTORES',
        icon: 'fas fa-chalkboard-teacher',
        content1: 'En la Consultora creamos un Programa Mentores donde ofrecemos a los interesados en desarrollar sus proyectos una asesoría integral y planificada donde aplicamos nuestra experiencia y conocimiento en materia de Desarrollo de Negocios, Comunicación y Asesoramiento Jurídico.',
        content2: 'Creamos a estos fines distintos Programas subvencionados como ser el Programa especial para Proyectos de Etapa Inicial, y de Administración de Emprendimientos, te brindamos ayuda específica a fin de lograr fuerte mejoras en el posicionamiento y venta de productos y servicios.',
    },
]

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
                {
                    servicios.map((servicio, index) => (
                        <Servicio
                            key={index}
                            title={servicio.title}
                            icon={servicio.icon}
                            content1={servicio.content1}
                            content2={servicio.content2}
                            content3={servicio.content3}
                        />)
                    )
                }
            </div>

        </section>
    )
}
