import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircleProgressBar() {
  return (
    <div>
    
        <Box sx={{ display: "flex", }}>
    
            Loading..
          <CircularProgress />
        
        </Box>
      
    </div>
  );
}
