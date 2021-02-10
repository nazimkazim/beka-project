import React, { Component } from "react";
import List from './List';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

export default class Footer extends Component {
  state = {
    items: [
      {
        news: [
          { text: "Как мы создаем свой продукт.", icon: <ArrowForwardIosRoundedIcon />, default:true },
          { text: "В Июле мы запускаем наш первый продукт для Казахстана.", icon: <ArrowForwardIosRoundedIcon />, default:true },
          { text: "Почему важно успеть купить наш товар.", icon: <ArrowForwardIosRoundedIcon />, default:true }
        ]
      },
      {
        contacts: [
          { text: "РК, г. Алматы, Ауэзовский район, 050062, мкр. 4, дом 14", icon: <LocationOnRoundedIcon />, default:true },
          { text: "+7 701 037 8388", icon: <PhoneEnabledRoundedIcon />, phone: true },
          { text: "ilyas.bekkuliyev@uvision.kz", icon: <EmailRoundedIcon />, email: true },
          { text: "sales@uvision.kz", icon: <EmailRoundedIcon />, email: true }
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
              <h3 className="has-text-light has-text-left">Контакты</h3>
              <List data={ this.state.items[1].contacts } />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
