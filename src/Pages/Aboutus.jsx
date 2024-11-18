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
    <div>
      <Navbar />
      <div className="text-center mt-8">
        <motion.h1
          className="text-6xl text-[#47464C] font-semibold"
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
          className="w-3/4 container mx-auto flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionControls}
        >
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <motion.h3
              className="text-4xl md:text-6xl font-extrabold text-[#47464C] mb-6"
              initial={{ x: -100, opacity: 0 }}
              animate={sectionControls}
            >
              Driving Innovation and Excellence 
            </motion.h3>
            <motion.p
              className="text-lg text-[#47464C] mb-6 leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={sectionControls}
            >
              Our company has been providing excellent services for over a
              decade. We specialize in various fields and have a team of
              dedicated professionals who are committed to delivering the best
              results for our clients.
            </motion.p>
            <motion.p
              className="text-lg text-[#47464C] leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={sectionControls}
            >
              We believe in innovation, integrity, and customer satisfaction.
              Our mission is to help businesses achieve their goals through our
              expertise and tailored solutions.
            </motion.p>
          </div>
          <motion.div
            className="md:w-1/2 h-auto flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={sectionControls}
          >
            <img
              src={Vision}
              alt="Vision"
              className="rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out w-3/4 max-w-sm"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* <section className="w-3/4 py-20 bg-white flex items-center justify-center min-h-screen" ref={sectionRef}>
  <motion.div
    className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={sectionControls}
  >
    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
      <motion.h3
        className="text-4xl md:text-6xl font-extrabold text-[#47464C] mb-6"
        initial={{ x: -100, opacity: 0 }}
        animate={sectionControls}
      >
        Driving Innovation and Excellence for Over a Decade
      </motion.h3>
      <motion.p
        className="text-lg text-[#47464C] mb-6 leading-relaxed"
        initial={{ x: -100, opacity: 0 }}
        animate={sectionControls}
      >
        Our company has been providing excellent services for over a
        decade. We specialize in various fields and have a team of
        dedicated professionals who are committed to delivering the best
        results for our clients.
      </motion.p>
      <motion.p
        className="text-lg text-[#47464C] leading-relaxed"
        initial={{ x: -100, opacity: 0 }}
        animate={sectionControls}
      >
        We believe in innovation, integrity, and customer satisfaction.
        Our mission is to help businesses achieve their goals through our
        expertise and tailored solutions.
      </motion.p>
    </div>
    <motion.div
      className="md:w-1/2 h-auto flex justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={sectionControls}
    >
      <img
        src={Vision}
        alt="Vision"
        className="rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out w-3/4 max-w-sm"
      />
    </motion.div>
  </motion.div>
</section> */}

      <motion.div
        className="flex items-center justify-center min-h-screen bg-gray-100"
        ref={valuesRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={valuesControls}
      >
        <div className="w-9/12">
          <motion.h1
            className="text-center text-[#47464C] mb-8 mt-8 text-4xl font-semibold"
            initial={{ opacity: 0 }}
            animate={valuesControls}
          >
            Our Values
          </motion.h1>
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            {["Our Vision", "Our Approach", "Our Goals", "Our Process"].map(
              (title, index) => (
                <motion.figure
                  key={index}
                  className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesControls}
                  transition={{ delay: index * 0.3 }}
                >
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h1 className="text-2xl font-semibold my-4">{title}</h1>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Example content for {title.toLowerCase()}
                    </h3>
                    <p className="my-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellat labore ratione nisi sapiente eaque neque dolore,
                    </p>
                  </blockquote>
                </motion.figure>
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

// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import Vision from "../assets/vision.avif";

// const Aboutus = () => {
//   return (
//     <div className="">
//       <Navbar />
//       <div className="text-center mt-8">
//         <h1 className=" text-6xl text-[#47464C]  font-semibold"> About us </h1>
//       </div>

//       <section className="py-20 bg-white">
//         <div className="container mx-auto flex flex-col gap-60 md:flex-row items-center justify-between px-6">
//           <div className="md:w-2/3 md:pl-12">
//             <h3 className="text-6xl font-extrabold text-[#47464C] mb-6">
//             Driving Innovation and Excellence for Over a Decade
//             </h3>
//             <p className="text-lg text-[#47464C] mb-6 leading-relaxed">
//               Our company has been providing excellent services for over a
//               decade. We specialize in various fields and have a team of
//               dedicated professionals who are committed to delivering the best
//               results for our clients.
//             </p>
//             <p className="text-lg text-[#47464C] leading-relaxed">
//               We believe in innovation, integrity, and customer satisfaction.
//               Our mission is to help businesses achieve their goals through our
//               expertise and tailored solutions.
//             </p>
//           </div>
//           <div className="md:w-1/2  h-14  mb-8 md:mb-0">
//             <img
//               src={Vision}
//               alt="Vision"
//               className="rounded-lg  transition-transform transform hover:scale-105 duration-300 ease-in-out w-3/4 max-w-sm"
//             />
//           </div>
//         </div>
//       </section>

//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-9/12">
//           <h1 className="text-center text-[#47464C] mb-8 mt-8 text-4xl font-semibold">

//             Our Values
//           </h1>
//           <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
//             <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
//               <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
//                 <h1 className="text-2xl font-semibold my-4"> Our Vision</h1>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                   Very easy this was to integrate
//                 </h3>
//                 <p className="my-4">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat labore ratione nisi sapiente eaque neque dolore,
//                 </p>
//               </blockquote>

//             </figure>
//             <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
//               <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
//               <h1 className="text-2xl font-semibold my-4"> Our Approch</h1>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                   Solid foundation for any project
//                 </h3>
//                 <p className="my-4">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat labore ratione nisi sapiente eaque neque dolore,
//                 </p>
//               </blockquote>

//             </figure>
//             <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
//               <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
//               <h1 className="text-2xl font-semibold my-4"> Our Goals</h1>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                   Mindblowing workflow
//                 </h3>
//                 <p className="my-4">
//                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat labore ratione nisi sapiente eaque neque dolore,
//                 </p>
//               </blockquote>

//             </figure>
//             <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
//               <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
//               <h1 className="text-2xl font-semibold my-4"> Our Process</h1>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                   Efficient Collaborating
//                 </h3>
//                 <p className="my-4">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat labore ratione nisi sapiente eaque neque dolore,
//                 </p>
//               </blockquote>

//             </figure>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Aboutus;
