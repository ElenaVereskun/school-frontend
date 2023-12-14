import React from 'react';
import photoFirst from '../../images/photo1.jpeg';
import photoSecond from '../../images/photo2.jpeg';
import photoThird from '../../images/photo3.jpeg';
import photoFourth from '../../images/photo4.jpeg';
import photoFifth from '../../images/photo5.jpeg';
import photoSixth from '../../images/photo6.jpeg';
import circle from '../../images/circle.svg';

function AboutSchool() {
    return (
        <section className='about-school'>
            <div className='about-school__container'>
                <ul className="tab">
                    <li className="tab__items">
                        <img className='tab__photo' src={photoFirst} alt='фото1' />
                        <div className='tab__background'>
                            <div className='tab__circle'>
                                <p className="tab__description">
                                    Легко освоите все АЗЫ ремесла от первых ручных стежков до современных
                                    технологий по обработке разных изделий и узлов.
                                    Приобретёте себе полезный навык шитья на всю жизнь</p>
                            </div>
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__background'>
                            <p className="tab__description">
                                Даже самые маленькие ученицы творят у нас самозабвенно и с пользой!
                                Осваивают сложные техники, конструируют, учатся работать с
                                разнообразнейшими материалами</p>
                        </div>
                        <img className='tab__photo' src={photoSecond} alt='фото2' />
                    </li>
                    <li className="tab__items">
                        <img className='tab__photo' src={photoThird} alt='фото3' />
                        <div className='tab__background'>
                            <p className="tab__description">
                                Студия оснащена, самыми простыми, бытовыми машинами и утюгами.
                                И взрослые и детские программы направлены на то что бы - вы могли
                                по итогу шить самостоятельно у себя дома!!!</p>
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__background' style={{ height: '200px' }}>
                            <p className="tab__description">
                                Детские и подростковые группы осваивают программы по технологии шитья,
                                конструированию и моделированию от простейших шагов к сложным, каждый
                                идёт в своём темпе.
                                Большинство наших маленьких учениц выросли вместе с нами - и теперь
                                уверенны в своих силах, в том что они смогут правиться с любой задачей,
                                так как они уже умеют "что-то своими руками" и головой
                            </p>
                        </div>
                        <img className='tab__photo' src={photoFourth} alt='фото4' />
                    </li>
                    <li className="tab__items">
                        <img className='tab__photo' src={photoFifth} alt='фото5' />
                        <div className='tab__background' style={{ height: '145px' }}>
                            <p className="tab__description">
                                Раскроете свой внутренний творческий потенциал! Это становиться буквально
                                жизненно необходимо в подростковый возраст и в моменты "внутреннего
                                закисания взрослых" - мечтайте, пробуйте, творите, создавайте себя внутри
                                и снаружи!</p>
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__background' style={{ height: '140px' }}>
                            <p className="tab__description">
                                Перестанете бояться профессиональных провалов - курсы для профи разделены
                                на "болевые точки" которые проходит любой профессионал. Курс разделён на
                                теорию (проходите он-лайн) и практику - выполнение заданий, живые встречи,
                                обсуждение результатов.</p>
                        </div>
                        <img className='tab__photo' src={photoSixth} alt='фото6' />
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default AboutSchool;