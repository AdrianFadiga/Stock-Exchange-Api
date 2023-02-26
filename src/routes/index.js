const router = require("express").Router();
const {StockExchangeController} = require("../controllers");

router.get("/stockexchanges", StockExchangeController.getAll);

module.exports = router;