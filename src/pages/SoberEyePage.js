import React from 'react';
import SoberEyeVirtualGlass from '../images/sober-eye-virtual-glass.webp';
import Dashboardlaptop from '../images/dashboardlaptop.webp';
import SoberEyeTarget from '../images/sober-eye-target.PNG';
import SoberEyeSupport from '../images/sober-eye-support.PNG';
import SoberEyeEye from '../images/sober-eye-eye.PNG';
import VideoComponent from '../components/videoComponent'
import { Helmet } from "react-helmet";




export default function SoberEyePage() {
  const data = {
    soberSectionsArr: [
      {
        header: 'SOBEREYE - это услуга на основе подписки, включающая',
        list: [
          'Тестирующие устройства', 'Облачное програмное обеспечеение', 'Поддержка и обучение'
        ],
        image: SoberEyeTarget,
        extraInfo: {
          bolded: 'Инновационное решение для обеспечения безопасности на рабочем месте, которое спасает жизни и экономит ваши деньги с точностью 99,99%',
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
        reversed: true
      },
      {
        header: 'Научная часть',
        subtitle: 'Глаза - это окно в мозг',
        paragraphs: [
          `Технология SOBEREYE обнаруживает нарушения в работе мозга! Технология SOBEREYE была разработана в сотрудничестве с экспертами в области нейробиологии, офтальмологии, распознавания радужной оболочки и обработки изображений.`,
          `Устройство измеряет изменения зрачкового светового рефлекса (ЗСР), реакции зрачка на изменение интенсивности света.ЗСР - это непроизвольный рефлекс, контролируемый вегетативной нервной системой`,
          'Изменение ЗСР по сравнению с нормальным состоянием(исходный уровень) является признаком аномалии функции мозга из-за усталости, недосыпания, алкоголя, употребления наркотиков (законных, незаконных и рецептурных) или неврологического расстройства'
        ],
        image: SoberEyeEye
      }
    ]
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Инновационное решение для обеспечения безопасности на рабочем месте, которое спасает жизни и экономит ваши деньги с точностью 99,99%" />
        <title>Sobereye</title>
      </Helmet>
      <VideoComponent src="https://www.youtube.com/embed/lBZWPNiXuk0" uniqueTitle="title1"/>
      { data.soberSectionsArr.map((item) => (
        <div className="sober-eye-section" style={ {
          backgroundColor: item.color,
          gridTemplateColumns: `${item.full ? '100%' : '50% 50%'}`
        } }>
          { item.reversed ? (
            <>
              <div className="sober-eye-section-half">
                { item.image && <img src={ item.image } alt="" /> }
              </div>
              <div className="sober-eye-section-half">
                <div className="sober-eye-section-left-desc-container">
                  <span className="sober-eye-section-left-desc-header">
                    { item.header }
                  </span>
                  { item.subtitle && (
                    <span className="sober-eye-section-left-desc-subtitle">
                      { item.subtitle }
                    </span>
                  ) }

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
                  { item.extraInfo && (
                      <>
                        <span className="sober-eye-section-left-desc-extra-bolded">{ item.extraInfo.bolded }</span>
                        <span className="sober-eye-section-left-desc-extra-thin">{ item.extraInfo.subtitle }</span>
                        <span className="sober-eye-section-left-desc-extra-moto">{ item.extraInfo.moto }</span>
                      </>
                    ) }
                    <span className="sober-eye-section-left-desc-header">
                      { item.header }
                    </span>
                    { item.subtitle && (
                      <span className="sober-eye-section-left-desc-subtitle">
                        { item.subtitle }
                      </span>
                    ) }
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
                  </div>
                </div>
                <div className="sober-eye-section-half">
                  { item.image && <img src={ item.image } alt="" /> }
                </div>
              </>
            ) }
          
        </div>
      )) }
      
      <VideoComponent src="https://www.youtube.com/embed/Z7bTlHdkSMs" uniqueTitle="title2" header="SOBEREYE - безопасное рабочее место"/>
    </>

  );
}
