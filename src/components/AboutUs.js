import React from 'react';
import bekaPhoto from '../images/bekaimages/beka-avatar.jpg';
import alzhanovNurken from '../images/alzhanovNurken.jpeg';
import baglanUtegen from '../images/bagaUtigen.jpeg';
import erkinK from '../images/erkin-k.png';
import nazim from '../images/nazim.png';
import CardCustom from './CardCustom';
import { Helmet } from "react-helmet";

function AboutUs() {
  const people = [
    {
      name: 'Ильяс Беккулиев',
      photo: bekaPhoto,
      bio: `Опыт работы в сфере продаж, горных работ, тяжелой техники, метрополитена. 
      Продажи систем управления горнотранспортным комплексом, высокоточных систем позиционирования тяжелой техники, платформ отчетности, систем предотвращения столкновений, технической поддержки, тренингов и других услуг. 
      Успешно установлены и введены в эксплуатацию 3 проекта Fleet Management System в Казахстане; опыт калибровки высокоточных систем позиционирования экскаваторов, погрузчиков, бульдозеров, буровых станков. Запуск систем нивелирования для дорожного строительства с подключением к гидравлической системе на грейдерах и бульдозерах, позиционирование отвала по GNSS и инклинометрам. Опыт работы сервисным инженером у официального дилера Hitachi в Казахстане.`
    },
    {
      name: 'Алжанов Нуркен',
      photo: alzhanovNurken,
      bio: `Сфера работ: электроэнергетика
      Контроль и расчет объемов строительно-монтажных работ. Опыт работы ведения проектов по разделам: НЭС (наружные электрические сети), НСС (наружные сети связи), ЭС (электроснабжение (строительство ТП,РП,КТП,ВРУ,ГРЩ и т.д.), ЭМ (силовое электрооборудование), ЭО (электрическое освещение), ЭН (электроосвещение наружное), ЭГ (заземление и молниезащита), АСКУЭ (автоматизированная система коммерческого учета электроэнергии), ТМ (телемеханика), ОВСПД (Оптоволоконная система передачи данных), ОПС (охранно-пожарная сигнализация), РЗиА (релейная защита и автоматика). Строительство трансформаторных подстанций и распределительных пунктов. Дизель-генераторная установка (наладка АВР). V - квалификационная группа по электробезопасности до и выше 1000В.`
    },
    {
      name: 'Назим Турдиев',
      photo: nazim,
      bio: `Опыт в разработке платформы для обслуживания населения. Вместе с back-end программистами я разработал сложную систему, которая помогла автоматизировать такие функции, как отправка и получение заявок на дошкольное образование, добавление и создание расписания, работа с картами (Яндекс API), фильтрация и другие функции.В команде я использовал такие технологии, как React, MaterilUI, flexbox, Redux, Redux-Thunk, Postman, Axios.`
    },
    {
      name: 'Баглан Утегенов',
      photo: baglanUtegen,
      bio: `Магистр технических наук в области машиностроения. 
      Запуск и эксплуатация оборудования службы электромеханических устройств метрополитена г. Алматы. Запуск и эксплуатация оборудования службы Электромеханических устройств. Планирование ППР, ТОиР. Работа со станками ЧПУ на заводе Alageum Electric. IV - квалификационная группа по электробезопасности до и выше 1000В.`
    },
    {
      name: 'Куйекбаев Еркин',
      photo: erkinK,
      bio: `Продажи оборудования и запасных частей
      Поиск поставщиков, анализ рынка, анализ цен, знание техники, структура и принцип работы, назначение техники и виды брендов. Опыт в строительстве и прокладке коммуникации. Составление договоров и спецификации, технических характеристики товаров для таможенных служб. Опыт работы и организации работы в сельском хозяйстве.`
    }
  ];
  return (
    <section className="section about-us-section">
      <Helmet>
        <title>uVision Safety Solutions</title>
        <meta name="о компании" content="компания uvision предлагает широкий спектр в области безопасности горного дела" />
        <link rel="canonical" href="http://uvision.kz" />
      </Helmet>
      <div className="container">
        <h1 className="title has-text-white-ter has-text-primary-light mt-4">uVision Safety Solutions</h1>
        <p className="content is-large mt-4 has-text-grey-lighter is-size-6-mobile">
          Наше видение: Создать надежную платформу технической поддержки и внедрения решений по безопасности и оптимизации горных работ с помощью постоянного развития персонала. Мы являемся молодой компанией, занимающейся продажей, установкой/вводом в эксплуатацию и поддержкой систем управления горнотранспортным комплексом, систем предотвращения столкновений/оповещения, систем контроля усталости. Мы являемся опытными профессионалами во внедрении подобных решений. Мы разбираемся в оптимизации работ горнотранспортного комплекса, смешивании руды(шихтовки), высокоточных системах наведения. Опыт работы с горной техникой следующих брендов: Hitachi, Cat, Komatsu, Sandvik, AtlasCopco, Mercedes-Benz. Опыт работы с различными системами диспетчеризации.
        </p>
        <div className="about-us-cards-container">
          <CardCustom data={ people } />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
