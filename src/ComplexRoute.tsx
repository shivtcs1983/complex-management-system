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
                    <div className='link-button'><a href='/complex-management-system/home'>Home</a></div>
                    <div className='link-button'><a href='/complex-management-system/attraction'>Attraction</a></div>
                    <div className='link-button'> <a href='/complex-management-system/facility'>Facility</a></div>
                </nav>
            </div>
            <Routes>
                <Route path="/complex-management-system/home" element={<HomePage />} />
                <Route path="/complex-management-system/attraction" element={<AttractionPage />} />
                <Route path="/complex-management-system/facility" element={<FacilityPage />} />
            </Routes>
        </div>
    )
}

export default ComplexRoute;