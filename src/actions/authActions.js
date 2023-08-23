export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const FIND = 'FIND';
export const FIND5 = 'FIND5';
export const FIND10 = 'FIND10';
export const IS_DRIVER = 'IS_DRIVER';
export const USER_ID = 'USER_ID';
export const DRIVER_ID = 'DRIVER_ID';
export const REC_SHIPMENT = 'RECSHIPMENT';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const find = () => ({
  type: FIND,
});

export const find5 = () => ({
  type: FIND5,
});

export const find10 = () => ({
  type: FIND10,
});

export const isDriver = () => ({
  type: IS_DRIVER,
});

export const userId = () => ({
  type: USER_ID,
});

export const driverID = (driver_id) => ({
  type: DRIVER_ID,
  payload: { driver_id },
});

export const recShipment = () => ({
  
  type: REC_SHIPMENT,
});

