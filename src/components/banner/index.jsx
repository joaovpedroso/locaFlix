import React from 'react'
import { FaPlus } from 'react-icons/fa';

import { BannerContainer } from './style'
import { BotaoLocar } from '../../style/components'


// import Banner01 from '../../images/banner01.png'


const Banner = () => {
    return(
        <BannerContainer>
            <div className='videoFundo'>
                <iframe
                title='Full Banner Video'
                frameBorder="0"
                height="100%"
                width="100%"
                src="https://www.youtube.com/embed/hujU0dw6Erk?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&fullscreen=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
            
            <div className="informacoes">

                <div className="titulo">
                    <h3>Velozes e Furiosos 7</h3>
                </div>

                <div className="descricao">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>

                <div className="acao">
                    <BotaoLocar>
                        Adicionar
                        <FaPlus />
                    </BotaoLocar>
                </div>

            </div>
        </BannerContainer>
    )
}

export default Banner