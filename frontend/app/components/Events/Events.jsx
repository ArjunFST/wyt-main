"use client";
import { fetchWatyLearningHomepageData } from "@/app/hooks/pageData";
import cards from "../../../public/card.svg";
import Image from "next/image";
import GlowingButton from "../GlowingButton/GlowingButton";
import EnhancedShimmer from "../shimmer/enhancedShimmer";

const Events = () => {
  const { watyLearningData } = fetchWatyLearningHomepageData();
  const { title, items } = watyLearningData?.events || { title: "Events", description: "", items: [] };
  
  const isLoading = !watyLearningData;

  // Shimmer card component for loading state
  const ShimmerCard = () => (
    <div className="flex flex-col md:flex-row items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10">
      <div className="bg-bgColor text-white rounded-2xl flex flex-col w-1/2">
        {/* Title shimmer */}
        <EnhancedShimmer className="h-8 w-3/4 mb-6" />
        
        {/* Description shimmer */}
        <EnhancedShimmer className="h-20 w-full mb-8" />
        
        {/* Button shimmer */}
        <EnhancedShimmer className="h-12 w-[150px] rounded-3xl" />
      </div>

      <div className="w-1/2">
        {/* Image shimmer */}
        <EnhancedShimmer className="h-[240px] w-[362.83px] rounded-xl" />
        
        {/* Date and time shimmer */}
        <div className="flex flex-row xl:gap-20 lg:gap-20 md:gap-20 sm:flex sm:justify-center gap-16 pt-10 pb-10">
          <span className="flex flex-col gap-2">
            <EnhancedShimmer className="h-4 w-20" />
            <EnhancedShimmer className="h-5 w-32" />
          </span>

          <span className="flex flex-col gap-2">
            <EnhancedShimmer className="h-4 w-20" />
            <EnhancedShimmer className="h-5 w-32" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="events"
      style={{ backgroundImage: `url(${cards.src})` }}
      className="bg-cover bg-center xl:h-[1200px] lg:[1200px] md:h-[1200px] sm:h-screen bg-bgColor"
    >
      <div className="flex justify-center items-center pt-16">
        {isLoading ? (
          <EnhancedShimmer className="h-12 w-40 rounded-3xl" />
        ) : (
          <GlowingButton className="border-2 border-white/10 px-9 bg-black/25 py-2 text-xl font-semibold tracking-widest rounded-3xl mb-5 text-white">
            EVENTS
          </GlowingButton>
        )}
      </div>

      <div>
        {isLoading ? (
          <EnhancedShimmer className="h-12 w-72 mx-auto mt-5" />
        ) : (
          <p className="text-boost 2xl:text-hawk xl:text-hawk lg:text-hawk md:text-hawk sm:text-xl text-center pt-5">
            {title}
          </p>
        )}
      </div>

      {isLoading ? (
        // Show two shimmer cards while loading
        <>
          <ShimmerCard />
          <ShimmerCard />
        </>
      ) : (
        items.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-around p-8 rounded-3xl xl:w-[864px] xl:h-[425.2px] lg:w-[864px] lg:h-[425.2px] md:w-full sm:w-full sm:h-auto mx-auto border border-white border-opacity-10 shadow-lg bg-bgColor text-white relative top-20 mb-10"
          >
            <div className="bg-bgColor text-white rounded-2xl flex flex-col">
              <h1 className="font-primary xl:text-2xl lg:text-2xl md:text-2xl font-semibold relative xl:bottom-16 lg:bottom-16 md:bottom-16 sm:relative bottom-0">
                {event.courseTitle}
              </h1>
              <p className="text-paraColor font-secondary text-sm relative xl:bottom-10 lg:bottom-10 md:bottom-10 sm:bottom-0 top-5">
                {event.CourseDescription}
              </p>
              <button className="bg-btnColor border rounded-3xl font-primary text-base max-sm:text-[12px] max-sm:px-1 max-sm:py-2 border-white border-opacity-10 whitespace-nowrap transition-all duration-200 hover:border-2 pt-3 pb-3 pl-6 pr-6 box-border w-[150px] relative xl:top-14 lg:top-14 md:top-14 sm:relative top-80 sm-custom:top-350">
                {event.enrollNowAction}
              </button>
            </div>

            <div>
              <Image
                src={event.image}
                width="428"
                height="240"
                alt="card-image"
                className="rounded-xl w-[362.83] object-contain"
              />
              <div className="flex flex-row xl:gap-20 lg:gap-20 md:gap-20 sm:flex sm:justify-center gap-16 pt-10 pb-10">
                <span className="flex flex-col">
                  <p className="font-secondary text-sm text-paraColor">{event.courseDateTitle}</p>
                  <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                    {event.courseDate}
                  </p>
                </span>

                <span className="flex flex-col">
                  <p className="font-secondary text-sm text-paraColor">{event.coursePeriodTitle}</p>
                  <p className="font-secondary text-base max-sm:text-sm text-paraColor">
                    {event.coursePeriod}
                  </p>
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Events;