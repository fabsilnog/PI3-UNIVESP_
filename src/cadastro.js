import React from 'react';
import './cadastro.css';
import cadastro from './img/cadastro.png';


function Cadastro() {

    return (
        <div>
            <div>
                <div className='imagem'>
                    <img id='imagem2' className='img2' src={cadastro} alt='Imagem'/>
                </div>
            </div>

            <div id='login2' > Cadastre-se
                <p><input
                class="input" 
                type="email"
                className='login3'
                placeholder='E-mail'
                /> </p>
                <p><input
                class="input" 
                type="nome"
                className='login4'
                placeholder='Nome'
                /></p>
                <input
                class="input" 
                type="senha"
                className='login5'
                placeholder='Senha'
                />
               <p> <button className='botao' type='submit'>Cadastrar</button> </p>
            </div>
        </div>

    )

}

export default Cadastro;