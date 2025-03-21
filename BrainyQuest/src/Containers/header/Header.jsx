import React from 'react'
import './header.css'
import world from '../../assets/world2.png'

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>BrainyQuest: La herramienta que transforma la educación en diversión</h1>
        <p>
          En BrainyQuest, fusionamos la innovación tecnológica con metodologías pedagógicas probadas para crear una plataforma educativa gamificada que revoluciona el aprendizaje. Diseñada específicamente para niños de primaria, nuestra aplicación transforma materias como matemáticas, ciencias, lenguaje y arte en experiencias interactivas y motivadoras. Con herramientas de seguimiento para padres y profesores. ¡Descubre cómo podemos ayudar a tus hijos a alcanzar su máximo potencial mientras se divierten!
        </p>

        <div className='header-content__input'>
          <input type="email" placeholder='Ingresa tu correo electrónico' />
          <button type='button'>¡Empieza la aventura!</button>
        </div>

      </div>

      <div className='header-image'>
        <img src={world} alt="Mundo" />
      </div>
    </div>
  )
}

export default Header