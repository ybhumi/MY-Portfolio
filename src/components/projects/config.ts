import { getSkill, Skill, skills } from "../skills/config";
import Dappazon from "./../../images/dappazon.png";
import Portfolio from "./../../images/portfolio.png";
import Crowdfund from "./../../images/crowdfund.png";
import Crypto from "./../../images/crypto-tracker.png";
import Voting from "./../../images/vote.png";
import Bank from "./../../images/bank.png";
import Mobile from "./../../images/wallet.png";
import disaster from "./../../images/disaster.png";

export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Crowdfunding",
    description: "Fueling positive change through our crowdfunding app, connecting creators and supporters to make impactful campaigns a reality.",
    image: Crowdfund,
    url: "https://crowdfundingbybhumi.netlify.app/",
    github: "https://github.com/ybhumi/Crowdfunding",
    technologies: getSkill(["solidity", "react", "javascript", "css","Thirdweb","EthersJS"])
  },
  {
    name: "Portfolio",
    description: "Developer portfolio showing my Projects, skillset and Blogs.",
    image: Portfolio,
    url: "https://tijan.dev/",
    github: "https://github.com/0xTijan/portfolio",
    technologies: getSkill(["react", "javascript", "html", "css", "git", "npm"])
  },
  {
    name: "Disaster Relief",
    description: "Enabling seamless connection and support in times of disaster through a comprehensive web application, uniting relief organizations, volunteers, and victims.",
    image: disaster,
    url: "https://ybhumi.github.io/disaster-relief/",
    github: "https://github.com/ybhumi/disaster-relief",
    technologies: getSkill(["html", "javascript", "css", "Bootstrap"])
  },
  {
    name: "Dappazon",
    description: "A simple decentralized application of Amazon clone.",
    image: Dappazon,
    url: "https://github.com/ybhumi/Dappazon",
    github: "https://github.com/ybhumi/Dappazon",
    technologies: getSkill(["react", "solidity", "hardhat", "javascript","css","EthersJS"])
  },
  {
    name: "Modren bank UI/Ux",
    description: "Elevate your banking experience with our seamless and user-friendly modern UI, designed to simplify & enhance your financial journey.",
    image: Bank,
    url: "bhumi-bank-app.netlify.app",
    github: "https://github.com/ybhumi/Bank",
    technologies: getSkill(["react", "javascript", "tailwind", "html"])
  },
  {
    name: "Blockchain based Voting",
    description: "Blockchain-based voting project that enables secure and transparent elections by leveraging the immutability and decentralization of blockchain technology.",
    image: Voting,
    url: "https://github.com/ybhumi/Blockchain-voting-application",
    github: "https://github.com/ybhumi/Blockchain-voting-application",
    technologies: getSkill(["solidity", "hardhat", "react", "javascript", "css","EthersJS"])
  },
  // {
  //   name: "Crypto Tracker",
  //   description: "Users can see all statistics about top 250 cryptos and create their own personal portfolio.",
  //   image: Crypto,
  //   url: "https://projects.tijan.dev/crypto-tracker",
  //   github: "https://github.com/0xTijan/crypto-tracker",
  //   technologies: getSkill(["react", "javascript", "moralis", "css", "html", "git", "npm"])
  // },
  // {
  //   name: "Mobile Wallet",
  //   description: "Shows on-chain stats off user's address. User can add personal contacts for easy assets transfer.",
  //   image: Mobile,
  //   url: "",
  //   github: "https://github.com/0xTijan/mobile-wallet",
  //   technologies: getSkill(["react native", "javascript", "moralis", "css", "npm"])
  // },
];