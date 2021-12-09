import './Header.css';
import backgroundVideo from "../../assets/video/dance-video2.mp4";
import backgroundPoster from '../../assets/images/dance-image.png';
import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";

const Header = () => {

    const [displayNav, setDisplayNav] = useState(true);

    useEffect(() => {
        document.body.addEventListener('scroll', (e) => {
            const value = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
            document.documentElement.style.setProperty('--headerOpacity', value.toString());
            document.documentElement.style.setProperty('--headerScale', value.toString());
            document.documentElement.style.setProperty('--navOpacity', value.toString());
            setDisplayNav(value > 0.2);
        });
    }, []);


    return (
        <header className='video-header'>
            <Nav displayNav={displayNav}/>
            <video id='dance-video' src={backgroundVideo} poster={backgroundPoster} autoPlay loop muted/>
            <div className='viewport-header'>
                <h1>
                    DANCE
                    <span>SCHOOL</span>
                </h1>
            </div>
        </header>
    )

}

export default Header;