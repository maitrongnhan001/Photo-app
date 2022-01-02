import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'reactstrap';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://youtube.com/easyfrontend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Photo App
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact='true'
                            className="header__link header__link--active"
                            to="/sign-in"

                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
