import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Home = () => {
    return (
        <section className="home__container" id="home" style={{
            backgroundImage: 'url("./images/brooklynBridge.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}
        >
            <ScrollAnimation
                animateIn='animate__animated animate__fadeIn'
                animateOnce={true}
            >
                <div className="home__main-title">
                    {/* <h1 className="display-4">Consultora Para Emprendedores</h1> */}
                    {/* <img src="./images/logo.png" alt="logo" style={{ "width": "100%", "max-width": "800px", "display": "block" }} />
                    <a className="btn btn-lg btn-outline-light" href="#about">Empezar</a> */}
                </div>
            </ScrollAnimation>
        </section>
    )
}
