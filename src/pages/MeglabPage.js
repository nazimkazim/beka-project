import React from 'react';
import meglablogo from '../images/logo-meglab.png';
import LogoImagingMeglab from '../images/logo-imagine-header.png';
import bgSideImg from '../images/bg-side-imagine.jpg';
import CardRow from '../components/Card/CardRow';
import Reperage from '../images/reperage.png';
import Lamp from '../images/lampe.png';
import Aide from '../images/aide.png';
import ventilation from '../images/ventilation.png'
import evacuation from '../images/evacuation.png'
import collision from '../images/collision.png'

export default function MeglabPage() {
  const data = {
    paragraphs: [
      'Система предлагает набор модульных приложений, которые позволяют работникам и руководителям отслеживать свои KPI в режиме реального времени для достижения своих целей.', 'Простая во внедрении и использовании система обеспечивает доступ к огромному количеству информации. Как только система запущена, IMAGINE быстро дает результаты - повышая безопасность и производительность.'
    ],
    merits: [
      {
        title: 'УМНАЯ',
        desc: 'Просто и быстро собирает и обрабатывает большой объем информации.'
      },
      {
        title: 'МОДУЛЬНАЯ',
        desc: 'Приложения независимы и могут внедряться постепенно, в зависимости от потребностей предприятия.'
      },
      {
        title: 'РАЗВИВАЮЩАЯСЯ',
        desc: 'Наша команда инженеров постоянно работает над разработкой продукции, чтобы поддерживать ее в актуальном состоянии и удовлетворять меняющиеся потребности отрасли. IMAGINE - это вовлекающая система, постоянно развивающаяся, чтобы идти в ногу с развитием технологий.'
      }
    ],
    advantages: ['ПОВЫШАЕТ БЕЗОПАСНОСТЬ РАБОТНИКОВ', 'ПОВЫШАЕТ ПРОИЗВОДИТЕЛЬНОСТЬ', 'СНИЖАЕТ РАСХОДЫ НА ЭЛЕКТРОЭНЕРГИЮ', 'УМЕНЬШАЕТ ЭКОЛОГИЧЕСКИЙ СЛЕД'],
    functions: [
      {
        moto: "Подсчет циклов",
        icon: Reperage,
        desc: "Улучшайте производство, отслеживая движения машин. Эта функция позволяет оператору диспетчеру контролировать несколько транспортных средств одновременно"
      },
      {
        moto: "Трекинг",
        icon: Reperage,
        desc: "Благодаря отслеживанию Meglab предлагает эффективный способ узнать местонахождение каждого рабочего и транспортного средства в любое время"
      },
      {
        moto: "Назначение ламп",
        icon: Lamp,
        desc: "Функция назначения ламп позволяет быстро назначать лампы рабочим в начале их смены, т.е. работник отслеживается с помощью модуля отслеживания"
      },
      {
        moto: "Вызов помощи",
        icon: Aide,
        desc: "С помощью бирки, прикрепленной к лампе, и нажатием кнопки на лампе, работник посылает сигнал на поверхность, чтобы указать, что он находится в бедственном положении и/или что ему нужна помощь"
      },
      {
        moto: "Ограничения доступа",
        icon: Reperage,
        desc: "Эта функция позволяет работнику получать доступ к разным зонам в соответствии с предоставленными полномочиями"
      },
      {
        moto: "Автоматизация вентиляции",
        icon: ventilation,
        desc: "IMAGINE представляет собой ценный инструмент повышения энергоэффективности, который значительно улучшает (то есть снижает) потребление энергии в шахте"
      },
      {
        moto: "Эвакуация шахты",
        icon: evacuation,
        desc: "Функция системы IMAGINE - это возможность отдать приказ об экстренной эвакуации шахты с помощью ламп шахтеров и контролировать ход эвакуации"
      },
      {
        moto: "Предотвращение столкновений",
        icon: collision,
        desc: "Система осведомленности о потенциальных столкновениях (CAS) предлагает безопасное и надежное решение для предотвращения подобных инцидентов"
      }
    ]
  };
  return (
    <>
      <div className="meglab-header-wrapper">
        <img className="meglab-logo" src={ meglablogo } alt="" />
        <div className="meglab-logo-imagine-container">
          <img className="meglab-logo-imagine" src={ LogoImagingMeglab } alt="" />
        </div>
      </div>
      <div className="meglab-our-solution">
        <div className="meglab-our-solution-left"></div>
        <div className="meglab-our-solution-right">
          <div className="meglab-our-solution-right-inner-wrapper">
            <h3>РЕШЕНИЕ ДЛЯ ПОДЗЕМНЫХ ГОРНЫХ РАБОТ</h3>
            <span className="meglab-our-solution-right-imagine">IMAGINE</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4MUeD_oJRjY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {
              data.paragraphs.map((paragraph) => (
                <p>{ paragraph }</p>
              ))
            }
            <ul className="meglab-merit-container">
              { data.merits.map((item) => (
                <li>
                  <h3>{ item.title }</h3>
                  <p>{ item.desc }</p>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>
      <div className="meglab-advantages">
        <h3>ПРЕИУМЩЕСТВА</h3>
        <div className="meglab-advantages-items-container">
          { data.advantages.map((item, index) => (
            <div className="meglab-advantages-items-container-item">
              <span>{ index + 1 }</span>
              <p>{ item }</p>
            </div>
          )) }
        </div>
      </div>
      <div className="meglab-functions">
        <div className="meglab-functions-left">
          <CardRow data={ data.functions } class="why-us" />
        </div>
        <div className="meglab-functions-right">
          <img src={ bgSideImg } />
        </div>
      </div>
    </>
  );
}
