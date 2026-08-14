"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs } from "radix-ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { SearchParams } from "@/lib/utils";
import QRGenerator from "./qr-generate";

interface PanelRightProps {
  selected: SearchParams;
}

function PanelRight({ selected }: PanelRightProps) {
  return (
    <section className="w-full h-full flex justify-center p-6">
      <Card className="2xl:w-195 xl:w-full h-full flex flex-col overflow-hidden">
        {/* Top section - QR code */}
        <CardHeader className="flex items-center justify-center border-b shrink-0">
          <div className="w-40 h-full flex items-center justify-center border rounded-md bg-white">
            {/* Replace with your real QR code component/lib */}
            <QRGenerator data={selected} />
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
              <ul className="flex flex-col gap-2 w-full pt-6">
                <li>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">ID:</span> {selected.id}
                  </p>
                </li>
                <li>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Name:</span> {selected.name}
                  </p>
                </li>
                <li>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Contact:</span>{" "}
                    {selected.contact}
                  </p>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="actions" className="mt-4 gap-3">
              <div className="w-full flex gap-x-4 pt-8">
                <Button className="w-max">Send by WhatsApp</Button>
                <Button variant="destructive">Reject Record</Button>
                <Button
                  variant="outline"
                  className="w-max text-blue-600 bg-blue-100"
                >
                  <Download className="mr-2 h-4 w-4" /> Download QR Code
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}

export default PanelRight;
