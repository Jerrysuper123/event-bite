import * as React from "react";
import axios from "axios";
import { BASE_API_URL } from "../../../Utility";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./style.css";

export default function FeedbackForm(props) {
  const [ratingValue, setRating] = React.useState(2);
  const [nameValue, setName] = React.useState("");
  const hanleNameInput = (event) => {
    setName(event.target.value);
  };
  const [feedbackValue, setFeedback] = React.useState("");
  const [validError, setValidError] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleFeedbackInput = (event) => {
    props.setSubmitState(false);
    setFeedback(event.target.value);
  };

  const setReviews = () => {
    // below push new review into the state
    let clone = { ...props.oneEventDetails };
    if (!clone["reviews"]) {
      clone["reviews"] = [];
    }

    clone["reviews"].push({
      _id: Math.floor(Math.random() * 1000000),
      name: nameValue,
      rating: ratingValue,
      feedback: feedbackValue,
      date: date,
    });

    props.setOneEventDetails(clone);
  };

  const validateInputFields = () => {
    if (ratingValue !== null && nameValue !== "" && feedbackValue !== "") {
      return true;
    }
  };

  const postFeedback = async () => {
    if (validateInputFields()) {
      let date = new Date().toString().slice(4, 15);
      // console.log(date);
      await setDate(date);
      let eventId = props.data._id;
      try {
        let response = await axios.put(
          `${BASE_API_URL}/events/${eventId}/reviews/create`,
          {
            name: nameValue,
            rating: ratingValue,
            feedback: feedbackValue,
            date: date,
          }
        );
        setName("");
        setRating(2);
        setFeedback("");
        setDate("");
        //display "Thank you for submitting your feedback, when user click submit"
        props.setSubmitState(true);

        //reset state of reviews, so that users can review being updated;
        setReviews();

        //this calls all events again from app.js and trickle down here
        await props.getAllEventsFromAPI();

        // trying to get click more info again
        // props.moreInfoBtnRef.current.click();
      } catch (e) {
        console.log(e);
      }
    } else {
      setValidError("Your name, rating and feedback fields are required.");
    }
  };

  return (
    <React.Fragment>
      <h5 className="mt-5">Been to the event, give us some feedback?</h5>
      {/* <TextField
        required
        id="outlined-required"
        label="Your name"
        onChange={hanleNameInput}
      /> */}
      <input
        className="form-control customInput"
        placeholder="Your name*"
        onChange={hanleNameInput}
      />
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Rating out of 5</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
      {/* <TextField
        id="outlined-multiline-static"
        required
        label="Feedback"
        multiline
        rows={4}
        onChange={handleFeedbackInput}
      /> */}

      <textarea
        className="form-control"
        placeholder="Your feedback*"
        onChange={handleFeedbackInput}
      ></textarea>
      <p className="validationColor">{validError}</p>

      <div className="mt-3">
        <button className="customBtn customBtnPrimary" onClick={postFeedback}>
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}
