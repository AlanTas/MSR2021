const users = await firebase.getAllUsers();
// users is a QuerySnapshot
if (users.size() > 0) {
    users.forEach(doc => {
        console.log(doc.data())
    })
}
else {
    // decide what you want to do if no results
}
