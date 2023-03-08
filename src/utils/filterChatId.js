const filterChatId = (ids, idlogged) => {
    return ids.filter((id) => id !== idlogged)[0];
}
 
export default filterChatId;