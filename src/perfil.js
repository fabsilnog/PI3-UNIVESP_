import React from 'react';
import './perfil.css';
import toto from './img/toto.png';


function Perfil() {

    return (
        <div>
            <div>
                <div className='imagem'>
                    <img className='img3' src={toto} alt='Imagem'/>
                </div>   
                <div className='texto7'>
                    <p>Passe para o lado para ver mais fotos desse teteozinho</p>
                </div>
                <div className='texto8'>
                    <p>Toto
                       Porte: Médio 
                       Cor: Branco e Marrom (bombom)
                       Nascido em: 2024
                       Raça: Tombalate com uma pitada de pitbul
                       To cheio de amor para dar. Liga no PATINHAS e marca um encontro comigo bem. Tenho tanto para te falar, aquele segredinho.
                    </p>
                </div>
            </div>
        </div>



    )
}

export default Perfil;