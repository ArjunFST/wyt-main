// Map method

// import Image from "next/image";
// import Testimonial_background from "../../../public/testimonialbackgroundimg.svg";
// import personImg from "../../../public/testipersonimg.svg";

// // Sample testimonial data
// const testimonials = [
//   {
//     quote: "Incredible learning experience! Courses were engaging, and instructors genuinely cared about our progress.",
//     name: "Priya Sharma",
//     role: "Software Developer",
//     image: personImg,
//   },
//   {
//     quote: "Transformative Courses! The hands-on approach helped me gain confidence and practical skills quickly.",
//     name: "Ravi Kumar",
//     role: "Web Developer",
//     image: personImg,
//   },
//   {
//     quote: "Perfect for career growth! I learned essential skills that helped me advance in my profession.",
//     name: "Sneha Patel",
//     role: "Data Analyst",
//     image: personImg,
//   },
//   {
//     quote: "Outstanding support team! Instructors were always available and provided valuable guidance throughout the course.",
//     name: "Ankit Singh",
//     role: "Software Engineer",
//     image: personImg,
//   },
//   {
//     quote: "Friendly and encouraging environment! The community support kept me motivated throughout my learning journey.",
//     name: "Ankit Singh",
//     role: "Software Engineer",
//     image: personImg,
//   },
//   {
//     quote: "Flexible and convenient! The course schedule allowed me to balance learning with my busy lifestyle.",
//     name: "Ankit Singh",
//     role: "Software Engineer",
//     image: personImg,
//   },
//   {
//     quote: "Perfect for career growth! I learned essential skills that helped me advance in my profession.",
//     name: "Sneha Patel",
//     role: "Data Analyst",
//     image: personImg,
//   },
//   {
//     quote: "Transformative Courses! The hands-on approach helped me gain confidence and practical skills quickly.",
//     name: "Ravi Kumar",
//     role: "Web Developer",
//     image: personImg,
//   },
//   {
//     quote: "Incredible learning experience! Courses were engaging, and instructors genuinely cared about our progress.",
//     name: "Priya Sharma",
//     role: "Software Developer",
//     image: personImg,
//   },
// ];

// const Testimonial = () => {
//   return (
//     <section
//       className="bg-cover bg-center 2xl:h-[900px] xl:h-[900px] lg:h-[900px] md:h-[900px] sm:h-screen text-white"
//       style={{ backgroundImage: `url(${Testimonial_background.src})` }}
//     >
//       <h1 className="text-center text-testiColor font-primary text-testHeading max-sm:text-[25px] font-semibold pt-20 max-sm:pt-10">
//         There's a reason people <br />
//         are <span className="font-oregano">raving</span> about us.
//       </h1>

//       <div className="flex flex-wrap justify-center gap-10 mt-20 max-sm:mt-10">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5"
//           >
//             <p className="font-secondary font-semibold text-sm text-testiColor">
//               “{testimonial.quote}”
//             </p>

//             <div className="flex gap-3 pt-5 items-center">
//               <div>
//                 <Image src={testimonial.image} alt={testimonial.name} />
//               </div>
//               <div>
//                 <h2 className="font-secondary text-xs text-testiColor">
//                   {testimonial.name}
//                 </h2>
//                 <p className="font-secondary text-card text-testiColor/80">
//                   {testimonial.role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

// without map method  

// Hardcoded Values


import Image from "next/image";
import Testimonial_background from "../../../public/testimonialbackgroundimg.svg";
import personImg from "../../../public/testipersonimg.svg";

const Testimonial = () => {
  return (
    <section
      className="bg-cover bg-center 2xl:h-[900px] xl:h-[900px] lg:h-[900px] md:h-[900px] sm:h-screen text-white"
      style={{ backgroundImage: `url(${Testimonial_background.src})` }}
    >
      <h1 className="text-center text-testiColor font-primary text-testHeading max-sm:text-[25px] font-semibold pt-20 max-xl:pt-10 max-sm:pt-20">
        There&apos;s a reason people <br /> 
        are <span className="font-oregano">raving</span> about us.
      </h1>

      {/* Testimonial card section 1 */}

      <div className="2xl:flex xl:flex lg:flex md:flex sm:flex max-sm:space-x-20 max-sm:space-y-5 gap-10 justify-center items-center mb-5 mt-20 max-sm:mt-10">
          {/* 1st card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5 max-sm:ml-20">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Incredible learning experience! Courses were engaging, and
            instructors genuinely cared about our progress.”
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>

  {/* 2nd card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Transformative Courses! The hands on approach helped me gain confidence and practical skills quickly.”
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>

  {/* 3rd card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Incredible learning experience! Courses were engaging, and
            instructors genuinely cared about our progress.”
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial card section 2 */}


      <div className="2xl:flex xl:flex lg:flex md:flex sm:flex max-sm:space-x-20 max-sm:space-y-5  gap-10 justify-center items-center mb-5">

              {/*   {/* 1st card section */}
        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5 max-sm:ml-20">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Perfect for career growth! I learned essential skills that helped
            me advance in my profession.”
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>

      {/*   {/* 2nd card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Outstanding support team! Instructors were always available and
            provided valuable guidance throughout the course.”
          </p>

          <div className="flex gap-3 2xl:pt-5 xl:pt-5 lg:pt-5 md:pt-0  items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>

{/* 3rd card section */}
        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Perfect for career growth! I learned essential skills that helped
            me advance in my profession.”
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial card section 3 */}

      <div className="2xl:flex xl:flex lg:flex md:flex sm:flex max-sm:space-x-20 max-sm:space-y-5  gap-10 justify-center items-center mb-5 max-sm:mb-0">
                 {/* 1st card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5 max-sm:ml-20">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            Flexible and convenient! The course schedule allowed me to balance
            learning with my busy lifestyle.
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>

                 {/* 2nd card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            “Friendly and encouraging environment! The community support kept me
            motivated throughout my learning journey.”
          </p>

          <div className="flex gap-3 pt-5 max-sm:pt-0 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>

                 {/* 3rd card section */}

        <div className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5">
          <p className="font-secondary font-semibold text-sm text-testiColor">
            Flexible and convenient! The course schedule allowed me to balance
            learning with my busy lifestyle.
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <div>
              <Image src={personImg} alt="person 1" />
            </div>
            <div>
              <h2 className="font-secondary text-xs text-testiColor">
                Priya Sharma
              </h2>
              <p className="font-secondary text-card text-testiColor/80">
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
