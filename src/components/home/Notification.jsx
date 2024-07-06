import * as React from "react";
import {Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography, red, Button, Divider} from "@mui/material";
import {AssistantDirectionIcon, LocationOnSharpIcon} from "@mui/icons-material";
import Thumbnail from "../../assets/Thumbnail.png";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ minWidth: 1180, maxWidth: 1180 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <AssistantDirectionIcon color="error" />
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
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" color="text.secondary">
          Meher Prem Sammelan
        </Typography>
        <Button variant="contained">Register</Button>
      </CardContent>
      <Divider />
      <CardContent sx={{ display: "flex" }}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ marginRight: "10px" }}
        >
          Tue 22 & Wed 23 Oct 2024
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ marginRight: "10px" }} />
        <LocationOnSharpIcon color="error" sx={{ marginRight: "10px" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Ravindralaya, Charbagh, Lucknow, Uttar Pradesh
        </Typography>
      </CardContent>
    </Card>
  );
}
