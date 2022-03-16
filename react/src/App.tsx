import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/box'
import { Product } from './types/products'
import { ShowInfo,ShowInfoChange } from './components/ShowInfo'
import { Route,Routes,NavLink } from 'react-router-dom'
import HomePage from './pages/homepage'
import AboutPage from './pages/about'
import PostsPage from './pages/postspage'


function App() {
  return(
    <div className="App">
      <header>
        <ul>
       <li>
         <NavLink to = "/">HomePage</NavLink>
       </li>
       <li>
         <NavLink to="/products">Products Page</NavLink>
       </li>
       <li>
         <NavLink to="/posts">Blog</NavLink>
       </li>
       <li>
         <NavLink to="/about">About</NavLink>
       </li>
        </ul>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/products" element={<ProductsPage/>}/> */}
            <Route path="/posts" element={<PostsPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
