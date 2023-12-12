import React from 'react';
import photo from '../../images/Наташа.jpeg';

function AboutOwner() {
    return (
        <section className='about-owner'>
            <div className='about-owner__container'>
                <div className='about-owner__description'>
                    <img className='about-owner__photo' src={photo} alt='фото' />
                    <div className='about-owner__info'>
                        <h2 className='about-owner__title'>Здравствуйте!</h2>
                        <p className='about-owner__subtitle'>Меня зовут Масохина Наталия</p>
                        <p className='about-owner__text'>Более 6 лет работает мой курс,
                            моя студия шитья "Школа Модельеров" -
                            обожаю своё дело!!!

                            Более 20 лет мой опыт работы в швейной промышленности.
                            Я прошла весь путь роста в швейной промышленности - от портного до управления и организаций производства.
                            Образование - учусь всегда!
                            ESMOD PARIS (Европейская школа моды в Париже) - Арт директор в области индустрии моды
                            МГУ ДТ (Московский Государственный Университет Дизайна и Технологии)- маркетинг, менеджмент и управление предприятиями.
                            Портной верхней женской одежды, художник по костюму, инженер-конструктор швейных изделий и изделий из кожи </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default AboutOwner;