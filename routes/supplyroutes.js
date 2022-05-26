const router=require("express").Router();

const controller = require("../controller/supplycontroller")

router.get("/totalsupply",controller.totalsupply)

module.exports=router;