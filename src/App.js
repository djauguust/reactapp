import './App.css';
import { useState } from 'react';

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const mostrarInformacion = () => {
    alert(`Nombre: ${nombre}. Apellido: ${apellido}`)
  }

  return (
    <div className="App">
      
        <div>
          
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" onChange={ event => setNombre(event.target.value) } />
        </div>
        <div>
          
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" id="apellido" onChange={ event => setApellido(event.target.value) }/>
      </div>
      <div>
          
            <label htmlFor="contraseña">Contraseña</label>
            <input type="text" name="contraseña" id="contraseña" />
        </div>

<button onClick={mostrarInformacion}> Mostrar Información </button>

    </div>
  );
}

export default App;
