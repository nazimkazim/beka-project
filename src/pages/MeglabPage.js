import React from 'react';
import meglablogo from '../images/logo-meglab.png';
import LogoImagingMeglab from '../images/logo-imagine-header.png';

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
            {data.merits.map((item) => (
                <li>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
