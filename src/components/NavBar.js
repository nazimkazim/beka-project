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
                    <Link to="/precision-position">
                      Система предотвращения столкновения - RIGIDROBOTICS
                    </Link>
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    <Link to="/sober-eye">
                      Система мониторинга персонала - SOBEREYE
                    </Link>
                  </Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
              <Navbar.Item>
                <Link to="/sevice">Услуги</Link>
              </Navbar.Item>
              <Navbar.Item>
                <Link to="/me">О нас</Link>
              </Navbar.Item>
              <Navbar.Item>
                <Link to="/blogs">Новости</Link>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}
