import { useState, useEffect } from "react";
import { storage } from "../../config/firebaseConfig";
import firebase from "../../config/firebaseConfig";
const useStorage = (file, uid) => {
  const [progress, setProgrees] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let perc = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgrees(perc);
      },
      (err) => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        const userRef = firebase.firestore().collection("users").doc(uid);
        userRef.set(
          {
            image_url: url,
          },
          { merge: true }
        );
      }
    );
  }, [file, uid]);
  return { progress, url, error };
};
export default useStorage;
