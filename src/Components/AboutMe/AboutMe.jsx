import React from 'react';
import './AboutMe.css';
import BG from "../../assets/about-Heading.svg";
import Contact from './Contact';
export default function AboutMe() {
  return (
    <main className='about-page'>
        <h1>About Me</h1>
        <div className="about-container">
           <img src={BG} alt="" className='bg'/>
            <img src="%PUBLIC_URL%/images/portrait.jpeg" alt="portrait" className='portrait'/>
        </div>
        <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <Contact/>
    </main>
  )
}
