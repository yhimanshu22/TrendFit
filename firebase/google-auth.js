import { firebase, auth, db } from "../config/firebase";

export default function googleAuth() {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      // Check if the user document exists
      return db.collection("Users").doc(result.user.uid).get()

        .then((doc) => {
          if (!doc.exists) {
            // If the document doesn't exist, create it
            return db.collection("Users").doc(result.user.uid).set({

              email: result.additionalUserInfo.profile.email,
              name: result.additionalUserInfo.profile.given_name,
              surname: result.additionalUserInfo.profile.family_name,
              addresses: [],
              cart: {},
              favorites: [],
              orders: [],
              phoneNumber: "",
              photoUrl: photoUrl || null,
            });
          } else {
            console.log("User document already exists.");
            return Promise.resolve(); // Resolve without doing anything if document exists
          }
        })
        .then(() => {
          console.log("User authenticated and profile data updated.");
        })
        .catch((error) => {
          console.error("Error checking or creating user document:", error);
        });
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
    });
}
