import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from './Nav';
export const Mycontext = createContext([])
const Root = () => {
    const quizsData=useLoaderData()
    const quizs = quizsData.data
    return (
        <Mycontext.Provider value={quizs}>
            <Nav/>
            <Outlet/>
        </Mycontext.Provider>
        
    );
};

export default Root;