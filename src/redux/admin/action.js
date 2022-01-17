const LOG_IN = "LOG_IN";

export const loginSuccess = (token) => {
  return {
    type: LOG_IN,
    data: token
  };
};
