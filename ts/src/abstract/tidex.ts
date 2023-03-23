import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract webGetCurrency (params?: {}): Promise<implicitReturnType>;
    abstract webGetPairs (params?: {}): Promise<implicitReturnType>;
    abstract webGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract webGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract webGetOrdershistory (params?: {}): Promise<implicitReturnType>;
    abstract webGetTradeData (params?: {}): Promise<implicitReturnType>;
    abstract webGetTradeDataId (params?: {}): Promise<implicitReturnType>;
    abstract publicGetInfo (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickerPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetDepthPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradesPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetInfoExt (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetInfo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTrade (params?: {}): Promise<implicitReturnType>;
    abstract privatePostActiveOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderInfo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCreateWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetWithdraw (params?: {}): Promise<implicitReturnType>;
}