import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const Twitter = () => {
    return (
        <section className="twitter__section">
            <ScrollAnimation
                animateIn="animate__animated animate__fadeIn"
                animateOnce={true}
            >
                <span className="fab fa-twitter twitter__logo ml-auto mr-auto" />

                <blockquote className="twitter-tweet">
                    <p lang="es" dir="ltr">Además de confianza aportamos conocimiento y experiencia. Queremos ser parte de la solución para que descanses un día como hoy. <br /><br />Ciudad de Córdoba. Provincia de Córdoba. República Argentina.
                <a href="https://twitter.com/hashtag/BuenDomingo?src=hash&amp;ref_src=twsrc%5Etfw"> #BuenDomingo</a>
                        <a href="https://twitter.com/hashtag/DesarrollodeNegocios?src=hash&amp;ref_src=twsrc%5Etfw"> #DesarrollodeNegocios</a>
                        <a href="https://twitter.com/hashtag/ServiciosJur%C3%ADdicosparaEmprendedores?src=hash&amp;ref_src=twsrc%5Etfw"> #ServiciosJurídicosparaEmprendedores</a>
                    </p>&mdash; CPE (@CpEmprendedor)
                 <a href="https://twitter.com/CpEmprendedor/status/1333054491520888833?ref_src=twsrc%5Etfw">November 29, 2020</a>
                </blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                <a className="twitter__button btn"
                    href="https://twitter.com/CPEmprendedores"
                    target="_blank"
                    rel="noreferrer"
                >
                    Seguir @CPEmprendedores</a>
            </ScrollAnimation>
        </section>
    )
}
