import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import Divider from '@mui/material/Divider';
import Thumbnail from '../../assets/Thumbnail.png'


export default function RecipeReviewCard() {
  return (
    <Card sx={{  minWidth: 1180,  maxWidth: 1180, }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <AssistantDirectionIcon color="error"/>
          </IconButton>
        }
        title="Avatar Meher Baba Lucknow Centre"
        subheader="October 22 - October 23, 2024"
      />
      <CardMedia
        component="img"
        height="400"
        image={Thumbnail}
        alt="Paella dish"
      />
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h4" color="text.secondary">
          Meher Prem Sammelan
        </Typography>
        <Button variant="contained">Register</Button>
      </CardContent>
      <Divider />
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="subtitle1" color="text.secondary">
        Tue 22 & Wed 23 Oct 2024
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="subtitle1" color="text.secondary">
        Ravindralaya, Charbagh, Lucknow, Uttar Pradesh
        </Typography>
      </CardContent>
    </Card>
  );
}