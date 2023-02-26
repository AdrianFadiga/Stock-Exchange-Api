const router = require("express").Router();
const {StockExchangeController, StockExchangeCarouselController} = require("../controllers");

router.get("/stockexchanges", StockExchangeController.getAll);
router.get("/carousel", StockExchangeCarouselController.findMany);

module.exports = router;