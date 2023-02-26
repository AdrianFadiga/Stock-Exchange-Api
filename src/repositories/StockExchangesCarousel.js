const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const StockExchangesCarouselRepository = {
	async upsertAll(carousel) {
		carousel.forEach(async (stock) => {
			await prisma.StockExchangesCarousel.upsert({
				where: {alias: stock.alias},
				update: stock,
				create: stock
			});
		});
	}
};

module.exports = StockExchangesCarouselRepository;