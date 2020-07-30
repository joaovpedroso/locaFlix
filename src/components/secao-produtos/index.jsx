import React from 'react'
import Slider from 'react-slick'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


import CardProduto from '../card-produto'


import { Secao } from '../../style/components'

const BotaoVoltar = ({ className, onClick }) => {
    return(
        <div className={`${className} controls`} onClick={onClick}>
            <FaAngleLeft />
        </div>
    )
}

const BotaoAvancar = ({ className, onClick }) => {
    return(
        <div className={`${className} controls`} onClick={onClick}>
            <FaAngleRight />
        </div>
    )
}

const SecaoProdutos = props => {

    const propSlide = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <BotaoAvancar />,
        prevArrow: <BotaoVoltar />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              arrow: false,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return(
        <Secao>
            <div className='titulo'>
                <h3>{props.titulo}</h3>
            </div>

            <div className='conteudo'>
                <Slider {...propSlide}>
                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>

                    <div>
                        <CardProduto />
                    </div>
                    
                </Slider>
            </div>
        </Secao>
    )
}

export default SecaoProdutos;