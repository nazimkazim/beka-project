import React from 'react';
import HeroComp from './HeroComp';
import miningHero from '../images/mining-hero.jpeg';
import ProductContentTemplate from './ProductContentTemplate';

function PrecisionPositionComp() {
  const content = {
    header:'Высокоточное позиционирование, направление и 3D-ориентация',
    backgroundImage:miningHero,
    subheader:'Функция «Precision Mining». Современные горнодобывающие предприятия рассматривают высокоточное позиционирование как благоприятную инфраструктуру для всего автопарка.'
  }
  return (
    <div>
      <HeroComp background={ content.backgroundImage } title={content.header}/>
      <ProductContentTemplate header={content.header}  subheader={content.subheader}/>
    </div>
  );
}

export default PrecisionPositionComp;
