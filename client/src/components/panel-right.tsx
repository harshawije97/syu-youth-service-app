"use client";

import React from "react";
import { MessageCardProps } from "./data-card";
import { Card, CardContent, CardHeader } from "./ui/card";
import { QrCode } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs } from "radix-ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface PanelRightProps {
  selected?: MessageCardProps | null;
}

function PanelRight({ selected }: PanelRightProps) {
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
              {selected ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base">
                      {selected.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {selected.timestamp}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{selected.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {selected.preview}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {selected.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Select a message to see its details.
                </p>
              )}
            </TabsContent>

            <TabsContent value="actions" className="mt-4 gap-3">
              <div className="w-full flex gap-x-4">
                <Button className="w-max">
                    Send by WhatsApp
                </Button>
                <Button variant="destructive">
                  Reject Record
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
