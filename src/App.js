import React from 'react'
import './App.css'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Articel, Brand, CTA, Feature, Navbar } from './components'

const App = () => {
  return (
    <div>
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features /> 
            <Possibility /> 
            <CTA /> 
            <Blog /> 
            <Footer />
        </div>
    </div>
  )
}

export default App
