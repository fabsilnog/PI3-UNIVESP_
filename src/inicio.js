import React from 'react';
import './inicio.css';
import banner1 from './img/banner1.png';
import parceria from './img/parceria.png';

function Inicio() {

    return (
        <div>
            <div className='banner'>
                <img id='banner1'  className='bannerimg' src={banner1} alt='Banner'/>
            </div>
            <div>
                <div  className='imagem'>
                    <img id='imagem1' className='img1' src={parceria} alt='Imagem'/>

                </div>
                <div id='texto1' className='texto'>
                    <p>
                    Somos o pontapé inicial para quem deseja viver uma experiência ao adotar um pet, mas tem alguns receios e não deseja agir de forma precipitada. Com o Pet Day você pode passar um dia com o pet escolhido por você e vivenciar a experiência de tê-lo em sua casa. O Pet Day pode ser estendido ao Pet Week caso o test drive precise de mais tempo para que você entenda mais sobre a experiência. E não se esqueça, temos uma rede de apoio com profissionais aptos a apoiá-lo caso opte pela adoção. Contamos também com uma rede de adestradores cadastrados que disponibilizará a 1ª aula de forma gratuita. Tudo para que você e seu novo pet se tornem PARCEIROS.
                    </p>

                </div>
            </div>
        </div>

    )

}

export default Inicio;