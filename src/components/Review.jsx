import { getDatabase, ref, set } from "firebase/database";

const saveData = (formData) => {
  const db = getDatabase();
  set(ref(db, `users/${formData.email.replace(".", "_")}`), formData);
};
