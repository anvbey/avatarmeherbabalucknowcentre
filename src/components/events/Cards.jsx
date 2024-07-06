import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MeherPrem from "../../assets/Oct2024Banner.png";
import data from "../../data/Events.json";

export default function ImgMediaCard({ year }) {
  const events = data.find((item) => item.year === year)?.events || [];

  // State to track whether to show full description for each card
  const [showFullDescription, setShowFullDescription] = React.useState([]);

  // Function to handle "Learn More" button click
  const handleLearnMore = (index) => {
    const updatedShowFullDescription = [...showFullDescription];
    updatedShowFullDescription[index] = true;
    setShowFullDescription(updatedShowFullDescription);
  };

  // Function to handle "Learn Less" button click
  const handleLearnLess = (index) => {
    const updatedShowFullDescription = [...showFullDescription];
    updatedShowFullDescription[index] = false;
    setShowFullDescription(updatedShowFullDescription);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {events.map((event, index) => (
        <Card key={index} sx={{ margin: "20px", flexBasis: "300px" }}>
          <CardMedia component="img" alt="Thumbnail" image={MeherPrem} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                margin: " 0 0 10px 0",
                fontSize: "16px",
                fontWeight: "bold",
                minHeight: "70px",
                fontFamily: "Playfair Display SC, serif",
              }}
              component="div"
            >
              {event.title}
            </Typography>

            <Typography
              gutterBottom
              variant="body1"
              sx={{
                margin: " 0 0 10px 0",
                fontFamily: "DM Sans, sans-serif",
                borderBottom: "1px solid #ccc",
              }}
              component="div"
            >
              Date: {event.startDate}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {showFullDescription[index]
                ? event.desc
                : `${event.desc.slice(0, 100)}...`}
            </Typography>
            {!showFullDescription[index] && (
              <Button
                size="small"
                onClick={() => handleLearnMore(index)}
                sx={{ fontFamily: "DM Sans, sans-serif", margin: "10px 0 0 0" }}
              >
                See More
              </Button>
            )}
          </CardContent>
          {showFullDescription[index] && (
            <CardActions>
              <Button
                size="small"
                href={event.youtubeUrl || event.alternateUrl}
                target="_blank"
                sx={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Youtube Link
              </Button>
              <Button
                size="small"
                onClick={() => handleLearnLess(index)}
                sx={{ fontFamily: "DM Sans, sans-serif" }}
              >
                See Less
              </Button>
            </CardActions>
          )}
        </Card>
      ))}
    </Box>
  );
}
