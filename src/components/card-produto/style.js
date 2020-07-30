import styled from 'styled-components'

export const ContainerProduto = styled.div`
    width: 95%;
    position: relative;
    transition: all 0.5s ease-in-out;

    img {
        width: 100%;
    }

    .info {
        position: absolute;
        display: none;
        bottom: 0;
        padding: 10px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);

        .titulo {
            width: 70%;
            padding: 5px;
        }

        .valor {
            width: 30%;
            color: #df4a26;
            font-size: 24px;
            font-weight: 500;

            .moeda {
                font-size: 12px;
            }

        }

        div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    &:hover {
        .info {
            display: block;
        }
    }

    @media (max-width: 480px){
        width: 100%;
        margin-bottom: 20px;

        .info {
            display: block;
        }
    }

`