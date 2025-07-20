import { Container } from "@/src/components/ui";
import { Sidebar } from "@/src/components/features";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[1.564rem] md:min-h-[795px] min-h-dvh pt-[97px] ">
      <Container>
        <div className="flex flex-col mb-[0.75rem]">
          <h1
            className="font-extrabold text-[clamp(2rem,4.5vw+0.5rem,4rem)] leading-[clamp(2.5rem,4.5vw+0.5rem,4.5rem)] py-[2.65rem] opacity-0 animate-fade-in"
            style={{ animationDelay: "450ms" }}
          >
            Выберите то, что <br /> подойдёт именно вам
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 p-4 animate-fade-in opacity-0"
          style={{ animationDelay: "700ms" }}
        >
          <Sidebar />
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 ">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
