"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn, MessageCardProps } from "@/lib/utils";
import { Badge } from "./ui/badge";

function DataCard({
  id,
  fullName,
  contactNo,
  gnDivision,
  timestamp,
}: MessageCardProps) {
  const userId = String(Number(id) + 1);

  return (
    <Card
      className={cn(
        "cursor-pointer border shadow-none transition-colors w-full",
        "hover:bg-gray-50",
      )}
      onClick={() => {
        window.history.pushState(null, "", `?id=${userId}&name=${fullName}&contact=${contactNo}`);
      }}
    >
      <CardHeader className="gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-semibold">
              {fullName}
            </CardTitle>
          </div>
          <span className="text-xs text-muted-foreground shrink-0">
            {timestamp}
          </span>
        </div>
        <p className="text-sm font-medium text-foreground">{contactNo}</p>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {gnDivision}
        </p>
      </CardContent>

      <CardFooter className="gap-2">
        <Badge variant="default" className="font-medium">
          Pending
        </Badge>
      </CardFooter>
    </Card>
  );
}

export default DataCard;
