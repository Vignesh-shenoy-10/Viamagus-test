import React from "react";
import Navbar from "../Components/navbar";
import { useLocation } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Detailpost() {
  const navigateToPosts = () => {
    window.history.back(-1);
  };
  const location = useLocation();
  return (
    <div>
      <Navbar />

      <center>
        <Card variant="outlined" sx={{ width: 600, marginTop: 5, height: 190 }}>
          <Typography level="h1" fontSize="md" sx={{ mb: 0.5 }}>
            Post Details
          </Typography>
          <div>
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              {location.state.title}
            </Typography>
          </div>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body3">{location.state.body}</Typography>
              <Typography fontSize="lg" fontWeight="lg"></Typography>
            </div>
          </CardContent>
        </Card>
        <IconButton
          onClick={navigateToPosts}
          variant="solid"
          size="sm"
          color="primary"
          sx={{ ml: "auto", fontWeight: 600, marginTop: 2, width: 300 }}
        >
          <ArrowBackIcon />
          Back to posts
        </IconButton>
      </center>
    </div>
  );
}
