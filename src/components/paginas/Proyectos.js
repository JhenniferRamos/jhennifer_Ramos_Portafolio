import React from 'react'
import Card from './component/Card'

export const Proyectos = () => {
  return (
    <div><h1>Proyectos</h1>
      <Card
        image  ="./ecomerce.png" 
        title="Proyecto en Figma"
        description="Este figma es del E-COMERCE que se nos proporciono en el proyecto del curso."
        buttonText="ir al figma"

      />
    </div>
  )
}
