const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const StockExchangesRepository = {
	async upsertAll(stockExchanges) {    
		stockExchanges.forEach(async (stock) => {
			await prisma.StockExchanges.upsert({
				where: {stock_code: stock.stock_code},
				update: stock,
				create: stock
			});
		});
	},

	async findMany({attribute, quantity}){
		const stockExchanges = await prisma.StockExchanges.findMany({
			orderBy: {[attribute]: "desc"},
			take: Number(quantity)
		});
		return stockExchanges;
	},
};

module.exports = StockExchangesRepository;
  