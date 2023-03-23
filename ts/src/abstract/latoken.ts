import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetBookCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract publicGetChartWeek (params?: {}): Promise<implicitReturnType>;
    abstract publicGetChartWeekCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrencyAvailable (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrencyQuotes (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCurrencyCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPair (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPairAvailable (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickerBaseQuote (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTime (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradeHistoryCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradeFeeCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradeFeeLevels (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTransactionBindings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthAccount (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthAccountCurrencyCurrencyType (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthOrderGetOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthOrderPairCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthOrderPairCurrencyQuoteActive (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthStopOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthStopOrderGetOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthStopOrderPairCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthStopOrderPairCurrencyQuoteActive (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTrade (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTradePairCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTradeFeeCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTransaction (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTransactionBindings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTransactionBindingsCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTransactionId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAuthTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthOrderCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthOrderCancelAll (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthOrderCancelAllCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthOrderPlace (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthSpotDeposit (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthSpotWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthStopOrderCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthStopOrderCancelAll (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthStopOrderCancelAllCurrencyQuote (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthStopOrderPlace (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransactionDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransactionWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransactionWithdrawCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransactionWithdrawConfirm (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransactionWithdrawResendCode (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransferEmail (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransferId (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAuthTransferPhone (params?: {}): Promise<implicitReturnType>;
}