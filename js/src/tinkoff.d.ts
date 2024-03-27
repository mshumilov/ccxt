import Exchange from './abstract/tinkoff.js';
import type { Balances, Int, Market, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Trade } from './base/types.js';
/**
 * @class alpaca
 * @augments Exchange
 */
export default class tinkoff extends Exchange {
    describe(): any;
    fetchAccounts(params?: {}): Promise<any[]>;
    parseAccount(account: any): {
        info: any;
        id: string;
        name: string;
        type: string;
        code: string;
    };
    fetchMarkets(params?: {}): Promise<import("./base/types.js").MarketInterface[]>;
    parseMarket(asset: any): Market;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    private unitToNumber;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: number, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrder(order: any, market?: Market): Order;
    parseOrderStatus(status: any): string;
    parseBalance(response: any): Balances;
    fetchBalance(params?: {}): Promise<Balances>;
    parseTimeInForce(timeInForce: any): string;
    parseTrade(trade: any, market?: Market): Trade;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
