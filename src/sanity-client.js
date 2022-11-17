import SanityClient from "@sanity/client";

export const sanityClient = SanityClient({
  projectId: "rj21h13r",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});
