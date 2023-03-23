import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetCurrencyProfile (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrencyLimits (params?: {}): Promise<implicitReturnType>;
    abstract publicGetLastPricePair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetLastPricesCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOhlcvHdYyyymmddPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderBookPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickerPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickersCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradeHistoryPair (params?: {}): Promise<implicitReturnType>;
    abstract publicPostConvertPair (params?: {}): Promise<implicitReturnType>;
    abstract publicPostPriceStatsPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostActiveOrdersStatus (params?: {}): Promise<implicitReturnType>;
    abstract privatePostArchivedOrdersPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBalance (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelOrdersPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelReplaceOrderPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostClosePositionPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetCryptoAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetMyfee (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetOrderTx (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOpenOrdersPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOpenPositionPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOpenPositionsPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPlaceOrderPair (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRawTxHistory (params?: {}): Promise<implicitReturnType>;
}