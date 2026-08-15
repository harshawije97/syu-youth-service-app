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
      const pixels = qrSize * scale;
      const line1 = "Greetings from SYU Youth Team";
      const line2 = "Use this QR at the entrance";

      const padding = 20 * scale;
      const textAreaHeight = 60 * scale;
      const canvasWidth = pixels + padding * 2;
      const canvasHeight = pixels + padding * 2 + textAreaHeight;

      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // white background (SVG has transparent bg by default)
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // draw QR code, centered horizontally
      ctx.drawImage(img, padding, padding, pixels, pixels);

      URL.revokeObjectURL(url);

      // draw the caption text
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const fontSize = 14 * scale;
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillText(
        line1,
        canvasWidth / 2,
        pixels + padding + textAreaHeight * 0.35,
      );

      ctx.font = `${fontSize * 0.85}px sans-serif`;
      ctx.fillText(
        line2,
        canvasWidth / 2,
        pixels + padding + textAreaHeight * 0.65,
      );

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
