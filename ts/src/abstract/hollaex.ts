import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetHealth (params?: {}): Promise<implicitReturnType>;
    abstract publicGetConstants (params?: {}): Promise<implicitReturnType>;
    abstract publicGetKit (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTiers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderbooks (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetChart (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCharts (params?: {}): Promise<implicitReturnType>;
    abstract publicGetUdfConfig (params?: {}): Promise<implicitReturnType>;
    abstract publicGetUdfHistory (params?: {}): Promise<implicitReturnType>;
    abstract publicGetUdfSymbols (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUser (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserWithdrawalFee (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrderAll (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrder (params?: {}): Promise<implicitReturnType>;
}