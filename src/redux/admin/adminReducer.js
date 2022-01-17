import { loadData, saveInfo } from "../../utils/localStorage";

const LOG_IN = "LOG_IN";
let token = loadData("token");
let user = loadData("user");

let init = {
  isAuth: token ? true : false,
  token: token || "",
  user: user || ""
};

export const adminReducer = (state = init, { type, data }) => {
  switch (type) {
    case LOG_IN:
      console.log("payload", data.token);
      saveInfo("token", data);
      return {
        ...state,
        isAuth: true,
        token: data
      };

    default:
      return state;
  }
};
