"use client";

import { SearchParams } from "@/lib/utils";
import { QRCodeSVG } from "qrcode.react";

interface QRGeneratorProps {
  data: SearchParams;
  size?: number;
}

function QRGenerator({ data, size }: QRGeneratorProps) {
  return (
    <div className="w-max">
      <QRCodeSVG value={JSON.stringify(data)} size={size || 200} />
    </div>
  );
}

export default QRGenerator;
