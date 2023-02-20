const filterProfileContact = (photos, photoLogged) => {
    return photos.filter((photo) => photo !== photoLogged)[0];
}
 
export default filterProfileContact;