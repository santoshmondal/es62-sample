/**
 * Created by santosh on 2/25/17.
 */
var express = require("express");
var router = express.Router();


router.get("/", (req, res, next)=>{

    var output = {"K1":"V1"};
    res.json(output);
});



module.exports = router;