import type { StaticImageData } from "next/image";

type Project = {
  title: string;
  description: string;
  year: number;
  imageUrl: string | StaticImageData;
  github?: string;
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Rede Integra Saúde",
    description: "Platform for finding and selling the services of health professionals.",
    year: 2024,
    imageUrl: "/assets/images/projects/integra.png",
    link: "https://redeintegrasaude.com.br/",
  },
  {
    title: "Link Shortener",
    description: "A simple link shortener made with Next.js, Tailwind CSS and DynamoDB.",
    year: 2023,
    imageUrl: "/assets/images/projects/shortener.png",
    github: "https://github.com/Lucas-Cortez/link-shortener",
  },
  {
    title: "Web Trader",
    description:
      "A plataform to trade cryptocurrencies based in technical analysis, with a simple and easy to use interface.",
    year: 2023,
    imageUrl: "/assets/images/projects/trader.png",
    github: "https://github.com/Lucas-Cortez/web_trader_frontend",
  },
  {
    title: "OTC Brasil 2023",
    description: "Mobile app made specifically for an international event, to help people locate themselves.",
    year: 2023,
    imageUrl: "/assets/images/projects/otc.png",
    link: "https://play.google.com/store/apps/details?id=com.ibp.otc",
  },
  {
    title: "Shell Memory Game",
    description: "An offline memory game made for an event where people could win prizes.",
    year: 2023,
    imageUrl: "/assets/images/projects/shell.png",
  },
  {
    title: "Forbes Under 30",
    description: 'Platform responsible for handling candidate registrations for the "Forbes Under 30" event.',
    year: 2023,
    imageUrl: "/assets/images/projects/forbes.png",
    link: "https://forbes.com.br/under30",
  },
  {
    title: "Instacarro",
    description: "An auction platform for used cars.",
    year: 2022,
    imageUrl: "/assets/images/projects/instacarro.png",
    link: "https://instacarro.com",
  },

  {
    title: "Fome Zero",
    description: "A mobile application made for a college project to promote and facilitate food donations.",
    year: 2022,
    imageUrl: "/assets/images/projects/fomezero.png",
    github: "https://github.com/Lucas-Cortez/college_mobile_project",
  },
  {
    title: "Iotebe",
    description: "A platform for monitoring and generating insights from real data coming from IOT devices.",
    year: 2021,
    imageUrl: "/assets/images/projects/iotebe.png",
    link: "https://tebesensor.com",
  },
];
