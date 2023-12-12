import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutSchool from '../AboutSchool/AboutSchool';
import Techs from '../Techs/Techs';
import AboutOwner from '../AboutOwner/AboutOwner';
import Footer from '../Footer/Footer';

function Main({isLoggedIn}) {
    return (
        <div className='main' id='main'>
            <div className='main__container'>
                <Header isLoggedIn={isLoggedIn} />
                <main>
                    <Promo />
                    
                    <AboutSchool />
                    <AboutOwner />
                    {/* <Techs /> */}
                    
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default Main;
