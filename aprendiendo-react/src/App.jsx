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
  var [nombre, cambiarNombre] = useState("")
  var [tareas, cambiarTareas] = useState([])

  function AlCambiar(evento) {
    var valor = evento.target.value
    cambiarNombre(valor)
  }

  function AlAgregar() {
    cambiarTareas([...tareas, nombre])
  }

  return <div>
    <p>Introduce una tarea</p>
    <input type="text" value={nombre} onChange={AlCambiar} />
    <button onClick={AlAgregar}>Agregar</button>
    { tareas.map(tarea => <p>{ tarea }</p>) }
  </div>
}

export default App