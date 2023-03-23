import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract v1PubGetHistKline (params?: {}): Promise<implicitReturnType>;
    abstract v1PubGetHistTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetInfoSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetSystemInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetMarketTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetToken (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTokenNetwork (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFundingRates (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFundingRateSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFundingRateHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFutures (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFuturesSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetClientToken (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetOrderOid (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetClientOrderClientOrderId (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetOrderbookSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetKline (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetClientTradeTid (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetOrderOidTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetClientTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetClientInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetAssetDeposit (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetAssetHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetSubAccountAll (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetSubAccountAssets (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetTokenInterest (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetTokenInterestToken (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetInterestHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetInterestRepay (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetFundingFeeHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetPositionSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostAssetMainSubTransfer (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostAssetWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostInterestRepay (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostClientAccountMode (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostClientLeverage (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateDeleteOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateDeleteClientOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateDeleteAssetWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateGetClientHolding (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateGetAlgoOrderOid (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateGetAlgoOrders (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateGetBalances (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateGetAccountinfo (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateGetBuypower (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivatePostAlgoOrder (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivatePutOrderOid (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivatePutOrderClientOid (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivatePutAlgoOrderOid (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivatePutAlgoOrderClientOid (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateDeleteAlgoOrderOid (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateDeleteAlgoOrdersPending (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateDeleteAlgoOrdersPendingSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v3PrivateDeleteOrdersPending (params?: {}): Promise<implicitReturnType>;
}