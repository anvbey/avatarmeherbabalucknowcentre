import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MeherPrem from "../../assets/MeherPrem.jpg";


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={MeherPrem}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Typography gutterBottom variant="h6" sx={{margin: " 0 30px 0 0"}} component="div">
            Meher Prem Sammelan
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            22/10/23
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Youtube Link</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
