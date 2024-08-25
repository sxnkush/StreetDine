import './App.css'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './layout'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import Dessert from './components/Dessert'
import { CartProvider } from './contexts/Cart'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const addItem = (item) => {
    
    
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(prevItem => prevItem.id === item.id);
      if (itemIndex !== -1) {
          return prevCart.map((prevItem, index) => 
              index === itemIndex
                  ? { ...prevItem, quantity: (prevItem.quantity) + 1 }
                  : prevItem
          );
      } else {
          return [...prevCart, { ...item, quantity: 1}];
      }
  });


    setSubTotal((prevval)=> prevval + parseInt(item.price.replace(/\D/g, '')))
    setTotalItems((prevval)=> prevval + item.quantity)
  }

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart)) 
  },[cart])

  const removeItem = (item) => {
    setCart((val) => {
      const itemExists = val.find(prevItem => prevItem.id === item.id);
  
      if (itemExists) {
          return val.map(prevItem => 
              prevItem.id === item.id
                  ? { ...prevItem, quantity: Math.max(prevItem.quantity - 1, 0) }
                  : prevItem
          );
      } else {
          return val;
      }
    })
    
    cart.map((cartitems)=> cartitems.id === item.id? 
    (cartitems.quantity>0?setSubTotal((prevval)=> Math.max(prevval - parseInt(item.price.replace(/\D/g, '')),0)):null):null)

    cart.map((cartitems)=> cartitems.id === item.id? 
    (cartitems.quantity>0?  setTotalItems((prevval)=> Math.max(prevval - item.quantity,0))
    :null):null)
  
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index element={<Navigate to="dashboard/breakfast" replace />} />
          <Route path='dashboard/breakfast' element={<Breakfast/>}/>
          <Route path='dashboard/lunch' element={<Lunch/>}/>
          <Route path='dashboard/dinner' element={<Dinner/>}/>
          <Route path='dashboard/dessert' element={<Dessert/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <CartProvider value={{addItem,removeItem, cart, subTotal, totalItems}}>
    <RouterProvider router={router}/>
    </CartProvider>
  )
}

export default App
