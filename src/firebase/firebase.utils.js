import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvPWd2wVxT6BcV3lULuKBiNJN6og89_4g",
    authDomain: "crwn-db-f09dc.firebaseapp.com",
    databaseURL: "https://crwn-db-f09dc.firebaseio.com",
    projectId: "crwn-db-f09dc",
    storageBucket: "crwn-db-f09dc.appspot.com",
    messagingSenderId: "796903637974",
    appId: "1:796903637974:web:e10857df5f17ef9fd1da77",
    measurementId: "G-DFSW48LBPT"
  };
  // crea un profile pasandole el user authenticated
  //           createUserProfileDocument
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // getting data from firebase. passin the uid creted by firebase
    const userRef =firestore.doc(`users/${userAuth.uid}`);

    // snpshot get a reference of rtrived object
    const snapShot =  await userRef.get();

    console.log(snapShot);
    //console.log(firestore.doc('users/128dashadu'));

    // used to cretate a new user
    // destruct the data
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createAt = new Date();

      // set is the create method in firebase
      try{
        await userRef.set({
          displayName
          ,email,createAt
          ,...additionalData
        })

      } catch(error){
        console.log('Error creating user: ', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  // tenemos que usar para usar authentication en la pagina en que se vaya a usar
  // esta es la forma e que sre expotya indivisuelmente
  export const auth = firebase.auth();
  // exportr para usaar store donde sea requerido
  // esta es la forma e que sre expotya indivisuelmente
  export const firestore = firebase.firestore();

  // accesoo a google auth provider. Para utilizarlo en e; programa
  const provider = new firebase.auth.GoogleAuthProvider();
  // lanza pop up para authenticar una persona
  provider.setCustomParameters({ prompt: 'select_account'});
  // esta es la forma e que sre expotya indivisuelmente
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // in case we want the whole firebase
  // esta es la forma e que sre expotya indivisuelmente
  export default firebase;
