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