import React from 'react'
import SoberEyeVirtualGlass from '../images/sober-eye-virtual-glass.webp';

export default function SoberEyePage() {
 
  return (
    <div className="sober-eye-section">
      <div className="sober-eye-section-half">
        <div className="sober-eye-section-left-desc-container">
          <span className="sober-eye-section-left-desc-header">
            Возможность пройти самостоятельный тест за минуту
          </span>
          <ul className="sober-eye-section-left-desc-list">
            <li>Портативный и легкий в использовании</li>
            <li>Не инвазивный</li>
            <li>Результаты в реальном времени</li>
          </ul>
        </div>
      </div>
      <div className="sober-eye-section-half">
      <img src={SoberEyeVirtualGlass} alt=""/>
      </div>
    </div>
  )
}
