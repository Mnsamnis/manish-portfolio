import React, { useState }  from 'react'
import Java from '../img/java.png'
import Html from '../img/html.png'
import Css from '../img/css.png'
import Spring from '../img/spring.jpg'
import Springboot from '../img/spring-boot.png'
import Hibernate from '../img/hibernate.png'
import Javascript from '../img/javascript.png'
import Git from '../img/git.jpg'
import Jenkins from '../img/jenkins.png'
import ReactJs from '../img/react.svg'
import Bitbucket from '../img/bitbucket.png'
import MySql from '../img/mysql.png'
import PostgreSQL from '../img/postgresql.png'


const Skills = () => {


 
   const [skills, setSkills] = useState([
      {
        id: 1,
        imgUrl: Java,
        name: "JAVA",
      },
      {id:2,
         imgUrl:Spring,
         name:"SPRING"
      },
      {
         id:3,
         imgUrl:Springboot,
         name:"SPRINGBOOT"
      },
      {
         id:4,
         imgUrl:Hibernate,
         name:"Hibernate"
      },
      {
         id:5,
         imgUrl:MySql,
         name:"MySql"
      },
      {
         id:13,
         imgUrl:PostgreSQL,
         name:"PostgreSQL"
      },

      {
         id:6,
         imgUrl:Html,
         name:"Html"
      },
      {
         id:7,
         imgUrl:Css,
         name:"Css"
      },
      {
         id:8,
         imgUrl:Javascript,
         name:"javascript"
      },
      {
         id:9,
         imgUrl:ReactJs,
         name:"React"
      },
      {
         id:10,
         imgUrl:Git,
         name:"Git"
      },
      {
         id:11,
         imgUrl:Bitbucket,
         name:"Bitbucket"
      },
      {
         id:12,
         imgUrl:Jenkins,
         name:"Jenkins"
      },

   ])
  return (
   <div id="skills" className=" w-full lg:h-screen p-2">
   <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
     <h2 className="text-center text-[#805d45] pb-16 text-5xl underline font-bold">
       Skills
     </h2>
   
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
     {skills.map((skill) => (
           <div className="p-6 bg-[#faf4eb] shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                 <div className="m-auto">
                   <img src={skill.imgUrl} className="w-16 h-16 object-cover" alt="/" />
                 </div>
                 <div className="flex flex-col items-center justify-center">
                   <h3 className='uppercase'>{skill.name}</h3>
                 </div>
               </div>
             </div>
          ))}
     </div>
   </div>
 </div>
  )
}

export default Skills
