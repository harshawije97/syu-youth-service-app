"use client";

import React from "react";
import { EmptyState } from "./empty-state";
import { useSearchParams } from "next/navigation";
import PanelRight from "./panel-right";

function PanelRightWrapper() {
  const params = useSearchParams();

  const searchParams = React.useMemo(
    () => ({
      id: params.get("id"),
      name: params.get("name"),
      contact: params.get("contact"),
    }),
    [params],
  );

  // console.log("searchParams", searchParams);

  return (
    <div className="w-full h-full p-6 bg-gray-50">
      {params.size > 0 ? (
        <PanelRight selected={searchParams} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default PanelRightWrapper;
