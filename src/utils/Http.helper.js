import config from "../config";
import axios from "axios";

/** union url */
const url = endpoint => {
  return `${config.apiUrl}/${config.apiVersion}/${endpoint}`;
};

const post = (endpoint, data = {}) => {
  return axios.post(url(endpoint), data).then(response => response.data);
};

/** export out */
export { post };
