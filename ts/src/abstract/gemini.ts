import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract webGetRestApi (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1Symbols (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1SymbolsDetailsSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1StakingRates (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1PubtickerSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2TickerSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2CandlesSymbolTimeframe (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1TradesSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1AuctionSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1AuctionSymbolHistory (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1Pricefeed (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1BookSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1EarnRates (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1StakingUnstake (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1StakingStake (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1StakingRewards (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1StakingHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1OrderNew (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1OrderCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1WrapSymbol (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1OrderCancelSession (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1OrderCancelAll (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1OrderStatus (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Orders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Mytrades (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Notionalvolume (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Tradevolume (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ClearingNew (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ClearingStatus (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ClearingCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ClearingConfirm (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Balances (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1BalancesStaking (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1NotionalbalancesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Transfers (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1AddressesNetwork (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1DepositNetworkNewAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1DepositCurrencyNewAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1WithdrawCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1AccountTransferCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1PaymentsAddbank (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1PaymentsMethods (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1PaymentsSenWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1BalancesEarn (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1EarnInterest (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1EarnHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ApprovedAddressesNetworkRequest (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ApprovedAddressesAccountNetwork (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1ApprovedAddressesNetworkRemove (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Account (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1AccountCreate (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1AccountList (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Heartbeat (params?: {}): Promise<implicitReturnType>;
}