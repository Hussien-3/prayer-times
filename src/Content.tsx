// Content.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Stack,
  TextField,
  Button
} from '@mui/material';

export default function Content() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Ciro')
  const [country, setCountry] = useState('Egypt')
  const [prayerTimesIn, setPrayerTimesIn] = useState({country:'Egypt', city:'Ciro'})

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const res = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`
        );
        setPrayerTimes(res.data.data.timings);
      } catch (err) {
        console.error('Error fetching prayer times:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrayerTimes();
  }, []);

  function setCitysInput(e:any){
    setCity(e.target.value)
  }
  function setCountrysInput(e:any){
    setCountry(e.target.value)
  }

  function onClickCityButton(e:any){
    setPrayerTimesIn({country, city})

    const fetchPrayerTimes = async () => {
      try {
        const res = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}t&method=5`
        );
        setPrayerTimes(res.data.data.timings);
      } catch (err) {
        console.error('Error fetching prayer times:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrayerTimes();
  }

  return (
    <Container>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 10 }}>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: '#fff',
          }}
        >
          {loading ? (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : prayerTimes ? (
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                Prayer Times in {`${prayerTimesIn.country}, ${prayerTimesIn.city}`} 
              </Typography>
              <TextField
              value={country}
              onChange={setCountrysInput}
              sx={{
                        input: {
                          color: '#fff',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        },
                        label: {
                          color: '#ccc',
                          fontSize: '1rem',
                        },
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          borderRadius: '12px',
                        },
                      }} 
                      label={'Enter the country'}
                      variant="outlined"
                      fullWidth></TextField>

              <TextField
                      value={city}
                      onChange={setCitysInput}
                      sx={{
                        marginTop:'10px',
                                input: {
                                  color: '#fff',
                                  fontSize: '1.2rem',
                                  fontWeight: 'bold',
                                },
                                label: {
                                  color: '#ccc',
                                  fontSize: '1rem',
                                },
                                '& .MuiOutlinedInput-root': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                  backdropFilter: 'blur(8px)',
                                  WebkitBackdropFilter: 'blur(8px)',
                                  borderRadius: '12px',
                                },
                              }} 
                              label={'Enter the city'}
                              variant="outlined"
                              fullWidth></TextField>

                      <Button onClick={onClickCityButton} style={{margin:"5px"}} variant="contained" disableElevation>set country & country</Button>
                <Stack spacing={2} sx={{ mt: 4 }}>
                  {[
                    ['Fajr', prayerTimes.Fajr],
                    ['Dhuhr', prayerTimes.Dhuhr],
                    ['Asr', prayerTimes.Asr],
                    ['Maghrib', prayerTimes.Maghrib],
                    ['Isha', prayerTimes.Isha],
                  ].map(([label, value]) => (
                    <TextField
                      key={label}
                      label={label}
                      value={value}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        input: {
                          color: '#fff',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        },
                        label: {
                          color: '#ccc',
                          fontSize: '1rem',
                        },
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          borderRadius: '12px',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        },
                      }}
                    />
                  ))}
                </Stack>
            </CardContent>
          ) : (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography color="error">
                error
              </Typography>
            </Box>
          )}
        </Card>
      </Box>
    </Container>
  );
}
