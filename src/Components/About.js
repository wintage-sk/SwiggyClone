import React, { Component } from "react"
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";


import UserClass from "./UserClass";

const About=()=>{ 
return (
             <div className=" flex justify-around  p-4 m-8 mb-8 mob:flex-col bg-red-400">
                <div className="card-container   mob:w-auto">
          <div className="flex flex-col justify-evenly items-center mt-8 gap-10"> 
        <div>
          <img className="rounded-full w-[250px] h-[250px] border-none align-middle" src="https://i.ibb.co/pRC0N7W/PROFILE.jpg" alt="Satheesh" />
          
        </div>
        
          <h1 className=" font-bold ">SatheeshKumar</h1>
        <div className="flex flex-col justify-center items-center  ">
          <p className=" text-center text-base text-bio mb-4 ">I'm an online TUtor, turned into a Frontend Web Developer

It all started this year and  when I developed a passion for coding. I've learnt JavaScript, ReactJs, Tailwind, HTML and Java during this time. Passionate about learning and development and eager to tackle more complex problems.</p>
         
          <div className="social-media-div text-[2em] text-center w-full  flex items-center justify-center gap-10">
        <a href="https://github.com/wintage-sk" className="mb-2.5" target="_blank">
          <i className="bg-github icon--i">
            <SiGithub className="m-auto" />
          </i>
        </a>
        <a href="www.linkedin.com/in/
satheeshkumar-skd"
 className="mb-2.5" target="_blank">
          <i className="bg-linkedin icon--i">
            <SiLinkedin className="m-auto" />
          </i>
        </a>
        <a href="mailto:satheeshias212@gmail.com" className="mb-2.5">
          <i className="bg-google icon--i">
            <SiGoogle className="m-auto" />
          </i>{" "}
        </a>
      </div>
      </div>
        </div>
        </div>
        </div>

    );}
export default About;