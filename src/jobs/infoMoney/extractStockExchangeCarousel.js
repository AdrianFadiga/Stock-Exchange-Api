const {StockExchangesCarouselService} = require("../../services");

async function extractInfoMoneyCarouselJob() {
	console.log("Extraíndo o Carousel da InfoMoney............");
	StockExchangesCarouselService.extractCarousel();
}

module.exports = extractInfoMoneyCarouselJob;


