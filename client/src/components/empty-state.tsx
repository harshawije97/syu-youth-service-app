"use client";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { QrCodeIcon } from "lucide-react";
import { Button } from "./ui/button";

export function EmptyState() {
  const onClickQR = () => {
    alert("Create QR Code");
  };
  const onClickImport = () => {
    alert("Import QR Code");
  };

  return (
    <>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <QrCodeIcon />
          </EmptyMedia>
          <EmptyTitle>No QR Codes Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any QR codes yet
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button type="button" onClick={onClickQR}>
            Create QR Code
          </Button>
          <Button type="button" onClick={onClickImport} variant="outline">Import QR Code</Button>
        </EmptyContent>
      </Empty>
    </>
  );
}
