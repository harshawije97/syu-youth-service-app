"use client";

import { SearchParams } from "@/lib/utils";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface QRGeneratorProps {
  data: SearchParams;
  size?: number;
}

function QRGenerator({ data, size }: QRGeneratorProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const qrSize = size || 200;

  const downloadAsPNG = () => {
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();

    img.onload = () => {
      // Use a scale factor for higher resolution output
      const scale = 4;
      const canvas = document.createElement("canvas");
      canvas.width = qrSize * scale;
      canvas.height = qrSize * scale;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // white background (SVG has transparent bg by default)
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        link.download = `${String(data.name).split(" ").join("_")}_${uuidv4()}_qrcode.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      });
    };
    img.src = url;
  };

  return (
    <div className="w-full flex flex-row gap-4">
      <div ref={containerRef} className="w-max">
        <QRCodeSVG value={JSON.stringify(data)} size={qrSize} />
      </div>
      <div className="flex flex-col h-full items-center justify-center gap-2 mt-2">
        <Button
          onClick={downloadAsPNG}
          className="px-3 py-1 border rounded text-blue-600 bg-blue-100"
          variant="outline"
        >
          <Download className="mr-2 h-4 w-4" />
          Download QR Code
        </Button>
      </div>
    </div>
  );
}

export default QRGenerator;
