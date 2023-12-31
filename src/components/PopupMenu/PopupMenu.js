import React from 'react';
import { Link } from 'react-router-dom';

function PopupMenu({ isMenuOpen, onClickCloseButton }) {

    return (
        <div className={isMenuOpen ? 'popup-menu' : 'popup-menu_none'}>
            <div className='popup-menu__container' >
                <Link to="/" className='popup-menu__title'>Главная</Link>
                <Link to="/movies" className='popup-menu__movies'>Фильмы</Link>
                <Link to="/saved-movies" className='popup-menu__save-movies'>Сохраненные фильмы</Link>

            </div>
            <Link to="/profile" className='popup-menu__account'>Аккаунт
            </Link>
            <button className='popup-menu__close-button' onClick={onClickCloseButton}></button>
        </div>
    )
}
export default PopupMenu;