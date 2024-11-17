// Map method

"use client";
import { useState } from "react";

import course from "../../../public/finalcourse1.svg";
import img from "../../assets/courseimg1.svg";
import img2 from "../../../public/coursecard2.svg";
import img3 from "../../../public/cousecard3.svg";
import Image from "next/image";
import arrow from "../../../public/courseArrowIcon.svg";
import email from "../../assets/emailmarketing.svg";
import Form from "../form/Form";

const techCourses = [
  {
    id: 1,
    title: "Essential Computer Skills",
    duration: "2hr 40min",
    image: img, // reference the imported image
  },
  {
    id: 2,
    title: "Hardware Foundations & Network Design",
    duration: "2hr 40min",
    image: img2,
  },
  {
    id: 3,
    title: "Python",
    duration: "2hr 40min",
    image: img3,
  },
  {
    id: 4,
    title: "Linux Operating System",
    duration: "2hr 40min",
    image: email,
  },
  {
    id: 5,
    title: "Advanced Cloud Computing Concepts",
    duration: "2hr 40min",
    image: img,
  },
  {
    id: 6,
    title: "DevOPS Essentials",
    duration: "2hr 40min",
    image: img2,
  },
  {
    id: 7,
    title: "Robotic Process Automation",
    duration: "2hr 40min",
    image: img3,
  },
  {
    id: 8,
    title: "Understanding Artificial Intelligence",
    duration: "2hr 40min",
    image: email,
  },
  {
    id: 9,
    title: "Database",
    duration: "2hr 40min",
    image: img,
  },
  {
    id: 10,
    title: "IT Security & Data Protection",
    duration: "2hr 40min",
    image: img2,
  },
  {
    id: 11,
    title: "Windows Administrator",
    duration: "2hr 40min",
    image: img3,
  },
  // Add more courses as needed
];

const languages = [
  {
    id: 1,
    title: "French Language",
    duration: "2hr 40min",
    image: img, // reference the imported image
  },
  {
    id: 2,
    title: "Hindi Language",
    duration: "2hr 40min",
    image: img2,
  },
  {
    id: 3,
    title: "Tamil",
    duration: "2hr 40min",
    image: img3,
  },
  {
    id: 4,
    title: "English Language",
    duration: "2hr 40min",
    image: email,
  },

  // Add more courses as needed
];

