import React from 'react';
import { Article } from '../../Components';
import blog01 from '../../assets/blog01.jpg';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.jpg';
import blog04 from '../../assets/blog04.jpg';
import blog05 from '../../assets/blog05.webp';
import './blog.css';

const Blog = () => {
  return (
    <div className='blog section__padding' id="blog">
      <div className='blog-heading'>
        <h1 className='gradient__text'>Explora el futuro de la educación con BrainyQuest</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container_groupA'>
          <Article imageURL={blog02} date="15 de octubre, 2023" text="Cómo la gamificación está revolucionando la educación primaria" />
        </div>
        <div className='blog-container_groupB'>
          <Article imageURL={blog01} date="10 de octubre, 2023" text="5 razones por las que los niños aprenden mejor jugando" />
          <Article imageURL={blog05} date="5 de octubre, 2023" text="Tecnología en el aula: El futuro de la educación" />
          <Article imageURL={blog04} date="1 de octubre, 2023" text="Consejos para padres: Cómo apoyar el aprendizaje en casa" />
          <Article imageURL={blog03} date="25 de septiembre, 2023" text="BrainyQuest: La herramienta que todos necesitan" />
        </div>
      </div>
    </div>
  );
};

export default Blog;