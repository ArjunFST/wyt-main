"use client";
import { useState } from "react";
import { fetchSettingsData } from "@/app/hooks/settingsData";
import { fetchWatyLearningHomepageData } from "@/app/hooks/pageData";
import Image from "next/image";
import header_background from "../../../public/page3.svg";
import arrow from "../../assets/Frame 1000001083.png";
import hamburgerIcon from "../../../public/hamburger-icon.svg";
import closeIcon from "../../../public/header-cancelbtn.svg";
import Form from "../form/Form";
import EnhancedShimmer from "../shimmer/enhancedShimmer"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const { watyLearningData } = fetchWatyLearningHomepageData();
  const { settingsData } = fetchSettingsData();
  
  const headerData = watyLearningData?.header;
  const aboutData = watyLearningData?.about;

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDialog = () => setIsDialogOpen((prev) => !prev);

  const isSettingsLoading = !settingsData;
  const isWatyDataLoading = !watyLearningData;

  return (
    <section
      className="bg-cover bg-center lg:h-[1500px] md:h-[1700px] xl:h-[1400px] max-sm:h-[1700px] text-white"
      style={{ backgroundImage: `url(${header_background.src})` }}
    >
      {/* Header */}
      <header className="bg-black relative top-6 text-white border border-white border-opacity-10 rounded-xl mx-auto flex items-center justify-between xl:w-[494px] lg:w-[494px] md:w-[494px] p-4">
        {/* Logo */}
        {isSettingsLoading ? (
          <EnhancedShimmer className="w-8 h-8 rounded-full ml-4" />
        ) : (
          <Image
            className="logo ml-4"
            src={settingsData?.logo?.image}
            alt="Logo"
            width={31.33}
            height={31.27}
          />
        )}

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
          {isSettingsLoading ? (
            Array(4).fill(0).map((_, index) => (
              <EnhancedShimmer 
                key={index} 
                className="w-20 h-4 rounded"
              />
            ))
          ) : (
            settingsData?.headerItems?.map((item, index) => (
              <a
                key={index}
                href={`#${item.navTitle.toLowerCase()}`}
                className={`hover:text-gray-400 text-base font-primary ${
                  index === settingsData.headerItems.length - 1 ? "mr-10" : ""
                }`}
              >
                {item.navTitle}
              </a>
            ))
          )}
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden space-y-6 z-10">
            {isSettingsLoading ? (
              Array(4).fill(0).map((_, index) => (
                <EnhancedShimmer 
                  key={index} 
                  className="w-24 h-6 rounded"
                />
              ))
            ) : (
              settingsData?.headerItems?.map((item, index) => (
                <a
                  key={index}
                  onClick={toggleMenu}
                  href={`#${item.navTitle.toLowerCase()}`}
                  className="hover:text-gray-400 text-lg font-primary"
                >
                  {item.navTitle}
                </a>
              ))
            )}
          </nav>
        )}
      </header>

      {/* Landing page */}
      <div>
        {isSettingsLoading ? (
          <EnhancedShimmer className="w-24 h-24 mx-auto mt-32 rounded-full" />
        ) : (
          <Image
            src={settingsData?.logo?.image}
            width={100}
            height={100}
            alt="heroImg"
            className="mx-auto mt-32"
          />
        )}

        <div className="darksoul-glowing-button1 relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button
            className="relative darksoul-button1 text-btn tracking-wide bg-black font-bold leading-5 rounded-full border border-white font-primary box-border max-sm:z-0 px-6 py-3"
            type="button"
          >
            {isSettingsLoading ? (
              <EnhancedShimmer className="w-42 h-6 rounded" />
            ) : (
              settingsData?.siteName
            )}
          </button>
        </div>

        {/* Header Content */}
        {isWatyDataLoading ? (
  <div className="space-y-6 mt-5">
    <EnhancedShimmer className="h-12 w-3/4 mx-auto rounded" /> {/* Header Title */}
    <EnhancedShimmer className="h-16 w-2/3 mx-auto rounded" /> {/* Header Description */}
  </div>
) : (
  <>
    {/* Header Title with Two Lines */}
    <h1
      className="font-bold text-center mt-5 font-primary text-header max-sm:text-[20px] 
        leading-snug mx-auto line-clamp-2"
    >
      <span className="block w-3/4 mx-auto"> {/* First Line with narrower width */}
        {headerData?.headerTitle.split(" ").slice(0,3)} {/* Example: Split for demo purposes */}
      </span>
      <span className="block w-full mx-auto"> {/* Second Line with full width */}
        {headerData?.headerTitle.split(" ").slice(3).join(" ")} {/* Rest of the title */}
      </span>
    </h1>

    {/* Header Description */}
    <p
      className="text-paraColor text-center mt-8 text-lg max-sm:text-[15px] font-secondary 
        leading-relaxed max-w-2xl mx-auto line-clamp-2"
    >
      {headerData?.headerDescription}
    </p>
  </>
)}




        {/* Buttons */}
        <div className="flex items-center justify-center gap-8 mt-10 mb-10 xl:mb-0 lg:mb-0">
          {isWatyDataLoading ? (
            <>
              <EnhancedShimmer className="w-32 h-10 rounded-3xl" />
              <EnhancedShimmer className="w-32 h-10 rounded-3xl" />
            </>
          ) : (
            <>
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
                <h6 className="font-secondary box-border">{headerData?.firstLinkTitle}</h6>
              </button>

              <button className="bg-white/15 border-2 border-white/15 text-white rounded-3xl pt-3 pb-3 pl-4 pr-4 max-sm:p-3 flex items-center justify-center gap-3 font-secondary box-border">
                <a href="#courses">{headerData?.secondLinkTitle}</a>
              </button>
            </>
          )}
          
          {/* Dialog Box */}
          {isDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <Form onClose={toggleDialog} />
            </div>
          )}
        </div>
      </div>

      {/* About section */}
      <section className="lg:pt-0 xl:pt-20" id="about">
        <div className="flex flex-col-reverse lg:flex-row items-center p-8 rounded-3xl max-w-5xl mx-auto border-2 border-white/25 shadow-lg lg:w-[80%] md:w-[80%] max-sm:w-[80%] bg-bgColor text-white relative xl:top-10 lg:top-10 md:top-0 sm:top-0 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-0">
          {isWatyDataLoading ? (
            // About Section Shimmer
            <div className="w-full flex flex-col-reverse lg:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <EnhancedShimmer className="h-8 w-3/4 rounded" /> {/* About Title */}
                <EnhancedShimmer className="h-10 w-full rounded" /> {/* About Description */}
                <EnhancedShimmer className="h-32 w-full rounded" /> {/* About Content */}
                
                {/* Stats Shimmer */}
                <div className="flex flex-row gap-10 pt-7">
                  <div className="flex flex-col gap-2">
                    <EnhancedShimmer className="h-10 w-24 rounded" />
                    <EnhancedShimmer className="h-6 w-20 rounded" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <EnhancedShimmer className="h-10 w-24 rounded" />
                    <EnhancedShimmer className="h-6 w-20 rounded" />
                  </div>
                </div>
              </div>
              
              {/* About Image Shimmer */}
              <div className="lg:w-[400px] lg:h-[309px]">
                <EnhancedShimmer className="w-full h-full rounded-lg" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 md:text-left sm:text-left">
                <h2 className="font-tertiary text-3xl font-bold pb-2 text-ab max-sm:text-[20px] text-innovaColor">
                  {aboutData?.aboutTitle}
                </h2>
                <h1 className="font-primary text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 pb-2 text-ab max-sm:text-[25px]">
                  {aboutData?.aboutDescription}
                </h1>
                <p className="font-secondary text-xl xl:w-[90%] lg:w-[90%] md:w-[100%] sm:w-[100%] text-para max-sm:text-[15px] text-innovaColor">
                  {aboutData?.aboutContent}
                </p>

                <div className="flex flex-row gap-10 pt-7">
                  <div className="flex flex-col">
                    <span className="font-primary text-4xl max-sm:text-[30px] font-bold text-innovaColor">
                      {aboutData?.firstLinkDescription}
                    </span>
                    <span className="font-secondary text-lg max-sm:text-[15px] text-innovaColor">
                      {aboutData?.firstLinkTitle}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-primary text-4xl max-sm:text-[30px] font-bold text-innovaColor">
                      {aboutData?.secondLinkDescription}
                    </span>
                    <span className="font-secondary text-lg max-sm:text-[15px] text-innovaColor">
                      {aboutData?.secondLinkTitle}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                {aboutData?.image?.image && (
                  <Image src={aboutData.image.image} alt="AboutImg" width={400} height={309.06} />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default Header;