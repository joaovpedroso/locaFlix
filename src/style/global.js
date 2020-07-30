import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    #root {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: rgba(0, 0, 0, 0.9);
    }

    a, button {
        text-decoration: none;
        outline: none;
    }

    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 90%;
        font-size: 50px;
        color: #ffff;

        &::before {
            content: none
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
            color: #ffff
        }

    }

    .slick-next {
        right: -40px;
    }
    .slick-prev {
        left: -50px;
    }

`