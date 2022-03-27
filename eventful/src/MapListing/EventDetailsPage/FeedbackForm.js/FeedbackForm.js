import * as React from "react";
import axios from "axios";
import { BASE_API_URL } from "../../../Utility";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function FeedbackForm(props) {
  const [ratingValue, setRating] = React.useState(2);

  const [nameValue, setName] = React.useState("");

  const hanleNameInput = (event) => {
    setName(event.target.value);
  };

  const [feedbackValue, setFeedback] = React.useState("");

  const handleFeedbackInput = (event) => {
    setFeedback(event.target.value);
  };

  const postFeedback = async () => {
    let eventId = props.eventId;
    if (
      // leave the dummy data intact
      eventId !== "" &&
      eventId !== 1 &&
      eventId !== 2 &&
      eventId !== 3
    ) {
      try {
        let response = await axios.put(
          `${BASE_API_URL}/events/${eventId}/reviews/create`,
          {
            name: nameValue,
            rating: ratingValue,
            feedback: feedbackValue,
          }
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Do not update the state of dummy events!");
    }
  };

  return (
    <React.Fragment>
      <h3 className="mt-5">Been to the event, give us some feedback?</h3>
      <TextField
        required
        id="outlined-required"
        label="Your name"
        onChange={hanleNameInput}
      />
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">rating from 1 to 5:</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
      <TextField
        id="outlined-multiline-static"
        required
        label="Feedback"
        multiline
        rows={4}
        onChange={handleFeedbackInput}
      />
      <div className="mt-3">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={postFeedback}
        >
          Submit Feedback
        </Button>
      </div>
    </React.Fragment>
  );
}
