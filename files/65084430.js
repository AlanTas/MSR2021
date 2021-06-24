request1('/dividentList')
.then((res) => {
    //setState for divident
    return request2('/divisorList'); // this will return a promise to chain on
})
.then((res) => {
    setState for divisor
    return Promise.resolve('Success') // we send back a resolved promise to continue chaining
})
.then(() => {
    doCalc logic
})
.catch((err) => {
    console.log('something went wrong');
});
