import React, { useState, ChangeEvent, FormEvent } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavigationAndSearchBar() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission or any other logic with the input value
    console.log("Submitted value:", inputValue);
  };

  const handleFilter = (filter: string) => {
    // Update the URL with the selected filter
    navigate(`/cargo?filter=${filter}`);
  };

  return (
    <Container>
      <Row>
        <Col>
        <Navbar bg="white" expand="lg">
              <Navbar.Brand as={Link} to="/cargo">Выбор грузов </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/cargo">Главная</Nav.Link>
                  <NavDropdown title="Фильтрация" id="basic-nav-dropdown">
                    {/* <NavDropdown.Item as={Link} to="/cargo/12">Обеденный набор 1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/cargo/14">Запасная одежда</NavDropdown.Item> */}
                    <NavDropdown.Item onClick={() => handleFilter('weight')}>По весу</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleFilter('name')}>По названию</NavDropdown.Item>
                    {/* <NavDropdown.Item onClick={() => handleFilter('weight')}>По весу</NavDropdown.Item> */}
                    
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </Col>
        <Col>
          <div className="font-ordinary">
            <form onSubmit={handleSubmit}>
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
  );
}

export default NavigationAndSearchBar;
