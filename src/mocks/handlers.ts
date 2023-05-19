import isDateInRange from '@/modules/isDateInRange'
import { ConstellationsResponse, ConstellationsRequest } from '@/types/dataType'
import { rest } from 'msw'

export const handlers = [
  rest.get<ConstellationsResponse>('https://backend.dev/constellations', (req, res, ctx) => {
    const { year, month, day }: ConstellationsRequest = JSON.parse(sessionStorage.getItem('birthDay')!)
    return res(
      ctx.status(200),
      ctx.json(isDateInRange(year, month, day)),
    )
  }),

  rest.post<ConstellationsRequest>('https://backend.dev/constellations', (req, res, ctx) => {
    if (Object.values(req.body).some(v => !v)) {
      return res(
        ctx.status(500),
      )
    }
    sessionStorage.setItem('birthDay', JSON.stringify(req.body))
    return res(
      ctx.status(200)
    )
  })
]