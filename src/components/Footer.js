import React, { Component } from "react";
import List from './List'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

export default class Footer extends Component {
  state = {
    items: [
      {
        text: `Мы являемся молодой компанией, занимающейся продажей, 
      установкой / вводом в эксплуатацию и поддержкой систем управления автопарком, 
      систем предотвращения столкновений / оповещения, систем контроля усталости и 
      интерферометрических радаров для мониторинга устойчивости склона.
      Наше видение: создать надежную платформу для внешней технической поддержки 
      и развертывания с помощью постоянного развития нужных людей.
      Мы являемся опытными профессионалами в развертывании систем управления автопарком, 
      развертывании интерферометрических радаров и интерпретации данных. 
      Мы глубоко разбираемся в оптимизации парка, смешивании руд, высокоточных системах наведения.` },
      {
        news: [
          { text:"Как мы создаем свой продукт.", icon:<ArrowForwardIosRoundedIcon/> },
          { text:"В Июле мы запускаем наш первый продукт для Казахстана.",icon:<ArrowForwardIosRoundedIcon/> },
          {text:"Почему важно успеть купить наш товар.",icon:<ArrowForwardIosRoundedIcon/>}
        ]
      },
      {
        contacts: [
          { text: "Мкр. Достык, ЖК Аралн 52-21", icon: <LocationOnRoundedIcon/> },
          { text: "+7 701 037 8388", icon: <PhoneEnabledRoundedIcon/> },
          { text: "bekqlive@gmail.com", icon: <EmailRoundedIcon/> }
        ]
      }
    ]
  };
  render() {
    //this.state.items[0].cities.forEach(item => console.log(item));
    return (
      <footer className="footer has-background-black-bis">
        <div className="content">
          <div className="columns">
            <div className="column is-4">
              <h3 className="has-text-light has-text-left">О нас</h3>
              <p className="has-text-light has-text-left is-size-6">{this.state.items[0].text}</p>
            </div>
            <div className="column is-4">
              <h3 className="has-text-light has-text-left">Последние новости</h3>
                <List data={this.state.items[1].news} />
            </div>
            <div className="column is-4">
              <h3 className="has-text-light has-text-left">Контакты</h3>
              <List data={this.state.items[2].contacts} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
