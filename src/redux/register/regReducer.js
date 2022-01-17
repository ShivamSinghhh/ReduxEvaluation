
const REGISTER = "REGISTER";
let init = {
  data: ""
};

export const regReducer = (state = init, { type, data }) => {
  switch (type) {
    case REGISTER:   

      return {
        ...state,
        isAuth: true,
        token: data
      };

    default:
      return state;
  }
};
