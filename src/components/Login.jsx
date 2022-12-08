import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Login() {
    return (
        <div className="login-page-container">
            <div className="login-container">
                <h1>Login</h1>
                <div className="hr-divider">
                    <hr />
                    <span>Atau</span>
                    <hr />
                </div>
                <div className="other-login">
                    <Button>
                        <MDBIcon fab icon="facebook-f" /> Login menggunakan
                        Facebook
                    </Button>
                </div>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="border border-warning"
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className="border border-warning"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
