import { useState } from "react";

//firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCreds => {
        dispatch({ type: "LOGIN", payload: userCreds.user });
        alert("USER LOGGED IN");

        navigate("/");
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { login, error };
};
