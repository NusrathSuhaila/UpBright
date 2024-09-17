import './Login.model.css';
import { useState } from 'react';
import Link from 'next/link';
import { Modal, Tab, Nav } from 'react-bootstrap';



export default function Login() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="btn btn-primary" onClick={handleShow}>
                Open Login Modal
            </button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login/Register</Modal.Title>
                </Modal.Header>
                <Modal.Body className="signin_modal">
                    <Tab.Container defaultActiveKey="signup">
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="signup">Register</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="signin">Sign In</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="signup">
                                <form action="https://ubcourse.com/login/register" method="post" id="sign_up">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name" name="first_name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" name="last_name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name on Certificate" name="certificate_name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" name="password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Create An Account</button>
                                    <p style={{ color: '#8c8c8c', textAlign: 'center', marginTop: '0.5rem' }}>
                                        Already Have an account?{' '}
                                        <a style={{ fontWeight: 'bold' }} data-toggle="tab" href="#signin">
                                            Sign In
                                        </a>
                                    </p>
                                </form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="signin">
                                <form action="https://ubcourse.com/login/validate_login/user" method="post" id="login">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" name="password" />
                                    </div>
                                    <p className="forgot_link">
                                        <a href="#">Forgot password</a>
                                    </p>
                                    <button type="submit" className="btn btn-primary btn-block">Log In</button>
                                    <p style={{ color: '#8c8c8c', textAlign: 'center', marginTop: '0.5rem' }}>
                                        Don&apos;t have an account?{' '}
                                        <a style={{ fontWeight: 'bold' }} data-toggle="tab" href="#signup">
                                            Register
                                        </a>
                                    </p>
                                </form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

