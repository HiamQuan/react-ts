import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import WebSite from './layout/WebSite'
import HomePage from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from './pages/ProductPage'
import ProductType from './type/product'
import { list,remove,read,update,create } from './api/products'
import Admin from './layout/Admin'
import Dashboard from './pages/admin/Dashboard'
import ProductIndex from './pages/admin/ProductIndex'
import PrivateRouter from './components/PrivateRouter'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { toast } from 'react-toastify'



function App() {
  const [products,setProducts] = useState<ProductType[]>([]);
  useEffect(()=>{
      const getProducts = async () =>{

          const {data} = await list();
          setProducts(data);
      }
      getProducts();
  },[]);

    // Add Product
    const onHandleAdd = async (product: any) => {
        const {data} = await create(product);
        setProducts([...products, data]);
        
      }
      const onHandleRemove = async (id: string) => {
        remove(id);
        // rerender
        setProducts(products.filter(item => item._id !== id));
        toast.success("Xóa thành công");

      }
      const onHandleUpdate = async (product: ProductType) => {
        try {
          // api
           const {data} = await update(product);
           console.log(data);
           // reREnder
           setProducts(products.map(item => item._id === data._id ? product : item))
        } catch (error) {
          
        }
      }

    
  return (
    <div className="App tw-bg-gray-100 tw-min-h-screen tw-font-sans">
        <Routes>
            <Route path="/" element={<WebSite />}>
                <Route index element={<HomePage/>}/>
                <Route path='products' element={<ProductPage products ={products}/>}/>
            </Route>
            <Route path="admin" element={<PrivateRouter><Admin products={products}/></PrivateRouter>}>
                <Route index element={<Dashboard/>}/>
                <Route path='products'>
                    <Route index element={<ProductIndex products ={products} onRemove={onHandleRemove}/>}/> 
                    <Route path="add" element = {<ProductAdd onAdd={onHandleAdd}/>}/>
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
                </Route>
            </Route>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    </div>
  )
}

export default App
