import React, { Component } from "react";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import Button from './Button';
import mainSlider1 from '../images/main-slider-1.jpg';
import mainSlider1Sm from '../images/main-slider-1_sm.jpg';
import mainSlider2 from '../images/ktp1.jpg';
import soberEyeBack from '../images/sobe-eye-back.webp';
import soberEyeLogo from '../images/sober-eye-logo.jpg';
import rigidRoboticsLogo from '../images/rigidlogo-rgb.png';
import aibackground from '../images/AIbackground.jpg';
import aibackgroundsm from '../images/AIbackground_sm.jpg';
import highprecisionbc from '../images/highprecisionbc.jpg';
import highprecisionbc_sm from '../images/highprecisionbc_sm.jpg';
import LogoImagingMeglab from '../images/logo-imagine-header.png';
import meglabbc from '../images/meglabbc.jpg';
import meglabbcsm from '../images/meglabbc_sm.jpg';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    background:url(${props => props.image});

    @media (max-width: 414px) {
        background:url(${props => props.smImg});
      }
`;


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 999,
            autoplaySpeed: 5000,
            cssEase: "ease-in-out"
        };
        const data = [
            {
                link: 'Система предотвращения столкновений',
                to: 'prevent-collision',
                title: 'Высокоточное решение для предотвращения столкновений.',
                desc: 'Активация «Точности безопасности», потому что ложные тревоги убивают',
                img: mainSlider1,
                smImg: mainSlider1Sm,
                logo: rigidRoboticsLogo
            },
            {
                to: 'sober-eye',
                title: 'Снижение количества несчастных случаев на рабочем месте с инновационным решением по безопасности.',
                desc: 'Оценить риск нарушения состояния усталости, алкоголь и наркотики на рабочем места, когда это наиболее важно',
                img: soberEyeBack,
                smImg: soberEyeBack,
                logo: soberEyeLogo
            },
            {
                link: 'Решение для оптимизации подземных горных работ и повышение безопасности персонала',
                to: 'meglab',
                img: meglabbc,
                smImg: meglabbcsm,
                logo: LogoImagingMeglab
            },
            {
                link: 'Высокоточное позиционирование, направление и 3D-ориентация',
                to: 'precision-position',
                title: 'Режим «Точной добычи»',
                desc: 'Сегодняшние горнодобывающие предприятия рассматривают высокоточное позиционирование как эффективную инфраструктуру всего парка',
                img: highprecisionbc,
                smImg: highprecisionbc_sm,
                logo: rigidRoboticsLogo
            },
            {
                link: 'Изготовление электрооборудования',
                to: 'electrics',
                title: '',
                desc: '',
                img: mainSlider2,
                smImg: ''
            },
            {
                link: 'Продвинутая аналитика и использование Искуственного Интелекта в горном деле',
                to: 'aianalytics',
                title: 'Новая эра принятия решений на основе Искуственного Интелекта',
                desc: 'Мы можем помочь вам устранить недостатки, оценить и внедрить новые технологии и даже создать полнофункциональные продукты и системы',
                img: aibackground,
                smImg: aibackgroundsm,
                logo: rigidRoboticsLogo
            }

        ];
        return (
            <div className="carrousel_wrapper" >
                <Slider { ...settings }>
                    { data.map((item, index) => (
                        <div key={ index }>
                            <CarouselContainer className="carrousel_image" image={ item.img } smImg={ item.smImg }>
                                <div className="columns">
                                    <div className="column hero-left-column">
                                        <div className="hero-left-desc">
                                            { item.logo && <img src={ item.logo } className="sober-eye-logo" alt="" /> }
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
                            </CarouselContainer>
                        </div>
                    )) }
                </Slider>
            </div>
        );
    }
}