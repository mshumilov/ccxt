import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetGetLastTradesByCurrency (params?: {}): Promise<implicitReturnType>;
    abstract publicGetGetLastTradesByInstrument (params?: {}): Promise<implicitReturnType>;
    abstract publicGetGetOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetGetInstruments (params?: {}): Promise<implicitReturnType>;
    abstract publicGetGetTradingviewChartData (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCmcSpotSummary (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCmcSpotTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCmcSpotOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCmcMarketTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCmcContracts (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCmcContractOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCoinGeckoSpotPairs (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCoinGeckoSpotTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCoinGeckoSpotOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCoinGeckoMarketTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCoinGeckoContracts (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCoinGeckoContractOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetGetPerpetualLeverageBracket (params?: {}): Promise<implicitReturnType>;
    abstract publicGetGetPerpetualLeverageBracketAll (params?: {}): Promise<implicitReturnType>;
    abstract publicPostAuth (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetDepositRecord (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetWithdrawRecord (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetPosition (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetOpenOrdersByCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetOpenOrdersByInstrument (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetOrderHistoryByCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetOrderHistoryByInstrument (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetOrderState (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetUserTradesByCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetUserTradesByInstrument (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetUserTradesByOrder (params?: {}): Promise<implicitReturnType>;
    abstract privateGetGetPerpetualUserConfig (params?: {}): Promise<implicitReturnType>;
    abstract privatePostLogout (params?: {}): Promise<implicitReturnType>;
    abstract privatePostGetAssetsInfo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAddWithdrawAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBuy (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSell (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancel (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelAllByCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelAllByInstrument (params?: {}): Promise<implicitReturnType>;
    abstract privatePostClosePosition (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAdjustPerpetualLeverage (params?: {}): Promise<implicitReturnType>;
    abstract privatePostAdjustPerpetualMarginType (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubmitTransfer (params?: {}): Promise<implicitReturnType>;
}