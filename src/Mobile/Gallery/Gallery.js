import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import LazyHero from 'react-lazy-hero';
import bg1 from '../../assets/bg1.jpg';
import './Gallery.css';
import ReactGA from 'react-ga';

class Gallery extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/gallery');

        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="MobileGallery">
                <MetaTags>
                    <title>Smile Auto Leasing | Gallery</title>
                    <meta id="meta-description" name="description" content="Discover all the latest about our inventory, recommendations, and more right here on the Smile Auto Leasing Gallery."/>
                </MetaTags>
                <LazyHero className="MobileApplicationsHeader" imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="230px" parallaxOffset={50}>
                    <p className="MobileHeading">GALLERY</p>
                    <p className="MobileSubHeading">OUR LATEST SOCIAL MEDIA POSTS.</p>
                </LazyHero>
                <div className="MobileInstagramContainer">
                    <a href="http://instagram.com/smileautoleasing" rel="noopener noreferrer" target="_blank" className="InstagramLink"><div className="InstagramHeading">Follow us on Instagram</div></a>
                    <div className="MobileInstagramFeedContainer">
                        <div className="MobileInstagramBackground"/>
                        <div className="elfsight-app-f6bd7877-21b1-44ec-8566-31d552f312f0"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;