import ComplexHeader from './components/ComplexHeader';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/home-page';
import AttractionPage from './attraction/attraction-page';
import FacilityPage from './facility/facility-page';
import './ComplexRoute.scss'
const ComplexRoute = () => {


    return (

        <div>
            <ComplexHeader />
            <div className='complex-main-route-section'>
                <nav className='tab-list'>
                    <div className='link-button'><a href='/home'>Home</a></div>
                    <div className='link-button'><a href='/attraction'>Attraction</a></div>
                    <div className='link-button'> <a href='facility'>Facility</a></div>
                </nav>
            </div>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/attraction" element={<AttractionPage />} />
                <Route path="/facility" element={<FacilityPage />} />
            </Routes>
        </div>
    )
}

export default ComplexRoute;