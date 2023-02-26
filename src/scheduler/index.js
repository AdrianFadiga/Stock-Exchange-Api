const cron = require("node-cron");
const { extractAllStockExchangesJob, extractInfoMoneyCarouselJob } = require("../jobs");

function scheduler() {
	// Atualiza as informações da table info_money_stock_exchanges
	cron.schedule("*/1 * * * *", () => {
		extractAllStockExchangesJob();
	});

	// Atualiza as informações da table stock_exchanges_carousel
	cron.schedule("*/1 * * * *", () => {
		extractInfoMoneyCarouselJob();
	});

}

module.exports = scheduler;