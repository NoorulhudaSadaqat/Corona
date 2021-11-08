import { getAllData, getSpecificCountry } from "./actionsTypes";
import axios from "axios";

export const getAllDataMiddleware = (option) => async (dispatch) => {
  const response = await axios.get(
    `https://corona.lmao.ninja/v2/countries?yesterday=&sort=${option}`
  );
  dispatch({
    type: getAllData,
    payload: response.data,
  });
};

export const getSpecificCountryMiddleware = (name) => async (dispatch) => {
  const response = await axios.get(
    `https://corona.lmao.ninja/v2/countries/${name}`
  );
  dispatch({
    type: getSpecificCountry,
    payload: response.data,
  });
};
