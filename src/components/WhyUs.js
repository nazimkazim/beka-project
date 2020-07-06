import React from 'react'
import rightPeople from '../images/right-people.png'
import miningIcon from '../images/mining-icon.png'
import profileEducation from '../images/profile-education.png'
import tracking from '../images/tracking.png'
import selection from '../images/selection.png'
import CardRow from './Card/CardRow'

function WhyUs() {
  const data=[
    {
      moto:"Партнерская поддержка",
      icon:rightPeople,
      desc:"Мы предлагаем своим партнёрам профессиональную, техническую и информационную поддержку на всех стадиях работ"
    },
    {
      moto:"Всесторонний опыт в добыче",
      icon:miningIcon,
      desc:"Благодаря практическому опыту и технической грамотности мы гарантируем надежное качество проектов"
    },
    {
      moto:"Повышение эффективности и производительности",
      icon:profileEducation,
      desc:"Наши решения помогут вам достигнуть нового уровня эффективности и производительности"
    },
    {
      moto:"Непрерывное обучение и отслеживание новых продукты для разработки",
      icon:tracking,
      desc:"Мы предлагаем широкие компетенции в сфере горных работ и безопасности в горном деле"
    },
    {
      moto:"Выбор самых оптимальных решений",
      icon:selection,
      desc:"Мы продаем не оборудование, мы продаем решение проблем партнера и помогаем реализовать новые возможности"
    }
  ]
  return (
    <section className="why-us-section">
        <CardRow data={data} class="why-us"/>
    </section>
  )
}

export default WhyUs
