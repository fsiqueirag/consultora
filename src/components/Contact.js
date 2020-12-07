import React from 'react';

export const Contact = () => {
    return (
        <section className="contact__section" id="contact">
            {/* <h2>Contacto</h2> */}
            <img className="contact__logo" src="./images/isotipo1.png" alt="logo" />

            <div className="row">
                <div className="col-md-4">
                    <span className="fas fa-envelope fa-2x contact__icon" />
                    <p>toniorosa@hotmail.com</p>
                </div>
                <div className="col-md-4">
                    <span className="fab fa-twitter fa-2x contact__icon" />
                    <p>@CPEmprendedores</p>
                </div>
                <div className="col-md-4">
                    <span className="fab fa-whatsapp fa-2x contact__icon" />
                    <p>+54 9 3515 39-3021</p>
                </div>
            </div>
        </section>
    )
}
