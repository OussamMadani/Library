import React from'react';
import { BrowserRouter as Router,Link, NavLink} from 'react-router-dom';
import image from '../images/image.jpg';
import {Navbar, Nav, NavDropdown, Container, Row} from 'react-bootstrap';
const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin,handleSingup, hasAccount, setHasAccount,emailError, passwordError}= props;

   
    return(
    <div>
        <section className="login">
        <Container>
            <Row>
        <Navbar className="navbar2" collapseOnSelect expand="sm"  variant="dark">
        <Navbar.Brand href="#home">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link onClick={() => setHasAccount(hasAccount)}>Sign In</Nav.Link>
            <Nav.Link onClick={() => setHasAccount(!hasAccount)}>Sign Up</Nav.Link>
            </Nav>
        </Navbar.Collapse>    
    </Navbar>
    </Row>
    <Row>
            <div className="loginContainer">
            <img className="img-fluid" src={image} alt=""/>
                <label>Email:</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>password:</label>
                <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span> </p>
                    </>
                ):(
                    <>
                    <button onClick={handleSingup}>Sign up</button>
                    <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sing in</span></p>
                    </>
                )}
                </div>
                
            </div>
            </Row>
            </Container>
        </section>
    </div>
    );
} 

export default Login;