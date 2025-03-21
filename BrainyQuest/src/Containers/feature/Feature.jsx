import React from 'react';
import './feature.css';
import { Feature } from '../../Components';

const featuresData = [
  {
    title: 'Juegos educativos interactivos',
    text: 'Más de 100 juegos diseñados por expertos en pedagogía para que los niños aprendan matemáticas, ciencias y lenguaje mientras se divierten. ¡Cada nivel superado es un logro celebrado!'
  },
  {
    title: 'Seguimiento en tiempo real',
    text: 'Padres y docentes pueden ver el progreso de los niños en tiempo real. Informes detallados muestran fortalezas, áreas de mejora y tiempo dedicado a cada actividad.'
  },
  {
    title: 'Recompensas y motivación',
    text: 'Un sistema de recompensas con insignias y puntos mantiene a los niños motivados. ¡Cada logro los acerca a nuevos desafíos y premios!'
  },
  {
    title: 'Contenido alineado con el currículo escolar',
    text: 'Todas las actividades están diseñadas para complementar lo que los niños aprenden en la escuela, asegurando que refuercen sus conocimientos de manera efectiva.'
  }
];

const Features = () => {
  return (
    <div className='features section__padding' id='features'>
      <div className='features-heading'>
        <h1 className='gradient__text'>
          BrainyQuest: La app que revoluciona la educación
        </h1>
        <p>
          Solicita acceso anticipado
        </p>
      </div>
      <div className='features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;