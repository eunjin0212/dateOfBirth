import { ConstellationsResponse } from '@/types/dataType';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const Result = () => {
  const [result, setResult] = useState<ConstellationsResponse>({
    name: '',
    dateRange: {
      start: { month: 0, day: 0 },
      end: { month: 0, day: 0 }
    }
  })
  const getData = async () => {
    try {
      const response: AxiosResponse<ConstellationsResponse> = await axios.get('https://backend.dev/constellations');
      setResult(() => response.data)
    } catch (error) {
      //
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>{result.name}</div>
  )
}
export default Result