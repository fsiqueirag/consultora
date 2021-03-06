import React, { useState } from 'react';

export const Navbar = () => {

    const [isNavTop, setIsNavTop] = useState(true);

    window.onscroll = function () {
        if (window.pageYOffset !== 0) {
            setIsNavTop(false);
        } else {
            setIsNavTop(true);
        }
    };

    return (
        <div>
            <nav id="navbar" className={`navbar navbar-expand-md navbar-dark ${isNavTop ? 'nav-top' : 'nav-full'}`}>
                <a className="navbar-brand" href="#home"><img className={`navbar__logo ${isNavTop ? 'navbar__logo-top' : 'navbar__logo-full'}`} src="./images/logo2.png" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
