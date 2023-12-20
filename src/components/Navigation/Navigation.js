import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../images/mobile.svg';
import PopupMenu from '../PopupMenu/PopupMenu';

function Navigation({ isLoggedIn }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleCloseButton() {
        setIsMenuOpen(false);
    }

    function handleMenuOpen() {
        setIsMenuOpen(true);
    }

    const handleScrollCourses = (e) => {
        e.preventDefault();
        let courses = document.getElementById('courses');
        courses && courses.scrollIntoView({ behavior: "smooth"});
    };

    const handleScrollCertificates = (e) => {
        e.preventDefault();
        let certificates = document.getElementById('certificates');
        certificates && certificates.scrollIntoView({ behavior: "smooth"});
    };
    return (
        <>
            <PopupMenu isMenuOpen={isMenuOpen} onClickCloseButton={handleCloseButton} />
            <div className='navigation'>
                <div className='navigation__container'>
                    <div className='navigation__items_active'>
                        <button className='navigation__item'>О нас</button>
                        <button className='navigation__item' onClick={handleScrollCourses}>Курсы</button>
                        <button className='navigation__item' onClick={handleScrollCertificates}>Сертификаты</button>
                        <button className='navigation__item' onClick={handleScrollCourses}>Отзывы</button>
                        <button className='navigation__item' onClick={handleScrollCourses}>Контакты</button>
                    </div>
                    <div className='navigation__call'>
                        <img className='navigation__mobile-img' src={mobile} alt='мобильный' />
                        <p className='navigation__mobile'>+79162488823</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navigation;

/* return (
    <>
        <PopupMenu isMenuOpen={isMenuOpen} onClickCloseButton={handleCloseButton} />
        <div className='navigation'>
            <div className='navigation__container'>
                <div className={false ? 'navigation__items_active' : 'navigation__items'}>
                    <Link to="/movies" className='navigation__contacts'>Контакты</Link>
                    <Link to="/saved-movies" className='navigation__courses'>Курсы</Link>
                    <Link to="/profile" className='navigation__account'>Аккаунт
                        <img className='navigation__account-img' src={account} alt='аккаунт' />
                    </Link>
                </div>
                 <button className={true ? 'navigation__menu_active' : 'navigation__menu'}>
                    <img className='navigation__menu-img' src={menu} alt='меню' onClick={handleMenuOpen} />
                </button>
            </div>
        </div>
    </>
) */
