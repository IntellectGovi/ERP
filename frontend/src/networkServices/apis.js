const BASE_URL = import.meta.env.VITE_BASE_URL;

// AUTH ENDPOINTS

export const endpoints = {
  LOGIN: BASE_URL + "/login",
};


export const userData = {
    USER_TYPE : BASE_URL + "/api/CommonData/getAllRoles"
}
