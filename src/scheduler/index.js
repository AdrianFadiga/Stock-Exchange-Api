const cron = require("node-cron");
const { extractAllStockExchangesJob } = require("../jobs");

function scheduler() {
	// Atualiza as informações da table info_money_stock_exchanges
	cron.schedule("*/1 * * * *", () => {
		extractAllStockExchangesJob();
	});
}

module.exports = scheduler;