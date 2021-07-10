import * as types from '../actionTypes'
import { Dss } from '../../resources/interfaces'
import { Http } from '../../apis'

export function setDss(value: Dss[]) {
  return {
    type: types.SET_DSS,
    payload: value
  }
}

export const getDss = (deviceId) => async (dispatch) => {
  try {
    const response = await Http.get('/dss', { device: deviceId})
    if (response.data) {
      dispatch(setDss(response.data))
    }
  } catch (error) {
    throw (error)
  }
}

export const createDss = (dss) => async () => {
  try {
    const response = await Http.post('/dss', dss)
    return response
  } catch (error) {
    throw (error)
  }
}

export const updateDss = (id, dss) => async () => {
  try {
    const response = await Http.put(`/dss/${id}`, dss)
    return response
  } catch (error) {
    throw (error)
  }
}

export const deleteDss = (id) => async () => {
  try {
    const response = await Http.delete(`/dss/${id}`)
    return response
  } catch (error) {
    throw (error)
  }
}
