import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Vision from "../assets/vision.avif";

const Aboutus = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
  });
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
  });

  const sectionControls = useAnimation();
  const valuesControls = useAnimation();

  if (sectionInView) {
    sectionControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  }

  if (valuesInView) {
    valuesControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5 },
    });
  }

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="text-center mt-20 mb-2">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-[#47464C] font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About us
        </motion.h1>
      </div>


      <section
        className="flex items-center justify-center min-h-screen py-20 bg-white"
        ref={sectionRef}
      >
        <motion.div
          className="w-11/12 md:w-3/4 flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionControls}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h3
              className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-[#47464C] mb-6"
              initial={{ x: -100, opacity: 0 }}
              animate={sectionControls}
            >
              Driving Innovation and Excellence
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#47464C] mb-6 leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={sectionControls}
            >
              Our company has been providing excellent services for over a
              decade. We specialize in various fields and have a team of
              dedicated professionals who are committed to delivering the best
              results for our clients.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#47464C] leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={sectionControls}
            >
              We believe in innovation, integrity, and customer satisfaction.
              Our mission is to help businesses achieve their goals through our
              expertise and tailored solutions.
            </motion.p>
          </div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={sectionControls}
          >
            <img
              src={Vision}
              alt="Vision"
              className="rounded-lg max-w-full h-auto "
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="flex items-center justify-center py-16 bg-white"
        ref={valuesRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={valuesControls}
      >
        <div className="w-11/12 lg:w-8/12">
          <motion.h1
            className="text-center text-[#47464C] mb-8 text-3xl sm:text-4xl font-semibold"
            initial={{ opacity: 0 }}
            animate={valuesControls}
          >
            Our Values
          </motion.h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 bg-white">
            {["Our Vision", "Our Approach", "Our Goals", "Our Process"].map(
              (title, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 text-center bg-white border rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesControls}
                  transition={{ delay: index * 0.3 }}
                >
                  <h2 className="text-lg sm:text-xl font-semibold my-4 text-gray-800">
                    {title}
                  </h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat labore ratione nisi sapiente eaque neque dolore.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Aboutus;

