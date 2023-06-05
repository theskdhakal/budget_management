import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../firebase/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setUser } from "./UserSlice";

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
    console.log(pendingState);

    toast.promise(pendingState, {
      pending: "please wait....",
    });

    const { user } = await pendingState;
    const { uid } = user;

    if (uid) {
      //user has been created in auth service, lets add them to our database
      await setDoc(doc(db, "users", uid), rest);

      return toast.success(
        "user has been added to database, you will be redirected to dashboard now"
      );
    }

    console.log("something went wrong");
  } catch (error) {
    toast.error(error.message);
  }
};

export const autoLogin = (uid) => async (dispatch) => {
  try {
    //get user from firestore service

    const userResponse = await getDoc(doc(db, "users", uid));
    console.log(userResponse);
    const userInfo = { ...userResponse.data(), uid: uid };
    console.log(userInfo);

    //mount user to redux
    dispatch(setUser(userInfo));
  } catch (error) {
    toast.error(error.message);
  }
};
