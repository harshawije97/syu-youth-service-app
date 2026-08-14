"use server";
import { OriginRecord } from "@/lib/utils";

export async function getPreRecords(): Promise<Record<string, OriginRecord>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/responses/all`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
