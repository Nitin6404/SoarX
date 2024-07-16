import {
    Card,
    CardBody,
    Typography,
    CardHeader,
} from "@material-tailwind/react";
import zainab from "../assets/zainab.jpg";
// import ayaan from "../assets/ayaan.jpg";
import nomah from "../assets/nomah.jpg";
import afzal from "../assets/afzal.jpg";
// import founder from "../assets/founder2.jpg";
import ismail from "../assets/ismail2.jpg";

function TestimonialCard({ img, client, title, clientInfo }) {
    return (
        <Card shadow={false} className="bg-gray-950 rounded-2xl p-6">
            <CardHeader color="transparent" floated={false} shadow={false}>
                <Typography
                    color="white"
                    className="lg:mb-20 mb-4 text-lg font-bold"
                >
                    &quot;{title}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                    <Typography variant="h6" color="white">
                        {client}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="font-normal !text-jmi-green"
                    >
                        {clientInfo}
                    </Typography>
                </div>
                <img src={img} className="max-w-[6rem] rounded-2xl" alt={client} />
            </CardBody>
        </Card>
    );
}

const testimonials = [
    // {
    //     title:"It's not just about creating a new society; it's about a new beginning, starting from scratch, learning, building, and growing a community. It involves connecting with like-minded people and leveraging the educational gap by gaining industrial exposure. SoarX... keep soaring high!",
    //     client: "Ali Nasir",
    //     clientInfo: "Founder & President @SoarX JMI",
    //     img: founder,
    // },
    {
        title:"As the Networking Lead at SOARX JMI, I spearheaded infrastructure development, fostered innovation, and achieved organizational success through effective team leadership.",
        client: "Zainab Eifa",
        clientInfo: "Networking lead @SoarX JMI",
        img: zainab,
    },
    // {
    //     title:"As SoarX JMI's networking lead, I've connected with talented individuals, found support, and expanded opportunities, fostering a strong sense of community.",
    //     client: "Syed Ayaan Hussain",
    //     clientInfo: "Networking Lead, @SoarX JMI",
    //     img: ayaan,
    // },
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

export default function Testimonials() {
    return (
        <section className="px-8 py-10 lg:py-8 bg-1st-bg">
            <div className="container mx-auto">
                <Typography
                    variant="h2"
                    color="white"
                    className="mb-4 !text-3xl lg:!text-4xl text-center"
                >
                    What team has to say?
                </Typography>
                <div style={{height:"50px"}}></div>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                    {testimonials.map((props, key) => (
                        <TestimonialCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}