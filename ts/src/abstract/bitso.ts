import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetAvailableBooks (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetOhlc (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountStatus (params?: {}): Promise<implicitReturnType>;
    abstract privateGetBalance (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFees (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFundings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFundingsFid (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFundingDestination (params?: {}): Promise<implicitReturnType>;
    abstract privateGetKycDocuments (params?: {}): Promise<implicitReturnType>;
    abstract privateGetLedger (params?: {}): Promise<implicitReturnType>;
    abstract privateGetLedgerTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetLedgerFees (params?: {}): Promise<implicitReturnType>;
    abstract privateGetLedgerFundings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetLedgerWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMxBankCodes (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrderTradesOid (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersOid (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserTradesTid (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawalsWid (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBitcoinWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostDebitCardWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostEtherWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPhoneNumber (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPhoneVerification (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPhoneWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSpeiWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRippleWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBcashWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostLitecoinWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersOid (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersAll (params?: {}): Promise<implicitReturnType>;
}