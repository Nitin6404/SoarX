import { Typography, Card, CardBody } from "@material-tailwind/react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

function ContentCard({ img, title, desc }) {
    return (
        <Card
            className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl hover:scale-105 duration-300"
            color="transparent"
        >
            <img
                src={img}
                alt="bg"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="w-full h-2/5">
                <CardBody className="relative flex flex-col justify-end">
                    <Typography variant="h4" color="white">
                        {title}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="my-2 font-normal"
                    >
                        {desc}
                    </Typography>
                </CardBody>
            </div>
        </Card>
    );
}

const contents = [
    {
        img: "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Hackathons",
        desc: "SoarX JMI organizes hackathons, fostering innovation and collaboration among students, offering a platform for creative problem-solving in tech.",
    },
    {
        img: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Quizes",
        desc: "SoarX JMI hosts coding quizzes, promoting skill development and competitiveness among participants, encouraging excellence in programming proficiency.",
    },
    {
        img: "https://www.commercialdesignindia.com/cloud/2021/11/26/6LXdgdaz-Microsoft-Building-2.jpg",
        title: "Microsoft Office Visit",
        desc: "SoarX arranged a memorable office visit to Microsoft, offering students an exclusive peek into the company's culture and operations.",
    },
];

export default function PastEvents() {
    const [showMoreEvent, setshowMoreEvent] = useState(false);
    return (
        <>
        <section className="container mx-auto px-8 py-5 lg:py-10 bg-1st-bgs">
            <Typography
                variant="h2"
                color="white"
                className="!text-2xl !leading-snug lg:!text-3xl text-center"
            >
                Past Events
            </Typography>
            <Typography
                variant="lead"
                className="mt-5 max-w !font-normal !text-white text-center"
            >
                SoarX JMI consistently organizes impactful events featuring speakers from major companies like 
                <b> Amazon</b>, <b> Microsoft</b>, <b> Meta</b>, and <b> Google</b>.
            </Typography>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                {!showMoreEvent ? contents.slice(0,3).map(({ img, title, desc }) => (
                    <ContentCard key={title} img={img} title={title} desc={desc} />
                )):
                contents.map(({ img, title, desc }) => (
                    <ContentCard key={title} img={img} title={title} desc={desc} />
                ))}
            </div>
            <Typography >
                <div className="flex justify-center mt-8 ">
                    <button
                        type="button"
                        className="black rounded-lg  px-4 py-2 me-2 mb-2"
                        onClick={() => setshowMoreEvent(!showMoreEvent)}
                    >
                        <span>
                            {
                                !showMoreEvent ? 
                                    <ArrowDownCircleIcon fill="none" stroke="white" className=" h-6 w-6 arrow-down-circle  text-jmi-green" />
                                    : <ArrowUpCircleIcon fill="none" stroke="white" className=" h-6 w-6 arrow-down-circle  text-jmi-green" /> 
                            }
                        </span>
                    </button>
                </div>
            </Typography>
        </section>
        </>
    );
}