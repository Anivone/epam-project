import './Header.css';
import backgroundVideo from "../../assets/video/dance-video2.mp4";
import backgroundPoster from '../../assets/images/dance-image.png';
import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { Route, Routes, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
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
        <header className={location.pathname !== '/' ? 'video-header-nav' : 'video-header'}>
            <Routes>
                <Route path='*' element={<Nav displayNav={displayNav}/>}/>
                <Route path='/' element={
                    <>
                        <Nav displayNav={displayNav}/>
                        <video id='dance-video' src={backgroundVideo} poster={backgroundPoster} autoPlay loop muted/>
                        <div className='viewport-header'>
                            <h1>
                                DANCE
                                <span>SCHOOL</span>
                            </h1>
                        </div>
                    </>
                }/>
            </Routes>
        </header>
    )

}

export default Header;