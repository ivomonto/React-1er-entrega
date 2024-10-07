import './App.css'
import Navbar from './componenets/NavBar/Navbar'
import ItemListContainer from './componenets/itemListContainer/ItemListContainer'

function App() {


  return (
    <div>
      <Navbar/>
     <ItemListContainer saludo={"contenido proximamente aqui"} />
    </div>
  )
}

export default App
