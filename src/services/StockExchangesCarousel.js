const { objectKeysCamelToSnake } = require("../helpers");
const {StockExchangesCarouselRepository} = require("../repositories");
const { infoMoney } = require("../requests");

const StockExchangesCarouselService = {
	async extractCarousel() {
		const carousel = await infoMoney.getCarousel();

		const serializedCarousel = carousel.map((stockExchange) => objectKeysCamelToSnake(stockExchange));

		await StockExchangesCarouselRepository.upsertAll(serializedCarousel);
	},

	async findMany() {
		const carousel = await StockExchangesCarouselRepository.findMany();

		return carousel;
	}
};

module.exports = StockExchangesCarouselService;