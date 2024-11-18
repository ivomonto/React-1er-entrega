import './App.css'
import Navbar from './componenets/NavBar/Navbar'
import ItemListContainer from './componenets/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componenets/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './componenets/context/cartContext.jsx'
import CartPage from './componenets/cart/CartPage.jsx';
function App() {


  return (
    <CartProvider>

      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>

     </CartProvider>
    
  )
}

export default App
