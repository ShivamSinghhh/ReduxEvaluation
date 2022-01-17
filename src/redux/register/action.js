
const REGISTER = "REGISTER";
export const regSuccess = (token) => {
  return {
    type: REGISTER,
    data: token
  };
};
