let days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

function retunDay(params) {
    if (params < 1 || params > 7) {
        return null;
    }
    return days[params];
}
