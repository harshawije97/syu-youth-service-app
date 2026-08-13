export interface FormResponse {
  timestamp?: string;
  [key: string]: string | undefined;
}

export interface PaginatedResponse {
  data: FormResponse[];
  count: number;
  skip: number;
  take: number;
  total: number;
}
