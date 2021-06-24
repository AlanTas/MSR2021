
@Controller()
export class UserController {

    @Get("/users")
    getAll(@Req() request: Request, @Res() response: Response) {
        return response.send("Hello response!");
    }

}


import "reflect-metadata";
import { useExpressServer } from "routing-controllers";

let express = require("express"); // or you can import it if you have installed typings
let app = express(); // your created express server
// app.use() // you can configure it the way you want
useExpressServer(app, { // register created express server in routing-controllers
    controllers: [UserController] // and configure it the way you need (controllers, validation, etc.)
});
app.listen(3000); // run your express server

