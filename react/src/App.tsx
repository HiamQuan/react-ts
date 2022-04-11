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
import { list,remove,read,update,create, search } from './api/products'
import { listUser,removeUser,readUser,updateUser,createUser } from './api/user'
import Admin from './layout/Admin'
import Dashboard from './pages/admin/Dashboard'
import ProductIndex from './pages/admin/ProductIndex'
import PrivateRouter from './components/PrivateRouter'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { toast } from 'react-toastify'
import ProductDetail from './pages/ProductDetail'
import UserIndex from './pages/admin/UserIndex'
import UserType from './type/user'
import UserEdit from './pages/admin/UserEdit'
import UserAdd from './pages/admin/UserAdd'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { isAuthenticate } from './utils/localStorage'
import { createOrder } from './api/order'
import Inbox from './pages/admin/Inbox'
import { io } from 'socket.io-client'



function App() {
  const [products,setProducts] = useState<ProductType[]>([]);
  const [users,setUser] = useState<UserType[]>([]);
  const currentCart = JSON.parse(localStorage.getItem("order"));
  const [socket,setSocket] = useState(io("http://localhost:3002"));
  const user = isAuthenticate();

  useEffect(()=>{
    console.log(socket)
    socket.emit("newUser",user?.name)
  },[])

  useEffect(()=>{
      const getProducts = async () =>{
          const {data} = await list();
          setProducts(data);
      }
      getProducts();

      const getUsers = async () => {
        const {data} = await listUser();
        setUser(data);
      }

      getUsers();
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
           // reREnder
           setProducts(products.map(item => item._id === data._id ? product : item))
        } catch (error) {
          
        }
      }


      // Add User
    const onUserAdd = async (users: any) => {
      const {data} = await createUser(users);
      setUser([...users, data]);
      
    }
    const onUserRemove = async (id: string) => {
      removeUser(id);
      // rerender
      setUser(users.filter(item => item._id !== id));
      toast.success("Xóa thành công");

    }
    const onUserUpdate = async (user: UserType) => {
      try {
        // api
         const {data} = await updateUser(user);
         // reREnder
         setUser(users.map(item => item._id === data._id ? user : item))
      } catch (error) {
        
      }
    }
    const [stateCart,setCart] = useState([]);
    // Order cart
    let cart = [];
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
    };

     const addCart = (newOrder, next) => {
      
      const existProduct = cart.find(item => item?.productId === newOrder.productId);
  
      if(!existProduct){
        cart.push(newOrder);
          localStorage.setItem('cart', JSON.stringify(cart))
      }
      next();
  }
  
  
    
  return (
    <div className="App tw-bg-gray-100 tw-min-h-screen tw-font-sans">
        <Routes>
            <Route path="/" element={<WebSite />}>
                <Route index element={<HomePage/>}/>
                <Route path='products' element={<ProductPage/>}/>
                <Route path='products/:id' element={<ProductDetail addToCart={addCart}/>} />
            </Route>
            <Route path="admin" element={<PrivateRouter><Admin socket={socket} products={products}/></PrivateRouter>}>
                <Route index element={<Dashboard/>}/>
                <Route path='products'>
                    <Route index element={<ProductIndex products ={products} onRemove={onHandleRemove}/>}/> 
                    <Route path="add" element = {<ProductAdd onAdd={onHandleAdd}/>}/>
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
                </Route>
                <Route path="inbox" element={<Inbox/>} />
                <Route path='users'>
                    <Route index element={<UserIndex products={users} onRemove={onUserRemove}/>}/> 
                    <Route path="add" element = {<UserAdd  onAdd={onUserAdd}/>}/>
                    <Route path=":id/edit" element={<UserEdit onUpdate={onUserUpdate}/>} />
                </Route>
            </Route>
            <Route path="cart" element={<Cart socket = { socket } user={user}/>}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    </div>
  )
}

export default App
