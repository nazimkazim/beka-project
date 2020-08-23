import React, { Component } from "react";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import Button from './Button';
import mainSlider1 from '../images/main-slider-1.jpg';
import mainSlider2 from '../images/main-slider-2.jpg';
import soberEyeBack from '../images/sobe-eye-back.webp';
import soberEyeLogo from '../images/sober-eye-logo.jpg';
import rigidRoboticsLogo from '../images/rigidlogo-rgb.png';
import aibackground from '../images/AIbackground.jpg';
import highprecisionbc from '../images/highprecisionbc.jpg'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        const data = [
            {
                link: 'Система предотвращения столкновений',
                to: 'prevent-collision',
                title: 'Высокоточное решение для предотвращения столкновений.',
                desc: 'Активация «Точности безопасности», потому что ложные тревоги убивают',
                img: mainSlider1,
                logo: rigidRoboticsLogo
            },
            {
                to: 'sober-eye',
                title: 'Снижение количества несчастных случаев на рабочем месте с инновационным решением по безопасности.',
                desc: 'Оценить риск нарушения состояния усталости, алкоголь и наркотики на рабочем места, когда это наиболее важно',
                img: soberEyeBack,
                logo: soberEyeLogo
            },
            {
                link: 'Высокоточное позиционирование, направление и 3D-ориентация',
                to: 'precision-position',
                title: 'Режим «Точной добычи»',
                desc: 'Сегодняшние горнодобывающие предприятия рассматривают высокоточное позиционирование как эффективную инфраструктуру всего парка',
                img: highprecisionbc,
                logo: rigidRoboticsLogo
            },
            {
                link: 'Высокоточное позиционирование ковша и геометрия рукояти',
                to: 'precision-selective-digging',
                title: 'Режим «Точной или выборочной экскавации»',
                desc: 'Точная или выборочная выемка руды позволяет точно знать, где копает ковш',
                img: mainSlider2,
                logo: rigidRoboticsLogo
            },
            {
                link: 'Продвинутая аналитика и использование Искуственного Интелекта в горном деле',
                to: 'sevices',
                title: 'Новоя эра принятия решений на основе Искуственного Интелекта',
                desc: 'Мы можем помочь вам устранить недостатки, оценить и внедрить новые технологии и даже создать полнофункциональные продукты и системы',
                img:aibackground,
                logo: rigidRoboticsLogo
            }


        ];
        return (
            <div className="carrousel_wrapper" >
                <Slider { ...settings }>
                    { data.map((item, index) => (
                        <div key={ index }>
                            <div className="carrousel_image" style={ { backgroundImage: `url(${item.img})` } }>
                                <div className="columns">
                                    <div className="column hero-left-column">
                                        <div className="hero-left-desc">
                                            { item.logo && <img src={ item.logo } className="sober-eye-logo" /> }
                                            <Fade>
                                                <h1 className="hero-left-desc-h1-link">{ item.to && <Link to={ item.to }>{ item.link }</Link> }</h1>
                                            </Fade>
                                            <h1 className="hero-left-desc-title">{ item.title }</h1>
                                            <p className="hero-left-desc-desc">{ item.desc }</p>
                                            <Button to={ item.to } value="Подробнее" />
                                        </div>
                                    </div>
                                    { item.img && <div className="column hero-right-column">
                                    </div> }
                                </div>
                            </div>
                        </div>
                    )) }
                </Slider>
            </div>
        );
    }
}