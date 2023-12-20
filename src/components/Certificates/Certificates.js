import React from 'react';
import photoFirst from '../../images/photo1.jpeg';

function Certificates() {
    return (
        <section className='certificates'>
            <div className='certificates__container'>
                <div className='certificates__content'>
                    <h2 className='certificates__title'>Сертификаты</h2>
                    <div className='certificates__items'>
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                        <img className='certificates__item' src={photoFirst} alt='фото1' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Certificates;