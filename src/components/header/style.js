import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.scroll ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,1)' };
    border-bottom: ${props => props.scroll ? '1px solid transparent' : '2px solid #df4a26' };

    .dir {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            margin-right: 20px;
        }
    }

    .logo {
        img {
            transition: all 0.5s ease-in-out;
            width: 120px
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }


    .iconCarrinho {
        color: #ffff;

        span {
            font-size: 12px;
            color: #df4a26;
            font-weight: 600;
        }

    }

`