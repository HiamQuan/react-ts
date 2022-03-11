import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/box'


function App() {
  const [count, setCount] = useState(0)
  const [color,setColor]= useState("green");
  const [myStatus,setStatus] = useState("true");
  const [myProducts, setProducts] = useState([{id: 1,name: "san pham A", price: 200},{id: 2,name: "san pham B", price: 200}]);

const removeItem = (id) =>{
 const newProducts= myProducts.filter(item => item.id!==id)
 setProducts(newProducts);
}

 


  return (
    <div className="App">
      Number:   {count}<br/>
      String:   <Box color={color}/>
      Boolean:  {myStatus ? "Single":"Not Single"}
      {myStatus && <div>
          Arr: {myProducts.map(item => <div>
            {item.name}
            <button onClick = {()=> removeItem(item.id)}>Delete</button></div>)}
        </div>}
        <br/>
        Number: {count} <br/>
        <button onClick={()=>  setCount(count+1)}>Click count</button>
        <button onClick={() => setStatus(!myStatus)}>Click Status</button>
    </div>
  )
}

export default App
