const { objectKeysCamelToSnake } = require("../helpers");
const {infoMoney} = require("../requests/index");
const {infoMoneyStockExchangesRepository} = require("../repositories");

const infoMoneyStockExchanges = {
	async extractAllStockExchanges() {
		const stockExchanges = await infoMoney.getStocks();
		const serializedStockExchanges = stockExchanges.map((stockExchange) => objectKeysCamelToSnake(stockExchange));
		await infoMoneyStockExchangesRepository.upsertAll(serializedStockExchanges);
	}
};


module.exports = infoMoneyStockExchanges;