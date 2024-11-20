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
      link: "/tech-startups",
    },
    {
      title: "Innovative Tech Solutions",
      description:
        "Explore the cutting-edge tech solutions reshaping industries in 2021.",
      image: Sliderimg,
      link: "/innovative-tech",
    },
    {
      title: "Tech Startups to Watch in 2021",
      description:
        "A deep dive into the most promising tech startups emerging in 2021.",
      image: Sliderimg,
      link: "/tech-startups",
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
              className="rounded-full transition-transform transform hover:scale-105 duration-300 ease-in-out"
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
              <button
                type="button"
                onClick={() => navigate("/aboutus")}
                className="mt-12 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#B4C424] rounded-full border border-[#B4C424] hover:bg-[#A0B520] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#B4C424]"
              >
                Read more...
              </button>
              <button
                type="button"
                onClick={() => navigate("/contactus")}
                className="mt-12 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#B4C424] rounded-full border border-[#B4C424] hover:bg-[#A0B520] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#B4C424]"
              >
                Get a quote
              </button>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="max-w-sm border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105"
        >
          <div onClick={() => navigate(service.link)} className="cursor-pointer">
            <img className="rounded-t-lg" src={service.image} alt={service.title} />
          </div>
          <div className="p-5">
            <h5
              onClick={() => navigate(service.link)}
              className="mb-2 text-2xl font-bold tracking-tight text-[#47464C] dark:text-white cursor-pointer"
            >
              {service.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {service.description}
            </p>
            <button
              onClick={() => navigate(service.link)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#B4C424] rounded-lg hover:bg-[#47464C] focus:ring-4 focus:outline-none dark:bg-[#47464C] dark:hover:bg-[#B4C424]"
            >
              Read more
            </button>
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

