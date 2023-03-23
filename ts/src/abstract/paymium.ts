import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetCountries (params?: {}): Promise<implicitReturnType>;
    abstract publicGetDataCurrencyTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetDataCurrencyTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetDataCurrencyDepth (params?: {}): Promise<implicitReturnType>;
    abstract publicGetBitcoinChartsIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetBitcoinChartsIdDepth (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUser (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserAddressesAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserOrdersUuid (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUserPriceAlerts (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMerchantGetPaymentUuid (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserWithdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserEmailTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserPaymentRequests (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUserPriceAlerts (params?: {}): Promise<implicitReturnType>;
    abstract privatePostMerchantCreatePayment (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteUserOrdersUuid (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteUserOrdersUuidCancel (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteUserPriceAlertsId (params?: {}): Promise<implicitReturnType>;
}