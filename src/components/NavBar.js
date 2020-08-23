import React, { Component } from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  // set active state for hamburger
  state = { active: false };

  handleClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };
  render() {
    return (
      <div id="header">
        <Navbar
          style={ { background: "white" } }
          fixed="top"
          active={ this.state.active }
        >
          <Navbar.Brand>
            <Navbar.Item>
              <Link to="/"><strong>uVision Safety Solutions</strong></Link>
            </Navbar.Item>
            <Navbar.Burger
              active={ this.state.active }
              onClick={ this.handleClick }
            />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item dropdown hoverable href="#">
                <Navbar.Link>
                  Решения
              </Navbar.Link>
                <Navbar.Dropdown>
                  <Navbar.Item href="#">
                    <Link to="/prevent-collision">
                      Система предотвращения столкновения - RIGIDROBOTICS
                    </Link>
                  </Navbar.Item>
                  <Navbar.Item href="#">
                  <Link to="/precision-position">
                      Высокоточное позиционирование, направление и 3D ориентация - RIGIDROBOTICS
                    </Link>
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    <Link to="/sober-eye">
                      Система мониторинга персонала - SOBEREYE
                    </Link>
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    <Link to="/meglab">
                      Оптимизация и безопасность подземных горных работ - IMAGINE
                    </Link>
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    <Link to="/aianalytics">
                      Продвинутая аналитика и искуственный интеллект в горном деле - RIGIDROBOTICS
                    </Link>
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    <Link to="/precision-selective-digging">
                      Высокоточное позиционирование ковша и геометрия рукояти - RIGIDROBOTICS
                    </Link>
                  </Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}
