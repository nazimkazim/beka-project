import React from 'react';
import HeroComp from '../components/HeroComp';
import mainSlider2 from '../images/main-slider-2.jpg';
import ProductContentTemplate from '../components/ProductContentTemplate';
import bucketpositioning300x300 from '../images/bucketpositioning300x300.png';
import iconFeatures from '../images/RR_icon_feature.png';
import modules from '../images/modules.png';
import universalSupport from '../images/universalSupport.png';

function PrecisionPositionComp() {
  const content = {
    header: 'Высокоточное позиционирование ковша и геометрия рукояти',
    url:'precision-selective-digging',
    backgroundImage: mainSlider2,
    subheader: 'Режим «Точной или выборочной экскавации»',
    descriptionContainer: {
      icon: bucketpositioning300x300,
      descriptionContent: `Точная или выборочная экскавация позволяет точно знать, где копает ковш. Таким образом, рудник может планировать выборочную выемку руды с разным содержанием руды на разной высоте уступа. Более того, положение ковша может использоваться любой сторонней системой для маркировки руды с точным местоположением, которое будет коррелировано с данными взрыва или планирования. Геометрия рукояти позволяет анализировать перемещение грузовой единицы. Приложения включают предотвращение превышения ограничений, предотвращение агрессивного движения, защиту гусениц и автоматизацию`
    },
    features: [
      {
        icon: iconFeatures,
        header: 'Спроектирован для работы в горном деле',
        description: 'Специальные аппаратные и программные интерфейсы для горного дела'
      },
      {
        icon: iconFeatures,
        header: 'Открытый-API',
        description: 'Легко интегрируется. Разработан таким образом, чтобы вывод могли использовать несколько сторонних систем. Открытые данные по стандартам GMG'
      },
      {
        icon: iconFeatures,
        header: 'Низкозатратный',
        description: 'Значительно более низкая стоимость покупки и эксплуатации, чем у конкурирующих продуктов'
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
}
return (
  <div>
    <HeroComp background={ content.backgroundImage } title={ content.header } />
    <ProductContentTemplate url={content.url} header={ content.header } subheader={ content.subheader } descriptionContent={ content.descriptionContainer.descriptionContent } iconHpposition={ content.descriptionContainer.icon } features={ content.features } solution={ content.solution } support={ content.support } precision={content.precision} marginTop="20px" />
  </div>
);
}

export default PrecisionPositionComp;
