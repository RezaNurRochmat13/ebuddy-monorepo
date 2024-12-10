import { initializeApp } from "firebase/app";
import applicationConfig from "./application.config";

const firebaseConfig = initializeApp(applicationConfig.firebase);

console.log(firebaseConfig);

export default firebaseConfig;
