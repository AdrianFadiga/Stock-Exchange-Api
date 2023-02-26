const {StockExchangesCarouselService} = require("../services");

const StockExchangeCarouselController = {
	async findMany(_req, res) {

		const carousel = await StockExchangesCarouselService.findMany();

		return res.status(200).json(carousel);
	},
};

module.exports = StockExchangeCarouselController;