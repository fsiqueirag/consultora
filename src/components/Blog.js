import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Post } from './blog/Post';
import { useFetch } from './hooks/useFetch';

export const Blog = () => {
    const url = 'https://www.googleapis.com/blogger/v3/blogs/4886578494024518036/posts?key=AIzaSyCCjbKQtcFuD6s50ILmjhwlnudsvwFX9_Y';
    const { data, loading } = useFetch(url);

    const lastPosts = data?.items.slice(0, 2);

    return (
        <section className="blog__section" id="blog">
            <ScrollAnimation
                animateIn="animate__animated animate__fadeInLeft"
                animateOnce={true}
            >
                <h2>Blog</h2>
            </ScrollAnimation>

            <div className="row">
                {
                    loading
                        ?
                        <p className="animate__animated animate__pulse animate__infinite">Cargando entradas del blog...</p>
                        :
                        lastPosts.map((post, index) => <Post post={post} key={post.id} position={index} />)

                }

                {
                    !loading
                    &&
                    <div className="blog__post-container col-lg-4 animate__animated animate__fadeIn">
                        <div className="blog__post-card">
                            <span className="fab fa-twitter blog__icon" />
                            <a href="#" className="btn" target="_blank" rel="noreferrer">Ir al Twitter</a>
                        </div>
                    </div>
                }

            </div>
        </section>
    )
}
