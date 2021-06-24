        function myFunction() {

            let result;

            result = Object.keys( myObject ).find( function ( tmp ) {

                if ( condition[ tmp ] === true ) {

                    return tmp; // i would like to return the value of tmp

                }

            });

            alert( result ); // returns "true" or "false" but not the value of "tmp"

        }
