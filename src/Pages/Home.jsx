import Youridea from "../assets/youridea.jpg";
import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";
import Sliderimg from "../assets/sliderimg.jpg";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Tech Startups to Watch in 2021",
      description:
        "A deep dive into the most promising tech startups emerging in 2021.",
      image: Sliderimg,
      link: "#",
    },
    {
      title: "Innovative Tech Solutions",
      description:
        "Explore the cutting-edge tech solutions reshaping industries in 2021.",
      image: Sliderimg,
      link: "#",
    },
    {
      title: "Tech Startups to Watch in 2021",
      description:
        "A deep dive into the most promising tech startups emerging in 2021.",
      image: Sliderimg,
      link: "#",
    },
  ];

  return (
    <div>
      <Navbar />
      <Welcome />

      <section className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={Youridea}
              alt="Professional team working together in a modern office"
              className="rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-4xl font-extrabold text-[#47464C] mb-6">
              What we do
            </h3>
            <p className="text-lg text-[#47464C] mb-6 leading-relaxed">
              Our company has been providing excellent services for over a
              decade. We specialize in various fields and have a team of
              dedicated professionals who are committed to delivering the best
              results for our clients.
            </p>
            <p className="text-lg text-[#47464C] leading-relaxed">
              We believe in innovation, integrity, and customer satisfaction.
              Our mission is to help businesses achieve their goals through our
              expertise and tailored solutions.
            </p>
            <div className="flex">
              <div>
            <button
              type="button"
              onClick={()=>navigate("/aboutus")}
              className=" mt-12 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#47464C] focus:outline-none bg-[#B4C424] rounded-full border border-[#B4C424] hover:bg-[#A0B520] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#B4C424] dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
             Read more...
            </button></div>
            <div>
            <button
              type="button"
              onClick={()=>navigate("/contactus")}
              className=" mt-12 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#47464C] focus:outline-none bg-[#B4C424] rounded-full border border-[#B4C424] hover:bg-[#A0B520] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#B4C424] dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
             Get a quate
            </button>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Card */}
      <div className="flex justify-center items-center w-full">
        <div className="w-10/12">
          <h1 className="text-center text-2xl font-semibold tracking-tight text-[#47464C] sm:text-4xl">
            Our Popular Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-2xl gap-6 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-xl hover:translate-z-10"
              >
                <a href={service.link}>
                  <img
                    className="rounded-t-lg"
                    src={service.image}
                    alt={service.title}
                  />
                </a>
                <div className="p-5">
                  <a href={service.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#47464C] dark:text-white">
                      {service.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#B4C424] rounded-lg hover:bg-[#47464C] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#47464C] dark:hover:bg-[#B4C424] dark:focus:ring-blue-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
