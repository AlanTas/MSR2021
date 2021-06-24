function findIntersection(strArr) {
    const arr1 = strArr[0].split(", ");
    const arr2 = strArr[1].split(", ");
    const finalArr = [];
    arr1.forEach(el1 => {
        arr2.forEach(el2 => {
            if (el1 === el2) {
                finalArr.push(el1);
            }
        });
    });
    return finalArr;
}
