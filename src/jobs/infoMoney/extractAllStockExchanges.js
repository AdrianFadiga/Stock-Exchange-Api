const {InfoMoneyStockExchangesService} = require("../../services");

async function extractAllStockExchangesJob() {
	console.log("Extraíndo as stock exchanges da InfoMoney............");
	InfoMoneyStockExchangesService.extractAllStockExchanges();
}

module.exports = extractAllStockExchangesJob;


