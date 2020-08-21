import React from 'react';
import HeroComp from '../components/HeroComp';
import miningHero from '../images/mining-hero.jpeg';
import ProductContentTemplate from '../components/ProductContentTemplate';
import iconHpposition from '../images/RR_icon_hpposition-rgb-300x300.png'
import iconFeatures from '../images/RR_icon_feature.png'
import modules from '../images/modules.png'
import cube from '../images/cube.png'
import universalSupport from '../images/universalSupport.png'

function PrecisionPositionComp() {
  const content = {
    header:'Высокоточное позиционирование, направление и 3D-ориентация',
    backgroundImage:'',
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
    ],
    solution:[
      {
        header:'Решение для больших транспортных средств',
        subheader:'Такие как лопаты и самосвалы',
        description:'Модульное решение, которое спроектировано и настроено так, чтобы соответствовать вашему крупному горно-шахтному оборудованию со всеми деталями. Более короткие гибкие радиочастотные кабели, конструкция на основе Ethernet, все PoE, открытые данные и простота интеграции. Это значительно снижает общую стоимость владения (TCO). В то же время первоначальные инвестиции на транспортное средство также намного меньше по сравнению с существующими решениями HPGNSS. Принимает дополнения оценки ведра.',
        icon:modules
      },
      {
        header:'Решение для небольших транспортных средств',
        subheader:'Такие как легкие грузовики, вспомогательное оборудование и даже автомобили подрядчика',
        description:'Универсальное решение, объединяющее иалые значения в одном компактном, высокоинтегрированном оборудовании. На автомобилях меньшего размера это значительно снижает общую стоимость владения (TCO). Более того, первоначальные вложения в транспортное средство снижаются за счет меньшего количества аппаратных помех для установки и обслуживания. PIN-код может одновременно обеспечивать точное позиционирование, возможность подключения, распознавание коллизий, интеллектуальный кнут и цифровую отчетность.',
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
      <ProductContentTemplate header={content.header}  subheader={content.subheader} descriptionContent={content.descriptionContainer.descriptionContent} iconHpposition={content.descriptionContainer.icon} features={content.features} solution={content.solution} support={content.support} />
    </div>
  );
}

export default PrecisionPositionComp;
