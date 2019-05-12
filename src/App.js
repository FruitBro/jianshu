import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from "./common/header"
import GlobalStyle from './style'
import GlobalFont from './statics/iconfont/iconfont'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalFont />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App;
