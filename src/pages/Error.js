import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-page">
      <p>Ошибка</p>
      <p>Такой страницы не существует</p>
      <button className="button is-primary">
        <Link to="/">Вернуться на главную страницу</Link>
      </button>
    </div>
  );
}
