export const STRAPI_API =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_STRAPI_API_PROD
    : process.env.NEXT_STRAPI_API_DEV;
