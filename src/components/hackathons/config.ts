import NFT from "./../../images/NFT.jpg";
import Google from "./../../images/moralis-google.png";
import Blockchain from "./../../images/blockchain.png";

export type Hackathon = {
  name: string,
  hackathonUrl: string,
  description: string,
  image: any,
  url: string,
  // project: string,
  // prizes: { name: string }[],
}

export const hackathons: Hackathon[] = [
  {
    name: "Unlocking the world of NFT",
    hackathonUrl: "https://bhumiy.hashnode.dev/unlocking-the-world-of-nft-a-comprehensive-guide-to-everything-you-need-to-know-to-get-started",
    description: " A comprehensive guide to everything you need to know to get started",
    image: NFT,
    url: "https://bhumiy.hashnode.dev/unlocking-the-world-of-nft-a-comprehensive-guide-to-everything-you-need-to-know-to-get-started"
    // project: "Cardix",
    // prizes: [{name: "Chainlink Cloning Web2"}, {name: "XMTP - most innovative"}, {name: "Polygon Prize Pool"}, {name: "Ledger Nano S Plus"}]
  },
  {
    name: "Demystifying Blockchain",
    hackathonUrl: "https://bhumiy.hashnode.dev/demystifying-blockchain-an-introduction-to-the-revolutionary-technology",
    description: "An Introduction to the Revolutionary Technology.",
    image: Blockchain,
    url: "https://bhumiy.hashnode.dev/demystifying-blockchain-an-introduction-to-the-revolutionary-technology",
    // project: "BananaPay",
    // prizes: [{name: "BNB - Traditional Finance #1"}, {name: "Fantom - DeFi++ #2"}, {name: "Polygon Prize Pool"}]
  },
  // {
  //   name: "Chainlink Fall 2022",
  //   hackathonUrl: "https://chainlinkfall2022.devpost.com/",
  //   description: "The most customizable solution for receiving automated recurring payments in cryptocurrencies.",
  //   image: Chainlink,
  //   url: "https://bananapay.tijan.dev/",
  //   project: "BananaPay",
  //   prizes: [{name: "Polygon Prize Pool"}]
  // },
];