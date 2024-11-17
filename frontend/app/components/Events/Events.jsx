// Map method

// import Image from "next/image";
// import cards from "../../../public/card.svg";
// import pythonImg from "../../assets/python.svg";
// import cloudImg from "../../assets/cloudCardimg.svg";
// import multitasking from "../../assets/artmultitasking.svg";
// import ai from "../../assets/aicardimg.svg";

// const AnimatedCard = () => {
//   const cardData = [
//     {
//       title: "Python Essentials Workshop",
//       description:
//         "Join our hands-on workshop covering Python basics, from syntax to creating your first program. A must-attend for anyone interested in programming.",
//       date: "Nov 15, 2024",
//       time: "5:00 PM - 8:00 PM",
//       image: pythonImg,
//     },
//     {
//       title: "Demystifying Cloud Computing",
//       description:
//         "Explore key concepts in cloud computing across popular platforms like AWS, Azure, and Google Cloud. Learn how the cloud transforms industries.",
//       date: "Nov 25, 2024",
//       time: "4:00 PM - 6:00 PM",
//       image: cloudImg,
//     },
//     {
//       title: "The Art of Multitasking",
//       description:
//         "This seminar teaches techniques to improve productivity without feeling overwhelmed. Ideal for professionals looking to boost their efficiency.",
//       date: "Dec 1, 2024",
//       time: "3:00 PM - 4:30 PM",
//       image: multitasking,
//     },
//     {
//       title: "Intelligence for Professionals",
//       description:
//         "Learn to manage emotions and foster better relationships at work with this interactive session on emotional intelligence.",
//       date: "Dec 15, 2024",
//       time: "4:00 PM - 5:30 PM",
//       image: ai,
//     },
//   ];

//   return (
//     <section
//       id="events"
//       style={{ backgroundImage: `url(${cards.src})` }}
//       className="bg-cover bg-center xl:h-[2000px] lg:[2000px] md:h-[2000px] sm:h-screen bg-bgColor"
//     >
//       {cardData.map((card, index) => (
//         <div
//           key={index}
//           className="flex flex-col md:flex-row items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10"
//         >
//           <div className="bg-bgColor text-white rounded-2xl flex flex-col">
//             <h1 className="font-primary xl:text-2xl lg:text-2xl md:text-2xl font-semibold relative xl:bottom-16 lg:bottom-16 md:bottom-16 sm:relative bottom-0">
//               {card.title}
//             </h1>
//             <p className="text-paraColor font-secondary text-sm relative xl:bottom-10 lg:bottom-10 md:bottom-10 sm:bottom-0 top-5">
//               {card.description}
//             </p>
//             <button className="bg-btnColor border rounded-3xl font-primary text-base max-sm:text-[12px] max-sm:px-1 max-sm:py-2 border-white border-opacity-10 whitespace-nowrap transition-all duration-200 hover:border-2 pt-3 pb-3 pl-6 pr-6 box-border w-[150px] relative xl:top-14 lg:top-14 md:top-14 sm:relative top-80 sm-custom:top-350">
//               Book a Slot
//             </button>
//           </div>

//           <div>
//             <Image src={card.image} alt="card-image" className="rounded-xl w-[362.83] object-contain" />
//             <div className="flex flex-row xl:gap-20 lg:gap-20 md:gap-20 sm:flex sm:justify-center gap-16 pt-10 pb-10">
//               <span className="flex flex-col">
//                 <p className="font-secondary text-sm text-paraColor">Date</p>
//                 <p className="font-secondary text-base max-sm:text-sm text-paraColor">{card.date}</p>
//               </span>

//               <span className="flex flex-col">
//                 <p className="font-secondary text-sm text-paraColor">Time</p>
//                 <p className="font-secondary text-base max-sm:text-sm text-paraColor">{card.time}</p>
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default AnimatedCard;






















// without map method  

// Hardcoded Values

import cards from "../../../public/card.svg";
import Image from "next/image";
import pythonImg from "../../assets/python.svg";
import cloudImg from "../../assets/cloudCardimg.svg";
import GlowingButton from "../GlowingButton/GlowingButton";

