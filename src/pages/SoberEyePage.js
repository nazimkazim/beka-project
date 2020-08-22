import React from 'react';
import SoberEyeVirtualGlass from '../images/sober-eye-virtual-glass.webp';
import Dashboardlaptop from '../images/dashboardlaptop.webp';

export default function SoberEyePage() {

  const data = {
    soberSectionsArr: [
      {
        header: 'Возможность пройти самостоятельный тест за минуту',
        list: [
          'Портативный и легкий в использовании', 'Не инвазивный', 'Результаты в реальном времени'
        ],
        image: SoberEyeVirtualGlass,
        color:'#bfc6df'
      },
      {
        header: 'Корпоративные отчеты в облаке',
        list: [
          'Мониторинг в реальном времени', 'Уведомления и предупреждения', 'Аналитика данных'
        ],
        image: Dashboardlaptop
      }

    ]
  };

  return (
    <>
      { data.soberSectionsArr.map((item) => (
        <div className="sober-eye-section" style={{backgroundColor:item.color}}>
          <div className="sober-eye-section-half">
            <div className="sober-eye-section-left-desc-container">
              <span className="sober-eye-section-left-desc-header">
                {item.header}
            </span>
              <ul className="sober-eye-section-left-desc-list">
                {item.list.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sober-eye-section-half">
            <img src={ item.image } alt="" />
          </div>
        </div>
      )) }
    </>

  );
}
