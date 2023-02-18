import { useState } from "react";

// Firebase
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signUp = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCred => {
        alert("USER SIGNED UP");
        dispatch({ type: "LOGIN", payload: userCred.user });
        console.log(userCred);
      })
      .catch(err => setError(err.message));
  };

  return { signUp, error };
};
