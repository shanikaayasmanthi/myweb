import React from 'react'
import Image from './background.jpeg'

export default function Background() {
  return (
    <div>
      <div className="bg" >
        <img style={{height:"700px",width:"100%"}} src={Image} alt="image" />
      </div>
    </div>
  )
}
