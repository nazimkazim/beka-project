import React from 'react';

export default function Form() {
  
  return (
    <form name="beka-contacts" method="POST" onSubmit="submit">
      <input type="hidden" name="beka-contacts" value="beka-contacts"/>
      <div class="field">
        <p class="control has-icons-left">
          <input required class="input" type="text" name="name" placeholder="Имя" />
          <span class="icon is-small is-left">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input required className="input" type="number" name="phone" placeholder="Телефон" />
          <span className="icon is-small is-left">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input required className="input" type="email" name="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <div data-netlify-recaptcha="true"></div>
      </div>
      <input className="button is-success" value="Отправить" type="submit"/>
    </form>
  );
}
