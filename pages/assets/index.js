import { useEffect, useState } from "react";
import { fs } from "../../firebaase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

import Link from "next/link";

const Assets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState([]);
  const collectionRef = collection(fs, "assets");

  useEffect(() => {
    onSnapshot(collectionRef, (snap) => {
      setAssets(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>All Assets</h1>
      {console.log(assets)}
      {isLoading
        ? "Loading ..."
        : assets.map((doc) => (
            <Link href={`/assets/${doc.id}`} key={doc.id}>
              <h2>{doc.id}</h2>
              <h2>{doc.value}</h2>
            </Link>
          ))}
    </div>
  );
};

export default Assets;
