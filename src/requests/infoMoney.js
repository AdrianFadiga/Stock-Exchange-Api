const { default: axios } = require("axios");

const url = "https://api.infomoney.com.br";

const getTotalStockExchangesCount = async () => {
	const endPoint = "/markets/high-low/b3";
	const {data} = await axios({
		method: "get",
		url: url.concat(endPoint),
		params: {
			pageSize: "1"
		}
	});
	return data.TotalCount;
};

getTotalStockExchangesCount();

const getStocks = async () => {
	const endPoint = "/markets/high-low/b3";
	const totalStockExchangesCount = await getTotalStockExchangesCount();
	const { data } = await axios({
		method: "get",
		url: url.concat(endPoint),
		params: {
			type: "json",
			pageSize: totalStockExchangesCount
		}
	});
	return data.Data;
};

async function getCarousel() {
	const endPoint = "/ativos/ticker";
	const { data } = await axios({
		method: "get",
		url: url.concat(endPoint),
	});
	return data;
}

module.exports = {getStocks, getCarousel};