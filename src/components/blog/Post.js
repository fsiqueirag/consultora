import React from 'react';

export const Post = ({ post, position }) => {

    const { title, content, published, url } = post;

    function createMarkup() {
        return { __html: content };
    }

    return (
        <div className="blog__post-container col-lg-4 animate__animated animate__fadeIn">
            <div className={`blog__post-card ${position === 1 && "blog__middle-card"}`}>
                <p className="blog__post-date">{published.split("T", 1)}</p>
                <h3>{title}</h3>
                <div
                    className="blog__content"
                    dangerouslySetInnerHTML={createMarkup()}
                />
                <a href={url} className="btn" target="_blank" rel="noreferrer">Seguir Leyendo</a>
            </div>
        </div>
    )
}
