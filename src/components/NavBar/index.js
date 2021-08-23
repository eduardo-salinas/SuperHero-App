import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import logo from '../../assets/comic.png'
import { logOff } from '../../redux/actions';

const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = () => {
        dispatch(logOff());
        swal({
            text: "Disconnected",
            icon: "success",
        });
        history.push("/")
    };

    return (
        <Navbar bg="warning" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Nav.Link>
                    <Link className="link" to="/home">
                        Team
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="link" to="/search">
                        Seach Hero
                    </Link>
                </Nav.Link>
                <Nav>
                    <button onClick={handleClick} className="link">exit</button>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default NavBar;