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


      <div className="flex justify-center items-center w-full">
  <div className="w-10/12">
    <h1 className="text-center text-2xl font-semibold tracking-tight text-[#47464C] sm:text-4xl">
      Our Popular Services
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {services.map((service, index) => (
        <div key={index} className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img src={service.image} alt={service.title} />
          </figure>
          <div className="card-body">
            <h2
              onClick={() => navigate(service.link)}
              className="card-title cursor-pointer text-white"
            >
              {service.title}
            </h2>
            <p className="text-gray-300">{service.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => navigate(service.link)}
                className="btn btn-primary"
              >
                Read More
              </button>
            </div>
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

