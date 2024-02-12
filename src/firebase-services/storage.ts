import firebase from "firebase/compat/app";
import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
