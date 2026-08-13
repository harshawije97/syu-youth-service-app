function resolveApiUrl(): string {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL as string;
  } else {
    return "http://localhost:3000";
  }
}

export const API_URL = resolveApiUrl();
