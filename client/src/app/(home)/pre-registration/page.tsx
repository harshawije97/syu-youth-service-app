import PreLoaderPage from "@/app/pre-load";
import PanelLeft from "@/components/panel-left";
import PanelRightWrapper from "@/components/panel-right-wrapper";
import { mapRecords } from "@/services/data-mapper";
import { getPreRecords } from "@/services/get-pre-records";
import { Suspense } from "react";

async function PreRegistrationPage() {
  const records = await getPreRecords();
  const mappedRecords = mapRecords(records);
  // const json = stringifyRecords(mappedRecords);

  return (
    <div className="w-full h-screen grid grid-cols-[480px_1fr] gap-x-4">
      <Suspense fallback={<PreLoaderPage />}>
        <PanelLeft data={mappedRecords} />
        <PanelRightWrapper />
      </Suspense>
    </div>
  );
}

export default PreRegistrationPage;
