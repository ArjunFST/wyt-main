"use client";
import { useState } from "react";
import { fetchSettingsData } from "@/app/hooks/settingsData";
import Image from "next/image";
import header_background from "../../../public/page3.svg";
import arrow from "../../assets/Frame 1000001083.png";
import AboutImg from "../../../public/Group 10160.svg";
import logo from "../../../public/watyheader.svg";
import heroImg from "../../../public/watyheader.svg";
import hamburgerIcon from "../../../public/hamburger-icon.svg";
import closeIcon from "../../../public/header-cancelbtn.svg";
import Form from "../form/Form";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog state
  
  const { settingsData } = fetchSettingsData();
  console.log('Settings Data=>>',settingsData);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const toggleDialog = () => setIsDialogOpen((prev) => !prev);

  return (
    <section
      className="bg-cover bg-center lg:h-[1500px] md:h-[1700px] xl:h-[1400px] max-sm:h-[1700px] text-white"
      style={{ backgroundImage: `url(${header_background.src})` }}
    >
      
     {/* Header */}

      <header className="bg-black relative top-6 text-white border border-white border-opacity-10 rounded-xl mx-auto flex items-center justify-between  xl:w-[494px] lg:w-[494px] md:w-[494px] p-4">
        <Image
          className="logo ml-4"
          src={settingsData?.logo?.image}
          alt="Logo"
          width={31.33}
          height={31.27}
        />

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="sm:block md:hidden p-2 focus:outline-none z-30"
        >
          <Image
            src={menuOpen ? closeIcon : hamburgerIcon}
            alt="Menu Toggle"
            width={24}
            height={24}
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="hover:text-gray-400 text-base font-primary"
          >
            {settingsData?.headerItems?.[0]?.navTitle}
          </a>
          <a
            href="#events"
            className="hover:text-gray-400 text-base font-primary"
          >
            {settingsData?.headerItems?.[1]?.navTitle} 
          </a>
          <a
            href="#courses"
            className="hover:text-gray-400 text-base font-primary"
          >
            {settingsData?.headerItems?.[2]?.navTitle} 
          </a>
          <a
            href="#gallery"
            className="hover:text-gray-400 text-base font-primary mr-10"
          >
            {settingsData?.headerItems?.[3]?.navTitle} 
          </a>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden space-y-6 z-10">
            <a
              onClick={toggleMenu}
              href="#about"
              className="hover:text-gray-400 text-lg font-primary"
            >
              {settingsData?.headerItems?.[0]?.navTitle} 
            </a>
            <a
              onClick={toggleMenu}
              href="#events"
              className="hover:text-gray-400 text-lg font-primary"
            >
              {settingsData?.headerItems?.[1]?.navTitle } 
            </a>
            <a
              onClick={toggleMenu}
              href="#courses"
              className="hover:text-gray-400 text-lg font-primary"
            >
              {settingsData?.headerItems?.[2]?.navTitle } 
            </a>
            <a
              onClick={toggleMenu}
              href="#gallery"
              className="hover:text-gray-400 text-lg font-primary"
            >
              {settingsData?.headerItems?.[3]?.navTitle || 'Gallery'} 
            </a>
          </nav>
        )}
      </header>

      {/* landing page */}

      <div>
        <Image
          src={heroImg}
          width={100}
          height={100}
          alt="heroImg"
          className="mx-auto mt-32"
        />

        {/* Landing Page */}

        {/* <div className="flex justify-center items-center h-full">
  <button className="darksoul-glowing-button1 text-white text-xl tracking-wide bg-black p-3 pl-4 pr-4 font-bold leading-5 rounded-full border border-white border-opacity-10 relative bottom-4 font-primary box-border max-sm:z-0">
 
  </button>
</div> */}

<div className="darksoul-glowing-button1 relative group cursor-pointer">
  <div
    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
  ></div>
  <button
    className="relative darksoul-button1 text-btn tracking-wide bg-black font-bold leading-5 rounded-full border border-white font-primary box-border max-sm:z-0 px-6 py-3"
    type="button"
  >
     Wat&apos;y Learning Hub
  </button>
</div>


        <h1 className="font-bold text-center w-full mt-5 font-primary text-header max-sm:text-[20px]">
          Unlock Your Potential <br />
          with Expert-Led Online Courses
        </h1>
        <p className="text-paraColor text-center mt-8 text-lg max-sm:text-[15px] font-secondary">
          Empowering you with quality education, anytime, anywhere. <br />
          Join thousands of learners transforming their lives through courses
          that matter!
        </p>

        <div className="flex items-center justify-center gap-8 mt-10 mb-10 xl:mb-0 lg:mb-0">
          <button
            onClick={toggleDialog}
            className="bg-white text-black rounded-3xl pt-2 pb-2 pl-3 pr-3 max-sm:p-2 flex items-center justify-center gap-3 px-6 py-2 transition-all duration-300"
          >
            <Image
              src={arrow}
              width={30}
              height={30}
              alt={arrow}
              className="mx-auto"
            />
            <h6 className="font-secondary box-border">Get Started</h6>
            {/* Dialog Box */}
            {isDialogOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <Form onClose={toggleDialog} />{" "}
                {/* Pass close function to Form */}
              </div>
            )}
          </button>

          <button className="bg-white/15 border-2 border-white/15 text-white rounded-3xl pt-3 pb-3 pl-4 pr-4 max-sm:p-3 flex items-center justify-center gap-3 font-secondary box-border">
            <a href="#courses">Browse Courses</a>
          </button>
        </div>
      </div>

      {/* Aboutsection */}

      <section className="lg:pt-0 xl:pt-20" id="about">
        <div className="flex flex-col-reverse lg:flex-row items-center p-8 rounded-3xl max-w-5xl mx-auto border-2 border-white/25 shadow-lg lg:w-[80%] md:w-[80%] max-sm:w-[80%] bg-bgColor text-white relative xl:top-10 lg:top-10 md:top-0 sm:top-0 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-0">
          <div className="flex-1 md:text-left sm:text-left">
            <h2 className="font-tertiary text-3xl font-bold pb-2 text-ab max-sm:text-[20px] text-innovaColor">
              About
            </h2>
            <h1 className="font-primary text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 pb-2 text-ab max-sm:text-[25px]">
            Wat&apos;y Learning Hub
            </h1>
            <p className=" font-secondary text-xl xl:w-[90%] lg:w-[90%] md:w-[100%] sm:w-[100%] text-para max-sm:text-[15px] text-innovaColor">
            Wat&apos;y Learning Hub empowers individuals through hands-on training
              in programming, software development, and essential soft skills.
              Our focus goes beyond employment, inspiring students to reach
              their full potential and drive innovation. <br />
              <br /> With experienced instructors, we prepare learners for
              success in the evolving digital world. Join us to shape the future
              through impactful education.
            </p>

            <div className="flex flex-row gap-10 pt-7">
              <div className="flex flex-col">
                <span className="font-primary text-4xl max-sm:text-[30px] font-bold text-innovaColor">
                  5+
                </span>
                <span className="font-secondary text-lg max-sm:text-[15px] text-innovaColor">
                  Years of Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-primary text-4xl max-sm:text-[30px]  font-bold text-innovaColor">
                  50+
                </span>
                <span className="font-secondary text-lg max-sm:text-[15px] text-innovaColor">
                  Students Trained
                </span>
              </div>
            </div>
          </div>

          <div>
            <Image src={AboutImg} alt="AboutImg" width={400} height={309.06} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
