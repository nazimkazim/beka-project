import React from 'react'
import rightPeople from '../images/right-people.png'
import accuracy from '../images/accuracy.png'
import miningIcon from '../images/mining-icon.png'
import profileEducation from '../images/profile-education.png'
import standard from '../images/standard.png'
import tracking from '../images/tracking.png'
import selection from '../images/selection.png'

function WhyUs() {
  const data=[
    {
      moto:"Правильные люди в правильном месте",
      icon:rightPeople,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      moto:"Порядочность и точность",
      icon:accuracy,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      moto:"Всесторонний опыт в добыче",
      icon:miningIcon,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      moto:"Профильное образование",
      icon:profileEducation,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      moto:"Работа по современным стандартам",
      icon:standard,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      moto:"Непрерывное обучение и отслеживание новых продукты для разработки",
      icon:tracking,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      moto:"Выбор самых оптимальных решений",
      icon:selection,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    }
  ]
  return (
    <section className="why-us-section">
        <h2 className="is-size-2 has-text-centered has-text-weight-medium">ПОЧЕМУ МЫ</h2>
    </section>
  )
}

export default WhyUs
