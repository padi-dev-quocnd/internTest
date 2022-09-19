import axios from "axios";
import qs from "qs";
// Set up default config for http requests here
const baseURLApp =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_PRO
    : process.env.REACT_APP_API_DEV;
let store;

export const injectStore = (_store) => {
  store = _store;
};
const apiClient = axios.create({
  baseURL: "baseURLApp",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    // if (
    //   params.filters &&
    //   !(typeof params.filters === "string" || params.filters instanceof String)
    // ) {
    //   params.filters = qs.stringify(params.filters);
    // }
    return qs.stringify(params);
  },
});
apiClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...
    // console.log({ storeToken: store.getState().auth.token });
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] =
        // "Bearer " + (token || store.getState().auth.token);
        "Bearer " + token;
    }
    return config;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);
apiClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default apiClient;
