import { useState } from "react";

// Firebase
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const signup = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCred => {
        alert("USER SIGNED UP");
        dispatch({
          type: "LOGIN",
          payload: userCred,
        });

        updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then(() => {
            console.log("PROFILE UPDATED");
          })
          .catch(err => {
            console.log(err.message);
          });

        navigate("/");
      })
      .catch(err => setError(err.message));
  };

  return { signup, error };
};
