import React from 'react';
import HeroComp from '../components/HeroComp';
import ProductContentTemplate from '../components/ProductContentTemplate';
import RRIconAdvancedAnalyticsAi from '../images/RR_icon_advanced-analytics-ai.png';
import iconFeatures from '../images/RR_icon_feature.png';
import AIpipeline1 from '../images/ai-pipelines-1.png';
import universalSupport from '../images/universalSupport.png';
import aibackground from '../images/AIbackground.jpg';


function PrecisionPositionComp() {
  const content = {
    header:'Продвинутая аналитика и искусственный интеллект в горном деле',
    url:'aianalytics',
    backgroundImage:aibackground,
    subheader:'Внедрение новой эры принятия решений на основе искусственного интеллекта',
    descriptionContainer:{
      icon:RRIconAdvancedAnalyticsAi,
      descriptionContent:'Автоматизированный конвейер данных от транспортного средства к облаку с расширенной аналитикой / обработкой искусственного интеллекта почти в реальном времени. Автоматизированная передача данных от транспортного средства в облако с расширенной аналитикой / обработкой искусственного интеллекта почти в реальном времени. Получите инсайты и превратите их в действия, которые могут замкнуть цикл принятия важных решений намного быстрее, чем традиционные методы. Для опытных пользователей и горнодобывающих компаний, уже разбирающихся в искусственном интеллекте, мы также предоставляем оборудование для обработки искусственного интеллекта на базе Google Tensor Processing Unit (TPU), адаптированное для внедрения на горнодобывающих машинах. Это когда вы готовы переносите модели и аналитические данные из облака на бортовую обработку для принятия срочных решений. Какими бы ни были ваши потребности, мы понимаем ИИ в контексте добычи полезных ископаемых и готовы помочь вам с помощью услуг и инструментов, специально созданных для горного дела'
    },
    features:[
      {
        icon:iconFeatures,
        header:'Обработка данных на борту',
        description:'Говорят, что 70% времени специалистов по данным тратится на фильтрацию / очистку данных. Пропустите это с предварительной обработкой данных в источнике в соответствии с рабочим контекстом. Помечайте данные с помощью высокоточного GNSS и времени в источнике'
      },
      {
        icon:iconFeatures,
        header:'Открытый API',
        description:'Легко интегрируется. Разработан таким образом, чтобы вывод могли использовать несколько сторонних систем. Открытые данные по стандартам GMG'
      },
      {
        icon:iconFeatures,
        header:'Гибкое решение, услуга или оборудование',
        description:'От классических инструментов искусственного интеллекта до оборудования искусственного интеллекта, созданного специально для горнодобывающих машин, и всего, что находится между ними, мы можем удовлетворить ваши потребности и пожелания в области искусственного интеллекта'
      }
    ],
    processing:{
      header:'Замыкание цепи обратной связи в режиме реального времени, как это должно быть',
      features:[
        {
          title:'Облачная обработка данных',
          desc:'Программное обеспечение расширенной аналитики или как услуга: автоматизированная передача данных от транспортного средства в облако с расширенной аналитикой / обработкой искусственного интеллекта в облаке'
        },
        {
          title:'Бортовая обработка данных',
          desc:'Аппаратное обеспечение искусственного интеллекта для горного дела: откройте для себя первое и единственное оборудование искусственного интеллекта для горного дела для машинного обучения в реальном времени'
        }
      ],
      img:AIpipeline1
    },
    support:{
      header:'Универсальная  поддержка машин',
      image:universalSupport,
      description:'Сократите расходы на инвентарь и техническое обслуживание, используя идентичные детали и кабели для всего вашего парка.'
    }
  }
  return (
    <div>
      <HeroComp background={ content.backgroundImage } title={content.header}/>
      <ProductContentTemplate url={content.url} header={content.header}  subheader={content.subheader} descriptionContent={content.descriptionContainer.descriptionContent} iconHpposition={content.descriptionContainer.icon} features={content.features}  solution={content.solution} support={content.support} processing = {content.processing} />
    </div>
  );
}

export default PrecisionPositionComp;
