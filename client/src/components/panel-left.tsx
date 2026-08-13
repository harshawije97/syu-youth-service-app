"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import DataCard, { MessageCardProps } from "./data-card";
import { dataItems } from "@/app/data";

function PanelLeft() {
  const messages: MessageCardProps[] = dataItems;
  return (
    <div className="w-full h-screen p-6 flex flex-col">
      <div className="sticky top-0 z-10 bg-background p-3 pb-4 border-b shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pt-4 flex flex-col gap-3 mb-10 mt-3">
        {messages.map((message, index) => (
          <div key={index} className="w-full">
            <DataCard {...message} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PanelLeft;
