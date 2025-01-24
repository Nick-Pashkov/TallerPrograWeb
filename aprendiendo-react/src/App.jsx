import { useState } from "react"

/**
 * Esta funcion suma dos valores
 */
function Sumar(a, b) {
  return a + b
}
// Hola esto es un comentario
/*
Esto es comentario
de muchas lineas
*/
function App() {
  var [nombre, cambiarNombre] = useState("Fulanito")

  function AlCambiar(e) {
    var valor = e.target.value
    cambiarNombre(valor)
  }

  return <div>
    <p>Tu nombre es { nombre }</p>
    <p>Introduce tu nombre</p>
    <input type="text" value={nombre} onChange={AlCambiar} />
  </div>
}

export default App