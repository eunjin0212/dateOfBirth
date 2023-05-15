import { ConstellationsResponse } from '@/types/dataType';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { useEffect } from 'react';

const Result = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response: AxiosResponse<ConstellationsResponse> = await axios.get('https://backend/constellations');
        console.log(response.data)
      } catch (error) {
        //
      }
    }
    getData()
  }, [])
  return (
    <div></div>
  )
}
export default Result