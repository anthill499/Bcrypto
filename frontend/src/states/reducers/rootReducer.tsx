import { authReducer } from "./authReducer";
import { authState } from "./authReducer";
interface rootReducerOutput {
  auth: authState;
}

const RootReducer = (authReducer: authState): rootReducerOutput => {
  return {
    auth: authReducer(),
  };
};

export default RootReducer;
