import React from 'react'

import Header from '../../components/header'
import Banner from '../../components/banner'
import SecaoProdutos from '../../components/secao-produtos'

const Home = () => {
    return(
        <>
            <Header />
            <Banner />
            <SecaoProdutos titulo='Lançamentos'/>
            <SecaoProdutos titulo='Mais Locados'/>
            <SecaoProdutos titulo='Visto por último'/>
        </>    
    )
}

export default Home