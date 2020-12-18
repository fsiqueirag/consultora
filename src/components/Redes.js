import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Redes = () => {
    return (
        <section className="redes__section">

            <div className="row redes__container">

                <div className="col-md-6 redes__twitter-container">
                    <ScrollAnimation
                        animateIn="animate__animated animate__fadeInLeft"
                        animateOnce={true}
                    >
                        <span className="fab fa-twitter redes__twitter-logo" />
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="animate__animated animate__fadeIn"
                        animateOnce={true}
                    >

                        <blockquote className="twitter-tweet">
                            <p lang="es" dir="ltr">Además de confianza aportamos conocimiento y experiencia. Queremos ser parte de la solución para que descanses un día como hoy. <br /><br />Ciudad de Córdoba. Provincia de Córdoba. República Argentina.
                            <a href="https://twitter.com/hashtag/BuenDomingo?src=hash&amp;ref_src=twsrc%5Etfw"> #BuenDomingo</a>
                                <a href="https://twitter.com/hashtag/DesarrollodeNegocios?src=hash&amp;ref_src=twsrc%5Etfw"> #DesarrollodeNegocios</a>
                                <a href="https://twitter.com/hashtag/ServiciosJur%C3%ADdicosparaEmprendedores?src=hash&amp;ref_src=twsrc%5Etfw"> #ServiciosJurídicosparaEmprendedores</a>
                            </p>&mdash; CPE (@CpEmprendedor)
                            <a href="https://twitter.com/CpEmprendedor/status/1333054491520888833?ref_src=twsrc%5Etfw">November 29, 2020</a>
                        </blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="animate__animated animate__fadeIn"
                        animateOnce={true}
                    >

                        <a className="redes__twitter-button btn"
                            href="https://twitter.com/CPEmprendedor"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Seguir en Twitter</a>
                            
                    </ScrollAnimation>



                </div>

                <div className="col-md-6 redes__instagram-container">
                    <ScrollAnimation
                        animateIn="animate__animated animate__fadeInRight"
                        animateOnce={true}
                    >
                        <span className="fab fa-instagram redes__instagram-logo" />
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="animate__animated animate__fadeIn"
                        animateOnce={true}
                    >
                        <img className="redes__instagram-profile" src="./images/instagram-profile.png" alt="perfil de instagram" />
                    </ScrollAnimation>


                    <ScrollAnimation
                        animateIn="animate__animated animate__fadeIn"
                        animateOnce={true}
                    >
                        <a className="redes__instagram-button btn"
                            href="https://www.instagram.com/consultora.para.emprendedores/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Seguir en Instagram</a>
                    </ScrollAnimation>

                </div>
            </div>

        </section>
    )
}
