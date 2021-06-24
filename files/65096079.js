switch (sort) {
    case 'color':
    case 'type':
        newShirtArray = shirts.sort(/* ... */);
        break;

    case 'size':
        newShirtArray = shirts.sort(/* ... */);
        break;
}

case 'color':
case 'type':
    newShirtArray = shirts.sort((s1, s2) => {
        if (s1[sort] > s2[sort]) {
            return 1;
        } else if (s1[sort] < s2[sort]) {
            return -1;
        } else {
           return 0;
        }
    });
