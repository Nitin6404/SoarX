import { Typography } from "@material-tailwind/react";
import icon from "../assets/icon.png";

export default function Footer() {
    return (
        <>
            <Slogan />
            <footer className="w-full bg-1st-bg p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-1st-bg text-center md:justify-between">
                    <img src={icon} alt="logo-ct" className="w-25" />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="/about"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="/contact"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green"
                            >
                                Contact Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="https://www.linkedin.com/company/soarx-jmi/"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green"
                            >
                                LinkedIn
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="https://www.instagram.com/soarxjmi/"
                                color="white"
                                className="font-normal transition-colors hover:text-jmi-green focus:text-jmi-green"
                            >
                                Instagram
                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <Typography className="text-center font-normal text-jmi-green">
                    &copy; 2024 SoarX JMI
                </Typography>
            </footer>
        </>
    );
}

function Slogan() {
    return (
        <div className="relative isolate overflow-hidden bg-1st-bg py-24 sm:py-32">
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto w-full lg:mx-0 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-mono">Rise Together, Soar Higher</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    Empowering innovation, where ideas spark and technology ignites, defining the essence of SoarX JMI's mission.
                    </p>
                </div>
            </div>
        </div>
    )
}
