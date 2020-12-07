import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

export const Home = () => {
    return (
        <section className="home__container" id="home">
            <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="8000" data-pause="false">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active">Consultora Para Emprendedores</li>
                    <li data-target="#carousel" data-slide-to="1">Desarrollo de Negocios</li>
                    <li data-target="#carousel" data-slide-to="2">Abogacía de Negocios</li>
                    <li data-target="#carousel" data-slide-to="3">Academia</li>
                    <li data-target="#carousel" data-slide-to="4">Mentores</li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{
                        backgroundImage: 'url("./images/brooklynBridge.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <div className="home__main">
                            <h1 className="animate__animated animate__fadeInDown animate__slow">CONSULTORA PARA EMPRENDEDORES</h1>
                            <p className="animate__animated animate__fadeInRight animate__slow">Somos una consultora que nace con la finalidad de prestar sus servicios a emprendedores y empresas en el área del derecho de los negocios y desarrollo de la gestión y mejora de resultados.</p>
                            <a className="animate__animated animate__fadeInLeft animate__delay-1s btn btn-outline-light btn-lg home__button" href="#about">Conocé Más</a>
                        </div>
                    </div>
                    <div className="carousel-item" style={{
                        backgroundImage: 'url("./images/newyork.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <div className="home__main">
                            <h1 className="animate__animated animate__fadeInDown animate__slow">DESARROLLO DE NEGOCIOS</h1>
                            <p className="animate__animated animate__fadeInRight animate__slow">Consiste en el estudio de la gestión y la estrategia con la finalidad de detectar oportunidades pendientes que imposibilitaron el crecimiento deseado.</p>
                            <a className="animate__animated animate__fadeInLeft animate__delay-1s btn btn-outline-light btn-lg home__button" href="#servicios">Conocé Más</a>
                        </div>
                    </div>
                    <div className="carousel-item" style={{
                        backgroundImage: 'url("./images/hammer.jpeg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <div className="home__main">
                            <h1 className="animate__animated animate__fadeInDown animate__slow">ABOGACÍA DE NEGOCIOS</h1>
                            <p className="animate__animated animate__fadeInRight animate__slow">Esta área de la práctica define nuestro perfil como abogados. Estamos capacitados para responder a las necesidades diarias de una empresa en el desarrollo de su actividad.</p>
                            <a className="animate__animated animate__fadeInLeft animate__delay-1s btn btn-outline-light btn-lg home__button" href="#servicios">Conocé Más</a>
                        </div>
                    </div>
                    <div className="carousel-item" style={{
                        backgroundImage: 'url("./images/academia.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <div className="home__main">
                            <h1 className="animate__animated animate__fadeInDown animate__slow">ACADEMIA</h1>
                            <p className="animate__animated animate__fadeInRight animate__slow">Siempre supimos que la mejor forma de aprender es enseñando. Esto nos mantiene alertas y ordenados a los nuevos conceptos.</p>
                            <a className="animate__animated animate__fadeInLeft animate__delay-1s btn btn-outline-light btn-lg home__button" href="#servicios">Conocé Más</a>
                        </div>
                    </div>
                    <div className="carousel-item" style={{
                        backgroundImage: 'url("./images/mentores.jpeg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <div className="home__main">
                            <h1 className="animate__animated animate__fadeInDown animate__slow">MENTORES</h1>
                            <p className="animate__animated animate__fadeInRight animate__slow">Contamos con programas subvencionados: Programa para Proyectos de Etapa Inicial, y Programa Administración de Emprendimientos. No dejes de consultar y postularte.</p>
                            <a className="animate__animated animate__fadeInLeft animate__delay-1s btn btn-outline-light btn-lg home__button" href="#servicios">Conocé Más</a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
