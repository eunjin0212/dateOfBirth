import styles from '@/styles/Home.module.css';
import { Button, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en';
import Head from 'next/head';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

const darkTheme = createTheme({
	palette: {
		mode: 'light',
	},
});
export default function Home() {
	const [birthDay, setBirthDay] = useState<Dayjs | null>(null);
	return (
		<>
			<Head>
				<title>생일로 알아보기</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<main className={styles.main}>
					<Typography variant='h6' component='h2'>
						생일을 입력해주세요
					</Typography>
					<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
						<DatePicker
							value={birthDay}
              disableFuture
							onChange={(newValue) => setBirthDay(newValue!)}
						/>
					</LocalizationProvider>
          <Button disabled={!birthDay}>결과보기</Button>
				</main>
			</ThemeProvider>
		</>
	);
}
