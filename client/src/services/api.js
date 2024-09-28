const BASE_URL = import.meta.env.VITE_API_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  CREATE_MENTOR_API: BASE_URL + '/auth/create-mentor'
};


export const mentor = {
  FETCH_MENTOR_DETAILS_API: BASE_URL + '/mentor/fetch-mentor-details',
  FETCH_ALL_MENTORS_API: BASE_URL + '/mentor/fetch-all-mentors'
}