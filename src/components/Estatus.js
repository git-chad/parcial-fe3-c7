import React from 'react'
import Post from './Post'

// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

function Estatus() {
  
  return (
    <header>
        <h1>Status de Posteos</h1>
        <p>Likes Totales: </p>
        <span></span>
    </header>
  )
}

export default Estatus
