"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs } from "radix-ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MessageCardProps, SearchParams } from "@/lib/utils";

interface PanelRightProps {
  selected: SearchParams;
}

function PanelRight({ selected }: PanelRightProps) {
  console.log("selected", selected);
  return (
    <section className="w-full h-full flex justify-center p-6">
      <Card className="2xl:w-195 xl:w-full h-full flex flex-col overflow-hidden">
        {/* Top section - QR code */}
        <CardHeader className="flex items-center justify-center border-b py-10 shrink-0">
          <div className="w-40 h-40 flex items-center justify-center border rounded-md bg-white">
            {/* Replace with your real QR code component/lib */}
            <QrCode className="w-24 h-24 text-foreground" strokeWidth={1} />
          </div>
        </CardHeader>

        {/* Bottom section - Tabs */}
        <CardContent className="flex-1 overflow-y-auto pt-6">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-4 flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                Select a message to see its details.
              </p>
            </TabsContent>

            <TabsContent value="actions" className="mt-4 gap-3">
              <div className="w-full flex gap-x-4">
                <Button className="w-max">Send by WhatsApp</Button>
                <Button variant="destructive">Reject Record</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}

export default PanelRight;
