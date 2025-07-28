import { Container } from "@/src/components/ui";

export default function Page() {
  return (
    <section className="flex flex-col mt-[1.564rem] md:min-h-[795px] min-h-dvh pt-[97px]">
      <Container>
        <h1 className="font-extrabold text-[clamp(2rem,4.5vw+0.5rem,4rem)] leading-[clamp(2.5rem,4.5vw+0.5rem,4.5rem)] py-[2.65rem] opacity-0 animate-fade-in">
          Страница находится на стадии разработки
        </h1>
      </Container>
    </section>
  );
}
