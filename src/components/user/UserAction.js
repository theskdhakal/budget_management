import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/FirebaseConfig";

export const registerUserAction = async ({
  password,
  confirmPassword,
  ...rest
}) => {
  try {
    //use firebase auth service to create user

    const pendingState = createUserWithEmailAndPassword(
      auth,
      rest.email,
      password
    );

    toast.promise(pendingState, {
      pending: "please wait....",
    });

    const { user } = await pendingState;
    console.log(rest.email);
  } catch (error) {
    toast.error(error.message);
  }
};
