import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, HStack, Heading, Text, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { hackathons, Hackathon } from "./config";
import { AiFillGithub } from "react-icons/ai";
import { Skill } from "../skills/config";
import "./Hackathons.css";

const Hackathons = () => {
  return(
    <div className="bg-hackathons">
      <p className="heading" >Blogs</p>
      <p className="text">I simplify complex technologies through my blog, using simple language to help you understand the emerging innovations</p>
      <div className="hackathons-grid">
        {hackathons.map((hackathon: Hackathon) => {
          return(
            <div key={uuidv4()} className="hackathon">
              <img src={hackathon.image} alt="Hackathon Image" />
              <div className="hackathon-info">
                <a href={hackathon.hackathonUrl} target="_blank" rel="noreferrer" className="hack-link">
                  <Heading as='h5' size='lg'>
                    {hackathon.name}
                  </Heading>
                </a>
                <Text fontSize='xl'>
                  {hackathon.description}
                </Text>
                {/* <Text fontSize='xl' style={{ marginTop: "3px" }}>
                  Project: <b>{hackathon.project}</b>
                </Text> */}
                {/* <div className="hackathon-tags">
                  {hackathon.prizes.map((tech: {name: string}) => {
                    return(
                      <Tag key={uuidv4()} size='lg' colorScheme='cyan' borderRadius='full' className="tech-tag">
                        <Avatar
                          size='xs'
                          name={tech.name}
                          ml={-1}
                          mr={2}
                        />
                        <TagLabel>{tech.name}</TagLabel>
                      </Tag>
                    );
                  })}
                </div> */}
                <HStack>
                 
                  {hackathon.url.length>0 ? (
                      
                    <a href={hackathon.url} target="_blank" rel="noreferrer">
                      
                      <br/>
                        
                      <Button size='lg' colorScheme='blue' variant='outline'>Read</Button>
                    </a>
                  ):null}
                </HStack>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hackathons;