import * as actions from "../actions/actionsTypes";

const initialState = {
  allCountries: [],
  specificCountry: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getAllData:
      return { ...state, allCountries: action.payload };
    case actions.getSpecificCountry:
      console.log("enter", action.payload);
      return { ...state, specificCountry: action.payload };
    default:
      return state;
  }
};

export default reducer;