const Events = () => {
  return (
    <section  
      id="events"
      style={{ backgroundImage: `url(${cards.src})` }}
      className="bg-cover bg-center xl:h-[1200px] lg:[1200px] md:h-[1200px] sm:h-screen bg-bgColor"
    >

<div className="flex justify-center items-center pt-16">
        <GlowingButton className="border-2 border-white/10 px-9 bg-black/25 py-2 text-xl font-semibold tracking-widest rounded-3xl mb-5 text-white">
          EVENTS
        </GlowingButton>
      </div>

      <div>
          <p className="text-boost 2xl:text-hawk xl:text-hawk lg:text-hawk md:text-hawk sm:text-xl text-center pt-5">Interactive Learning Sessions to Enhance Your Skills</p>
        </div>

      {/* Card section 1 */}

      <div className="flex flex-col md:flex-row sm:flex-col items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10">
        <div className="bg-bgColor text-white  rounded-2xl flex flex-col">
          <h1 className="font-primary xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-semibold relative xl:bottom-16 lg:bottom-16 md:bottom-16 sm:relative bottom-0">
            Python Essentials <br /> Workshop
          </h1>
          <p className="text-paraColor font-secondary text-sm relative xl:bottom-10 lg:bottom-10 md:bottom-10 sm:relative bottom-0 top-5">
            Join our hands-on workshop covering Python <br /> basics, from
            syntax to creating your first <br /> program. A must-attend for
            anyone interested in <br />
            programming.
          </p>
          <button className="bg-btnColor border rounded-3xl font-primary text-base max-sm:text-[12px] max-sm:px-1 max-sm:py-2 border-white border-opacity-10 whitespace-nowrap transition-all duration-200 hover:border-2 pt-3 pb-3 pl-6 pr-6 box-border w-[150px] relative xl:top-14 lg:top-14 md:top-14 max-sm:relative top-275 sm-custom:top-310 sm:relative top-72">
            Book a Slot
          </button>
        </div>

        <div>
          <Image
            src={pythonImg}
            alt="python"
            className="rounded-xl w-[362.83] object-contain"
          />
          <div className="flex flex-row xl:gap-20 lg:gap-20 md:gap-20 sm:flex sm:justify-center gap-16 xl:pt-10 lg:pt-10 md:pt-10 pb-10 max-sm:pt-3 max-sm:justify-center">
            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Date</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                Nov 15,2024
              </p>
            </span>

            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Time</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                5:00 PM - 8:00 PM
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Card section 2 */}

      <div className="flex flex-col md:flex-row items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10">
        <div className="bg-bgColor text-white  rounded-2xl flex flex-col">
          <h1 className="font-primary xl:text-2xl lg:text-2xl md:text-2xl font-semibold relative xl:bottom-16 lg:bottom-16 md:bottom-16 sm:relative bottom-0">
            Demystifying Cloud <br /> Computing
          </h1>
          <p className="text-paraColor font-secondary text-sm relative xl:bottom-10 lg:bottom-10 md:bottom-10 sm:bottom-0 top-5">
            Explore key concepts in cloud computing across <br /> popular
            platforms like AWS, Azure, and Google <br /> Cloud. Learn how the
            cloud transforms <br />
            industries.
          </p>
          <button className="bg-btnColor border rounded-3xl font-primary text-base max-sm:text-[12px] max-sm:px-1 max-sm:py-2 border-white border-opacity-10 whitespace-nowrap transition-all duration-200 hover:border-2 pt-3 pb-3 pl-6 pr-6 box-border w-[150px] relative xl:top-14 lg:top-14 md:top-14 max-sm:mb-5 max-sm:relative top-275 sm-custom:top-330 sm:relative top-310">
            Book a Slot
          </button>
        </div>

        <div>
          <Image
            src={cloudImg}
            alt="cloud"
            className="rounded-xl w-[362.83] object-contain"
          />
          <div className="flex flex-row xl:gap-20 lg:gap-20 md:gap-20 sm:flex sm:justify-center gap-16 pt-10 pb-10 max-sm:pt-3 max-sm:justify-center">
            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Date</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                Nov 25, 2024
              </p>
            </span>

            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Time</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                4:00 PM - 6:00 PM
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Card section 3 */}

      {/* <div className="flex flex-col md:flex-row items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10">
        <div className="bg-bgColor text-white  rounded-2xl flex flex-col">
          <h1 className="font-primary xl:text-2xl lg:text-2xl md:text-2xl font-semibold relative xl:bottom-24 lg:bottom-24 md:bottom-24 sm:relative bottom-0">
            The Art of Multitasking
          </h1>
          <p className="text-paraColor font-secondary text-sm relative xl:bottom-10 lg:bottom-10 md:bottom-10 sm:bottom-0 top-5">
            This seminar teaches techniques to improve <br /> productivity
            without feeling overwhelmed. Ideal <br /> for professionals looking
            to boost their efficiency.
          </p>
          <button className="bg-btnColor border rounded-3xl font-primary text-base max-sm:text-[12px] max-sm:px-1 max-sm:py-2 border-white border-opacity-10 whitespace-nowrap transition-all duration-200 hover:border-2 pt-3 pb-3 pl-6 pr-6 box-border w-[150px] relative xl:top-14 lg:top-14 md:top-14 sm:relative top-80 sm-custom:top-350">
            Book a Slot
          </button>
        </div>

        <div>
          <Image
            src={multitasking}
            alt="multitasking"
            className="rounded-xl w-[362.83] object-contain"
          />
          <div className="flex flex-row gap-20 pt-10 pb-10">
            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Date</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                DEC 1, 2024
              </p>
            </span>

            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Time</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                3:00 PM - 4:30 PM
              </p>
            </span>
          </div>
        </div>
      </div> */}

      {/* Card section 4 */}

      {/* <div className="flex flex-col md:flex-row items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10">
        <div className="bg-bgColor text-white  rounded-2xl flex flex-col">
          <h1 className="font-primary xl:text-2xl lg:text-2xl md:text-2xl font-semibold relative xl:bottom-24 lg:bottom-24 md:bottom-24 sm:relative bottom-0">
            Intelligence for <br /> Professionals
          </h1>
          <p className="text-paraColor font-secondary text-sm relative xl:bottom-10 lg:bottom-10 md:bottom-10 sm:bottom-0">
            Learn to manage emotions and foster better <br /> relationships at
            work with this interactive session <br />
            on emotional intelligence.
          </p>
          <button className="bg-btnColor border rounded-3xl font-primary text-base max-sm:text-[12px] max-sm:px-1 max-sm:py-2 border-white border-opacity-10 whitespace-nowrap transition-all duration-200 hover:border-2 pt-3 pb-3 pl-6 pr-6 box-border w-[150px] relative xl:top-14 lg:top-14 md:top-14 sm:relative top-80 sm-custom:top-350">
            Book a Slot
          </button>
        </div>

        <div>
          <Image
            src={ai}
            alt="ai"
            className="rounded-xl w-[362.83] object-contain"
          />
          <div className="flex flex-row gap-20 pt-10 pb-10">
            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Date</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                DEC 15, 2024
              </p>
            </span>

            <span className="flex flex-col">
              <p className="font-secondary text-sm text-paraColor">Time</p>
              <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                4:00 PM - 5:30 PM
              </p>
            </span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Events;
