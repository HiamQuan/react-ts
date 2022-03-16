import { useState,useEffect } from 'react'
import './App.css'
import Box from './components/box'
import { Product } from './types/products'
import { ShowInfo,ShowInfoChange } from './components/ShowInfo'
import { Route,Routes,NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/homepage'
import AboutPage from './pages/about'
import PostsPage from './pages/postspage'
import AdminPage from './pages/admin/layout'
import ProductsList from './pages/admin/list'
import Dashboard from './pages/admin/dashboard'
import ProductDetail from './pages/ProductsDetail'


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
       <li>
         <NavLink to="/admin">Admin</NavLink>
       </li>
        </ul>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/posts" element={<PostsPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/admin" element={<AdminPage/>}>
                <Route index element={<Navigate to ="/admin/dashboard"/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="products" element={<ProductsList/>}/>
            </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
