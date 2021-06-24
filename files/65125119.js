function messup() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            try {
                throw new Error("Thrown from messup()");
                resolve('hello from messup function'); // This line will never be reached
            } catch (e) {
                reject(e);
            }
        }, 1000);
    });
    return promise;
}