const softSkills = [
  {
    id: 1,
    title: "Art of multitasking",
    duration: "2hr 40min",
    image: img, 
  },
  {
    id: 2,
    title: "Emotional Intelligence",
    duration: "2hr 40min",
    image: img2,
  },
  {
    id: 3,
    title: "Problem Solving",
    duration: "2hr 40min",
    image: img3,
  },
];

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("tech"); // Default category
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog state

  const toggleDialog = () => setIsDialogOpen((prev) => !prev);

  // Determine which courses to display based on the selected category
  const coursesToDisplay =
    selectedCategory === "languages"
      ? languages
      : selectedCategory === "softSkills"
      ? softSkills
      : techCourses;

  return (
    <section
      id="courses"
      style={{ backgroundImage: `url(${course.src})` }}
      className="bg-cover bg-center h-auto text-white"
    >
      <div className="text-center pt-20 max-sm:pt-10">
        <h1 className="font-bold font-tertiary xl:text-future lg:text-future md:text-3xl pb-5">
          Explore
        </h1>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold font-tertiary 2xl:text-future xl:text-future lg:text-future md:text-future sm:text-3xl pb-5">
          OUR COURSES
        </h2>
        <h1 className="text-boost 2xl:text-hawk xl:text-hawk lg:text-hawk md:text-hawk sm:text-xl">
          Boost your skills with courses crafted by experts
        </h1>
      </div>


      <div className="flex justify-center items-center mt-16">
  <div className="flex overflow-x-auto gap-4 button-group scrollbar-hide">
    {["tech", "languages", "softSkills"].map((category) => (
      <button
        key={category}
        onClick={(e) => {
          setSelectedCategory(category);
          e.target.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }}
        className={`px-10 py-3 rounded-full font-primary font-bold text-xl max-sm:text-sm box-border whitespace-nowrap hover:bg-techColor hover:text-white ${
          selectedCategory === category
            ? "bg-techColor text-white"
            : "text-coursesColor border border-gray-400"
        }`}
      >
        {category === "tech" ? "Tech Courses" : category === "languages" ? "Languages" : "Soft Skills"}
      </button>
    ))}
  </div>
</div>



      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16 xl:w-[80%] lg:w-[80%] md:w-[80%] max-sm:w-[80%] mb-20">
          {coursesToDisplay.map((course) => (
            <div
              key={course.id}
              className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white"
            >
              <Image
                src={course.image}
                alt={course.title}
                className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
              />
              <div className="px-6 py-6">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-primary font-bold text-heading">
                    {course.title}
                  </h2>
                  <p className="font-secondary text-card">{course.duration}</p>
                </div>
              </div>
              <div className="mb-6 ml-64 max-xl:ml-36 max-sm:ml-48">
                <button
                  onClick={toggleDialog}
                  className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor"
                >
                  <Image src={arrow} alt="arrow" width={19} height={19} />
                  <span className="font-secondary text-card">Enroll now</span>

                  {/* Dialog Box */}
                  {isDialogOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                      <Form onClose={toggleDialog} />
                      {/* Pass close function to Form */}
                    </div>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

// Without map method

// Hardcoded Values

// "use client";
// import { useState } from "react";

// import course from "../../../public/finalcourse1.svg";
// import img from "../../assets/courseimg1.svg";
// import img2 from "../../../public/coursecard2.svg";
// import img3 from "../../../public/cousecard3.svg";
// import Image from "next/image";
// import arrow from "../../../public/courseArrowIcon.svg";
// import email from "../../assets/emailmarketing.svg";
// import Form from "../form/Form";

// const CoursesSection = () => {

//   const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog state

//   const toggleDialog = () => setIsDialogOpen((prev) => !prev);

//   return (
//     <section
//       id="courses"
//       style={{ backgroundImage: `url(${course.src})` }}
//       className="bg-cover bg-center xl:h-[2000px] lg:h-[1750px] md:h-[1700px] sm:h-screen text-white"
//     >
//       <div className="text-center pt-20">
//         <h1 className="font-bold font-tertiary xl:text-future lg:text-future md:text-3xl pb-5">Explore</h1>
//         <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold font-tertiary 2xl:text-future xl:text-future lg:text-future md:text-future sm:text-3xl pb-5">
//           OUR COURSES
//         </h2>
//         <h1 className="text-boost 2xl:text-hawk xl:text-hawk lg:text-hawk md:text-hawk sm:text-xl">
//           Boost your skills with courses crafted by experts
//         </h1>
//       </div>

//       <div className="xl:flex lg:flex md:flex md:justify-center max-sm:block justify-center items-center gap-24 mt-16">
//         <button className="bg-techColor px-10 py-3 xl:px-10 xl:py-3 lg:px-10 lg:py-3 md:px-5 md:py-3 max-sm:px-4 max-sm:py-2 rounded-full font-primary font-bold 2xl:text-xl xl:text-xl lg:text-xl md:text-xl max-sm:text-[15px] box-border max-sm:flex-col max-sm:justify-center">
//           Tech Courses
//         </button>
//         <button className="px-10 py-3 2xl:px-10 2xl:py-3 xl:px-10 xl:py-3 lg:px-10 lg:py-3 md:px-5 md:py-3 max-sm:px-4 max-sm:py-2 rounded-full font-primary font-bold 2xl:text-xl xl:text-xl lg:text-xl md:text-xl max-sm:text-[15px] text-coursesColor border border-gray-400 box-border hover:bg-techColor hover:text-white">
//           Languages
//         </button>
//         <button className="px-10 py-3 2xl:px-10 2xl:py-3 xl:px-10 xl:py-3 lg:px-10 lg:py-3 md:px-5 md:py-3 max-sm:px-4 max-sm:py-2 rounded-full font-primary font-bold 2xl:text-xl xl:text-xl lg:text-xl md:text-xl max-sm:text-[15px] text-coursesColor border border-gray-400 box-border hover:bg-techColor hover:text-white">
//           Soft Skills
//         </button>
//       </div>

//       {/* First card section */}

//       <div className=" 2xl:flex xl:flex lg:flex md:flex sm:block 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center items-center 2xl:space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-0">
//         {/* Card Section 1 */}

//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-20 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//                 Essential <br />
//                 Computer Skills
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//             <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 2 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-20 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img2}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-evenly items-center">
//               <h2 className=" font-primary font-bold text-heading">
//                 Hardware Foundations & Network Design
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 3 */}

//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-20 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img3}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Python courses & <br />
//               backend
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>
//       </div>

//         {/*  second Card Section  */}

//       <div className="2xl:flex xl:flex lg:flex md:flex sm:block justify-center items-center 2xl:space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-0">

//         {/* card section 1 */}

//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={email}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Linux Operating  <br /> System
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 2 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Advanced Cloud <br /> Computing Concepts
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 3 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white  mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img2}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               DevOPS Essentials & <br /> its uses
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>
//       </div>

//         {/* third card Section  */}
//         <div className="2xl:flex xl:flex lg:flex md:flex sm:block justify-center items-center 2xl:space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-0">

//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img3}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Robotic Process <br /> Automation
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 2 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={email}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Understanding Artificial <br />
//                Intelligence
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 3 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Database courses  <br />& backend
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>
//       </div>

//         {/* fourth card Section  */}

//       <div className="2xl:flex xl:flex lg:flex md:flex sm:block justify-center 2xl:space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-0 items-center 2xl:relative right-48 xl:right-48 lg:right-48 md:right-48 sm:right-0">

//        {/* card section 1 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img2}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               IT Security & Data  <br />Protection
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//         {/* card section 2 */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-cardColor text-paraColor hover:text-white mt-10 2xl:w-[22%] xl:w-[22%] lg:w-[22%] md:w-[25%] sm:w-full hover:border-2 hover:border-white/30">
//           <Image
//             src={img3}
//             className="w-[90%] object-cover mx-auto rounded-xl relative top-4"
//           />

//           <div className="px-6 py-6">
//             <div className="flex flex-row justify-between items-center">
//               <h2 className=" font-primary font-bold text-heading">
//               Windows <br />
//               Administrator
//               </h2>

//               <p className="hover:text-white font-secondary text-card">
//                 2hr 40min
//               </p>
//             </div>
//           </div>
//           <div className="mb-6 ml-56 2xl:ml-56 xl:ml-56 lg:ml-32 md:ml-20 max-sm:ml-64">
//           <button onClick={toggleDialog} className="flex items-center gap-3 px-2 py-1 text-white rounded-full bg-formBtnColor bg-white/20 hover:bg-formBtnColor">
//               <span className="flex items-center justify-center">
//                 <Image src={arrow} alt="arrow" width={19} height={19} />
//               </span>
//               <span className="font-secondary text-card">Enroll now</span>
//                         {/* Dialog Box */}
//                {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <Form onClose={toggleDialog} /> {/* Pass close function to Form */}
//         </div>
//       )}

//             </button>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default CoursesSection;
