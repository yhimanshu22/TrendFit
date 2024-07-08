import { firebase, auth, db } from "../config/firebase";

function updateUser({ email, name, surname, phoneNumber, photo, finalEvent }) {
  
  const currentUser = auth.currentUser;

  if (!currentUser) {
    console.error("User not authenticated");
    return;
  }

  const { uid } = currentUser;

  if (photo) {
    // Update user with photo
    return firebase
      .storage()
      .ref(`images/${uid}/${photo.name || "0"}`)
      .put(photo)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL().then((url) => {
          return db
            .collection("Users")
            .doc(uid)
            .update({
              name,
              surname,
              email,
              phoneNumber: phoneNumber || "", // Ensure phoneNumber defaults to empty string if falsy
              photoUrl: url,
            })
            .then(() => finalEvent())
            .catch((e) => console.error("Error updating user with photo:", e));
        });
      })
      .catch((e) => console.error("Error uploading photo:", e));
  }

  // Update user without photo
  return db
    .collection("Users")
    .doc(uid)
    .update({
      name,
      surname,
      email,
      phoneNumber: phoneNumber || "", // Ensure phoneNumber defaults to empty string if falsy
      
    })
    .catch((e) => console.error("Error updating user without photo:", e));
}

function updatePassword({ currentPassword, newPassword }) {
  const currentUser = auth.currentUser;

  const credential = firebase.auth.EmailAuthProvider.credential(
    firebase.auth().currentUser.email,
    currentPassword
  );

  const update = () => {
    return currentUser
      .updatePassword(newPassword)
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const reauth = () => {
    return currentUser.reauthenticateWithCredential(credential);
  };

  return {
    reauth,
    update,
  };
}

export { updateUser, updatePassword };
