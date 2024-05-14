import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state={clicked: false};
    handleClick = () =>{
      this.setState({clicked:!this.state.clicked})
    }
    render() {
      return (
        <nav>
            <div>
                <ul id='item1' className={this.state.clicked ? "#item1 active" : "#item1"}>
                    <li><Link to="/">Patinhas</Link></li>
                </ul>
            </div>
            <div>
                <ul id='item2' className={this.state.clicked ? "#item2 active" : "#item2"}>
                    <li><Link to="/cadastro">Cadastre-se   </Link></li>
                    <li><Link to="/galeria">Encontre um amigo  </Link></li>
                </ul>
            </div>
            <div id='login'> Já tenho cadastro : 
                <input
                class="input" 
                type="email"
                className='login1'
                placeholder='E-mail'
                />
                <input
                class="input" 
                type="senha"
                className='login2'
                placeholder='Senha'
                />
                <button className='botao' type='submit'>Entrar</button>
            </div>
        </nav>
      )   
    }  
} 

export default Navbar
