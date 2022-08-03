import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

const LoginForm = () => {
    return (
        <>
            <Form.Group className="mb-3" controlId="formLoginAuthentication">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email Address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-grid mx-auto">
                <Button>Sign in</Button>
            </div>
        </>
    );
};

export default LoginForm;
