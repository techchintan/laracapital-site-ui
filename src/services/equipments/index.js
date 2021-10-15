import Axios from "axios";

import { axiosInitialParams } from "../../utils";

/*
 * @Author: Chintan Sudani
 * @Description: This file includes axios
 * API services of Equipments page.
 */

// This is our base URL which is mentioned in Environment file(.env) i.e http://localhost:3000/sns/rest/v1
const baseAPIUrl = process.env.REACT_APP_API_SERVER;
const axios = Axios.create({
  baseURL: `${baseAPIUrl}/equipment`, //This is our axios URL for API call
  axiosInitialParams,
});

// Add new equipment in list
export const addNewEquipment = ({ data, token }) =>
  axios.post("/", data, { headers: { Authorization: token } });
