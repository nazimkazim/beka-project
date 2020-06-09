import React, { Component } from "react";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";
import Button from './Button'
import miningHero from '../images/mining-hero.jpeg'
import mining1 from '../images/mining1.jpg'
import ai from '../images/ai.png'
import RRrigidportalRGB from '../images/RR_rigidportal-RGB.png'
import PIN24 from '../images/PIN-24.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    const data = [
        {
            link:'RigidPortal',
            to:'rigidportal',
            title:'Централизованное программное обеспечение для удаленного управления предприятием в реальном времени',
            desc:'Быстрый доступ, обслуживание и управление данными оборудования и транспортных средств без необходимости покидать офис.',
            img:miningHero,
            icon:RRrigidportalRGB
        },
        {
            link:'Технологические услуги',
            title:'Специально для горнодобывающей промышленности',
            desc:'Мы можем помочь вам устранить недостатки, оценить и внедрить новые технологии и даже создать полнофункциональные продукты и системы.',
            img:mining1
        },
        {
            link:'Знакомтесь с  PIN',
            title:'IoT-устройство корпоративного майнинга',
            desc:'Смешивать и сочетать функции, включая беспроводную связь,Ethernet, HPGNSS, внутренняя ориентация и мертвый расчетна одном настраиваемом устройстве.',
            img:ai,
            icon:PIN24
        }


    ]
    return (
        <div className="carrousel_wrapper" style={{height:`${window.innerHeight}px`, overflow:'hidden'}}>
        <Slider {...settings}>
                {data.map((item) => (
                    <div>
                        <div className="carrousel_image" style={{backgroundImage:`url(${item.img})`,height:`${window.innerHeight}px`}}>
                            <div className="columns">
                                <div className="column">
                                    <div className="hero-left-desc">
                                        <Fade>
                                            <h1 className="hero-left-desc-h1-link">{item.to && <Link to={item.to}>{item.link}</Link>}</h1>
                                        </Fade>
                                        <Zoom left cascade>
                                            <h1 className="hero-left-desc-title">{item.title}</h1>
                                        </Zoom>
                                        <Zoom right cascade>
                                            <p className="hero-left-desc-desc">{item.desc}</p>
                                        </Zoom>
                                        <Button to={item.to} value="Подробнее"/>
                                    </div>
                                </div>
                                {item.img && <div className="column">
                                    <Zoom>
                                        <img src={item.icon} className="hero-right-img" alt="" />
                                    </Zoom>
                                </div>}
                            </div>
                            
                        </div>
                    </div>
                ))}
      </Slider>
        </div>
    );
  }
}