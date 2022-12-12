import { FaFacebookF, FaGoogle } from "react-icons/fa"
import React from "react"
import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

function Daftar() {
    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="text-center m-4">Daftar</h1>
                <p>
                    Sudah punya akun ?{" "}
                    <Link to="/freework-deploy/login">Login</Link>
                </p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="text"
                            placeholder="Enter username"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="number"
                            placeholder="Enter number phone"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>

                    <div className="login-button-container">
                        <button className="login-button" type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
                <div className="other-login d-flex m-3">
                    <button className="other-login-button facebook-login">
                        <FaFacebookF className="text-primary" /> Daftar
                        Menggunakan Facebook
                    </button>
                    <button className="other-login-button" bg="warning">
                        <FaGoogle className="text-danger" /> Daftar Menggunakan
                        Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Daftar
