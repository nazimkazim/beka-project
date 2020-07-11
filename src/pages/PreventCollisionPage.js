import React from 'react';
import HeroComp from '../components/HeroComp';
import ai from '../images/ai.png';
import ProductContentTemplate from '../components/ProductContentTemplate';
import iconPreventCollison from '../images/iconPreventCollison.jpg';
import iconFeatures from '../images/RR_icon_feature.png';
import modules from '../images/modules.png';
import cube from '../images/cube.png';
import universalSupport from '../images/universalSupport.png';

function PrecisionPositionComp() {
  const content = {
    header: 'Система предотвращения столкновений RIGIDROBOTICS',
    backgroundImage: ai,
    subheader: 'Высокоточное решение для предотвращения столкновений. Активация «Точности безопасности», потому что ложные тревоги убивают.',
    descriptionContainer: {
      icon: iconPreventCollison,
      descriptionContent: `Максимизируйте ситуационную осведомленность, а также прогнозируйте и предотвращайте столкновения между транспортными средствами любого типа.
      Прогнозирует положение транспортного средства и генерирует Динамические Вероятностные Зоны Безопасности на основе типа транспортного средства, времени отклика, динамики и поведения.
      Обрабатывает ВСЕ сценарии движения: соблюдение дистанции при движении, встречное/ параллельное движение, разница высот, срезание пути, препятствие на пересечении, зачистка бульдозером и другие индивидуальные сценарии.`
    },
    features: [
      {
        icon: iconFeatures,
        header: 'Устраняет ложные срабатывания сигнала тревоги',
        description: 'Высокоточный HPGNSS на основе алгоритмов прогнозирования более точно отслеживает положение и высоту автомобиля'
      },
      {
        icon: iconFeatures,
        header: 'Действительно надежный',
        description: 'Инерциальная навигация слияния и точный расчет обеспечивают лучшую доступность и точность во время движения автомобиля'
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
        description: 'Решение Collision Assistance Solution (CAS) основано на точном позиционировании (HPGNSS) и прямой беспроводной связи машина-машина (V2V). Если вы уже используете наши решения для точного позиционирования, беспроводной связи или используете универсальный PIN, все, что вам нужно, - это просто обновление программного обеспечения для отправки сигналов тревоги непосредственно в вашу систему управления горнотранспортным комплексом. Или добавить только компактный дисплей оператора. ',
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
    <ProductContentTemplate header={ content.header } subheader={ content.subheader } descriptionContent={ content.descriptionContainer.descriptionContent } iconHpposition={ content.descriptionContainer.icon } features={ content.features } solution={ content.solution } support={ content.support } iconIsLarger="true" />
  </div>
);
}

export default PrecisionPositionComp;
