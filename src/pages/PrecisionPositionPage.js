import React from 'react';
import HeroComp from '../components/HeroComp';
import miningHero from '../images/mining-hero.jpeg';
import ProductContentTemplate from '../components/ProductContentTemplate';
import iconHpposition from '../images/RR_icon_hpposition-rgb-300x300.png'
import iconFeatures from '../images/RR_icon_feature.png'

function PrecisionPositionComp() {
  const content = {
    header:'Высокоточное позиционирование, направление и 3D-ориентация',
    backgroundImage:miningHero,
    subheader:'Функция «Precision Mining». Современные горнодобывающие предприятия рассматривают высокоточное позиционирование как благоприятную инфраструктуру для всего автопарка.',
    descriptionContainer:{
      icon:iconHpposition,
      descriptionContent:'Проблемы, которые могут быть решены с помощью высокоточного позиционирования, многочисленны и разнообразны: от точного и повторяемого определения местоположения, позиционирования ковша, автоматического определения активности для бульдозеров, уплотнителей и грейдеров, точная добыча может использоваться для затягивания ремня вокруг вашей работы. Используйте наше решение как отдельное устройство или как дополнение к существующему управлению автопарком, предотвращению столкновений или другим системам и откройте преимущества Precision Mining.'
    },
    features:[
      {
        icon:iconFeatures,
        header:'Создан для майнинга',
        description:'Специальные аппаратные и программные интерфейсы майнинга'
      },
      {
        icon:iconFeatures,
        header:'Открытый API',
        description:'Простота интеграции. Разработанный таким образом, чтобы несколько сторонних систем могли использовать выходные данные. Открытые данные в соответствии со стандартами GMG.'
      },
      {
        icon:iconFeatures,
        header:'Доступная цена',
        description:'Значительно более низкая стоимость владения, чем у конкурирующих продуктов. Предназначен для обслуживания.'
      }
    ]
  }
  return (
    <div>
      <HeroComp background={ content.backgroundImage } title={content.header}/>
      <ProductContentTemplate header={content.header}  subheader={content.subheader} descriptionContent={content.descriptionContainer.descriptionContent} iconHpposition={content.descriptionContainer.icon} features={content.features}/>
    </div>
  );
}

export default PrecisionPositionComp;
