import React from "react"
import "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <Navbar bg="warning" expand="lg" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <h3 className="logo">FreeWork</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/freework-deploy" className="text-dark">
                                Home
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Cari Kerja" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Web Developer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Designer
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Cari Pekerja"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Web Developer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Designer
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Daftar</Nav.Link>
                        <Nav.Link>
                            <Link
                                to="/freework-deploy/login"
                                className="text-dark"
                            >
                                Login
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
