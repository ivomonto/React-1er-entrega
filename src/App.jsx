import './App.css'
import Navbar from './componenets/NavBar/Navbar'
import ItemListContainer from './componenets/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componenets/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
