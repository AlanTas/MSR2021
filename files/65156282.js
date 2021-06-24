var module = module || function (){
    function init(){
        (function not_important(){console.log("I do some other stuff")})()
    }

    function public_method(){
        private_method()
    }

    function private_method(){
        console.log("original private method")
    }

    return {
        init: init,
        public_method: public_method,
        // *** Provide yourself functions to get `private_method` (and any
        // others you may want) and update it
        __privates__: {
            private_method: {
                get: function() {
                    return private_method;
                },
                set: function(fn) {
                    // *** Function declarations effectively create variables;
                    // you can write to them:
                    private_method = fn;
                }
            }
        }
    }
}()

// *** Where you want to make your change
module.__privates__.private_method.set(function() { /* ... */ });

var module = module || function (){
    /*** An object with the private functions you need to do this for
    var privates = {};

    function init(){
        (function not_important(){console.log("I do some other stuff")})()
    }

    function public_method(){
        // *** Calling it via that object, which has an effect on `this`
        privates.private_method()
        // *** If you want `this` to be the same as it would have been
        // with the raw call above (the global object or `undefined` if
        // you're in strict mode), you can use the comma trick:
        // (0,privates.private_method)()
    }

    privates.private_method = function private_method(){
        console.log("original private method")
    };

    return {
        init: init,
        public_method: public_method,
        // *** Expose that object with the private functions
        __privates__: privates
    }
}()

// *** Where you want to make your change
module.__privates__.private_method = function() { /* ... */ };
