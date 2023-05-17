import { ConstellationsAfter2009, constellationsBefore2009 } from '../mocks/constellationsData';

const isDateInRange = (year: number, month: number, day: number) => {
  const constellationData = year > 2009 ? ConstellationsAfter2009 : constellationsBefore2009;
  const dateToCheck = new Date(year, month, day);
  return constellationData.find((value) => {
    const { start, end } = value.dateRange;
    const startDate = new Date(year, start.month - 1, start.day)
    const ednDate = new Date(year, end.month - 1, end.day)
    return dateToCheck >= startDate && dateToCheck <= ednDate
  })
}
export default isDateInRange