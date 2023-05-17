export interface ConstellationsResponse {
  name: string;
  dateRange: {
    start: { month: number, day: number };
    end: { month: number, day: number };
  }
}
export interface ConstellationsRequest {
  year: number;
  month: number;
  day: number;
}