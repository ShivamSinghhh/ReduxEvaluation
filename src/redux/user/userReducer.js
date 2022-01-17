
const LOG_IN = "LOG_IN";
let init = { 
  token: "",
   isAuth: false
};

export const userReducer = (state = init, { type, data }) => {
  switch (type) {
    case LOG_IN:
      console.log("data", data.token);
 
      return {
        ...state,       
        token: data,
        isAuth: true,
      };

    default:
      return state;
  }
};
