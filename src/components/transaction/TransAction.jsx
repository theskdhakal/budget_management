import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { setTrans } from "./TransSlice";
import { db } from "../firebase/FirebaseConfig";

//pull data from firebase and add to the redux store for specific user based on userId
export const getTransaction = (uid) => async (dispatch) => {
  try {
    const q = query(collection(db, "transaction"), where("uid", "==", uid));

    const { docs } = await getDocs(q);

    const trans = [];

    docs.forEach((item) => {
      trans.push({ ...item.data(), id: item.id });
    });
    dispatch(setTrans(trans));
  } catch (error) {
    toast.error(error.message);
  }
};

//adding data to firebase database

export const addTransactionAction = (data) => async (dispatch) => {
  try {
    const respPending = addDoc(collection(db, "transaction"), data);
    toast.promise(respPending, {
      pending: "please wait...",
    });
    const result = await respPending;

    if (result?.id) {
      toast.success("transaction added to database");

      //get all transaction according to logged in user
      dispatch(getTransaction(data.uid));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

//deleting the transaction as per logged in user's id

export const deleteTransaction = (id, uid) => async (dispatch) => {
  try {
    const resultPending = deleteDoc(doc(db, "transaction", id));

    toast.promise(resultPending, {
      pending: "please wait while deleting the data",
    });

    await resultPending;

    dispatch(getTransaction(uid));
    toast.success("item has been deleted");
  } catch (error) {
    toast.error(error.message);
  }
};
