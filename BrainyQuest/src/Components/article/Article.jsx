import React from 'react'
import './article.css'

const Article = ({imageURL, date, text}) => {
  return (
    <div className='blog-container_article'>
      <div className='blog-container_article-image'>
        <img src={imageURL} alt='article' />
      </div>
      <div className='blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
          <p>Read More</p>
        </div>
      </div>
    </div>
  )
}

export default Article