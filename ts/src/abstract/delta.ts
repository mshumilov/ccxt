import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetAssets (params?: {}): Promise<implicitReturnType>;
    abstract publicGetSettings (params?: {}): Promise<implicitReturnType>;
    abstract publicGetIndices (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProducts (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickersSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetL2orderbookSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradesSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetHistoryCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetHistorySparklines (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPositionsMargined (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFillsHistoryDownloadCsv (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletBalances (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletTransactions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletTransactionsDownload (params?: {}): Promise<implicitReturnType>;
    abstract privateGetDepositsAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrdersBatch (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrdersLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPositionsChangeMargin (params?: {}): Promise<implicitReturnType>;
    abstract privatePutOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePutOrdersBatch (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersAll (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersBatch (params?: {}): Promise<implicitReturnType>;
}