import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function DisplayFeedback() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={3} readOnly />
    </Box>
  );
}
