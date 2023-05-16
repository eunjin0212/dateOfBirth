export interface ConstellationsResponse {
  data: {
    name: string;
    dateRange: {
      start: { month: number, date: number };
      end: { month: number, date: number };
    }
  };
}
export interface ConstellationsRequest {
  year: number;
  month: number;
  date: number;
}