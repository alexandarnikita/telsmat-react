import * as types from '../actionTypes'
import { Device } from "../../resources/interfaces";

const initialState = {
  devices: [] as Device[]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DEVICES:
      return {
        ...state,
        devices: action.payload
      };

    default:
      return state;
  }
}
