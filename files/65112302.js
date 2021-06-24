let obj = { 
    "expHistory": {
        "2020-11-26": 84825,
        "2020-11-25": 87219,
        "2020-11-24": 44447,
        "2020-11-23": 14849,
        "2020-11-22": 57379,
        "2020-11-21": 32364,
        "2020-11-20": 42295
    }
}
            
function getTotal(thresholdDate, expHistory) {
    let result = Object.entries(expHistory)
        .filter(([date, points]) => date > thresholdDate)
        .reduce((total, [date, points]) => total + points, 0);
    return result;
}
 
const thresholdDate = "2020-11-20";
console.log(`Total (from ${thresholdDate}):`, getTotal(thresholdDate, obj.expHistory));