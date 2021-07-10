require('dotenv').config();

export const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || 'access-token';

export const API_SERVER = process.env.REACT_APP_API_SERVER || 'api-server';
export const ASSET_SERVER = process.env.REACT_APP_ASSET_SERVER || 'asset-server';
