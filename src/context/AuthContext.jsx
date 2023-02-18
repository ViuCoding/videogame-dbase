import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
