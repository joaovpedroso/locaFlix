import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './pages/Home'
import Carrinho from './pages/Carrinho'


import { GlobalStyle } from './style/global'


export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/carrinho' exact={true} component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}