
import {useState} from 'react' 
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
        />
        <ListadoPacientes />
      </div>
    </div>
  )
}  //se imprime en pantalla a menos que lo ponga entre {} lo va a tratar como JS
//condicionales solo con ternarios

export default App 