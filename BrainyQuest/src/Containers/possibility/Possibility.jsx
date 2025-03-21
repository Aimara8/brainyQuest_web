import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='possibility section__padding' id='possibility'>
      <div className='possibility-image'>
        <img src={PossibilityImage} alt="Imagen" />
      </div>
      <div className='possibility-content'>
        <h4>Innovación educativa para el futuro</h4>
        <h1 className='gradient__text'>Sobre Nosotros</h1>
        <p>
            En BrainyQuest, creemos que el aprendizaje debe ser una experiencia divertida, motivadora y accesible para todos. Nuestra misión es transformar la educación tradicional a través de la gamificación, ofreciendo a los niños de primaria una plataforma interactiva que combina matemáticas, ciencias, lenguaje y arte con juegos educativos. Nos apasiona crear herramientas que no solo mejoren el rendimiento académico, sino que también inspiren a los niños a amar el aprendizaje.
        </p>
        <h4>Únete a la revolución educativa</h4>
      </div>
    </div>
  );
};

export default Possibility;