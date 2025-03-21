import React from 'react'
import './what.css'
import Feature from '../../Components/feature/Feature'

const What = () => {
  return (
    <div className='what section__margin' id='what'>
      <div className='what-feature'>
        <Feature
          title={"Una plataforma educativa innovadora"}
          text={"BrainyQuest combina aprendizaje y diversión a través de la gamificación, ofreciendo a los niños de primaria una forma interactiva y motivadora de aprender matemáticas, ciencias, lenguaje y arte."}
        />
      </div>
      <div className='what-heading'>
        <h1 className='gradient__text'>Qué es BrainyQuest?</h1>
        <p>Explorar Blog</p>
      </div>
      <div className='what-container'>
        <Feature
          title={"Una solución integral"}
          text={"BrainyQuest ofrece una plataforma educativa que combina diversión y aprendizaje, ayudando a los niños a alcanzar su máximo potencial."}
        />
        <Feature
          title={"Aprendizaje personalizado y efectivo"}
          text={"Nuestra plataforma se adapta al ritmo de cada estudiante, utilizando juegos interactivos y seguimiento en tiempo real para garantizar un progreso constante y medible."}
        />
        <Feature
          title={"Complemento perfecto para el aula"}
          text={"BrainyQuest se integra fácilmente en la educación tradicional, ofreciendo actividades adicionales que refuerzan lo aprendido en clase."}
        />
      </div>
    </div>
  )
}

export default What