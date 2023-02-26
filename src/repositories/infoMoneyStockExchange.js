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
	},

	async findMany({attribute, quantity}){
		const stockExchanges = await prisma.InfoMoneyStockExchanges.findMany({
			orderBy: {[attribute]: "desc"},
			take: Number(quantity)
		});
		return stockExchanges;
	},
};

module.exports = infoMoneyStockExchangesRepository;
  