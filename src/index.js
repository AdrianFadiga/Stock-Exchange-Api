const express = require("express");
const router = require("./routes");

const app = express();

const port = 3000;

app.use("/", router);

app.listen(port, () => {
	console.log(`O pai ta on na porta ${port}`);
});