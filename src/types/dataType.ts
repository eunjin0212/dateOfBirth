export interface ConstellationsResponse {
  data: {
    name: string;
    dateRange: {
      start: string;
      end: string;
    }
  };
}