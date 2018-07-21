import config from "../config";
import axios from "axios";

/** Union Url */
const url = endpoint => {
  return `${config.apiUrl}/${config.apiVersion}/${endpoint}`;
};

const post = (endpoint, data = {}) => {
  return axios.post(url(endpoint), data).then(response => response.data);
};

/** Export Out */
export { post };
