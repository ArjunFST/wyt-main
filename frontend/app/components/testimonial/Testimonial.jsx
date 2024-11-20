"use client";
import { fetchWatyLearningHomepageData } from "@/app/hooks/pageData";
import Image from "next/image";
import Testimonial_background from "../../../public/testimonialbackgroundimg.svg";
import EnhancedShimmer from "../shimmer/enhancedShimmer";

const Testimonial = () => {
  const { watyLearningData } = fetchWatyLearningHomepageData();
  const { title = "", items = [] } = watyLearningData?.testimonials || {};
  const isLoading = !watyLearningData;

  // Shimmer card for loading state
  const ShimmerCard = () => (
    <div className="bg-gray-800/50 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-gray-700 rounded-xl p-5">
      {/* Quote Shimmer */}
      <div className="space-y-2">
        <EnhancedShimmer className="h-3 w-full rounded" />
        <EnhancedShimmer className="h-3 w-[90%] rounded" />
        <EnhancedShimmer className="h-3 w-[80%] rounded" />
      </div>

      {/* Profile Shimmer */}
      <div className="flex gap-3 pt-5 items-center">
        <EnhancedShimmer className="w-8 h-8 rounded-full" />
        <div className="space-y-2">
          <EnhancedShimmer className="h-2 w-24 rounded" />
          <EnhancedShimmer className="h-2 w-20 rounded" />
        </div>
      </div>
    </div>
  );

  // Array of 6 items for shimmer loading
  const shimmerCount = Array.from({ length: 6 }, (_, index) => index);

  return (
    <section
      className="bg-cover bg-center 2xl:h-[900px] xl:h-[900px] lg:h-[900px] md:h-[900px] sm:h-screen text-white"
      style={{ backgroundImage: `url(${Testimonial_background.src})` }}
    >
      {/* Title */}
      <h1 className="text-center text-testiColor font-primary text-testHeading max-sm:text-[25px] font-semibold pt-20 max-xl:pt-10 max-sm:pt-20">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2">
            <EnhancedShimmer className="h-8 w-96 max-sm:w-64 rounded-lg" />
            <EnhancedShimmer className="h-8 w-64 max-sm:w-48 rounded-lg" />
          </div>
        ) : (
          title
        )}
      </h1>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-10 mt-20 max-sm:mt-10">
        {isLoading ? (
          // Map through shimmerCount array to create shimmer cards
          shimmerCount.map((index) => (
            <ShimmerCard key={`shimmer-${index}`} />
          ))
        ) : (
          items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-testimonial 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] max-sm:w-[60%] h-[180px] border-2 border-white/35 rounded-xl p-5"
            >
              <p className="font-secondary font-semibold text-sm text-testiColor">
                "{testimonial.review}"
              </p>

              <div className="flex gap-3 pt-5 items-center">
                <div>
                  <Image 
                    src={testimonial.reviewerImage} 
                    width="32"
                    height="32"
                    alt={testimonial.reviewer} 
                  />
                </div>
                <div>
                  <h2 className="font-secondary text-xs text-testiColor">
                    {testimonial.reviewer}
                  </h2>
                  <p className="font-secondary text-card text-testiColor/80">
                    {testimonial.reviewerRole}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Testimonial;