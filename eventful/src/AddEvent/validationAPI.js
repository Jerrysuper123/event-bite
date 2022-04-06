const validationEventFunction = (
  title,
  organizer,
  category,
  hashtags,
  address,
  postalCode,
  latLng,
  startDateTime,
  endDateTime,
  eventImage,
  customizedMapMarker,
  brandColor,
  descriptionSummary,
  description
) => {
  let hasError = false;

  if (title === "" || title.split(" ").length < 10) {
    hasError = true;
  }

  if (organizer === "") {
    hasError = true;
  }

  if (category === "") {
    hasError = true;
  }

  if (!Array.isArray(hashtags)) {
    hasError = true;
  }

  if (address === "") {
    hasError = true;
  }

  if (postalCode.length !== 6) {
    hasError = true;
  }

  if (postalCode.length !== 6) {
    hasError = true;
  }

  if (latLng.length != 2) {
    hasError = true;
  }

  if (startDateTime === "") {
    hasError = true;
  }

  if (endDateTime === "") {
    hasError = true;
  }

  if (!compareStartEndDate(startDateTime, endDateTime)) {
    hasError = true;
  }

  if (descriptionSummary === "") {
    hasError = true;
  }

  if (description === "") {
    hasError = true;
  }
  return hasError;
};

const compareStartEndDate = (startDateTime, endDateTime) => {
  if (startDateTime < endDateTime) {
    return true;
  } else {
    return false;
  }
};

const validateReviews = (name, rating, feedback, date) => {
  let hasError = false;
  if (name === "") {
    hasError = true;
  }
  if (rating < 0 || rating > 5) {
    hasError = true;
  }
  if (feedback === "") {
    hasError = true;
  }

  if (date === "") {
    hasError = true;
  }
  return hasError;
};
