import React from 'react'
import "./App.css"
import { Route, Routes,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Add from './pages/Add'
import Edit from './pages/Edit'
import HomePage from './pages/HomePage'
import Index from './pages/Index'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ProductType from './pages/Type'
import Layout from './pages/Layout'
import PrivateRouter from './pages/PrivateRouter'



type Input={
  name:string,
  desc: string,
  img: string,
  price: number
}

const App = () => {
  const [products,setProducts] = useState<ProductType[]>([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getProduct = async () =>{

      const {data} = await axios.get("http://localhost:3002/products");

      setProducts(data);
    }
    getProduct();
    
  },[])

  const onHandleRemove = async(id:string)=>{
   const confirm =  window.confirm("Bạn có muốn xóa ko?")
    if(confirm){
      await axios.delete("http://localhost:3002/products/"+id);
      setProducts(products.filter(data=>data.id!== id))
      alert("Xóa thành công");
    }
  }

  const onHandleAdd = async (newProducts:Input)=>{
   const {data} = await axios.post("http://localhost:3002/products",newProducts);
   console.log(data);
    setProducts([...products,data]);
    navigate("/products");
  }

  const onHandleUpdate = async (newProducts:Input,id:string)=>{
    const {data} = await axios.patch("http://localhost:3002/products/"+id,newProducts);
    console.log(data);
     setProducts(products.map( item => item.id === data.id ? data : item ));
     navigate("/products");
     alert("Sửa thành công")
   }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path="products" element={<PrivateRouter><Index products={products} onRemove={onHandleRemove}/></PrivateRouter>}/>
          <Route path="/products/:id/edit" element={<Edit onEdit={onHandleUpdate}/>}/>
          <Route path = "/products/add" element={<Add onAdd={onHandleAdd}/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>   
      </Routes>
    </div>
  )
}

export default App