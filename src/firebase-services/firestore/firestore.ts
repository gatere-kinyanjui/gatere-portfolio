import { getFirestore } from "firebase/firestore";
import { initialisedFirebaseApp, firebaseConfig } from "../firebaseConfig";

const db = getFirestore(initialisedFirebaseApp);
