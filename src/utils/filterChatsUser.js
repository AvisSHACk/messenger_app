const filterChatsUser = (chats, userCurrent) => {
    return chats.filter(chat => chat.emails.includes(userCurrent.email));
}
 
export default filterChatsUser;