import React, { Component } from 'react'
import './LoginSignup.scss'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    
  render() {
    return (
        <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Uloguj se</legend>
              <ul>
                <li>
                  <label for="username">Korisnicko:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Lozinka:</label>
                  <input type="password" id="password" required/>
                </li>
            
              </ul>
            </fieldset>
            <div className='buttons'>
                <button>Prijavi se</button>
                <Link to='../signup'><button type="button">Registruj se!!!</button></Link>  
            </div>
            
        </form>
    )
  }
}
