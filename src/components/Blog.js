import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Post } from './blog/Post';
import { useFetch } from './hooks/useFetch';

export const Blog = () => {
    const url = 'https://www.googleapis.com/blogger/v3/blogs/2358858623891326575/posts?key=AIzaSyCCjbKQtcFuD6s50ILmjhwlnudsvwFX9_Y';
    const { data, loading } = useFetch(url);
    const lastPosts = data?.items?.slice(0, 3);
    return (
        <section className="blog__section" id="blog">
            <ScrollAnimation
                animateIn="animate__animated animate__fadeInLeft"
                animateOnce={true}
            >
                <h2>Blog</h2>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="animate__animated animate__fadeIn"
                animateOnce={true}
            >
                <div className="row">
                    {
                        loading
                            ?
                            <p className="animate__animated animate__pulse animate__infinite">Cargando entradas del blog...</p>
                            :
                            (
                                lastPosts?.length === 3
                                    ?
                                    lastPosts?.map((post, index) => <Post post={post} key={post.id} position={index} />)
                                    :
                                    (
                                        lastPosts?.length === 2
                                            ?
                                            <Fragment>
                                                {lastPosts?.map((post, index) => <Post post={post} key={post.id} position={index} />)}
                                                <Post post={{ title: "Próximamente" }} position={2} />
                                            </Fragment>
                                            : (
                                                lastPosts?.length === 1
                                                    ?
                                                    <Fragment>
                                                        {lastPosts?.map((post, index) => <Post post={post} key={post.id} position={index} />)}
                                                        <Post post={{ title: "Próximamente" }} position={1} />
                                                        <Post post={{ title: "Próximamente" }} position={2} />
                                                    </Fragment>
                                                    : (
                                                        lastPosts === undefined
                                                        &&
                                                        <Fragment>
                                                            <Post post={{ title: "Próximamente" }} position={0} />
                                                            <Post post={{ title: "Próximamente" }} position={1} />
                                                            <Post post={{ title: "Próximamente" }} position={2} />
                                                        </Fragment>
                                                    )
                                            )
                                    )
                            )

                    }

                    <a href="http://consultoraparaemprendedores.blogspot.com" className="btn blog__btn" target="_blank" rel="noreferrer">Ir al Blog</a>
                    {
                        // !loading
                        // &&
                        // <div className="blog__post-container col-lg-4 animate__animated animate__fadeIn">
                        //     <div className="blog__post-card">
                        //         {/* <span className="fab fa-twitter blog__icon" /> */}
                        //         <blockquote className="twitter-tweet"><p lang="es" dir="ltr">Este próximo fin de semana <a href="https://twitter.com/hashtag/StartupWeekend?src=hash&amp;ref_src=twsrc%5Etfw">#StartupWeekend</a> en <a href="https://twitter.com/hashtag/Mayaguez?src=hash&amp;ref_src=twsrc%5Etfw">#Mayaguez</a>. Nos unimos al <a href="https://twitter.com/KaporCenter?ref_src=twsrc%5Etfw">@KaporCenter</a> para promover a los Latinos en Tech. <a href="https://twitter.com/hashtag/Latinix?src=hash&amp;ref_src=twsrc%5Etfw">#Latinix</a> <a href="https://twitter.com/hashtag/PuertoRico?src=hash&amp;ref_src=twsrc%5Etfw">#PuertoRico</a> <a href="https://t.co/anlh9i8PVj">https://t.co/anlh9i8PVj</a></p>&mdash; Emprendedorespr (@CPEmprendedores) <a href="https://twitter.com/CPEmprendedores/status/1041777047830507520?ref_src=twsrc%5Etfw">September 17, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        //         <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        //         <a className="blog__twitter-button btn"
                        //             href="https://twitter.com/CPEmprendedores">
                        //             Seguir @CPEmprendedores</a>
                        //     </div>

                        // </div>
                    }

                </div>
            </ScrollAnimation>

        </section>
    )
}
