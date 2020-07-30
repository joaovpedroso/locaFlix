import styled from 'styled-components'

export const ContainerPagina = styled.section`
    width: 100%;
    height: 100%;
`

export const Secao = styled.section`
    width: 100%;
    padding: 50px;

    .titulo {
        width: 100%;
        color: #ffff;
        
        h3 {
            line-height: 1.25vw;
            font-size: 1.4vw;
            font-weight: 500;
        }
    }

    .conteudo {
        width: 100%;
        margin-top: 30px;
    }

    .produtos {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media (max-width: 480px) {
        .titulo {
            h3 {
                font-size: 30px;
            }
        }
    }

`

export const BotaoLocar = styled.button`
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    padding: 5px;
    border: none;
    color: #df4a26;
    cursor: pointer;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: #df4a26;
        color: #ffff;
    }
`
