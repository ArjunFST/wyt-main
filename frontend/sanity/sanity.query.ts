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