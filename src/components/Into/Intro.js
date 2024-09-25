import React from 'react'
import './Intro.css'
import suraj from '../../assets/suraj.png'
export default function Intro() {
    return (
        <>
            <section id='intro'>
                <div className="intro-content ">
                    <span className="s1">Hello,</span>
                    <span >I'm <span id='span-color'>Suraj</span></span>
                    <span >Full Stack Developer</span>
                    <span className='s4'>
                        love code and love code
                    </span>
                    <button className="btn btn-outline-light ms-1 mt-2">
                        <i class="fa-solid fa-briefcase fa-beat-fade btn-sm me-2"></i>Hire me
                    </button>
                </div>
                <img src={suraj} alt="suraj" className='intro-img' />
            </section>
        </>
    )
}
