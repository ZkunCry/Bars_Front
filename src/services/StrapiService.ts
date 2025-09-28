import { STRAPI_API } from "@/src/constants/api";
import { fetchWithTimeout } from "../lib/utils";
// import { logger } from "../lib/logger";
export const StrapiService = {
  async getPrices() {
    try {
      const resProfiles = await fetch(`${STRAPI_API}/services`);
      const resMultipliers = await fetch(`${STRAPI_API}/services`);

      if (!resProfiles.ok || !resMultipliers.ok) {
        throw new Error(`Strapi API error: ${resProfiles.status} ${resProfiles.statusText}`);
      }

      return {profiles: await resProfiles.json(), multipliers: await resMultipliers.json()};
    } catch (error) {
      console.error("StrapiService.getPrices failed:", error);
      throw error;
    }
  },
  async getServices() {
    try {
      const res = await fetch(`${STRAPI_API}/services`, {
        next: {
          tags: ["services"],
        },
      });

      if (!res.ok) {
        throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
      }

      return await res.json();
    } catch (error) {
      console.error("StrapiService.getServices failed:", error);
      throw error;
    }
  },
  async getAllCards() {
    try {
      const res = await fetchWithTimeout(`${STRAPI_API}/cards`);

      if (!res.ok) {
        throw new Error(`Ошибка при запросе товаров: статус ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      // logger.error({
      //   event: "catalog_service_error",
      //   info: {
      //     endpoint: "getAllCards",
      //     message: error.message,
      //   },
      // });
      throw error;
    }
  },
  async getCategoryByName(name: string) {
    try {
      const res = await fetchWithTimeout(
        `${STRAPI_API}/categories?name=${name}`
      );

      if (!res.ok) {
        throw new Error(`Ошибка при запросе категории: статус ${res.status}`);
      }

      const categories = await res.json();
      return categories.length > 0 ? categories[0] : null;
    } catch (error) {
      // logger.error({
      //   event: "catalog_service_error",
      //   info: {
      //     endpoint: "getCategoryByName",
      //     name,
      //     message: error.message,
      //   },
      // });
      throw error;
    }
  },
};
