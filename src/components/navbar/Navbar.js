import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import './Navbar.scss';
import {BsPalette, BsPersonCircle} from "react-icons/bs";
import {Link} from 'react-router-dom';
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello() {
        alert('Hello!');
    }

    render() {
        return (
            <Nav className="NavbarItems">
                <a href="home" className="bucket"><BsPalette/></a>
                <Link to="kakoradi"><button className="item hotpink">Kako radi</button></Link>
                <Link to="stats"><button className="item cyan">Statistika</button></Link>
                <Link to="amogus"><button className="item darkblue">O nama</button></Link>
                <Link to="money"><button className="item purple">Podržite me!! (MONEY)</button></Link>
                <button className="item mobile hotpink">Prijava/Registracija</button>
            </Nav>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;