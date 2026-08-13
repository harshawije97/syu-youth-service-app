"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export interface MessageCardProps {
  name: string;
  timestamp: string;
  subject: string;
  preview: string;
  tags: string[];
  unread?: boolean;
}

function DataCard({
  name,
  timestamp,
  subject,
  preview,
  tags,
}: MessageCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer border shadow-none transition-colors w-full",
        "hover:bg-gray-50",
      )}
    >
      <CardHeader className="gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-semibold">{name}</CardTitle>
          </div>
          <span className="text-xs text-muted-foreground shrink-0">
            {timestamp}
          </span>
        </div>
        <p className="text-sm font-medium text-foreground">{subject}</p>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{preview}</p>
      </CardContent>

      <CardFooter className="gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="font-medium">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

export default DataCard;
