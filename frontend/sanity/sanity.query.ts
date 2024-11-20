// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "../sanity/sanity.client";

export async function getSettings() {
  return client.fetch(
    groq`*[_type == "settings"][0]{
      _id,
      siteName,
      address,
      footerDescription,
      rightReservedText,
      logo {alt, "image": asset->url},
      headerItems[]{
        _key,
        _type,
        navTitle
      },
      externalLinks[]{
        _key,
        _type,
        "externalLinkImage": externalLinkImage.asset->url,
        externalUrl
      }
    }`
  );
}

export async function getWatyLearningHomepage() {
  return client.fetch(
    groq`*[_type == "watYLearn" && identifier.current == "home_page"][0]{
      title,
      "header": items[_type == "header"][0]{
        headerTitle,
        headerDescription,
        firstLinkTitle,
        secondLinkTitle
      },
      "about": items[_type == "about"][0]{
        aboutTitle,
        aboutDescription,
        aboutContent,
        firstLinkTitle,
        firstLinkDescription,
        secondLinkTitle,
        secondLinkDescription,
        image {alt, "image": asset->url}
      },
      "vision": items[_type == "vision"][0]{
        title,
        description,
        "items": items[]{
          title,
          description,
          "image": image.asset->url
        }
      },
      "events": items[_type == "events"][0]{
        title,
        "items": items[]{
          courseTitle,
          CourseDescription,
          courseDateTitle,
          courseDate,
          coursePeriodTitle,
          coursePeriod,
          enrollNowAction,
          "image": image.asset->url
        }
      },
      "courses": items[_type == "course"][0]{
        title,
        subTitle,
        description,
        "items": items[]{
          courseCategory,
          "courses": items[]{
            courseTitle,
            courseDuration,
            Tag,
            "image": image.asset->url
          }
        }
      },
      "testimonials": items[_type == "testimonials"][0]{
        title,
        "items": items[]{
          reviewer,
          reviewerRole,
          review,
          "reviewerImage": reviewerImage.asset->url
        }
      },
      "gallery": items[_type == "gallery"][0]{
        title,
        "items": items[]{
          "image": image.asset->url
        }
      }
    }`
  );
}