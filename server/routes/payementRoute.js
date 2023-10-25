const express = require("express")
const {Add} =require("../controllers/payement")
const router = express.Router()

router.post("/payement",Add)

module.exports=router