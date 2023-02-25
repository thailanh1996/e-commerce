import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";

function useGetData(collectionName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      //   const data = await getDocs(collectionRef);
      //   setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   setLoading(false);

      // firebase realtime update

      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      });
    };

    getData();
  }, []);

  return { data, loading };
}

export default useGetData;