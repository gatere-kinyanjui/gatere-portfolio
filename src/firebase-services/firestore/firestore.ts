import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initialisedFirebaseApp } from "../firebase-config/firebaseConfig";

const db = getFirestore(initialisedFirebaseApp);

type TClientData = {
  email: string;
  name: string;
  phoneNumber: string;
  message: string;
};

export const clientCallbackDetails = async (clientCredentials: TClientData) => {
  console.log("clientCallbackDetails called with:", clientCredentials);
  try {
    const clientDocRef = await addDoc(
      collection(db, "clients"),

      clientCredentials
    );
    console.log(clientDocRef.id, clientDocRef.path, clientDocRef.type);
  } catch (error: any) {
    console.log("A back-end error occurred: ", error);
  }
};
