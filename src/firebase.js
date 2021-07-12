import firebase from "firebase";

const REACT_APP_API_KEY=process.env.REACT_APP_API_KEY ;
const REACT_APP_AUTH_DOMAIN=process.env.REACT_APP_AUTH_DOMAIN;
const REACT_APP_DATABASE_URL= process.env.REACT_APP_DATABASE_URL;
const REACT_APP_PROJECT_ID=process.env.REACT_APP_PROJECT_ID;
const REACT_APP_STORAGE_BUCKET= process.env.REACT_APP_STORAGE_BUCKET;
const REACT_APP_MESSAGING_SENDERID=process.env.REACT_APP_MESSAGING_SENDERID;
const REACT_APP_APPID=process.env.REACT_APP_APPID;
const REACT_APP_MEASUREMENT_ID=process.env.REACT_APP_MEASUREMENT_ID;



const firebaseConfig = {
    apiKey:REACT_APP_API_KEY ,
    authDomain:REACT_APP_AUTH_DOMAIN,
    databaseURL:REACT_APP_DATABASE_URL,
    projectId:REACT_APP_PROJECT_ID,
    storageBucket:REACT_APP_STORAGE_BUCKET,
    messagingSenderId:REACT_APP_MESSAGING_SENDERID,
    appId:REACT_APP_APPID,
    measurementId:REACT_APP_MEASUREMENT_ID
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
