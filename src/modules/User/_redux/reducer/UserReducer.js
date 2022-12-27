import * as Types from "../types/Types";
const initialState = {
  clientInput: {
    permision:false
  },
  afterSignInData: false,
  loginMessage: "",
};
const UserReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.GET_CLIENT_VIEW:
      const clientInput = { ...state.clientInput };
      clientInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        clientInput: clientInput,
      };
   

    default:
      break;
  }
  return newState;
};
export default UserReducer;
