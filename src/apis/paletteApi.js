import axios from "axios";

export default axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
