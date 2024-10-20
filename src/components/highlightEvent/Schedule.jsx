import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  TableHead,
} from "@mui/material";
import "./Schedule.css";
import scheduleData from "../../data/Schedule.json";

const Schedule = () => {
  const location = useLocation();
  const scheduleRef = useRef(null);

  useEffect(() => {
    if(location.hash === "#schedule") {
      setTimeout(() => {
        if(scheduleRef.current) {
          scheduleRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }}, [location]);

  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Schedule.pdf";
    link.download = "Meher Prem Sammelan Schedule.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ padding: "20px", width: "90%", margin: "0 auto" }} id="schedule" ref={scheduleRef}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: "Playfair Display SC, serif" }}
      >
        Schedule
      </Typography>
      <Box textAlign="center" marginBottom={3}>
        <Button variant="contained" color="primary" onClick={handleDownload}>
          Download Schedule
        </Button>
      </Box>

      <Grid
        container
        sx={{
          marginBottom: "20px",
          flexWrap: "nowrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={selectedDay}
          onChange={handleDayChange}
        >
          <Tab label="Day 1" />
          <Tab label="Day 2" />
        </Tabs>
      </Grid>

      <Typography
        variant="h6"
        align="right"
        xs={12}
        sm={6}
        sx={{
          textAlign: "center",
          marginTop: { xs: "10px", sm: "20px", fontFamily: "DM Sans, sans-serif" },
          fontWeight: "bold",
        }}
      >
        Morning Session(9:00 AM - 1:00 PM)
      </Typography>

      <Box sx={{ overflowX: "auto", width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Table sx={{ minWidth: 650, width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" sx={{fontFamily: "DM Sans, sans-serif"}}>Duration (mins)</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" sx={{fontFamily: "DM Sans, sans-serif"}}>Name of Performer</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Typography variant="h6" sx={{fontFamily: "DM Sans, sans-serif"}}>City</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
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
                      <Typography variant="body1" sx={{fontFamily: "DM Sans, sans-serif"}}>{act.duration}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="body1" sx={{fontFamily: "DM Sans, sans-serif"}}>
                        {act.actName} <br />
                        <span style={{ fontSize: "0.8em", color: "gray" }}>
                        {act.type !== "" ? `#${act.type}` : ""}
                        </span>
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ textAlign: "right" }}>
                      <Typography variant="body1" sx={{fontFamily: "DM Sans, sans-serif"}}>{act.location}</Typography>
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
          textAlign: "center",
          marginTop: { xs: "10px", sm: "40px", fontFamily: "DM Sans, sans-serif" },
          fontWeight: "bold",
        }}
      >
        Evening Session(4:00 PM - 8:00 PM)
      </Typography>

      <Box sx={{ overflowX: "auto", width: "100%" }}>
        <Box
          sx={{ width: "100%" }}
          className="scrollable-table"
        >
          <Table sx={{ minWidth: 650, width: "100%" }}>
          <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" sx={{fontFamily: "DM Sans, sans-serif"}}>Duration (mins)</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" sx={{fontFamily: "DM Sans, sans-serif"}}>Name of Performer</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Typography variant="h6" sx={{fontFamily: "DM Sans, sans-serif"}}>City</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
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
                      <Typography variant="body1" sx={{fontFamily: "DM Sans, sans-serif"}}>{act.duration}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1" sx={{fontFamily: "DM Sans, sans-serif"}}>
                        {act.actName} <br />
                        <span style={{ fontSize: "0.8em", color: "gray" }}>
                          {act.type !== "" ? `#${act.type}` : ""}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "right" }}>
                      <Typography variant="body1" sx={{fontFamily: "DM Sans, sans-serif"}}>{act.location}</Typography>
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
