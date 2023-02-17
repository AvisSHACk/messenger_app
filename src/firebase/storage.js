import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "./firebaseConfig";

const storage = getStorage(app);

export {
    ref, 
    storage,
    getDownloadURL,
    uploadBytes
}