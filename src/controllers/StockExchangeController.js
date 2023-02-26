const {InfoMoneyStockExchangesService} = require("../services");

const StockExchangeController = {
	async getAll(req, res) {
		const {attribute, quantity} = req.query;

		const stockExchanges = await InfoMoneyStockExchangesService.findMany({attribute, quantity});

		return res.status(200).json(stockExchanges);
	},
};

module.exports = StockExchangeController;