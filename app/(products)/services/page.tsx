import { Container } from "@/src/components/ui";
import { BlockContactForm, PricingTable } from "@/src/components/features";
import { logger } from "@/src/lib/logger";
import { Metadata } from "next";
import { StrapiService } from "@/src/services/StrapiService";
import Head from "next/head";
import { jsonld } from "@/src/schemas/services";
export const revalidate = 60;
export const metadata: Metadata = {
  title: "Услуги по установке и монтажу оконных изделий | Барс - Сургут",
  description: "Профессиональные услуги по установке и монтажу оконных изделий",
};
export default async function Page() {
  let services = null;

  try {
    services = await StrapiService.getServices();
    logger.info({
      event: "page_services_success",
      info: {
        count: services?.length || 0,
        message: "Услуги успешно получены из Strapi",
      },
    });
  } catch (error) {
    // Обработка ошибок
    console.error("Services page error:", error);
    logger.error({
      event: "page_services_error",
      info: {
        message: `Ошибка при получении услуг: ${error.message}`,
      },
    });
  }

  const hasServices = Array.isArray(services) && services.length > 0;
  return (
    <section className="flex flex-col mt-[1.564rem] md:min-h-[795px] min-h-dvh pt-[97px] ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <Container>
        <div className="flex flex-col mb-[0.75rem]">
          <h1
            className="font-extrabold text-[clamp(2rem,4.5vw+0.5rem,4rem)] leading-[clamp(2.5rem,4.5vw+0.5rem,4.5rem)] py-[2.65rem] opacity-0 animate-fade-in"
            style={{ animationDelay: "450ms" }}
          >
            Услуги по установке и <br /> монтажу оконных изделий
          </h1>
        </div>

        {hasServices ? (
          <div
            className="animate-fade-in opacity-0"
            style={{ animationDelay: "700ms" }}
          >
            <PricingTable pricingList={services} />
            <div className="flex flex-col mt-[80px] mb-[30px]">
              <h2 className="font-extrabold text-[2rem] leading-[2.5rem]">
                При установке отдельно от конструкции
              </h2>

              <PricingTable pricingList={services} />
            </div>
          </div>
        ) : (
          <p
            className="text-center text-gray-500 mt-10 animate-fade-in opacity-0"
            style={{ animationDelay: "700ms" }}
          >
            К сожалению, услуги пока недоступны.
          </p>
        )}
        <div className="flex items-center justify-center my-[100px]">
          <BlockContactForm />
        </div>
      </Container>
    </section>
  );
}
