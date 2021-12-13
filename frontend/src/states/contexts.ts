import { authState, initAuth } from "./reducers/authReducer";
import React, { Dispatch } from "react";


const Authentication = React.createContext([initAuth, ]);

export { Authentication };
