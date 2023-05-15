import { ConstellationsResponse } from '@/types/dataType'
import { rest } from 'msw'

export const handlers = [
  // Handles a GET /user request
  rest.get<ConstellationsResponse>('https://backend/constellations', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'admin',
        dateRange: {
          start: '10-20',
          end: '11-20',
        }
      }),
    )
  }),
]