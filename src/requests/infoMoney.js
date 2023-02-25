const { default: axios } = require("axios");

const endPoint = "https://api.infomoney.com.br/markets/high-low/b3";

const getTotalStockExchangesCount = async () => {
	const {data} = await axios({
		method: "get",
		url: endPoint,
		params: {
			pageSize: "1"
		}
	});
	return data.TotalCount;
};

const getStocks = async () => {
	const totalStockExchangesCount = await getTotalStockExchangesCount();
	const { data } = await axios({
		method: "get",
		url: endPoint,
		params: {
			pageSize: totalStockExchangesCount
		}
	});
	return data.Data;
};

module.exports = {getStocks};