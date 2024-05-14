import React from 'react';
import './galeria.css';
import toto from './img/toto.png';
import melo from './img/melo.png';
import bw from './img/bw.png';
import tarzan from './img/tarzan.png';


function Galeria() {

    return (
        <div>
            <div>
                <div className='imagem'>
                    <img className='img3' src={toto} alt='Imagem'/>
                </div>   
                <div className='texto3'>
                    <p>Toto</p>
                    <p>Filhote</p>
                </div>
            </div>
            <div>
                <div className='imagem'>
                    <img className='img4' src={melo} alt='Imagem'/>
                </div>   
                <div className='texto4'>
                    <p>Melo (Caramelo)</p>
                    <p>Filhote</p>
                </div>
            </div>
            <div>
                <div className='imagem'>
                    <img className='img5' src={bw} alt='Imagem'/>
                </div>   
                <div className='texto5'>
                    <p>B&W (Black and white)</p>
                    <p>Adultinho Obs: Ele só tem a cara de esnobe, mas é gente boa. Ele pediu para que até a foto fosse em Preto e Branco ;</p>
                </div>
            </div>
            <div>
                <div className='imagem'>
                    <img className='img6' src={tarzan} alt='Imagem'/>
                </div>   
                <div className='texto6'>
                    <p>Tarzan</p>
                    <p>Adultinho Obs: Esse adora ficar pulando de lá para cá </p>
                </div>
            </div>
        </div>



    )
}

export default Galeria;