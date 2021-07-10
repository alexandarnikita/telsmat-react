import * as types from '../actionTypes'
import { Device } from '../../resources/interfaces'
import { Http } from '../../apis'

export function setDevices(value: Device[]) {
  return {
    type: types.SET_DEVICES,
    payload: value
  }
}

export const getDevices = () => async (dispatch) => {
  try {
    const response = await Http.get('/devices')
    if (response.data) {
      dispatch(setDevices(response.data))
    }
  } catch (error) {
    throw (error)
  }
}

export const createDevice = (device) => async () => {
  try {
    const response = await Http.post('/devices', device)
    return response
  } catch (error) {
    throw (error)
  }
}

export const updateDevice = (id, device) => async () => {
  try {
    const response = await Http.put(`/devices/${id}`, device)
    return response
  } catch (error) {
    throw (error)
  }
}

export const deleteDevice = (id) => async () => {
  try {
    const response = await Http.delete(`/devices/${id}`)
    return response
  } catch (error) {
    throw (error)
  }
}
