-- CreateTable
CREATE TABLE "info_money_stock_exchanges" (
    "date" TEXT,
    "stock_code" TEXT NOT NULL,
    "stock_name" TEXT,
    "value" DOUBLE PRECISION,
    "value_formatted" TEXT,
    "change_day" DOUBLE PRECISION,
    "change_day_formatted" TEXT,
    "change12_m" DOUBLE PRECISION,
    "change12_m_formatted" TEXT,
    "volume" DOUBLE PRECISION,
    "volume_formatted" TEXT,

    CONSTRAINT "info_money_stock_exchanges_pkey" PRIMARY KEY ("stock_code")
);

-- CreateTable
CREATE TABLE "stock_exchanges_carousel" (
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "spread" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "stock_exchanges_carousel_pkey" PRIMARY KEY ("alias")
);

-- CreateIndex
CREATE UNIQUE INDEX "info_money_stock_exchanges_stock_code_key" ON "info_money_stock_exchanges"("stock_code");

-- CreateIndex
CREATE UNIQUE INDEX "stock_exchanges_carousel_alias_key" ON "stock_exchanges_carousel"("alias");
