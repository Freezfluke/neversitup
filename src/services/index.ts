import {create, ApisauceInstance, ApiResponse} from 'apisauce';
import {env} from '../utils/env/config';

export const CONNECT_API = env.api;

const api: ApisauceInstance = create({
  baseURL: CONNECT_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Type for the response handler
const onResponse = (
  response: ApiResponse<any>, // Use 'any' for the response data
  resolve: (value?: any) => void,
  reject: (reason?: any) => void,
): void => {
  if (response.ok) {
    resolve(response.data);
  } else {
    response.data
      ? reject(response.data)
      : reject({success: false, message: response.problem});
  }
};

// Type for GET function parameters
export const GET = (path: string, token?: string): Promise<any> =>
  new Promise((resolve, reject) => {
    api
      .get(
        path,
        {},
        {
          headers: {
            Authorization: token || '', // Providing a default empty string in case token is undefined
          },
        },
      )
      .then((response: ApiResponse<any>) =>
        onResponse(response, resolve, reject),
      )
      .catch((err: any) => reject(err)); // Catch any errors and reject with the error
  });
