import React from 'react';
import SoberEyeVirtualGlass from '../images/sober-eye-virtual-glass.webp';
import Dashboardlaptop from '../images/dashboardlaptop.webp';
import SoberEyeTarget from '../images/sober-eye-target.PNG';
import SoberEyeSupport from '../images/sober-eye-support.PNG';

export default function SoberEyePage() {

  const data = {
    soberSectionsArr: [
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
      },
      {
        header: 'Возможность пройти самостоятельный тест за минуту',
        paragraphs: [
          'Устройство проверяет глаза пользователей и в реальном времени точно измеряет риск ухудшения состояния из-за усталости, употребления алкоголя, легальных, нелегальных и отпускаемых по рецепту лекарств',
          'Технология распознавания радужной оболочки глаза идентифицирует человека, проходящего тест, и позволяет проводить тестирование без присмотра'
        ],
        list: [
          'Портативный и легкий в использовании', 'Не инвазивный', 'Результаты в реальном времени'
        ],
        image: SoberEyeVirtualGlass,
        reversed: true,
        color: '#bfc6df'
      },
      {
        header: 'Корпоративные отчеты в облаке',
        list: [
          'Мониторинг в реальном времени', 'Уведомления и предупреждения', 'Аналитика данных'
        ],
        paragraphs: [
          'Результаты тестов доступны в режиме реального времени на информационной панели вашей компании, чтобы вы были в курсе бдительности вашего персонала и их пригодности для работы',
          'Аналитика данных и отчетность позволяют отслеживать прогресс в области безопасности и выявлять ситуации, требующие вашего внимания'
        ],
        image: Dashboardlaptop
      },
      {
        header: 'Обучение и поддержка',
        paragraphs: [
          'Мы обеспечиваем внедрение системы и обучение ваших сотрудников и руководителей на месте',
          'Постоянная техническая поддержка в течение периода подписки',
          'Помощь с анализом данных и передовыми практиками для максимизации преимуществ ваших услуг'
        ],
        image: SoberEyeSupport,
        color: '#bfc6df',
        reversed:true
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
                  { item.list && (<ul className="sober-eye-section-left-desc-list">
                    { item.list && item.list.map((i) => (
                      <li>{ i }</li>
                    )) }
                  </ul>) }
                  { item.paragraphs && (
                    item.paragraphs.map((paragraph) => (
                      <p className="sober-eye-paragraph">{ paragraph }</p>
                    ))
                  )
                  }
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
                    { item.list && (
                      <ul className="sober-eye-section-left-desc-list">
                        { item.list.map((i) => (
                          <li>{ i }</li>
                        )) }
                      </ul>
                    ) }
                    { item.paragraphs && (
                      item.paragraphs.map((paragraph) => (
                        <p className="sober-eye-paragraph">{ paragraph }</p>
                      ))
                    )
                    }
                    { item.extraInfo && (
                      <>
                        <span className="sober-eye-section-left-desc-extra-bolded">{ item.extraInfo.bolded }</span>
                        <span className="sober-eye-section-left-desc-extra-thin">{ item.extraInfo.subtitle }</span>
                        <span className="sober-eye-section-left-desc-extra-moto">{ item.extraInfo.moto }</span>
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