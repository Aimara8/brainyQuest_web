import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='features-container__feature'>
      <div className='features-container__feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature