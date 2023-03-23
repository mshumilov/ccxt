import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetMarkets (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarketIdTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarketIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarketIdOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsMarketIdCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarketsOrderbooks (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTime (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBatchordersIds (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTradesId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawalsId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetDepositsId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTransfersId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawalFees (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAssets (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsMeTradingFees (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsMeWithdrawalLimits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsMeBalances (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsMeTransactions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetReportsId (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBatchorders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privatePostReports (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteBatchordersIds (params?: {}): Promise<implicitReturnType>;
    abstract privatePutOrdersId (params?: {}): Promise<implicitReturnType>;
}