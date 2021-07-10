import * as types from '../actionTypes'
import { Dss } from "../../resources/interfaces";

const initialState = {
  dss: [] as Dss[]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DSS:
      return {
        ...state,
        dss: action.payload
      };

    default:
      return state;
  }
}
