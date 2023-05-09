import { rest, setupWorker } from 'msw'
export interface ConstellationsResponse {
  data: {
    name: string;
    dateRange: {
      start: string;
      end: string;
    }
  };
}
export const handlers = [
  // Handles a GET /user request
  rest.get<ConstellationsResponse>('/constellations', (req, res, ctx) => {
    console.log(req)
    return res(
      ctx.status(200),
      ctx.json({
        name: 'admin',
      }),
    )
  }),
]