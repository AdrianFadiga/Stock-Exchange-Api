const { objectKeysCamelToSnake } = require("../helpers");
const {StockExchangesCarouselRepository} = require("../repositories");
const { infoMoney } = require("../requests");

const StockExchangesCarouselService = {
	async extractCarousel() {
		const carousel = await infoMoney.getCarousel();

		const serializedCarousel = carousel.map((stockExchange) => objectKeysCamelToSnake(stockExchange));

		await StockExchangesCarouselRepository.upsertAll(serializedCarousel);

	},
};

StockExchangesCarouselService.extractCarousel();

module.exports = StockExchangesCarouselService;