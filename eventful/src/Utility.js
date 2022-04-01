const BASE_API_URL = "https://eventfulapi.herokuapp.com";

const convertDateString = (dateString) => {
  //slide off the gmt indicator, so that we can get proper date aligned with date selected by users
  let properDateString = new Date(dateString.slice(0, 16))
    .toString()
    .slice(0, 21);
  return properDateString;
};

export { BASE_API_URL, convertDateString };
