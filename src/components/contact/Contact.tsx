import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "bhumiy15@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:bhumiy15@gmail.com",
  },
  {
    name: "TWITTER:",
    info: "@WhyBhumii",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/WhyBhumii",
  },
  // {
  //   name: "TELEGRAM:",
  //   info: "@TijanWeb3",
  //   icon: <BsTelegram className="contact-icon" />,
  //   url: "https://t.me/TijanWeb3",
  // },
  {
    name: "LINKDIN:",
    info: "Bhumi Y",
    icon: <FaLinkedin className="contact-icon" />,
    url: "https://www.linkedin.com/in/bhumi-y-4a907320b/",
  },
  {
    name: "GitHub:",
    info: "@ybhumi",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/ybhumi",
  },
  // {
  //   name: "LOCATION & ZONE:",
  //   info: "Slovenia, UTC+1",
  //   icon: <IoLocationOutline className="contact-icon" />,
  //   url: "https://www.timeanddate.com/time/zone/slovenia",
  // },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contact Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* <div className="button-container">
        <a href="mailto:contactme@tijan.dev">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div> */}
    </div>
  );
};

export default Contact;