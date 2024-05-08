import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const pictures = [
    "images/107_1318.JPEG",
    "images/DSCF0001.JPEG",
    "images/DSCF0035.JPEG",
    "images/DSCF0038.JPEG",
    "images/DSCF0279.JPEG",
    "images/IMG_3006.JPEG",
    "images/IMG_3007.JPEG",
    "images/IMG_3038.JPEG",
    "images/IMG_3081.JPEG",
    "images/IMG_3176.JPEG",
    "images/IMG_3182.JPEG",
  ]
  return (
    <main className='portfolio-page'>
      <h1>My Portfolio</h1>
      <div className="pictures">
        {pictures.map((pic) => <img src={""+pic} alt="life on set" className='pic'/>)}
      </div>
    </main>
  )
}
