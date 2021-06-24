const TEST = (function() {
    let booleans = {
        boolOne: false,
        boolTwo: false,
        boolThree: false
    };

    let events = {
        clickEvent:
            function(event) {
                //do stuff
            },
        keyEvent:
            function(event) {
                //do other stuff
            }
    };

    return {
        executesMoreThanOnce: function(booleans, events, index) {
            booleanObject = booleans;
            eventsObject = events;

            if (i == 2) {
                booleanObject.boolTwo = true;
            }
            else if (i == 4) {
                booleanObject.boolOne = true;
                booleanObject.boolTwo = false;
            }

            console.log('booleanObject: ', booleanObject);
        },
        get variables() {
            return {
                booleans,
                events
            }
        }
    };
}());

for (var i=0; i<5; i++) {
    TEST.executesMoreThanOnce(TEST.variables.booleans, TEST.variables.events, i);
}
