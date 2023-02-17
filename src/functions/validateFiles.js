const validateFiles = () => {
    const files = e.target.files;
    const fileReader = new FileReader();

    if(fileReader && files && files.length > 0){
        fileReader.readAsArrayBuffer(files[0]);

        fileReader.onload = async () => {
            const imageData = fileReader.result;

            const photoRef = ref(storage, `${user.uid}`);

            const res = await uploadBytes(photoRef, imageData);

            if(res) {
                const urlPhoto = await getUrlProfile(res.metadata.fullPath);
                await updateDoc(doc(db, `users/${user.uid}`), {
                    photo: urlPhoto
                }).then(() => {
                    console.log('Se actualizo la foto de perfil');
                })
            }
        }
    }
}
 
export default validateFiles;