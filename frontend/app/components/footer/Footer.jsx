// Map method

// import Image from "next/image";
// import footerImg from "../../../public/footerlogo.svg";
// import facebook from "../../assets/Facebook -Icon-footer.svg";
// import linkedin from "../../assets/Linkedin Icon.svg";
// import twitter from "../../assets/Twitter Icon.svg";

// const Footer = () => {
//   // Array for contact information
//   const contactInfo = [
//     "4C/1/1, Ambai Road, Kulavanigarpuram, Melapalayam Post, Tirunelveli - 627005.",
//     "Mobile - 9843875256",
//   ];

//   // Array for social media icons
//   const socialMediaIcons = [
//     { id: 1, src: facebook, alt: "Facebook" },
//     { id: 2, src: linkedin, alt: "LinkedIn" },
//     { id: 3, src: twitter, alt: "Twitter" },
//   ];

//   return (
//     <section className="bg-cover bg-center bg-footerColor">
//       <div className="text-center">
//         {/* Footer Heading */}
//         <h1 className="text-contactColor pt-10 font-primary text-4xl font-bold max-sm:text-[20px]">
//           Wat'y Learning Hub. We’re here
//         </h1>

//         {/* Contact Information */}
//         <div className="pt-7">
//           {contactInfo.map((info, index) => (
//             <p
//               key={index}
//               className="text-white font-secondary text-xs text-opacity-80"
//             >
//               {info}
//             </p>
//           ))}
//         </div>

//         {/* Contact Button */}
//         <button className="text-white font-secondary text-xs bg-black px-2 py-2 mt-5">
//           👋 Contact
//         </button>

//         {/* Footer Content */}
//         <div className="flex justify-around items-center mt-5">
//           {/* Footer Logo */}
//           <Image src={footerImg} alt="Footer Logo" width={81} height={80} />

//           {/* Footer Rights */}
//           <p className="text-contactColor font-secondary text-xs ml-10 max-sm:ml-0">
//             © 2024 Wat'y Learning Hub. All Rights Reserved.
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex items-center gap-5 max-sm:block">
//             {socialMediaIcons.map((icon) => (
//               <Image
//                 key={icon.id}
//                 src={icon.src}
//                 alt={icon.alt}
//                 className="hover:opacity-80"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

// Hardcoded values

import Image from "next/image";
import icons from "../../../public/Social.svg";
import footerImg from "../../../public/footerlogo.svg";
// import facebook from '../../assets/Facebook -Icon-footer.svg'
// import linkedin from '../../assets/Linkedin Icon.svg'
// import twitter from '../../assets/Twitter Icon.svg'

const Footer = () => {
  return (
    <section className="bg-cover bg-center bg-footerColor">
      <div className="text-center">
      <h1 className="text-contactColor pt-10 font-primary text-4xl font-bold max-sm:text-[20px]">
  Wat&apos;y Learning Hub. We’re here
</h1>

        <p className="text-white font-secondary text-xs text-opacity-80 pt-7">
          4C/1/1, Ambai Road, Kulavanigarpuram, Melapalayam Post, Tirunelveli -
          627005. Mobile - 9843875256
        </p>
        <button className="text-white font-secondary text-xs bg-black px-2 py-2 box-border pt-5">
          👋 Contact
        </button>

        <div className="flex justify-around items-center mt-5">
          <Image src={footerImg} alt="image" width={81} height={80} />
          <p className="text-contactColor font-secondary text-xs ml-10 max-sm:ml-0">
            © 2024 Wat&apos;y Learning Hub. All Rights Reserved.
          </p>
          <div>
            <Image src={icons} alt="icons" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
