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

-- CreateIndex
CREATE UNIQUE INDEX "info_money_stock_exchanges_stock_code_key" ON "info_money_stock_exchanges"("stock_code");
