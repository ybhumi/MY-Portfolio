import React from "react";
import { Heading } from "@chakra-ui/react";
import { skills, Skill } from "./config";
import { v4 as uuidv4 } from "uuid";
import "./Skills.css";

const Skills = () => {
  return(
    
    <div className="bg-skills">
      <br/>
      <br/>
      
      <p className="heading">My Skills</p>
      <p className="text">Technologies I use in my development:</p>
      <div className="skill-icons-gird">
        {skills.map((skill: Skill) => {
          return(
            <a key={uuidv4()} href={skill.url} target="_blank" rel="noreferrer">
              <div className="skill">
                <img src={skill.img} alt="Skill logo image" />
              </div>
              <p>{skill.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;