import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import App from './App.js'
import "./root.css"
import Store from "./Redux/Store"
ReactDom.render(
<Provider store= {Store}>
<App/>
</Provider>
, document.getElementById('root'));