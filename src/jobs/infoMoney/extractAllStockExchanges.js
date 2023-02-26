const {StockExchangesService} = require("../../services");

async function extractAllStockExchangesJob() {
	console.log("Extraíndo as stock exchanges da InfoMoney............");
	StockExchangesService.extractAllStockExchanges();
}

module.exports = extractAllStockExchangesJob;


