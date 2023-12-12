import React from 'react';
import promoLogo from '../../images/logoGirl.jpeg';
import spoolOfThread from '../../images/spool-of-thread.svg';

function Promo() {
    return (
        <section className='promo'>

            <div className='promo__container'>
                <div className='promo__text'>
                    <div className='promo__subtitle'>Живые студии и онлайн-курсы от профессионалов своего дела.
                        Курсы шитья для детей, взрослых и профи!
                        <div className='promo__background-spool'>
                        </div>
                    </div>
                    <div className='promo__title'>С нами шьют все!
                        <div className='promo__background-button-sewing'>
                        </div>
                    </div>

                    <div className='promo__subtitle'>С самых азов до первых коллекций!
                        Посмотрите на результаты наших учениц - вы точно сможете не хуже!
                        Минимальный возраст обучения в студии "Школы Модельеров" с 5 лет.
                        Для обучения он-лайн нажмите на кнопку
                        <div className='promo__background-needle'></div>
                    </div>
                    <button className='promo-button__online'>онлайн обучение</button>
                </div>
                <div className='promo__background-machine'></div>
                <div className='promo__background-logo'>
                    <img src={promoLogo} className='promo__logo' alt='промоЛого' />
                </div>                
            </div>
        </section>
    )
}
export default Promo;