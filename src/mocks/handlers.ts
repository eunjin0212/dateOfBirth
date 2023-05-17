import isDateInRange from '@/modules/isDateInRange'
import { ConstellationsResponse, ConstellationsRequest } from '@/types/dataType'
import { rest } from 'msw'

export const handlers = [
  rest.get<ConstellationsResponse>('https://backend.dev/constellations', (req, res, ctx) => {
    const birthDay: ConstellationsRequest = JSON.parse(sessionStorage.getItem('birthDay')!)
    return res(
      ctx.status(200),
      ctx.json(isDateInRange(birthDay.year, birthDay.month, birthDay.day)),
    )
  }),

  rest.post<ConstellationsRequest>('https://backend.dev/constellations', (req, res, ctx) => {
    console.log('post', Object.values(req.body).some(v => !v))
    if (Object.values(req.body).some(v => !v)) {
      return res(
        ctx.status(500),
        ctx.json({
          message: '생일을 입력해주세요.'
        })
      )
    }
    sessionStorage.setItem('birthDay', JSON.stringify(req.body))
    return res(
      ctx.status(200)
    )
  })
]