const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const infoMoneyStockExchangesRepository = {
	async upsertAll(stockExchanges) {    
		stockExchanges.forEach(async (stock) => {
			await prisma.InfoMoneyStockExchanges.upsert({
				where: {stock_code: stock.stock_code},
				update: stock,
				create: stock
			});
		});
	}
};

module.exports = infoMoneyStockExchangesRepository;
  