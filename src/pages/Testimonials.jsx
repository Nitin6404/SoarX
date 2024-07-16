"use client";

import ismail from "../assets/ismail2.jpg";
import zainab from "../assets/zainab.jpg";
import nomah from "../assets/nomah.jpg";
import afzal from "../assets/afzal.jpg";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
    {
        title:"As the Networking Lead at SOARX JMI, I spearheaded infrastructure development, fostered innovation, and achieved organizational success through effective team leadership.",
        client: "Zainab Eifa",
        clientInfo: "Networking lead @SoarX JMI",
        img: zainab,
    },
    {
        title:"Joining SoarX JMI has been exhilarating, offering vibrant community, hands-on learning, unparalleled networking, and invaluable industry connections in media.",
        client: "Nomah Fatima",
        clientInfo: "Graphics Lead, @SoarX JMI",
        img: nomah,
    },
    {
        title:"Through active engagement in tech events and online communities, like SoarX JMI, I expand knowledge, foster connections, and gain mentorship.",
        client: "Afzal Amaan Ullah",
        clientInfo: "Content Lead, @SoarX JMI",
        img: afzal,
    },
    {
        title:"Absolutely thrilled to have found a warm and welcoming community in SoarXJMI! Inspired by the dedication to learning, innovation, and collaboration. Excited for the journey ahead!",
        client: "Ismail Hossen",
        clientInfo: "Strategy Lead, @SoarX JMI",
        img: ismail,
    }
];

