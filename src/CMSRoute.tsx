import React, { Component } from "react";
import ComplexHeader from './components/ComplexHeader';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/home-page';
import AttractionPage from './attraction/attraction-page';
import FacilityPage from './facility/facility-page';
import PageNotFound from "./components/PageNotFound";
import './CMSRoute.scss';


const CMSRoute = () => {
const Mega_Menu =[
    {id:1, name:'Home', url:'/complex-management-system/home'},
    {id:2, name:'Attraction', url:'/complex-management-system/attraction'},
    {id:3, name:'Facility', url:'/complex-management-system/facility'}
]

    return (

        <div>
            <ComplexHeader />
            <div className='complex-main-route-section'>
                <nav className='tab-list'>
                    <ul className="cms-meganav-section">
                       {
                        Mega_Menu.map((link)=>(
                            <li key={link.id} className="meganav-sublist">
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}                      

                    </ul>
                    {/* <div className='link-button'><a href='/complex-management-system/home'>Home</a></div>
                    <div className='link-button'><a href='/complex-management-system/attraction'>Attraction</a></div>
                    <div className='link-button'> <a href='/complex-management-system/facility'>Facility</a></div> */}
                </nav>
            </div>

            <Routes>
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/complex-management-system/home" element={<HomePage />} />
                <Route path="/complex-management-system/attraction" element={<AttractionPage />} />
                <Route path="/complex-management-system/facility" element={<FacilityPage />} />
            </Routes>

        </div>
    )
}

export default CMSRoute;