import React from 'react';
import HeroComp from '../components/HeroComp';
import mainSlider1 from '../images/haul-track.jpeg';
import ProductContentTemplate from '../components/ProductContentTemplate';
import CascadianLogo from '../images/cascadian-logo.png';
import SmartRViewPicture from '../images/SmartRViewPicture.png';
import modules from '../images/modules.png';
import precisionImage from '../images/precision.png';
import universalSupport from '../images/universalSupport.png';
import MLIcon from '../images/MLIcon.png';
import OperatorIcon from '../images/OperatorIcon.png';
import DumpTruck from '../images/DumpTruck.png';
import PM from '../images/PM.png';

const Cascadia = () => {
  const content = {
    header: 'Аналитика расхода топлива SmartRView',
    url: 'prevent-collision',
    backgroundImage: mainSlider1,
    subheader: '',
    cascadianCaseStudiesHeader: 'Анализ Практических Примеров',
    descriptionContainer: {
      icon: CascadianLogo,
      descriptionContent: `Снижение расходов и повышение производительности за счет измерения топлива на самосвалах и расширенной аналитики.
                           Платформа интеллектуального принятия решений, отличающаяся высокой точностью прямого измерения топлива
      `
    },
    features: [
      {
        icon: OperatorIcon,
        header: 'Повышение эффективности операторов самосвалов'
      },
      {
        icon: PM,
        header: 'Карта энергетической интенсивности внутрикарьерных дорог '
      },
      {
        icon: DumpTruck,
        header: 'Стратегия проведения технического обслуживания, информированная расходом топлива'
      },
      {
        icon: MLIcon,
        header: 'Прогнозирование карьера с помощью Машинного Обучения'
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
    precision: {
      header: 'Разница в сантиметровой точности',
      image: precisionImage,
      description: 'Традиционные продукты для предотвращения столкновений используют GPS (показан сверху), ежедневно создавая множество ложных срабатываний. Эти системы быстро подрывают доверие оператора и теряют эффективность. DriveAssist (показан внизу) использует высокоточную GNSS (HPGNSS), а также интеллектуальные алгоритмы и точное отслеживание курса для более точного отслеживания транспортных средств и прогнозирования их маршрутов. Это уменьшает ложные срабатывания сигнала тревоги, повышает доверие оператора и помогает создать более безопасную и эффективную среду для работы.'
    },
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
        subheader={ content.subheader }
        descriptionContent={ content.descriptionContainer.descriptionContent }
        iconHpposition={ content.descriptionContainer.icon }
        smartrViewPic={ SmartRViewPicture }
        features={ content.features }
        solution={ content.solution }
        support={ content.support }
        precision={ content.precision }
        cascadianCaseStudiesHeader={ content.cascadianCaseStudiesHeader }
        iconIsLarger="true" marginTop="20px"
      />
    </div>
  );
};

export default Cascadia;
