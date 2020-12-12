import React from 'react';

export const Contact = () => {
    return (
        <section className="contact__section" id="contact">
            <img className="contact__logo" src="./images/isotipo1.png" alt="logo" />
            <p className="contact__ciudad">Ciudad de Córdoba - Provincia de Córdoba - República Argentina</p>

            <div className="row">
                <div className="col-md-4">
                    <span className="fas fa-envelope fa-2x contact__icon" />
                    <p className="contact__text">hola@consultoraparaemprendedores.com</p>
                </div>
                <div className="col-md-4">
                    <span className="fab fa-twitter fa-2x contact__icon" />
                    <p className="contact__text">@CPEmprendedores</p>
                </div>
                <div className="col-md-4">
                    <span className="fab fa-whatsapp fa-2x contact__icon" />
                    <p className="contact__text">+54 9 3515 39-3021</p>
                </div>
            </div>
        </section>
    )
}
