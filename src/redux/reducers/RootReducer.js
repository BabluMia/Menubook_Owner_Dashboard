import { combineReducers } from "redux";
import UserReducer from "../../modules/User/_redux/reducer/UserReducer";





// combine all of the reducers here
const rootReducer = combineReducers({
  clientInfo:UserReducer
 
});

export default rootReducer;
