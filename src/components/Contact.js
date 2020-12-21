import React from 'react';

export const Contact = () => {
    return (
        <section className="contact__section" id="contact">
            {/* <img className="contact__logo" src="./images/isotipo1.png" alt="logo" /> */}

            <div className="row">

                
                <div className="contact__container col-md-3">
                    <span className="fas fa-envelope fa-2x contact__icon" />
                    <p className="contact__text">hola@consultoraparaemprendedores.com</p>
                </div>
                <div className="contact__container col-md-3">
                    <span className="fab fa-twitter fa-2x contact__icon" />
                    <p className="contact__text">@CPEmprendedor</p>
                </div>
                <div className="contact__container col-md-3">
                    <span className="fab fa-whatsapp fa-2x contact__icon" />
                    <p className="contact__text">+54 9 3515 39-3021</p>
                </div>
                <div className="contact__container col-md-3">
                    <span className="fab fa-linkedin-in fa-2x contact__icon" />
                    <p className="contact__text">https://www.linkedin.com/in/toniorosa</p>
                </div>
                <div className="contact__container col-md-12">
                    <span className="fab fa-instagram fa-2x contact__icon" />
                    <p className="contact__text">@consultora.para.emprendedores</p>
                </div>
                

            </div>

            <p className="contact__ciudad">Ciudad de Córdoba - Provincia de Córdoba - República Argentina</p>

        </section>
    )
}
