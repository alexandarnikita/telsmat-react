import * as types from '../actionTypes'
import { DeviceModel } from "../../resources/interfaces";

const initialState = {
  deviceModel: [] as DeviceModel[]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DEVICE_MODEL:
      return {
        ...state,
        deviceModel: action.payload
      };

    default:
      return state;
  }
}
