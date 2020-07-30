import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt,FaShoppingCart } from 'react-icons/fa'


import { HeaderContainer } from './style'


import Logo from '../../images/logo.png'


const Header = () => {
    return(
        <HeaderContainer>

            <div className='esq'>
                <Link to='/' className='logo'>
                    <img src={Logo} alt='Logo LocaFLix' title='Logo LocaFLix' />
                </Link>
            </div>

            <div className='dir'>
                <Link to='/' className='iconCarrinho'>
                    <FaUserAlt size='1.3em' />
                </Link>

                <Link to='/carrinho' className='iconCarrinho'>
                    <FaShoppingCart size='1.3em' />
                    <span>0</span>
                </Link>
            </div>           

            
        </HeaderContainer>
    )
}

export default Header