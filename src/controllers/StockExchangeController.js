const {StockExchangesService} = require("../services");

const StockExchangeController = {
	async getAll(req, res) {
		const {attribute, quantity} = req.query;

		const stockExchanges = await StockExchangesService.findMany({attribute, quantity});

		return res.status(200).json(stockExchanges);
	},
};

module.exports = StockExchangeController;