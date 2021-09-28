import Axios from "axios";
import { message as antdMessage } from "antd";
import { axiosInitialParams } from "../../utils";

const baseAPIUrl = process.env.REACT_APP_API_SERVER; //base API endpoint url from .env
const axios = Axios.create({
  baseURL: `${baseAPIUrl}/employee`,
  axiosInitialParams,
});

// Used for user login
export const requestUserLogin = async (params) => {
  try {
    const { data, status, message } = await axios.post("/login", params);
    if (status === 403) {
      antdMessage.error(message);
      return data;
    } else if (status === 200 && data?.data?.jwt) {
      localStorage.setItem("laraCapitalAuthToken", data?.data?.jwt);
      return data;
    } else {
      return undefined;
    }
  } catch (error) {
    if (error && error.response) {
      antdMessage.error(error.response.data.message);
    } else {
      antdMessage.error("Error connecting to our server, pls try again ");
    }
  }
};

// Used for user Register
export const requestUserRegister = async (params) => {
  try {
    const { data, status } = await axios
      .post("/", params)
      .then((res) => res)
      .catch((error) => error.response);
    if (status === 200) {
      return data;
    }
  } catch (error) {
    antdMessage.error(error);
  }
};
