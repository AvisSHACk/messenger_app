import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig";

const storage = getStorage(app);

export {
    storage,
    ref, 
    getDownloadURL
}