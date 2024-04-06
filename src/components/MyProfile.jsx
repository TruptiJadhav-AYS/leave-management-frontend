import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"

export default function MyProfile ({ user }) {
  return (
    <Grid ml="80%"
    sx={{
        position: 'absolute',
        top: '20%',
        left: '0%',
        transform: 'translate(20%, -35%)',
        zIndex: 1,
        textAlign:"left"
      }}>
    <Card>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        title={"Pratiksha Nimbalakar"}
        subheader={"Admin"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>ID:</strong> emp2347
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Email:</strong> pratiksha@gmail.com
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Contact:</strong> +91 8967095678
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
};

