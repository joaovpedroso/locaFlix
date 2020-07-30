import styled from 'styled-components'

export const BannerContainer = styled.div`
    width: 100%;
    height: 550px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
    }

    .videoFundo {
        height: 800px;
        margin-top: -130px;
    }

    .informacoes {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: absolute;
        top: 0;
        background: rgba(0,0,0,0.5);
        color: #fff;
        padding-left: 90px;

        div {
            margin-bottom: 10px;
        }

        .titulo {
            width: 30%;
            font-size: 30px;
        }

        .descricao,
        .acao {
            width: 40%;
        }

    }

    iframe {
        width: 100%;
        height: 100%;
    }


    @media (max-width: 480px) {
        height: 200px;

        .videoFundo {
            height: 500px;
            margin-top: -140px;
        }


        .informacoes {
            background: rgba(0,0,0,0.7);
            padding-left: 20px;

            .titulo,
            .descricao,
            .acao {
                width: 100%;
            }

            .titulo {
                font-size: 15px;
            }

            .descricao {
                font-size: 12px;
            }

        }

    }

`