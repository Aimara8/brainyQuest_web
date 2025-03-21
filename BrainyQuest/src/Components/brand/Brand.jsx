import React from 'react'
import './brand.css'
import Google from '../../assets/google.png'
import Shopify from '../../assets/shopify.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Slack from '../../assets/slack.png'

const Brand = () => {
  return (
    <div className='brand section__padding'>
      <div>
        <img src={Google} alt="google" />
      </div>
      <div>
        <img src={Shopify} alt="shopify" />
      </div>
      <div>
        <img src={Atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={Dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
    </div>
  )
}

export default Brand