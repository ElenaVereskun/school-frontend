import React from 'react';
import iconYouTube from '../../images/YouTube_icon.png';
import iconWhatsApp from '../../images/whats-app_icon.png';
import iconTelegram from '../../images/telegram_icon.png';
import iconVk from '../../images/vk_icon.png';

function Footer() {
    return (
        <footer className="footer" id='footer'>
            <div className='footer__container'>
                <p className='footer__about'>ИП Масохина Наталия Вячеславовона
                    ИНН 773001110510</p>
                <div className='footer__elements'>
                    <p className='footer__year'>&copy; 2023</p>
                    <div className='footer__items'>
                        <a href='https://www.youtube.com/channel/UCdfQEtubqgPozJRXZbLwn9g'
                            target="_blank" rel="noopener noreferrer"
                            className='footer__item'>
                            <img src={iconYouTube} alt='iconYouTube' />
                        </a>
                        <a href='https://vk.com/modeler_school'
                            target="_blank" rel="noopener noreferrer"
                            className='footer__item'>
                            <img src={iconVk} alt='iconVk' />
                        </a>
                        <a href='https://wa.me/79162488823'
                            target="_blank" rel="noopener noreferrer"
                            className='footer__item'>
                            <img src={iconWhatsApp} alt='iconWhatsApp' />
                        </a>
                        <a href='https://t.me/modeler_school'
                            target="_blank" rel="noopener noreferrer"
                            className='footer__item'>
                            <img src={iconTelegram} alt='iconTelegram' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;