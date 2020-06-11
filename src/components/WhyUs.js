import React from 'react'
import rightPeople from '../images/right-people.png'
import accuracy from '../images/accuracy.png'
import miningIcon from '../images/mining-icon.png'
import profileEducation from '../images/profile-education.png'
import standard from '../images/standard.png'
import tracking from '../images/tracking.png'
import selection from '../images/selection.png'
import CardRow from './Card/CardRow'

function WhyUs() {
  const data=[
    {
      moto:"Правильные люди в правильном месте",
      icon:rightPeople,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      moto:"Порядочность и точность",
      icon:accuracy,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      moto:"Всесторонний опыт в добыче",
      icon:miningIcon,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      moto:"Профильное образование",
      icon:profileEducation,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      moto:"Работа по современным стандартам",
      icon:standard,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      moto:"Непрерывное обучение и отслеживание новых продукты для разработки",
      icon:tracking,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      moto:"Выбор самых оптимальных решений",
      icon:selection,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    }
  ]
  return (
    <section className="why-us-section">
        <CardRow data={data} class="why-us"/>
    </section>
  )
}

export default WhyUs
