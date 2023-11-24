import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
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
                    <AboutOwner />
                    <AboutProject />
                    {/* <Techs /> */}
                    
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default Main;
