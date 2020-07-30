import React from 'react'
import { FaPlus } from 'react-icons/fa';

import { ContainerProduto } from './style'
import { BotaoLocar } from '../../style/components'


import Produto01 from '../../images/produto01.webp'


const CardProduto = () => {
    return(
        <ContainerProduto>
            <img src={Produto01} alt='Produto' title='Produto' />

            <div className='info'>

                <div>
                    <span className='titulo'>
                        Velozes e Furiosos 7
                    </span>
                    <span className='valor'>
                        <span className="moeda">
                            R$
                        </span>
                        25,00
                    </span>
                </div>

                <BotaoLocar>
                    Adicionar
                    <FaPlus />
                </BotaoLocar>

            </div>

        </ContainerProduto>
    )
}

export default CardProduto