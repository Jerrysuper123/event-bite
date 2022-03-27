import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function DisplayFeedback(props) {
  return (
    <div className="border mt-3 p-3">
      <p>{props.review.name}</p>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="read-only" value={props.review.rating} readOnly />
      </Box>
      <p>{props.review.feedback}</p>
    </div>
  );
}
