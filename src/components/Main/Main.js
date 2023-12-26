import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Courses from '../Courses/Courses';
import Certificates from '../Certificates/Certificates';
import AboutOwner from '../AboutOwner/AboutOwner';
import Footer from '../Footer/Footer';

function Main({isLoggedIn}) {
    return (
        <div className='main' id='main'>
            <div className='main__container'>
                <Header isLoggedIn={isLoggedIn} />
                <main>
                    <Promo />                    
                    <Courses />
                    <AboutOwner />
                    <Certificates/>                    
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default Main;
