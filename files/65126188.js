//model.js
   const token = new Tokens();
    token.setAccessToken(access_token);
    token.setRefreshToken(refresh_token);
    export default token;
 
// scheduler.js
import { test } from './models/model.js'

// Here, the test is going to be the same as declared before.
console.log('xxx',test.getAccessToken())

export default class TokensSingleton {
    this.instance = null;

    constructor(){ /* ... */}

    static getInstance() {
        if(!TokensSingleton.instance) {
            TokensSingleton.instance = new TokensSingleton();
        }
        
        return TokensSingleton.instance;
    }

    /* ... */
}


//index.js
    const token = TokenSingleton.getInstance();
    token.setAccessToken('test');
    token.setRefreshToken(refresh_token);

// scheduler.js
import Tokens from './models/tokens.js'


const test = TokenSingleton.getInstance();
console.log('xxx',test.getAccessToken()) // xxx, test
