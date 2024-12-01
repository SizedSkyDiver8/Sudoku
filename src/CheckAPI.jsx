import React, { useEffect, useState } from "react";
import app from "./firebaseConfig"; // Import the initialized Firebase app
import { getDatabase, ref, onValue } from "firebase/database";

const CheckAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "users");

      onValue(dbRef, (snapshot) => {
        const fetchedData = snapshot.val();
        const usersArray = Object.keys(fetchedData || {}).map((key) => ({
          id: key,
          ...fetchedData[key],
        }));
        setData(usersArray);
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Realtime Database Data</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.level}: {user.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckAPI;
