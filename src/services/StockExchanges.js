const { objectKeysCamelToSnake } = require("../helpers");
const {infoMoney} = require("../requests/index");
const {StockExchangesRepository} = require("../repositories");

const StockExchangesService = {
	async findMany({attribute = "volume", quantity = 20}) {

		if (!["volume", "value", "change_day"].includes(attribute)) attribute = "volume";

		if (quantity > 100) quantity = 100;
		if (quantity <= 0) quantity = 20;

		const stockExchanges = await StockExchangesRepository.findMany({attribute, quantity});
		
		return stockExchanges;
	},

	async extractAllStockExchanges() {
		const stockExchanges = await infoMoney.getStocks();
		const serializedStockExchanges = stockExchanges.map((stockExchange) => objectKeysCamelToSnake(stockExchange));
		await StockExchangesRepository.upsertAll(serializedStockExchanges);
	}
};


module.exports = StockExchangesService;