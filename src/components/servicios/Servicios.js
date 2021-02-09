import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Servicio } from './Servicio';

const servicios = [
  {
    title: 'DESARROLLO DE NEGOCIOS',
    icon: 'fas fa-briefcase',
    content1:
      'El Desarrollo de Negocios consiste en el estudio de la gestión y la estrategia de una unidad de negocio con la finalidad de detectar oportunidades que resultaran pendientes en los proyectos de nuestros clientes, y que imposibilitaron el crecimiento deseado.',
    content2:
      'Los acompañamos en las distintas etapas del Proyecto. Participamos del diseño, la concreción y estamos juntos durante la consolidación. En cada momento nos sentimos capacitados para proponer las innovaciones que abarquen nuevos productos, cambios de estrategias o ampliación hacia nuevos mercados.',
    content3:
      'El desarrollo de negocio consiste en una gestión a fin de conseguir mejoras en los resultados de gestión.  Se trabaja sobre los productos y servicios, creando nuevas estrategias, en materia de organización interna, modelado, comunicación, entre muchas otras posibles acciones.',
    contentBold: 'NOS ESFORZAMOS EN HACERLOS CRECER.',
  },
  {
    title: 'ABOGACÍA DE LOS NEGOCIOS',
    icon: 'fas fa-balance-scale',
    content1:
      'Esta es el área en nuestra práctica diaria que define nuestro perfil como abogados, a consecuencia de ello, propone las distintas ramas de especialización en razón de responder a las inquietudes diarias de una empresa en el desarrollo de su actividad.',
    content2:
      'Ser Abogado de Negocios implica conocimiento y experiencia. Con estas capacidades se puede brindar un Servicio jurídico de calidad, que permita, como en nuestro caso, hacer un buen trabajo jurídico para nuestros clientes.',
    content3:
      'Estamos presentes en el desarrollo diario de la empresa. Así estudiamos las particularidades de los negocios de nuestros clientes que nos permiten anticipar sus necesidades y logramos que el proyecto suceda y sea seguro jurídicamente.',
    contentBold:
      'SOMOS PARTÍCIPES DEL RESULTADO PORQUE BRINDAMOS NUESTRO COMPROMISO.',
  },
  {
    title: 'ACADEMIA',
    icon: 'fas fa-book',
    content1:
      'Siempre supimos que la mejor forma de aprender es enseñando. Esto nos mantiene alertas y ordenados a los nuevos conceptos. Quienes disfrutamos de la docencia vivimos en constante instancia de aprendizaje. Nosotros somos generadores de nuevas experiencias por el ejercicio de nuestro trabajo. Este es un capital que debemos sociabilizar y lo hacemos por medio de las capacitaciones.',
    content2:
      'Tenemos una amplia oferta de cursos, capacitaciones y talleres, de distintas cargas y contenidos. En nuestro blog podrán verificar la oferta y su calendario.',
    contentBold: 'CAPACITARSE NO ES UNA OPCIÓN ES UNA NECESIDAD.',
  },
  {
    title: 'MENTORES',
    icon: 'fas fa-chalkboard-teacher',
    content1:
      'En la Consultora creamos distintos Programas de Mentores donde ofrecemos a los interesados desarrollar sus proyectos con una asesoría integral y planificada en materias de Desarrollo de Negocios, Comunicación y Asesoramiento Jurídico.',
    content2:
      'Tenemos dos Programas subvencionados. Programa especial para Proyectos de Etapa Inicial, en el cuál desarrollamos desde cero el negocio o la empresa, y Programa de Administración de Emprendimientos, donde trabajamos en las mejoras del proyecto existente.',
    contentBold: '¿TENÉS UN PROYECTO? ¿EN QUÉ TE AYUDO?',
  },
];

export const Servicios = () => {
  return (
    <section className='servicios__section' id='servicios'>
      <ScrollAnimation
        animateIn='animate__animated animate__fadeInLeft'
        animateOnce={true}
      >
        <h2>Servicios que ofrecemos</h2>
      </ScrollAnimation>

      <div className='row'>
        {servicios.map((servicio, index) => (
          <Servicio
            key={index}
            title={servicio.title}
            icon={servicio.icon}
            content1={servicio.content1}
            content2={servicio.content2}
            content3={servicio.content3}
            contentBold={servicio.contentBold}
          />
        ))}
      </div>
    </section>
  );
};
