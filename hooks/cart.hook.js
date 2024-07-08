import { db, auth } from "@/config/firebase";
import { useState, useEffect } from "react";

const useCart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const unsubscribeSnapshot = db
          .collection("Users")
          .doc(user.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              setData(doc.data().cart || []); // Ensure cart is an array or default to empty array
              setLoading(false);
              setError(null);
            } else {
              setData([]); // Document doesn't exist, set data to empty array
              setLoading(false);
              setError("Document does not exist");
            }
          }, (error) => {
            setError(error.message);
            setLoading(false);
          });

        return () => unsubscribeSnapshot();
      } else {
        setData([]); // User not authenticated, set data to empty array
        setLoading(false);
        setError("User is not authenticated");
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

const useCartOnce = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("Users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setData(doc.data().cart || []); // Ensure cart is an array or default to empty array
              setLoading(false);
              setError(null);
            } else {
              setData([]); // Document doesn't exist, set data to empty array
              setLoading(false);
              setError("Document does not exist");
            }
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      } else {
        setData([]); // User not authenticated, set data to empty array
        setLoading(false);
        setError("User is not authenticated");
      }
    });
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export { useCart, useCartOnce };
