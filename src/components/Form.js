import React from 'react';

export default function Form() {
  
  return (
    <form name="contact" action="POST" netlify>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="text" name="name" placeholder="Имя" />
          <span class="icon is-small is-left">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="number" name="phone" placeholder="Телефон" />
          <span className="icon is-small is-left">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" name="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <div data-netlify-recaptcha></div>
      </div>
      <input className="button is-success" value="Отправить" type="submit"/>
    </form>
  );
}
