import React, { useState, ChangeEvent, FormEvent } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavigationAndSearchBar() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission or any other logic with the input value
    console.log("Submitted value:", inputValue);
  };

  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <Navbar bg="white" expand="lg">
              <Navbar.Brand as={Link} to="/">Выбор грузов </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/cargo/">Главная</Nav.Link>
                  <NavDropdown title="Экспертизы" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/expertise/1">Проверка подлинности</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/expertise/2">Заказ копии</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/expertise/3">Определение художника</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/expertise/4">Определение эпохи</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/expertise/5">Реставрация</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/expertise/6">Заказ на разбор картины</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col>
            <div className="font-ordinary">
              <form onSubmit={handleSubmit}>
                {/* <label htmlFor="text">Поиск по названию</label> */}
                <input
                  id="text"
                  name="good_item"
                  type="text"
                  className="search-bar"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Введите название товара"
                />
                <input type="submit" value="Поиск" className="search-button" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default NavigationAndSearchBar;
