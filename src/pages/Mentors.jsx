import navaid from '../assets/navaid-sir.png';
import haroon from '../assets/haroon-sir.jpeg';
import founder from "../assets/founder4.jpg";
import mayank from "../assets/mayank.jpeg";

const people = [
  {
    name: 'Mayank Arora',
    role: 'Founder, SoarX',
    imageUrl: mayank,
    linkedin: 'https://www.linkedin.com/in/arora1mayank/'
  },
  {
    name: 'Dr. Navaid Z. Rizvi',
    role: 'Faculty Mentor',
    imageUrl: navaid,
    linkedin: 'https://www.linkedin.com/in/navaid-z-rizvi-ph-d-b46bb2b0/'
  },
  {
    name: 'Ali Nasir',
    role: 'Founder & President, SoarX JMI',
    imageUrl: founder,
    linkedin: 'https://www.linkedin.com/in/ali-nasir-ba3640230/'
  },
  {
    name: 'Dr. Mohammad Haroon Anwar',
    role: 'Faculty Mentor',
    imageUrl: haroon,
    linkedin: 'https://www.linkedin.com/in/mohammad-haroon-anwar/'
  }
]

export default function Mentors() {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container my-16 mx-auto md:px-6">
        <section className="mb-32 text-center text-white">
          <h2 className="mb-20 text-3xl font-bold">For a better change...</h2>
          <div className="grid gap-x-6 md:grid-cols-4 lg:gap-x-12">
            {people.map((item)=>(
              <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                  <img
                    src={item.imageUrl}
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                </div>
                <h5 className="mb-2 text-lg font-bold"><a href={item.linkedin}>{item.name}</a></h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  {item.role}
                </h6>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Container for demo purpose */}
    </>

  )
}
