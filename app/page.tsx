import { NavBar } from "@/sections/navbar/navbar";
import styles from "./page.module.css";
import HeroSection from "@/sections/hero";
import Spotlight from "@/sections/spotlight/spotlight";
import MoreSection from "@/sections/more/more";
import Footer from "@/sections/footer";
import Gap from "@/components/gap";
import { CardProps } from "@/components/cards/highlightCard";

const projects: CardProps[] = [
  {
    title: "Aave",
    description:
      "Aave is an open source and non-custodial protocol to earn interest on deposits and borrow assets.",
    image: "/hero.png",
    category: "LENDING",
    links: {
      site: "https://aave.com/",
      twitter: "https://twitter.com/AaveAave",
      github: "",
    },
  },
  {
    title: "Uniswap",
    description:
      "Uniswap is a protocol for automated token exchange on Ethereum.",
    image: "/hero.png",
    category: "DEX",
    links: {
      site: "https://uniswap.org/",
      twitter: "https://twitter.com/Uniswap",
      github: "",
    },
  },
  {
    title: "Rarible",
    description:
      "Create, sell or collect digital items secured with blockchain.",
    image: "/hero.png",
    category: "NFT",
    links: {
      site: "https://rarible.com/",
      twitter: "https://twitter.com/rariblecom",
      github: "",
    },
  },
  {
    title: "Compound",
    description:
      "Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.",
    image: "/hero.png",
    category: "LENDING",
    links: {
      site: "https://compound.finance/",
      twitter: "https://twitter.com/compoundfinance",
      github: "",
    },
  },
  {
    title: "SushiSwap",
    description:
      "SushiSwap is an automated market-making (AMM) decentralized exchange (DEX) currently on the Ethereum blockchain.",
    image: "/hero.png",
    category: "DEX",
    links: {
      site: "https://sushi.com/",
      twitter: "https://twitter.com/SushiSwap",
      github: "",
    },
  },
  {
    title: "OpenSea",
    description:
      "OpenSea is the first and largest marketplace for user-owned digital goods, which include collectibles, gaming items, domain names, digital art, and other assets backed by a blockchain.",
    image: "/hero.png",
    category: "NFT",
    links: {
      site: "https://opensea.io/",
      twitter: "https://twitter.com/opensea",
      github: "",
    },
  },
  {
    title: "Balancer",
    description: "Balancer is a n-dimensional automated portfolio manager.",
    image: "/hero.png",
    category: "DEX",
    links: {
      site: "https://balancer.finance/",
      twitter: "https://twitter.com/BalancerLabs",
      github: "",
    },
  },
  {
    title: "Maker",
    description:
      "Maker is a decentralized autonomous organization on the Ethereum blockchain seeking to minimize the price volatility of its own stable token — the Dai — against the U.S. Dollar.",
    image: "/hero.png",
    category: "LENDING",
    links: {
      site: "https://makerdao.com/",
      twitter: "https://twitter.com/MakerDAO",
      github: "",
    },
  },
  {
    title: "Axie Infinity",
    description:
      "Axie Infinity is a Pokémon-inspired universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem.",
    image: "/hero.png",
    category: "NFT",
    links: {
      site: "https://axieinfinity.com/",
      twitter: "https://twitter.com/AxieInfinity",
      github: "",
    },
  },
  {
    title: "Yearn Finance",
    description:
      "Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain.",
    image: "/hero.png",
    category: "LENDING",
    links: {
      site: "https://yearn.finance/",
      twitter: "https://twitter.com/iearnfinance",
      github: "",
    },
  },
  {
    title: "Chainlink",
    description:
      "Chainlink is a decentralized oracle network that enables smart contracts to securely access off-chain data feeds, web APIs, and traditional bank payments.",
    image: "/hero.png",
    category: "LENDING",
    links: {
      site: "https://chain.link/",
      twitter: "https://twitter.com/chainlink",
      github: "",
    },
  },
  {
    title: "Synthetix",
    description:
      "Synthetix is a decentralized synthetic asset issuance protocol built on Ethereum.",
    image: "/hero.png",
    category: "LENDING",
    links: {
      site: "https://www.synthetix.io/",
      twitter: "https://twitter.com/synthetix_io",
      github: "",
    },
  },
  {
    title: "NFTX",
    description:
      "NFTX is a platform for making ERC-20 tokens that are backed by NFT collectibles.",
    image: "/hero.png",
    category: "NFT",
    links: {
      site: "https://nftx.io/",
      twitter: "https://twitter.com/NFTX_",
      github: "",
    },
  },
  {
    title: "Avalanche",
    description:
      "Avalanche is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem.",
    image: "/hero.png",
    category: "DEX",
    links: {
      site: "https://www.avalabs.org/",
      twitter: "https://twitter.com/avalancheavax",
      github: "",
    },
  },
];
export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        <HeroSection />
        <Gap height={100} />
        <Spotlight />

        <MoreSection items={projects} />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
