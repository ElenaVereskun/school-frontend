import React from 'react';
import photoFirst from '../../images/photo1.jpeg';
import photoSecond from '../../images/photo2.jpeg';
import photoThird from '../../images/photo3.jpeg';
import photoFourth from '../../images/photo4.jpeg';
import photoFifth from '../../images/photo5.jpeg';
import photoSixth from '../../images/photo6.jpeg';

function Courses() {

/*     const handleScroll = (e) => {
        e.preventDefault();
        let footer = document.getElementById('footer');
        footer && footer.scrollIntoView({ behavior: "smooth"});
    };
    return (
        <div className='navtab'>
            <button className='navtab__container' onClick={handleScroll}>
                <p className='navtab__text'>Узнать больше</p>
            </button>
        </div>
    )
}
 */
    return (
        <section className='courses'id='courses'>
            <div className='courses__container'>
                <ul className="tab" >
                    <li className="tab__items">
                        <div className='tab__background-photo'>
                            <img className='tab__photo' src={photoFirst} alt='фото1' />
                        </div>
                        <div className='tab__circle'>
                            <div className='tab__background-text'>
                                <p className="tab__description">
                                    Здесь будет подробное или не очень описание конкретного курса,
                                    которое Наташа мне вот-вот пришлет</p>
                            </div>
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__circle' style={{ backgroundPosition: '40px -20px' }}>
                            <div className='tab__background-text'>
                                <p className="tab__description">
                                    Здесь будет подробное или не очень описание конкретного курса,
                                    которое Наташа мне вот-вот пришлет</p>
                            </div>
                        </div>
                        <div className='tab__background-photo'>
                            <img className='tab__photo' src={photoSecond} alt='фото2' />
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__background-photo'>
                            <img className='tab__photo' src={photoThird} alt='фото3' />
                        </div>
                        <div className='tab__circle' style={{ backgroundPosition: '0px 0px' }}>
                            <div className='tab__background-text' style={{ marginLeft: '40px', marginTop: '10px' }}>
                                <p className="tab__description">
                                    Здесь будет подробное или не очень описание конкретного курса,
                                    которое Наташа мне вот-вот пришлет</p>
                            </div>
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__circle' style={{
                            backgroundPosition: '248px 0px',
                            marginTop: '0px',
                            paddingTop: '50px'
                        }}>
                            <div className='tab__background-text' style={{ height: '200px' }}>
                                <p className="tab__description">
                                    Здесь будет подробное или не очень описание конкретного курса,
                                    которое Наташа мне вот-вот пришлет
                                </p>
                            </div>
                        </div>
                        <div className='tab__background-photo'>
                            <img className='tab__photo' src={photoFourth} alt='фото4' />
                        </div>

                    </li>
                    <li className="tab__items">
                        <div className='tab__background-photo'>
                            <img className='tab__photo' src={photoFifth} alt='фото5' />
                        </div>
                        <div className='tab__circle' style={{
                            backgroundPosition: '248px 0px',
                            marginTop: '0px',
                            paddingTop: '50px'
                        }}>
                            <div className='tab__background-text' style={{ height: '145px' }}>
                                <p className="tab__description">
                                    Здесь будет подробное или не очень описание конкретного курса,
                                    которое Наташа мне вот-вот пришлет</p>
                            </div>
                        </div>
                    </li>
                    <li className="tab__items">
                        <div className='tab__circle'>
                            <div className='tab__background-text' style={{ height: '140px' }}>
                                <p className="tab__description">
                                    Здесь будет подробное или не очень описание конкретного курса,
                                    которое Наташа мне вот-вот пришлет</p>
                            </div>
                        </div>
                        <div className='tab__background-photo'>
                            <img className='tab__photo' src={photoSixth} alt='фото6' />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Courses;