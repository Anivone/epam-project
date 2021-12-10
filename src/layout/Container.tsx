import { Routes, Route } from 'react-router-dom';
import Header from "./header/Header";
import React from "react";
import Main from "./main/Main";

const Container = () => {
    return (
        <Routes>
        <Route path='*' element={
            <>
                <Header/>
                <Main/>
            </>
        }/>
        </Routes>
    )
};

export default Container;