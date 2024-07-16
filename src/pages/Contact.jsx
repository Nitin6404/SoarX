import Header from "./Header"
import Footer from "./Footer"
import emailjs from '@emailjs/browser';
import { useState } from "react";

export default function Contact() {

    return (
        <>
            <Header />
            <ContactSection />
            <Footer />
        </>
    );
}

function ContactSection() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("Send Message");

    const handleSubmit = (e) => {
        e.preventDefault();

        const service_id = "service_3cd6m1q";
        const template_id = "template_8woknxq";
        const publicKey = "w0NnJHHXwiU4u5UuH";

        const template_params = {
            from_name: email,
            message: subject +":"+ message
        };

        emailjs.send(service_id,template_id,template_params,publicKey).then((reponse)=>{
            console.log("SUCCESS!!!");
            setEmail("");
            setSubject("");
            setMessage("");
            setSuccess("Sent");
        }).catch((error)=>{
            setSuccess("Error!!!");
            console.error("Error!!!",error)
        });

    }

    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <form onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" value={subject} placeholder="Let us know how we can help you" required onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={message}placeholder="Leave a message..." onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" class="bg-jmi-green py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{success}</button>
                </form>
            </div>
        </section>
    );
}