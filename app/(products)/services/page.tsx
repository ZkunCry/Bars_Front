import { Container } from "@/src/components/ui";
import { PricingTable } from "@/src/components/features";

export default async function Page() {
  const services = await fetch(
    `$${process.env.NEXT_PUBLIC_STRAPI_API_URL}/services`
  )
    .then((res) => res.json())
    .catch(() => null);
  const hasServices = Array.isArray(services) && services.length > 0;

  return (
    <section className="mt-[1.564rem] md:min-h-[795px] min-h-dvh pt-[97px] ">
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
      </Container>
    </section>
  );
}
