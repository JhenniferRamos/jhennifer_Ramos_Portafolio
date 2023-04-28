import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import UseEffect from '../../hooks/UseEffect';
export const Acercademi = () => {
  return (
    <div><h1>Descripción personal</h1>
    <p>Soy una persona traquila que aspira siempre a salir adelante, soy muy comprometida con mis estudios
      siempre trato de mejorar lo aprendido, tengo cualidades y valores al igual que defectos.
    </p>
    <p>Me gusta mucho practicar deportes, soy introvertida </p>
   <UseEffect></UseEffect>
   <div>
    <br></br>
    <h3>Clic para ver mis redes sociales</h3>
    <br></br>
   <Link to='https://api.whatsapp.com/send?phone=%2B59178720656&text=habla+comigo'>
      <img src='./whatsapp.png' width={50}></img>
    </Link>
    
    <Link to='https://www.facebook.com/danajhennifer.ramostinca' >
      <img src='./face.png' width={50} ></img>
    </Link>
    <Link to='https://instagram.com/mayerly_72?igshid=ZDdkNTZiNTM='>
      <img src='./instagran.png' width={50}></img>
    </Link>

   </div>
   
    </div>
  )
}
