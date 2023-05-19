import { ConstellationsRequest, ConstellationsResponse } from '@/types/dataType';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';
import { useRouter } from 'next/router'

const Result = () => {
  const [result, setResult] = useState<ConstellationsResponse>({
    name: '',
    dateRange: {
      start: { month: 0, day: 0 },
      end: { month: 0, day: 0 }
    }
  })
  const route = useRouter()
  const currentUrl = `https://date-of-birth.vercel.app/${route.asPath}`
  const shareUrl: Record<string, string> = {
    Facebook: `http://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    Twitter: `https://twitter.com/intent/tweet?text=별자리로 알아보는 모든 것&url=${currentUrl}`,
  }

  const ShareResult = (target: string) => {
    if (shareUrl[target] !== 'undefined') {
      window.location.href = shareUrl[target]
    }
  }

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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'

    }}>
      <Typography variant="h3" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>{result.name}</Typography>
      <Stack direction="row" spacing={2} sx={{
        position: 'fixed',
        bottom: '0',
        paddingBottom: '50px'
      }}>
        <FontAwesomeIcon icon={faLink} size='3x' bounce onClick={() => navigator.clipboard.writeText(currentUrl)} cursor="pointer" />
        <FontAwesomeIcon icon={faFacebook} size='3x' onClick={() => ShareResult('Facebook')} cursor="pointer" />
        {/* <FontAwesomeIcon icon={faInstagramSquare} size='3x' bounce onClick={() => ShareResult('Instagram')} cursor="pointer" /> */}
        {/* <FontAwesomeIcon icon={faCommentSms} size='3x' bounce onClick={() => ShareResult('KakaoTalk')} cursor="pointer" /> */}
        <FontAwesomeIcon icon={faTwitter} size='3x' onClick={() => ShareResult('Twitter')} cursor="pointer" />
      </Stack>
    </Box>
  )
}
export default Result
