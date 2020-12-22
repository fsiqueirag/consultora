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
                </div>
                
            </ScrollAnimation>

        </section>
    )
}
