if(!/\d/.test(r.newPassword)){
    console.log('A password must contain at least one number');
}
if(!/[a-z]/.test(r.newPassword)){
    console.log('A password must contain at least lower case letter');
}
if(!/[A-Z]/.test(r.newPassword)){
    console.log('A password must contain at least upper case letter');
}
if(!/[!#=@$%&*)(_-]/.test(r.newPassword)){
    console.log('A password must contain at least one special character');
}
if(r.newPassword.length < 8){
    console.log('A password must be at least 8 characters long');
}
