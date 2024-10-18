import React, { useState } from "react";
import {
  Button,
  Tabs,
  Tab,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid,
} from "@mui/material";
import './Schedule.css';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const scheduleData = {
    day1: {
      morning: [
        {
          time: "9:00 AM",
          actName: "Morning Yoga",
          type: "Song",
          location: "Pune, Maharashtra",
        },
        {
          time: "10:30 AM",
          actName: "Cultural Dance",
          type: "Dance",
          location: "Bangalore, Karnataka",
        },
        {
          time: "12:00 PM",
          actName: "Documentary Screening",
          type: "Documentary",
          location: "Mumbai, Maharashtra",
        },
        {
          time: "1:30 PM",
          actName: "Lunch Break",
          type: "Food",
          location: "Pune, Maharashtra",
        },
        {
          time: "2:30 PM",
          actName: "Guest Speaker",
          type: "Talk",
          location: "Pune, Maharashtra",
        },
      ],
      evening: [
        {
          time: "4:00 PM",
          actName: "Drama Performance",
          type: "Play",
          location: "Delhi, Delhi",
        },
        {
          time: "6:00 PM",
          actName: "Classical Music",
          type: "Song",
          location: "Kolkata, West Bengal",
        },
      ],
    },
    day2: {
      morning: [
        {
          time: "9:30 AM",
          actName: "Art Showcase",
          type: "Play",
          location: "Delhi, Delhi",
        },
        {
          time: "11:00 AM",
          actName: "Classical Music",
          type: "Song",
          location: "Kolkata, West Bengal",
        },
        {
          time: "1:00 PM",
          actName: "Drama Performance",
          type: "Play",
          location: "Chennai, Tamil Nadu",
        },
        {
          time: "2:30 PM",
          actName: "Lunch Break",
          type: "Food",
          location: "Delhi, Delhi",
        },
        {
          time: "3:30 PM",
          actName: "Q&A Session",
          type: "Discussion",
          location: "Delhi, Delhi",
        },
      ],
      evening: [
        {
          time: "3:00 PM",
          actName: "Dance Showcase",
          type: "Dance",
          location: "Mumbai, Maharashtra",
        },
        {
          time: "5:30 PM",
          actName: "Movie Screening",
          type: "Documentary",
          location: "Bangalore, Karnataka",
        },
      ],
    },
  };

  const handleDayChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-schedule.pdf";
    link.download = "schedule.pdf";
    link.click();
  };

  return (
    <Box sx={{ padding: "20px", width: "90%", margin: "0 auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Schedule
      </Typography>
      <Box textAlign="center" marginBottom={3}>
        <Button variant="contained" color="primary" onClick={handleDownload}>
          Download Schedule
        </Button>
      </Box>

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginBottom: "20px",
          flexWrap: "nowrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Tabs
            value={selectedDay}
            onChange={handleDayChange}
            sx={{ width: "100%" }}
          >
            <Tab label="Day 1" />
            <Tab label="Day 2" />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "right" },
            marginTop: { xs: "10px", sm: "0px" },
          }}
        >
          <Typography variant="h6">Morning Session</Typography>
        </Grid>
      </Grid>

      <Box sx={{ overflowX: "auto", width: "100%" }}>
        <Box sx={{ maxHeight: "180px", overflowY: "auto", width: "100%" }} className="scrollable-table">
          <Table sx={{ minWidth: 650, width: "100%" }}>
            <TableBody>
              {scheduleData[selectedDay === 0 ? "day1" : "day2"].morning.map(
                (act, index, array) => (
                  <TableRow
                    key={index}
                    sx={{
                      borderBottom:
                        index !== array.length - 1
                          ? "3px solid rgba(0, 0, 0, 0.12)"
                          : "3px solid rgba(0, 0, 0, 0.24)",
                      borderTop:
                        index !== 0 ? "3px solid rgba(0, 0, 0, 0.12)" : "none",
                      padding: "20px",
                    }}
                  >
                    <TableCell>
                      <Typography variant="body1">{act.time}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="body1">
                        {act.actName} <br />
                        <span style={{ fontSize: "0.8em", color: "gray" }}>
                          #{act.type}
                        </span>
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ textAlign: "right" }}>
                      <Typography variant="body1">{act.location}</Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Typography
        variant="h6"
        align="right"
        xs={12}
        sm={6}
        sx={{
          textAlign: { xs: "center", sm: "right" },
          marginTop: { xs: "10px", sm: "0px" },
        }}
      >
        Evening Session
      </Typography>

      <Box sx={{ overflowX: "auto", width: "100%" }}>
        <Box sx={{ maxHeight: "180px", overflowY: "auto", width: "100%" }} className="scrollable-table">
          <Table sx={{ minWidth: 650, width: "100%" }}>
            <TableBody>
              {scheduleData[selectedDay === 0 ? "day1" : "day2"].evening.map(
                (act, index, array) => (
                  <TableRow
                    key={index}
                    sx={{
                      borderBottom:
                        index !== array.length - 1
                          ? "3px solid rgba(0, 0, 0, 0.12)"
                          : "3px solid rgba(0, 0, 0, 0.24)",
                      borderTop:
                        index !== 0 ? "3px solid rgba(0, 0, 0, 0.12)" : "none",
                      padding: "20px",
                    }}
                  >
                    <TableCell>
                      <Typography variant="body1">{act.time}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {act.actName} <br />
                        <span style={{ fontSize: "0.8em", color: "gray" }}>
                          #{act.type}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "right" }}>
                      <Typography variant="body1">{act.location}</Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Schedule;
