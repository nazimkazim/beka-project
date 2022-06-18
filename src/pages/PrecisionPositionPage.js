import React from 'react';
import HeroComp from '../components/HeroComp';
import ProductContentTemplate from '../components/ProductContentTemplate';
import iconHpposition from '../images/RR_icon_hpposition-rgb-300x300.png'
import iconFeatures from '../images/RR_icon_feature.png'
import modules from '../images/modules.png'
import cube from '../images/cube.png'
import universalSupport from '../images/universalSupport.png'
import highprecisionbc from '../images/highprecisionbc.jpg'

function PrecisionPositionComp() {
  const content = {
    header:'Высокоточное позиционирование, направление и 3D-ориентация',
    url:'precision-position',
    backgroundImage:highprecisionbc,
    subheader:'Внедрение высокоточной добычи. Сегодня горнодобывающие предприятия рассматривают высокоточное позиционирование как эффективную инфраструктуру всего парка',
    descriptionContainer:{
      icon:iconHpposition,
      descriptionContent:'Задачи, которые можно решить с помощью высокоточного позиционирования, многочисленны и повсеместны: от точного и повторяемого определения местоположения погрузки, позиционирования ковша, и до автоматического определения активности для бульдозеров и грейдеров. Используйте наше решение как автономное или как дополнение к существующим системам управления автопарком, предотвращения столкновений или другим системам и откройте для себя преимущества точной добычи'
    },
    features:[
      {
        icon:iconFeatures,
        header:'Спроектирован для работы в горном деле',
        description:'Специальные аппаратные и программные интерфейсы для горного дела'
      },
      {
        icon:iconFeatures,
        header:'Открытый API',
        description:'Легко интегрируется. Разработан таким образом, чтобы вывод могли использовать несколько сторонних систем. Открытые данные по стандартам GMG'
      },
      {
        icon:iconFeatures,
        header:'Низкозатратный',
        description:'Значительно более низкая стоимость покупки и эксплуатации, чем у конкурирующих продуктов'
      }
    ],
    solution:[
      {
        header:'Решение для больших транспортных средств',
        subheader:'Такие как эксковаторы и самосвалы',
        description:'Модульное решение, разработанное и адаптированное под ваше крупное горнодобывающее оборудование, с учетом всех деталей. Более короткие гибкие радиочастотные кабели, дизайн на основе Ethernet, все PoE, открытые данные и простота интеграции. Это значительно снижает совокупную стоимость владения. При этом первоначальные вложения на машину также намного меньше по сравнению с существующими решениями HPGNSS',
        icon:modules
      },
      {
        header:'Решение для небольших транспортных средств',
        subheader:'Такие как легкие грузовики, вспомогательное оборудование и даже автомобили подрядчика',
        description:'Универсальное решение, объединяющее несколько ценных функций в одном компактном, высокоинтегрированном оборудовании. На машинах меньшего размера это значительно снижает общую стоимость владения. Более того, первоначальные вложения в транспортное средство снижаются за счет меньшего количества аппаратных помех для установки и обслуживания. PIN может одновременно обеспечивать высокоточное позиционирование, беспроводное соединение, предотвращение столкновений, интеллектуальный проблесковые маячки и флажки, а также цифровую отчетность',
        icon:cube
      }
    ],
    support:{
      header:'Универсальная  поддержка машин',
      image:universalSupport,
      description:'Сократите расходы на инвентарь и техническое обслуживание, используя идентичные детали и кабели для всего вашего парка.'
    }
  }
  return (
    <div>
      <HeroComp background={ content.backgroundImage } title={content.header}/>
      <ProductContentTemplate url={content.url} header={content.header}  subheader={content.subheader} descriptionContent={content.descriptionContainer.descriptionContent} iconHpposition={content.descriptionContainer.icon} features={content.features} solution={content.solution} support={content.support} />
    </div>
  );
}

export default PrecisionPositionComp;
