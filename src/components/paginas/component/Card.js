import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props)=> {
  return (
    <div className="card" >
      <img src={props.image} alt={props.title} width={400} />
      <h2><lef>{props.title}</lef></h2>
      <p>{props.description}</p>
      
      <Link to= 'https://www.figma.com/file/iruYBnsBVdqsxYGRc7N1aa/proyecto_E-COMERCE_Jhennifer_Ramos?node-id=0%3A1&t=3qNxS8VyVBc5n3uO-1'>
      <button >{props.buttonText}
      </button>
      </Link>
      
    </div>
  );
}

export default Card;
