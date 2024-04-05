import React from 'react';
import { Grid, List, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';

const annualLeaves = [
  { date: '01/01/2024', day: 'Monday', occasion: 'New Year' },
  { date: '26/01/2024', day: 'Friday', occasion: 'Republic Day' },
  { date: '25/03/2024', day: 'Monday', occasion: 'Holi' },
  { date: '01/05/2024', day: 'Wednesday', occasion: 'May Day' },
  { date: '15/08/2024', day: 'Thursday', occasion: 'Independence Day' },
  { date: '07/09/2024', day: 'Saturday', occasion: 'Ganesh Chaturthi' },
  { date: '02/10/2024', day: 'Wednesday', occasion: 'Mahatma Gandhi Jayanti' },
  { date: '12/10/2024', day: 'Saturday', occasion: 'Dussehra' },
  { date: '01/11/2024', day: 'Friday', occasion: 'Diwali' },
  { date: '25/12/2024', day: 'Wednesday', occasion: 'Christmas Day' },
];

export default function Holidays() {
  return (
    <Grid container justifyContent="center" mt="15vh">
      <Grid item xs={12} md={8}>
        <List sx={{ width: '100%', borderRadius: 4, bgcolor: 'whitesmoke', padding: 2 }}>
          {annualLeaves.map((holiday, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: '1px solid #e0e0e0',
                '&:last-child': {
                  borderBottom: 'none',
                },
              }}
            >
              <Typography sx={{ width: '25%', fontWeight: 'bold' }}>{holiday.date}</Typography>
              <Typography sx={{ width: '25%' }}>{holiday.day}</Typography>
              <Typography sx={{ width: '50%' }}>{holiday.occasion}</Typography>
            </ListItem>
          ))}
        </List>

      </Grid>
    </Grid>
  );
}
