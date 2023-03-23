import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetMarkets (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickersPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickersMulti (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderBookMulti (params?: {}): Promise<implicitReturnType>;
    abstract publicGetFeesTrading (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTimestamp (params?: {}): Promise<implicitReturnType>;
    abstract publicPostK (params?: {}): Promise<implicitReturnType>;
    abstract privateGetKey (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMembersMe (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersFilter (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrdersMulti (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderDelete (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderDeleteMulti (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrdersClear (params?: {}): Promise<implicitReturnType>;
}