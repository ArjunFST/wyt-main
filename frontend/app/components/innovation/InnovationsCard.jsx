"use client";
import { fetchWatyLearningHomepageData } from "@/app/hooks/pageData";
import innova from "../../../public/framepaper1.svg";
import Image from "next/image";
import EnhancedShimmer from "../shimmer/enhancedShimmer";
import ShimmerCard from "../shimmer/shimmerCard";

const InnovationsCard = () => {
  const { watyLearningData } = fetchWatyLearningHomepageData();
  const { 
    title = "", 
    description = "", 
    items = [] 
  } = watyLearningData?.vision || {};
  const isLoading = !watyLearningData;

  return (
    <section className="bg-bgColor h-auto border-b-2 border-white border-opacity-10">
      <div
        style={{ backgroundImage: `url(${innova.src})` }}
        className="bg-cover bg-center flex flex-col items-center py-12 px-6 lg:px-12 xl:px-24"
      >
        {isLoading ? (
          <>
            {/* Title shimmer */}
            <EnhancedShimmer className="w-3/4 md:w-1/2 h-12 mb-4" />
            
            {/* Description shimmer */}
            <EnhancedShimmer className="w-full max-w-4xl h-20 mb-10" />
          </>
        ) : (
          <>
            <h1 className="font-tertiary font-bold text-2xl md:text-3xl lg:text-4xl max-sm:text-[20px] text-center tracking-wide text-innovaColor mb-4 sm:text-xs">
              {title}
            </h1>
            <p className="font-secondary text-lg md:text-xl lg:text-xl text-center max-w-4xl max-sm:text-[15px] tracking-wide text-innovaColor mb-10">
              {description}
            </p>
          </>
        )}
        
        {/* Updated shimmer cards container */}
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {isLoading ? (
              // Show two shimmer cards while loading
              <>
                <ShimmerCard />
                <ShimmerCard />
              </>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(50%-1rem)] max-w-xl"
                >
                  {/* Background Image */}
                  <div className="relative">
                    <Image
                      src={item.image}
                      width="558"
                      height="399"
                      alt="Background"
                      className="rounded-lg w-full"
                    />
                    {/* Overlayed Text */}
                    <div className="absolute inset-0 flex flex-col justify-around items-start text-left p-6 md:p-8 text-white bg-opacity-50 rounded-lg">
                      <h2 className="font-primary font-bold text-2xl md:text-3xl lg:text-4xl max-sm:text-[15px] mb-4">
                        {item.title}
                      </h2>
                      <p className="text-base md:text-lg lg:text-xl max-sm:text-[12px] font-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsCard;