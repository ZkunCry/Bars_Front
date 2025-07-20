import { SemanticHeaderProducts } from "@/src/components/semantic";
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SemanticHeaderProducts />
      <main className="flex-1"> {children}</main>
    </>
  );
}
