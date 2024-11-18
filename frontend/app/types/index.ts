// types/index.ts

export type SettingsType = {
    _id: string,
    siteName: string,
    address: string,
    footerDescription: string,
    rightReservedText: string,
    logo: {
      alt: string,
      image: string
    },
    headerItems: {
      _key: string,
      _type: string,
      navTitle: string,
    }[],
    externalLinks: {
      _key: string,
      _type: string,
      externalLinkImage: string,
      externalUrl: string,
    }[],
  };

  export type WatyLearningHomepageType = {
    title: string;
    header: {
      headerTitle: string;
      headerDescription: string;
      firstLinkTitle: string;
      secondLinkTitle: string;
    };
    about: {
      aboutTitle: string;
      aboutDescription: string;
      aboutContent: string;
      firstLinkTitle: string;
      firstLinkDescription: string;
      secondLinkTitle: string;
      secondLinkDescription: string;
      image: {
        alt: string,
        image: string
      };
    };
    vision: {
      title: string;
      description: string;
      items: {
        title: string;
        description: string;
        image: string;
      }[];
    };
    events: {
      title: string;
      items: {
        courseTitle: string;
        CourseDescription: string;
        courseDate: string;
        coursePeriod: string;
        image: string;
      }[];
    };
    courses: {
      title: string;
      subTitle: string;
      description: string;
      items: {
        courseCategory: string;
        courses: {
          courseTitle: string;
          courseDuration: string;
          Tag: string;
          image: string;
        }[];
      }[];
    };
    testimonials: {
      title: string;
      items: {
        reviewer: string;
        reviewerRole: string;
        review: string;
        reviewerImage: string;
      }[];
    };
    gallery: {
      title: string;
      items: {
        image: string;
      }[];
    };
  };