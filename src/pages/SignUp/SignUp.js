import React, { Component } from 'react'
import '../Login/LoginSignup.scss'
import { Link } from 'react-router-dom'
export default class SignUp extends Component {
    
  render() {
    return (
        <form>
            <h2>Registruj se!</h2>
            <fieldset>
              <legend>Napravi nalog</legend>
              <ul>
                <li>
                  <label for="username">Korisnicko ime:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Lozinka:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <div className='buttons'>
                <button>Napravi nalog</button>
                <Link to='../login'><button type="button" >Prijavi se (odmah)</button></Link>
            </div>
          </form>
    )
  }
}
