import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Feature from './components/Feature/Index'
import Footer from './components/Footer/Index'
import Hero from './components/Hero/Index'
import { productsData, productsDataTwo} from './components/Products/data'
import Products from './components/Products/Index'
import { GlobalStyle } from './globalStyles'

function App() {
  document.title = 'Pizza House'
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productsData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productsDataTwo}/>
      <Footer/>
    </Router>
  )
}

export default App
