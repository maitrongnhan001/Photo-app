import React from 'react';
import './banner.scss';


const Banner = (props) => {
    const {title, backgroundUrl} = props;

    const bannerStyle = backgroundUrl
    ? {backgroundImage: backgroundUrl }
    : {};

    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;
