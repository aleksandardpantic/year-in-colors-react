import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import './Navbar.scss';
import {BsPalette, BsPersonCircle} from "react-icons/bs";
import {Link} from 'react-router-dom';
import AuthService from '../../service/AuthService';
class Navbar extends Component {
    auth = new AuthService()
    constructor(props) {
        
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    componentDidMount(){
        this.setState({isLoggedIn: this.auth.isLoggedIn()})
    }
    

    render() {
        const loggedIn = this.state.isLoggedIn
        console.log(loggedIn)
        if (loggedIn) {
            return (
                <Nav className="NavbarItems">
                    <a href="home" className="bucket"><BsPalette/></a>
                    <Link to="tvojagodina"><button className="item hotpink">Tvoja godina</button></Link>
                    <Link to="stats"><button className="item cyan">Statistika</button></Link>
                    <Link to="amogus"><button className="item darkblue">O nama</button></Link>
                    <Link to="money"><button className="item purple">Podržite me!! (MONEY)</button></Link>
                    <button className="item mobile hotpink">Izloguj se <BsPersonCircle/></button>
                </Nav>
            );
        } else {
            return (
                <Nav className="NavbarItems">
                    <a href="home" className="bucket"><BsPalette/></a>
                    <Link to="kakoradi"><button className="item hotpink">Kako radi</button></Link>
                    <Link to="stats"><button className="item cyan">Statistika</button></Link>
                    <Link to="amogus"><button className="item darkblue">O nama</button></Link>
                    <Link to="money"><button className="item purple">Podržite me!! (MONEY)</button></Link>
                    <Link to='login'><button className="item mobile hotpink">Prijava/Registracija</button></Link>
                </Nav>
            );
        }
        
    }
}

Navbar.propTypes = {};

export default Navbar;