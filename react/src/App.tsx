import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebSite from './layout/WebSite'
import HomePage from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
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
      const onHandleRemove = async (id: number) => {
        remove(id);
        // rerender
        setProducts(products.filter(item => item.id !== id));
      }
      const onHandleUpdate = async (product: ProductType) => {
        try {
          // api
           const {data} = await update(product);
           // reREnder - 
           // Tạo ra 1 vòng lặp, nếu item.id == id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
           setProducts(products.map(item => item.id === data.id ? product : item))
        } catch (error) {
          
        }
      }

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<WebSite/>}>
                <Route index element={<HomePage products={products}/>}/>
                <Route path='products' element={<ProductPage products ={products}/>}/>
            </Route>
            <Route path="admin" element={<PrivateRouter><Admin/></PrivateRouter>}>
                <Route index element={<Dashboard/>}/>
                <Route path='products'>
                    <Route index element={<ProductIndex products ={products} onRemove={onHandleRemove}/>}/> 
                    <Route path="add" element = {<ProductAdd onAdd={onHandleAdd}/>}/>
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
                </Route>
            </Route>
            <Route path="/signin" element={<Signin />}/>
        </Routes>
    </div>
  )
}

export default App
