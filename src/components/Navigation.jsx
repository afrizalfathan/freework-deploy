import React from "react"
import "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"

function Navigation() {
    const navColor = {
        backgroundColor: "#f1f2f3",
    }
    return (
        <Navbar style={navColor} expand="lg" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/freework-deploy/" className="text-dark">
                        <h3 className="logo">FreeWork</h3>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <RxHamburgerMenu />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/freework-deploy/" className="text-dark">
                                Home
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Cari Kerja" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/freework-deploy/freelance-kerjaanWeb/">
                                    Web Developer
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/freework-deploy/freelance-kerjaanDesign/">
                                    Designer
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Cari Pekerja"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item>
                                <Link to="/freework-deploy/freelance-web/">
                                    Web Developer
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/freework-deploy/freelance-design/">
                                    Designer
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link
                                to="/freework-deploy/daftar"
                                className="text-dark"
                            >
                                Daftar
                            </Link>
                        </Nav.Link>
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
