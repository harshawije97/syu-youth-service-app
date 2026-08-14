import Navbar from "@/components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
