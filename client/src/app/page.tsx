import { EmptyState } from "@/components/empty-state";
import PanelLeft from "@/components/panel-left";
import PanelRight from "@/components/panel-right";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-[480px_1fr] gap-x-4">
      <PanelLeft />
      <PanelRight />
      <div className="w-full h-full p-6 bg-gray-50">
        <EmptyState />
      </div>
    </div>
  );
}
