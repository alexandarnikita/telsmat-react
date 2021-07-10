export interface DeviceModel {
  vendor: number
  name: string
  dss: boolean
  device_format: string
}

export interface Device {
  customer: number,
  description: string,
  mac: string,
  device_model: string
}

export interface Dss {
  device: string,
  dss_type: string,
  key: number,
  label: string,
  value: string
}

export interface IHttpError {
  code: number;
  message: string;
  [key: string]: any;
}

export interface IHttpResponse {
  [key: string]: any;
}
