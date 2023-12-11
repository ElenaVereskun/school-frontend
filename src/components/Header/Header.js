import React from 'react';
import logo from '../../images/sewing_machine.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
    return (
        <header className="header">
            <div className='header__container'>
                    <img src={logo} className='header__logo' alt='логотип' />
                <Navigation isLoggedIn={isLoggedIn} />
            </div>
        </header>
    )
}
export default Header;