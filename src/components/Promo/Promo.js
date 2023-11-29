import React from 'react';
import promoLogo from '../../images/logoGirl.jpeg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__text'>
                    <p className='promo__subtitle'>Живые студии и онлайн-курсы от профессионалов своего дела.
                        Курсы шитья для детей, взрослых и профи!</p>
                    <h1 className='promo__title'>С нами шьют все!</h1>
                    <p className='promo__subtitle'>С самых азов до первых коллекций!
                        Посмотрите на результаты наших учениц - вы точно сможете не хуже!
                        Минимальный возраст обучения в студии "Школы Модельеров" с 5 лет.
                        Для обучения он-лайн нажмите на кнопку</p>
                    <button className='promo-button__online'>онлайн обучение</button>
                </div>
                {/* <img src={promoLogo} className='promo__logo' alt='промоЛого' /> */}
            </div>
        </section>
    )
}
export default Promo;