import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import './Navbar.scss';


class Navbar extends Component {




    render() {
        return (
            <Nav className="NavbarItems">

                <ul className="list">




                    <li className="item hotpink" >
                        <a  href="#">
                            How it works
                        </a>
                    </li>
                    <li className="item cyan">
                        <a  href="#">
                            About us
                        </a>
                    </li>
                    <li className="item purple">
                        <a  href="#">
                            Stats
                        </a>
                    </li>
                    <li className="item darkblue">
                        <a  href="#">
                            Support us
                        </a>
                    </li>
                    <li className="item-mobile blue">
                        <a  href="#">
                            Login
                        </a>
                    </li>



                </ul>
            </Nav>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;