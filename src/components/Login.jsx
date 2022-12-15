import { FaFacebookF, FaGoogle } from "react-icons/fa"
import React from "react"
import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="text-center m-4">Login</h1>
                <p>
                    Belum Punya akun ?{" "}
                    <Link to="/freework-deploy/daftar">Buat Akun</Link>
                </p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-muted">
                            Email address
                        </Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-muted">Password</Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    <div className="login-button-container">
                        <a href="#">Lupa Password ? </a>
                        <button className="login-button" type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
                <hr className="line-break" />
                <div className="other-login d-flex m-3">
                    <button className="other-login-button facebook-login">
                        <FaFacebookF className="text-primary" /> Login
                        Menggunakan Facebook
                    </button>
                    <button className="other-login-button" bg="warning">
                        <FaGoogle className="text-danger" /> Login Menggunakan
                        Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
