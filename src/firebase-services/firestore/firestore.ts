import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initialisedFirebaseApp } from "../firebaseConfig";

const db = getFirestore(initialisedFirebaseApp);

type TClientData = {
  email: string;
  name: string;
  phoneNumber: string;
  location: string;
};

export const clientCallbackDetails = async (clientCredentials: TClientData) => {
  console.log("clientCallbackDetails called with:", clientCredentials);
  try {
    const clientDocRef = await addDoc(
      collection(db, "clients"),

      clientCredentials
    );
    console.log(
      "Back-end client data captured",
      clientDocRef.id,
      clientDocRef.path,
      clientDocRef.type
    );
  } catch (error: any) {
    console.log("A back-end error occurred: ", error);
  }
};

// console.log("Firestore instance:", db);
