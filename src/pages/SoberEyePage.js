import React from 'react';
import SoberEyeVirtualGlass from '../images/sober-eye-virtual-glass.webp';
import Dashboardlaptop from '../images/dashboardlaptop.webp';
import SoberEyeTarget from '../images/sober-eye-target.PNG';

export default function SoberEyePage() {

  const data = {
    soberSectionsArr: [
      {
        header: 'Возможность пройти самостоятельный тест за минуту',
        list: [
          'Портативный и легкий в использовании', 'Не инвазивный', 'Результаты в реальном времени'
        ],
        image: SoberEyeVirtualGlass
      },
      {
        header: 'Корпоративные отчеты в облаке',
        list: [
          'Мониторинг в реальном времени', 'Уведомления и предупреждения', 'Аналитика данных'
        ],
        image: Dashboardlaptop,
        reversed: true,
        color: '#bfc6df'
      },
      {
        header: 'SOBEREYE это услуга на основе подписки, включающая',
        list: [
          'Тестирующие устройства', 'Облачное програмное обеспечеение', 'Поддержка и обучение'
        ],
        image: SoberEyeTarget,
        extraInfo: {
          bolded: 'Инновационное решение для обеспечения безопасности на рабочем месте, которое спасает жизни и экономит ваши деньги с точностью 99,9%',
          subtitle: 'Спроектирован так, чтобы обеспечивать менее одного из тысячи ложных срабатываний.',
          moto: 'Более безопасное рабочее место в мгновение ока'

        }
      }

    ]
  };

  return (
    <>
      { data.soberSectionsArr.map((item) => (
        <div className="sober-eye-section" style={ { backgroundColor: item.color } }>
          { item.reversed ? (
            <>
              <div className="sober-eye-section-half">
                <img src={ item.image } alt="" />
              </div>
              <div className="sober-eye-section-half">
                <div className="sober-eye-section-left-desc-container">
                  <span className="sober-eye-section-left-desc-header">
                    { item.header }
                  </span>
                  <ul className="sober-eye-section-left-desc-list">
                    { item.list.map((i) => (
                      <li>{ i }</li>
                    )) }
                  </ul>
                  { item.extraInfo && (
                    <>
                      <span className="sober-eye-section-left-desc-extra-bolded">{ item.extraInfo.bolded }</span>
                      <span className="sober-eye-section-left-desc-extra-thin">{ item.extraInfo.subtitle }</span>
                    </>
                  ) }
                </div>
              </div>
            </>
          ) : (
              <>
                <div className="sober-eye-section-half">
                  <div className="sober-eye-section-left-desc-container">
                    <span className="sober-eye-section-left-desc-header">
                      { item.header }
                    </span>
                    <ul className="sober-eye-section-left-desc-list">
                      { item.list.map((i) => (
                        <li>{ i }</li>
                      )) }
                    </ul>
                    { item.extraInfo && (
                      <>
                        <span className="sober-eye-section-left-desc-extra-bolded">{ item.extraInfo.bolded }</span>
                        <span className="sober-eye-section-left-desc-extra-thin">{ item.extraInfo.subtitle }</span>
                      </>
                    ) }
                  </div>
                </div>
                <div className="sober-eye-section-half">
                  <img src={ item.image } alt="" />
                </div>
              </>
            ) }

        </div>
      )) }
    </>

  );
}
