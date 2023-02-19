import { useState } from "react";

//firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCreds => {
        dispatch({ type: "LOGIN", payload: userCreds.user });
        alert("USER LOGGED IN");
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { login, error };
};
