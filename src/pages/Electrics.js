import React from 'react';
import HeroComp from '../components/HeroComp';
import KTP1 from '../images/ktp1.jpg';
import ProductContentTemplate from '../components/ProductContentTemplate';
import bucketpositioning300x300 from '../images/bucketpositioning300x300.png';
import iconFeatures from '../images/RR_icon_feature.png';
import modules from '../images/modules.png';
import universalSupport from '../images/universalSupport.png';

function PrecisionPositionComp() {
  const content = {
    header: 'Изготовление электрооборудования',
    url: 'electrics',
    backgroundImage: KTP1,
    subheader: ``,
    descriptionContainer: {
      icon: bucketpositioning300x300,
      descriptionContent: `Точная или выборочная экскавация позволяет точно знать, где копает ковш. Таким образом, рудник может планировать выборочную выемку руды с разным содержанием руды на разной высоте уступа. Более того, положение ковша может использоваться любой сторонней системой для маркировки руды с точным местоположением, которое будет коррелировано с данными взрыва или планирования. Геометрия рукояти позволяет анализировать перемещение грузовой единицы. Приложения включают предотвращение превышения ограничений, предотвращение агрессивного движения, защиту гусениц и автоматизацию`
    },
    features: [
      {
        icon: iconFeatures,
        header: 'КТП, КТПН, КТПГ, 2КТПГ 25-2500 КВ',
        description: ''
      },
      {
        icon: iconFeatures,
        header: 'БМЗ, 2КТПБ',
        description: ''
      },
      {
        icon: iconFeatures,
        header: 'КСО 2-10, КСО 292, КСО 366',
        description: ''
      },
      {
        icon: iconFeatures,
        header: 'К-59, КРН, К-7, КМ-7М',
        description: ''
      },
      {
        icon: iconFeatures,
        header: 'ЩО-70, ШРС, ВРУ',
        description: ''
      },
      {
        icon: iconFeatures,
        header: 'КТПС',
        description: ''
      },
      {
        icon: iconFeatures,
        header: 'ШУОТ, ШСН',
        description: ''
      }
    ],
    solution: [
      {
        header: 'Модульное решение',
        subheader: 'Используйте наше решение как автономное или как дополнение к высокоточному решению для позиционирования.',
        description: 'Используйте позиционирование ковша как отдельное приложение или как дополнение к нашему высокоточному решению по позиционированию. Решение для позиционирования ковша можно использовать автономно, чтобы определить положение ковша относительно корпуса, или в сочетании с высокоточным позиционированием, чтобы определить абсолютное положение ковша',
        icon: modules
      }
    ],
    support: {
      header: 'Универсальная  поддержка машин',
      image: universalSupport,
      description: 'Сократите расходы на инвентарь и техническое обслуживание, используя идентичные детали и кабели для всего вашего парка.'
    }
  };
  return (
    <div>
      <HeroComp background={ content.backgroundImage } title={ content.header } />
      <ProductContentTemplate
        url={ content.url }
        header={ content.header }
        subheader={ content.subheader }
        descriptionContent={ content.descriptionContainer.descriptionContent }
        shouldBeDescription={ false }
        iconHpposition={ content.descriptionContainer.icon }
        features={ content.features }
        marginTop="20px"
      />
    </div>
  );
}

export default PrecisionPositionComp;
