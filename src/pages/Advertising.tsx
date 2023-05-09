import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'

export default function Advertising() {
  const [seconds, setSeconds] = useState(3)
  useEffect(() => {
    const time = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1100)
    if (seconds === 0) clearInterval(time)
  }, [seconds])
  
  return (
    <AdWrapper>
      <Typography variant="body1" color="initial" align='center'>{seconds}초 뒤에 결과가 공개됩니다.</Typography>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2816486920024458"
        crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2816486920024458"
        data-ad-slot="3038719899"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script> */}
    </AdWrapper>
  )
}

const AdWrapper = styled('div')`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`