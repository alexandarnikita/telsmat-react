import * as types from '../actionTypes'
import { DeviceModel } from '../../resources/interfaces'
import { Http } from '../../apis'

export function setDeviceModel(value: DeviceModel[]) {
  return {
    type: types.SET_DEVICE_MODEL,
    payload: value
  }
}

export const getDeviceModels = () => async (dispatch) => {
  try {
    const response = await Http.get('/device-models')
    if (response.data) {
      dispatch(setDeviceModel(response.data))
    }
  } catch (error) {
    throw (error)
  }
}
