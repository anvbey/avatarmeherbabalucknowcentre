import * as React from 'react';
import {Typography, Card, CardHeader, CardContent, CardMedia, } from '@mui/material';
import MeherPrem from '../../assets/MeherPrem.jpg'

export default function RecipeReviewCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={MeherPrem}
        alt="Paella dish"
      />
      <CardHeader
        title="Baba's Birthday Celebration"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}