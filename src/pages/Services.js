import React from 'react';
import { VscChevronRight, VscCircleFilled } from "react-icons/vsc";


export default function Services() {
  const data = {
    header: 'Услуги и техническая поддержка',
    subheader: 'Миссией компании uVision Safety Solution является предоставления технических и технологичных услуг в сфере автоматизации и сборе, обработке информации. Мы предоставляем услуги с высоким качеством, с помощью наших высококвалифицированных специалистов',
    ul1: 'Аудит систем диспетчеризации:',
    ul1List: ['Как используется система диспетчеризации (раскрыть потенциал функционала системы)', 'Ревизия оборудования на технике'],
    ul2List: ['Советы по улучшению работы систем диспетчеризации ГТК', 'Установка и запуск систем диспетчеризации, систем предотвращения столкновений', 'Техническая поддержка – программного обеспечения и оборудования', 'Услуги по установке и запуску систем нивелирования для дорожных работ', 'Консультации в сфере консультации организации проекта «Разрез – Фабрика»', 'Технологическое консультирование клиентов']
  };
  return (
    <div className="services-container">
      <div className="services-col-left"></div>
      <div className="services-col-right">
        <h2>{ data.header }</h2>
        <h3>
          { data.subheader }
        </h3>
        <h3>{ data.ul }</h3>

        <ul className="ul1-service">
          <li><VscCircleFilled /> { data.ul1 }</li>
          { data.ul1List.map((item) => (
            <li>- { item }</li>
          )) }
          { data.ul2List.map((item) => (
            <li><VscCircleFilled /> { " " } { item }</li>
          )) }
        </ul>


      </div>
    </div>
  );
}
