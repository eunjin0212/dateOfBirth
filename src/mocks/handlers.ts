import { ConstellationsResponse, ConstellationsRequest } from '@/types/dataType'
import { rest } from 'msw'
import { ConstellationsAfter2009, constellationsBefore2009 } from './constellationsData';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

export const handlers = [
  // Handles a GET /user request
  rest.get<ConstellationsResponse>('https://backend.dev/constellations', (req, res, ctx) => {
    dayjs.extend(isBetween);
    const birthDay: ConstellationsRequest = JSON.parse(sessionStorage.getItem('birthDay')!)
    const constellationData = birthDay.year > 2009 ? ConstellationsAfter2009 : constellationsBefore2009
    const userBirthDay = `${birthDay.year}-${birthDay.month}-${birthDay.date}`
    
    const userconstellation = constellationData.find((value) => {
      return dayjs(userBirthDay).isBetween(`${birthDay.year}-${value.dateRange.start}`, `${birthDay.year}-${value.dateRange.end}`, undefined, '[]')
    })
    return res(
      ctx.status(200),
      ctx.json(userconstellation),
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