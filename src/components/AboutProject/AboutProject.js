import React from 'react';
import AboutProjectTitle from '../AboutProjectTitle/AboutProjectTitle';
import photoFirst from '../../images/photo1.jpeg';

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__container'>
                <AboutProjectTitle titleText={'Что будет на обучении:'} />
                <ul class="tab">
                    <li class="tab__items">
                        <img class="tab__photo" scr={photoFirst} alt='фотоПроект' />
                        <p class="tab__description">
                            Легко освоите все АЗЫ ремесла от первых ручных стежков до современных
                            технологий по обработке разных изделий и узлов.
                            Приобретёте себе полезный навык шитья на всю жизнь</p>
                    </li>
                    <li class="tab__items">
                        <img class="tab__photo" scr={photoFirst} alt='фото1' />
                        <p class="tab__description">

                            Даже самые маленькие ученицы творят у нас самозабвенно и с пользой!
                            Осваивают сложные техники, конструируют, учатся работать с
                            разнообразнейшими материалами</p>
                    </li>
                    <li class="tab__items">
                        <img class="tab__photo" scr={photoFirst} alt='фото1' />
                        <p class="tab__description">
                            Студия оснащена, самыми простыми, бытовыми машинами и утюгами.
                            И взрослые и детские программы направлены на то что бы - вы могли
                            по итогу шить самостоятельно у себя дома!!!</p>
                    </li>
                    <li class="tab__items">
                        <img class="tab__photo" scr={photoFirst} alt='фото1' />
                        <p class="tab__description">

                            Детские и подростковые группы осваивают программы по технологии шитья,
                            конструированию и моделированию от простейших шагов к сложным, каждый
                            идёт в своём темпе.
                            Большинство наших маленьких учениц выросли вместе с нами - и теперь
                            уверенны в своих силах, в том что они смогут правиться с любой задачей,
                            так как они уже умеют "что-то своими руками" и головой
                        </p>
                    </li>
                    <li class="tab__items">
                        <img class="tab__photo" scr={photoFirst} alt='фото1' />
                        <p class="tab__description">
                            Раскроете свой внутренний творческий потенциал! Это становиться буквально
                            жизненно необходимо в подростковый возраст и в моменты "внутреннего
                            закисания взрослых" - мечтайте, пробуйте, творите, создавайте себя внутри
                            и снаружи!</p>
                    </li>
                    <li class="tab__items">
                        <img class="tab__photo" scr={photoFirst} alt='фото1' />
                        <p class="tab__description">
                            Перестанете бояться профессиональных провалов - курсы для профи разделены
                            на "болевые точки" которые проходит любой профессионал. Курс разделён на
                            теорию (проходите он-лайн) и практику - выполнение заданий, живые встречи,
                            обсуждение результатов.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default AboutProject;