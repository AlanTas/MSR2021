function rec(array) {
    for (let i in array) {
        if (array[i].children === undefined) { // BASE CASE
            // console.log("base case ", array);

            // push the object you want into the array, as at this point in the
            // recursion you will be at the level you can modify your image array as you like
            return array.push({ "myImage": "myBeautifulCatImage", "does": "poooooor"});
        }

        // recursive call
        // visualise how deep you are going...
        // console.log("rec", array[i].children); 
        return rec(array[i].children); 
    }
}

rec(arr);

// if you know log your arr as in:
// console.log("arr after recursion", rec(arr))
// you will see your new cat showing where it should be :)
