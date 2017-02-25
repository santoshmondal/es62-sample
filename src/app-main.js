/**
 * Created by santosh on 2/25/17.
 */
let express = require("express");
let app = express();


// local import
let second = require('./com/affixus/second');


/* API Route */
app.use(second);


/* Server Start */
app.listen(3002, ()=>{
    console.log("Server Started!!");
});