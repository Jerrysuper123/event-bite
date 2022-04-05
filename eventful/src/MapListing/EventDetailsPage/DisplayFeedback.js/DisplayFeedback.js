import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function DisplayFeedback(props) {
  return (
    <div className="mt-3 p-3">
      <div>
        <span
          style={{
            fontWeight: "600",
          }}
        >
          {props.review.name}
        </span>
        <span
          className="ms-3"
          style={{
            fontSize: "0.8rem",
            color: "grey",
          }}
        >
          Thur, 2012 Jan 12
        </span>
      </div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="read-only" value={props.review.rating} readOnly />
      </Box>
      <p
        style={{
          color: "grey",
        }}
      >
        {props.review.feedback}
      </p>
    </div>
  );
}
