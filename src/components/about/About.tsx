import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight, AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import avatar from "./../../images/anoki.jpg";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    const width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  };

  const getAlertSize = () => {
    const width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  };
 
  

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h5" size={getAlertSize()}>
            💻{"   "}<a href="mailto:bhumiy15@gmail.com" className="contact-link">Hire Me!</a>
            <span className="follow-me-link"><a href="https://twitter.com/WhyBhumii" className="contact-link">Follow Me!</a></span>
          </Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      );
    }else{
      return null;
    }
  };

  return(
    <>
      <Alert />
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title">
              <Heading as='h1' fontSize='60px'>
                Hi! 👋
              </Heading>
              <Heading as='h1' fontSize='60px'>
                I&apos;m <span className="name">Bhumi</span>
              </Heading>
            </div>
            <div className="about-text-desc">
              <Text fontSize='xl' fontWeight={600}>I am a passionate <span className="name">FRONTEND & BLOCKCHAIN DEVELOPER, </span>currently in my final year of B.Tech degree in Computer Science and Information Technology.
              With a deep understanding of blockchain technology and its potential, I create dApps that offer secure, transparent, and efficient solutions for various industries. Through my expertise in frontend development and integration with smart contracts, I strive to revolutionize the way we interact with digital platforms.</Text>
            </div>

            <div className="icons">
              <a href="https://github.com/ybhumi" target="_blank" rel="noreferrer">
                <AiFillGithub className="icon" />
              </a>
              <a href="https://twitter.com/WhyBhumii" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/bhumi-y-4a907320b/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
            <br/>
            <br/>

            <a href="mailto:bhumiy15@gmail.com">
              <Button size='lg' color="black" backgroundColor={"#84b9ff"} rightIcon={<AiOutlineArrowRight />} variant='solid'>
                Contact Me
              </Button>
            </a>

            <a href="https://drive.google.com/file/d/1hJTiBd2CpKm1adbEQDtth36Qna_JIl0-/view?usp=sharing">
              <Button className="resume" size='lg' color="black" backgroundColor={"#84b9ff"} rightIcon={<AiOutlineArrowRight />} variant='solid'>
                Resume
              </Button>
            </a>
          </div>
          <div className="about-avatar">
            <img src={avatar} className="avatar" alt="Bhumi picture" />
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="bottom-icon">
            <BsChevronDown />
            
      
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About;