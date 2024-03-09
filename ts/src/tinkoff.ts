//  ---------------------------------------------------------------------------

import Exchange from './abstract/tinkoff.js';
import { ExchangeError, PermissionDenied, NotSupported, RateLimitExceeded } from './base/errors.js';
import { TICK_SIZE } from './base/functions/number.js';
import type { Int, Market, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Trade } from './base/types.js';

//  ---------------------------------------------------------------------------xs
/**
 * @class alpaca
 * @augments Exchange
 */
export default class tinkoff extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'tinkoff',
            'name': 'Tinkoff',
            'countries': [ 'RU' ],
            'rateLimit': 333,
            'hostname': 'tinkoff.ru',
            'pro': true,
            'urls': {
                'logo': 'https://developer.tinkoff.ru/img/logo_origin.svg',
                'www': 'https://tinkoff.ru',
                'api': {
                    'instruments': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService',
                    'marketdata': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.MarketDataService',
                    'operations': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OperationsService',
                    'orders': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OrdersService',
                    'sandbox': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.SandboxService',
                    'stoporders': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.StopOrdersService',
                    'users': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.UsersService',
                    'marketdatastream': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.MarketDataStreamService',
                    'operationsstream': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OperationsStreamService',
                    'ordersstream': 'https://invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OrdersStreamService',
                },
                'test': {
                    'instruments': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService',
                    'marketdata': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.MarketDataService',
                    'operations': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OperationsService',
                    'orders': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OrdersService',
                    'sandbox': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.SandboxService',
                    'stoporders': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.StopOrdersService',
                    'users': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.UsersService',
                    'marketdatastream': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.MarketDataStreamService',
                    'operationsstream': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OperationsStreamService',
                    'ordersstream': 'https://sandbox-invest-public-api.{hostname}/rest/tinkoff.public.invest.api.contract.v1.OrdersStreamService',
                },
                'doc': 'https://russianinvestments.github.io/investAPI/',
            },
            'has': {
                'CORS': false,
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'cancelAllOrders': true,
                'cancelOrder': true,
                'closeAllPositions': false,
                'closePosition': false,
                'createOrder': true,
                'fetchBalance': false,
                'fetchBidsAsks': false,
                'fetchClosedOrders': true,
                'fetchCurrencies': false,
                'fetchDepositAddress': false,
                'fetchDepositAddressesByNetwork': false,
                'fetchDeposits': false,
                'fetchDepositsWithdrawals': false,
                'fetchFundingHistory': false,
                'fetchFundingRate': false,
                'fetchFundingRates': false,
                'fetchL1OrderBook': true,
                'fetchL2OrderBook': false,
                'fetchMarkets': true,
                'fetchMyTrades': false,
                'fetchOHLCV': true,
                'fetchOpenOrder': false,
                'fetchOpenOrders': true,
                'fetchOrder': true,
                'fetchOrderBook': true,
                'fetchOrders': true,
                'fetchPositions': false,
                'fetchStatus': false,
                'fetchTicker': false,
                'fetchTickers': false,
                'fetchTime': false,
                'fetchTrades': true,
                'fetchTradingFee': false,
                'fetchTradingFees': false,
                'fetchTransactionFees': false,
                'fetchTransactions': false,
                'fetchTransfers': false,
                'fetchWithdrawals': false,
                'publicAPI': false,
                'setLeverage': false,
                'setMarginMode': false,
                'transfer': false,
                'withdraw': false,
            },
            'api': {
                'instruments': {
                    'post': [
                        'Etfs',
                    ],
                },
                'marketdata': {
                    'post': [
                        'GetLastTrades',
                        'GetOrderBook',
                        'GetCandles',
                    ],
                },
                'orders': {
                    'post': [
                        'PostOrder',
                        'CancelOrder',
                        'GetOrderState',
                        'GetOrders',
                    ],
                },
            },
            'timeframes': {
                '1m': 'CANDLE_INTERVAL_1_MIN',
                '2m': 'CANDLE_INTERVAL_2_MIN',
                '3m': 'CANDLE_INTERVAL_3_MIN',
                '5m': 'CANDLE_INTERVAL_5_MIN',
                '10m': 'CANDLE_INTERVAL_10_MIN',
                '15m': 'CANDLE_INTERVAL_15_MIN',
                '30m': 'CANDLE_INTERVAL_15_MIN',
                '1h': 'CANDLE_INTERVAL_HOUR',
                '2h': 'CANDLE_INTERVAL_2_HOUR',
                '4h': 'CANDLE_INTERVAL_4_HOUR',
                '1d': 'CANDLE_INTERVAL_DAY',
                '1w': 'CANDLE_INTERVAL_WEEK',
                '1M': 'CANDLE_INTERVAL_MONTH',
            },
            'precisionMode': TICK_SIZE,
            'requiredCredentials': {
                'apiKey': true,
                'secret': false,
            },
            'options': {
            },
            'exceptions': {
                'exact': {
                    '3': 'Could not fetch historical candles due to ExchangeNotAvailable',
                    '40003': PermissionDenied,
                    '80002': RateLimitExceeded,
                },
            },
        });
    }

    async fetchMarkets (params = {}) {
        /**
         * @method
         * @name tinkoff#fetchMarkets
         * @description retrieves data on all markets for tinkoff
         * @see https://docs.alpaca.markets/reference/get-v2-assets
         * @param {object} [params] extra parameters specific to the exchange api endpoint
         * @returns {object[]} an array of objects representing market data
         */
        const request = {
            'instrumentStatus': 'INSTRUMENT_STATUS_BASE',
        };
        const etfs = await this.instrumentsPostEtfs (this.extend (request, params));
        const markets = this.parseMarkets (etfs['instruments']);
        return markets;
    }

    parseMarket (asset): Market {
        //
        // {
        //     'figi': 'BBG00KLHY7D7',
        //     'ticker': 'DRIV',
        //     'classCode': 'SPBXM',
        //     'isin': 'US37954Y6243',
        //     'lot': '1',
        //     'currency': 'usd',
        //     'shortEnabledFlag': False,
        //     'name': 'Global X Autonomous & Electric Vehicles ETF',
        //     'exchange': 'spb_close',
        //     'focusType': 'equity',
        //     'countryOfRisk': 'US',
        //     'countryOfRiskName': 'Соединенные Штаты Америки',
        //     'sector': '',
        //     'rebalancingFreq': '',
        //     'tradingStatus': 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING',
        //     'otcFlag': False,
        //     'buyAvailableFlag': True,
        //     'sellAvailableFlag': True,
        //     'minPriceIncrement': {'units': '0', 'nano': '10000000'},
        //     'apiTradeAvailableFlag': True,
        //     'uid': '1e15b3a8-9a46-44af-8cf1-59893d0c478f',
        //     'positionUid': 'c76c4b4c-74b2-41d5-902a-da8a1848c5a5',
        //     'assetUid': 'f9f2e0e0-3f73-4ecd-a3bb-363e29058ed6',
        //     'forIisFlag': False,
        //     'forQualInvestorFlag': True,
        //     'weekendFlag': False,
        //     'blockedTcaFlag': False,
        //     'liquidityFlag': True,
        //     'first1minCandleDate': '2023-01-23T12:31:00Z',
        //     'first1dayCandleDate': '2023-01-23T07:00:00Z',
        //     'brand': {'logoName': 'US37954Y6243.png', 'logoBaseColor': '#FF4E00', 'textColor': '#ffffff'}
        // }
        //
        const marketId = this.safeString (asset, 'uid');
        const baseId = this.safeString (asset, 'ticker');
        const quoteId = this.safeString (asset, 'currency');
        const base = this.safeCurrencyCode (baseId);
        const quote = this.safeCurrencyCode (quoteId);
        const symbol = base;
        const active = this.safeValue (asset, 'forIisFlag');
        const minAmount = this.safeNumber (asset, 'lot');
        const amount = 1;
        const increment = this.safeValue (asset, 'minPriceIncrement');
        const units = this.safeNumber (increment, 'units');
        const nano = this.safeNumber (increment, 'nano');
        const price = units + nano / 1000000000;
        return {
            'id': marketId,
            'symbol': symbol,
            'base': base,
            'quote': quote,
            'settle': undefined,
            'baseId': baseId,
            'quoteId': quoteId,
            'settleId': undefined,
            'type': 'spot',
            'spot': true,
            'margin': undefined,
            'swap': false,
            'future': false,
            'option': false,
            'active': active,
            'contract': false,
            'linear': undefined,
            'inverse': undefined,
            'contractSize': undefined,
            'expiry': undefined,
            'expiryDatetime': undefined,
            'strike': undefined,
            'optionType': undefined,
            'precision': {
                'amount': amount,
                'price': price,
            },
            'limits': {
                'leverage': {
                    'min': undefined,
                    'max': undefined,
                },
                'amount': {
                    'min': minAmount,
                    'max': undefined,
                },
                'price': {
                    'min': undefined,
                    'max': undefined,
                },
                'cost': {
                    'min': undefined,
                    'max': undefined,
                },
            },
            'created': undefined,
            'info': asset,
        };
    }

    async fetchTrades (symbol: string, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Trade[]> {
        /**
         * @method
         * @name alpaca#fetchTrades
         * @description get the list of most recent trades for a particular symbol
         * @see https://docs.alpaca.markets/reference/cryptotrades
         * @see https://docs.alpaca.markets/reference/cryptolatesttrades
         * @param {string} symbol unified symbol of the market to fetch trades for
         * @param {int} [since] timestamp in ms of the earliest trade to fetch
         * @param {int} [limit] the maximum amount of trades to fetch
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {string} [params.loc] crypto location, default: us
         * @param {string} [params.method] method, default: marketPublicGetV1beta3CryptoLocTrades
         * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const marketId = market['id'];
        const loc = this.safeString (params, 'loc', 'us');
        const request = {
            'symbols': marketId,
            'loc': loc,
        };
        params = this.omit (params, [ 'loc', 'method' ]);
        if (since !== undefined) {
            request['start'] = this.iso8601 (since);
        }
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const response = await this.marketdataPostGetLastTrades (this.extend (request, params));
        //
        // {
        //     "next_page_token":null,
        //     "trades":{
        //        "BTC/USD":[
        //           {
        //              "i":36440704,
        //              "p":22625,
        //              "s":0.0001,
        //              "t":"2022-07-21T11:47:31.073391Z",
        //              "tks":"B"
        //           }
        //        ]
        //     }
        // }
        //
        // {
        //     "trades":{
        //        "BTC/USD":{
        //           "i":36440704,
        //           "p":22625,
        //           "s":0.0001,
        //           "t":"2022-07-21T11:47:31.073391Z",
        //           "tks":"B"
        //        }
        //     }
        // }
        //
        const trades = this.safeValue (response, 'trades', {});
        let symbolTrades = this.safeValue (trades, marketId, {});
        if (!Array.isArray (symbolTrades)) {
            symbolTrades = [ symbolTrades ];
        }
        return this.parseTrades (symbolTrades, market, since, limit);
    }

    async fetchOrderBook (symbol: string, limit: Int = undefined, params = {}): Promise<OrderBook> {
        /**
         * @method
         * @name alpaca#fetchOrderBook
         * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
         * @see https://docs.alpaca.markets/reference/cryptolatestorderbooks
         * @param {string} symbol unified symbol of the market to fetch the order book for
         * @param {int} [limit] the maximum amount of order book entries to return
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {string} [params.loc] crypto location, default: us
         * @returns {object} A dictionary of [order book structures]{@link https://github.com/ccxt/ccxt/wiki/Manual#order-book-structure} indexed by market symbols
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const id = market['id'];
        const loc = this.safeString (params, 'loc', 'us');
        const request = {
            'symbols': id,
            'loc': loc,
        };
        const response = await this.marketdataPostGetOrderBook (this.extend (request, params));
        //
        //   {
        //       "orderbooks":{
        //          "BTC/USD":{
        //             "a":[
        //                {
        //                   "p":22208,
        //                   "s":0.0051
        //                },
        //                {
        //                   "p":22209,
        //                   "s":0.1123
        //                },
        //                {
        //                   "p":22210,
        //                   "s":0.2465
        //                }
        //             ],
        //             "b":[
        //                {
        //                   "p":22203,
        //                   "s":0.395
        //                },
        //                {
        //                   "p":22202,
        //                   "s":0.2465
        //                },
        //                {
        //                   "p":22201,
        //                   "s":0.6455
        //                }
        //             ],
        //             "t":"2022-07-19T13:41:55.13210112Z"
        //          }
        //       }
        //   }
        //
        const orderbooks = this.safeValue (response, 'orderbooks', {});
        const rawOrderbook = this.safeValue (orderbooks, id, {});
        const timestamp = this.parse8601 (this.safeString (rawOrderbook, 't'));
        return this.parseOrderBook (rawOrderbook, market['symbol'], timestamp, 'b', 'a', 'p', 's');
    }

    async fetchOHLCV (symbol: string, timeframe = '1m', since: Int = 0, limit: Int = undefined, params = {}): Promise<OHLCV[]> {
        /**
         * @method
         * @name tinkoff#fetchOHLCV
         * @description fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
         * @param {string} symbol unified symbol of the market to fetch OHLCV data for
         * @param {string} timeframe the length of time each candle represents
         * @param {int} [since] timestamp in ms of the earliest candle to fetch
         * @param {int} [limit] the maximum amount of candles to fetch
         * @returns {int[][]} A list of candles ordered as timestamp, open, high, low, close, volume
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const marketId = market['id'];
        const request = {
            'instrumentId': marketId,
        };
        // request.instrumentId = '9654c2dd-6993-427e-80fa-04e80a1cf4da'
        const duration = this.parseTimeframe (timeframe);
        const options = this.safeValue (this.options, 'fetchOHLCV', {});
        const defaultLimit = this.safeInteger (options, 'limit', 500);
        if (limit === undefined) {
            limit = defaultLimit;
        } else {
            limit = Math.min (limit, defaultLimit);
        }
        const to = this.sum (since, limit * duration * 1000, 1);
        request['from'] = this.ymdhms (since);
        request['to'] = this.ymdhms (to);
        request['interval'] = this.safeString (this.timeframes, timeframe, 'CANDLE_INTERVAL_UNSPECIFIED');
        this.log ('request', request);
        const response = await this.marketdataPostGetCandles (this.extend (request, params));
        this.log ('response', response);
        this.log ('response2', response.length);
        this.log ('response3', response.keys ());
        //
        //    {
        //        "bars":{
        //           "BTC/USD":[
        //              {
        //                 "c":22887,
        //                 "h":22888,
        //                 "l":22873,
        //                 "n":11,
        //                 "o":22883,
        //                 "t":"2022-07-21T05:00:00Z",
        //                 "v":1.1138,
        //                 "vw":22883.0155324116
        //              },
        //              {
        //                 "c":22895,
        //                 "h":22895,
        //                 "l":22884,
        //                 "n":6,
        //                 "o":22884,
        //                 "t":"2022-07-21T05:01:00Z",
        //                 "v":0.001,
        //                 "vw":22889.5
        //              }
        //           ]
        //        },
        //        "next_page_token":"QlRDL1VTRHxNfDIwMjItMDctMjFUMDU6MDE6MDAuMDAwMDAwMDAwWg=="
        //     }
        //
        //    {
        //        "bars":{
        //           "BTC/USD":{
        //              "c":22887,
        //              "h":22888,
        //              "l":22873,
        //              "n":11,
        //              "o":22883,
        //              "t":"2022-07-21T05:00:00Z",
        //              "v":1.1138,
        //              "vw":22883.0155324116
        //           }
        //        }
        //     }
        //
        const bars = this.safeValue (response, 'bars', {});
        let ohlcvs = this.safeValue (bars, marketId, {});
        if (!Array.isArray (ohlcvs)) {
            ohlcvs = [ ohlcvs ];
        }
        return this.parseOHLCVs (ohlcvs, market, timeframe, since, limit);
    }

    parseOHLCV (ohlcv, market: Market = undefined): OHLCV {
        //
        //     {
        //        "c":22895,
        //        "h":22895,
        //        "l":22884,
        //        "n":6,
        //        "o":22884,
        //        "t":"2022-07-21T05:01:00Z",
        //        "v":0.001,
        //        "vw":22889.5
        //     }
        //
        const datetime = this.safeString (ohlcv, 't');
        const timestamp = this.parse8601 (datetime);
        return [
            timestamp, // timestamp
            this.safeNumber (ohlcv, 'o'), // open
            this.safeNumber (ohlcv, 'h'), // high
            this.safeNumber (ohlcv, 'l'), // low
            this.safeNumber (ohlcv, 'c'), // close
            this.safeNumber (ohlcv, 'v'), // volume
        ];
    }

    async createOrder (symbol: string, type: OrderType, side: OrderSide, amount: number, price: number = undefined, params = {}) {
        /**
         * @method
         * @name alpaca#createOrder
         * @description create a trade order
         * @see https://docs.alpaca.markets/reference/postorder
         * @param {string} symbol unified symbol of the market to create an order in
         * @param {string} type 'market', 'limit' or 'stop_limit'
         * @param {string} side 'buy' or 'sell'
         * @param {float} amount how much of currency you want to trade in units of base currency
         * @param {float} [price] the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {float} [params.triggerPrice] The price at which a trigger order is triggered at
         * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const id = market['id'];
        const request = {
            'symbol': id,
            'qty': this.amountToPrecision (symbol, amount),
            'side': side,
            'type': type, // market, limit, stop_limit
        };
        const triggerPrice = this.safeStringN (params, [ 'triggerPrice', 'stop_price' ]);
        if (triggerPrice !== undefined) {
            let newType = undefined;
            if (type.indexOf ('limit') >= 0) {
                newType = 'stop_limit';
            } else {
                throw new NotSupported (this.id + ' createOrder() does not support stop orders for ' + type + ' orders, only stop_limit orders are supported');
            }
            request['stop_price'] = this.priceToPrecision (symbol, triggerPrice);
            request['type'] = newType;
        }
        if (type.indexOf ('limit') >= 0) {
            request['limit_price'] = this.priceToPrecision (symbol, price);
        }
        const defaultTIF = this.safeString (this.options, 'defaultTimeInForce');
        request['time_in_force'] = this.safeString (params, 'timeInForce', defaultTIF);
        params = this.omit (params, [ 'timeInForce', 'triggerPrice' ]);
        const clientOrderIdprefix = this.safeString (this.options, 'clientOrderId');
        const uuid = this.uuid ();
        const parts = uuid.split ('-');
        const random_id = parts.join ('');
        const defaultClientId = this.implodeParams (clientOrderIdprefix, { 'id': random_id });
        const clientOrderId = this.safeString (params, 'clientOrderId', defaultClientId);
        request['client_order_id'] = clientOrderId;
        params = this.omit (params, [ 'clientOrderId' ]);
        const order = await this.ordersPostPostOrder (this.extend (request, params));
        //
        //   {
        //      "id": "61e69015-8549-4bfd-b9c3-01e75843f47d",
        //      "client_order_id": "eb9e2aaa-f71a-4f51-b5b4-52a6c565dad4",
        //      "created_at": "2021-03-16T18:38:01.942282Z",
        //      "updated_at": "2021-03-16T18:38:01.942282Z",
        //      "submitted_at": "2021-03-16T18:38:01.937734Z",
        //      "filled_at": null,
        //      "expired_at": null,
        //      "canceled_at": null,
        //      "failed_at": null,
        //      "replaced_at": null,
        //      "replaced_by": null,
        //      "replaces": null,
        //      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
        //      "symbol": "AAPL",
        //      "asset_class": "us_equity",
        //      "notional": "500",
        //      "qty": null,
        //      "filled_qty": "0",
        //      "filled_avg_price": null,
        //      "order_class": "",
        //      "order_type": "market",
        //      "type": "market",
        //      "side": "buy",
        //      "time_in_force": "day",
        //      "limit_price": null,
        //      "stop_price": null,
        //      "status": "accepted",
        //      "extended_hours": false,
        //      "legs": null,
        //      "trail_percent": null,
        //      "trail_price": null,
        //      "hwm": null
        //   }
        //
        return this.parseOrder (order, market);
    }

    async cancelOrder (id: string, symbol: Str = undefined, params = {}) {
        /**
         * @method
         * @name alpaca#cancelOrder
         * @description cancels an open order
         * @see https://docs.alpaca.markets/reference/deleteorderbyorderid
         * @param {string} id order id
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const request = {
            'order_id': id,
        };
        const response = await this.ordersPostCancelOrder (this.extend (request, params));
        //
        //   {
        //       "code": 40410000,
        //       "message": "order is not found."
        //   }
        //
        return this.safeValue (response, 'message', {});
    }

    async cancelAllOrders (symbol: Str = undefined, params = {}) {
        /**
         * @method
         * @name alpaca#cancelAllOrders
         * @description cancel all open orders in a market
         * @see https://docs.alpaca.markets/reference/deleteallorders
         * @param {string} symbol alpaca cancelAllOrders cannot setting symbol, it will cancel all open orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets ();
        const response = await this.ordersPostCancelOrder (params);
        if (Array.isArray (response)) {
            return this.parseOrders (response, undefined);
        } else {
            return response;
        }
    }

    async fetchOrder (id: string, symbol: Str = undefined, params = {}) {
        /**
         * @method
         * @name alpaca#fetchOrder
         * @description fetches information on an order made by the user
         * @see https://docs.alpaca.markets/reference/getorderbyorderid
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets ();
        const request = {
            'order_id': id,
        };
        const order = await this.ordersPostGetOrderState (this.extend (request, params));
        const marketId = this.safeString (order, 'symbol');
        const market = this.safeMarket (marketId);
        return this.parseOrder (order, market);
    }

    async fetchOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Order[]> {
        /**
         * @method
         * @name alpaca#fetchOrders
         * @description fetches information on multiple orders made by the user
         * @see https://docs.alpaca.markets/reference/getallorders
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {int} [params.until] the latest time in ms to fetch orders for
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets ();
        const request = {
            'status': 'all',
        };
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market (symbol);
            request['symbols'] = market['id'];
        }
        const until = this.safeInteger (params, 'until');
        if (until !== undefined) {
            params = this.omit (params, 'until');
            request['endTime'] = until;
        }
        if (since !== undefined) {
            request['after'] = since;
        }
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const response = await this.ordersPostGetOrders (this.extend (request, params));
        //
        //     [
        //         {
        //           "id": "cbaf12d7-69b8-49c0-a31b-b46af35c755c",
        //           "client_order_id": "ccxt_b36156ae6fd44d098ac9c179bab33efd",
        //           "created_at": "2023-11-17T04:21:42.234579Z",
        //           "updated_at": "2023-11-17T04:22:34.442765Z",
        //           "submitted_at": "2023-11-17T04:21:42.233357Z",
        //           "filled_at": null,
        //           "expired_at": null,
        //           "canceled_at": "2023-11-17T04:22:34.399019Z",
        //           "failed_at": null,
        //           "replaced_at": null,
        //           "replaced_by": null,
        //           "replaces": null,
        //           "asset_id": "77c6f47f-0939-4b23-b41e-47b4469c4bc8",
        //           "symbol": "LTC/USDT",
        //           "asset_class": "crypto",
        //           "notional": null,
        //           "qty": "0.001",
        //           "filled_qty": "0",
        //           "filled_avg_price": null,
        //           "order_class": "",
        //           "order_type": "limit",
        //           "type": "limit",
        //           "side": "sell",
        //           "time_in_force": "gtc",
        //           "limit_price": "1000",
        //           "stop_price": null,
        //           "status": "canceled",
        //           "extended_hours": false,
        //           "legs": null,
        //           "trail_percent": null,
        //           "trail_price": null,
        //           "hwm": null,
        //           "subtag": null,
        //           "source": "access_key"
        //         }
        //     ]
        //
        return this.parseOrders (response, market, since, limit);
    }

    async fetchOpenOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Order[]> {
        /**
         * @method
         * @name alpaca#fetchOpenOrders
         * @description fetch all unfilled currently open orders
         * @see https://docs.alpaca.markets/reference/getallorders
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {int} [params.until] the latest time in ms to fetch orders for
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const request = {
            'status': 'open',
        };
        return await this.fetchOrders (symbol, since, limit, this.extend (request, params));
    }

    async fetchClosedOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Order[]> {
        /**
         * @method
         * @name alpaca#fetchClosedOrders
         * @description fetches information on multiple closed orders made by the user
         * @see https://docs.alpaca.markets/reference/getallorders
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {int} [params.until] the latest time in ms to fetch orders for
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const request = {
            'status': 'closed',
        };
        return await this.fetchOrders (symbol, since, limit, this.extend (request, params));
    }

    parseOrder (order, market: Market = undefined): Order {
        //
        //    {
        //        "id":"6ecfcc34-4bed-4b53-83ba-c564aa832a81",
        //        "client_order_id":"ccxt_1c6ceab0b5e84727b2f1c0394ba17560",
        //        "created_at":"2022-06-14T13:59:30.224037068Z",
        //        "updated_at":"2022-06-14T13:59:30.224037068Z",
        //        "submitted_at":"2022-06-14T13:59:30.221856828Z",
        //        "filled_at":null,
        //        "expired_at":null,
        //        "canceled_at":null,
        //        "failed_at":null,
        //        "replaced_at":null,
        //        "replaced_by":null,
        //        "replaces":null,
        //        "asset_id":"64bbff51-59d6-4b3c-9351-13ad85e3c752",
        //        "symbol":"BTCUSD",
        //        "asset_class":"crypto",
        //        "notional":null,
        //        "qty":"0.01",
        //        "filled_qty":"0",
        //        "filled_avg_price":null,
        //        "order_class":"",
        //        "order_type":"limit",
        //        "type":"limit",
        //        "side":"buy",
        //        "time_in_force":"day",
        //        "limit_price":"14000",
        //        "stop_price":null,
        //        "status":"accepted",
        //        "extended_hours":false,
        //        "legs":null,
        //        "trail_percent":null,
        //        "trail_price":null,
        //        "hwm":null,
        //        "commission":"0.42",
        //        "source":null
        //    }
        //
        const marketId = this.safeString (order, 'symbol');
        market = this.safeMarket (marketId, market);
        const symbol = market['symbol'];
        const alpacaStatus = this.safeString (order, 'status');
        const status = this.parseOrderStatus (alpacaStatus);
        const feeValue = this.safeString (order, 'commission');
        let fee = undefined;
        if (feeValue !== undefined) {
            fee = {
                'cost': feeValue,
                'currency': 'USD',
            };
        }
        let orderType = this.safeString (order, 'order_type');
        if (orderType !== undefined) {
            if (orderType.indexOf ('limit') >= 0) {
                // might be limit or stop-limit
                orderType = 'limit';
            }
        }
        const datetime = this.safeString (order, 'submitted_at');
        const timestamp = this.parse8601 (datetime);
        return this.safeOrder ({
            'id': this.safeString (order, 'id'),
            'clientOrderId': this.safeString (order, 'client_order_id'),
            'timestamp': timestamp,
            'datetime': datetime,
            'lastTradeTimeStamp': undefined,
            'status': status,
            'symbol': symbol,
            'type': orderType,
            'timeInForce': this.parseTimeInForce (this.safeString (order, 'time_in_force')),
            'postOnly': undefined,
            'side': this.safeString (order, 'side'),
            'price': this.safeNumber (order, 'limit_price'),
            'stopPrice': this.safeNumber (order, 'stop_price'),
            'triggerPrice': this.safeNumber (order, 'stop_price'),
            'cost': undefined,
            'average': this.safeNumber (order, 'filled_avg_price'),
            'amount': this.safeNumber (order, 'qty'),
            'filled': this.safeNumber (order, 'filled_qty'),
            'remaining': undefined,
            'trades': undefined,
            'fee': fee,
            'info': order,
        }, market);
    }

    parseOrderStatus (status) {
        const statuses = {
            'pending_new': 'open',
            'accepted': 'open',
            'new': 'open',
            'partially_filled': 'open',
            'activated': 'open',
            'filled': 'closed',
        };
        return this.safeString (statuses, status, status);
    }

    parseTimeInForce (timeInForce) {
        const timeInForces = {
            'day': 'Day',
        };
        return this.safeString (timeInForces, timeInForce, timeInForce);
    }

    parseTrade (trade, market: Market = undefined): Trade {
        //
        //   {
        //       "t":"2022-06-14T05:00:00.027869Z",
        //       "x":"CBSE",
        //       "p":"21942.15",
        //       "s":"0.0001",
        //       "tks":"S",
        //       "i":"355681339"
        //   }
        //
        const marketId = this.safeString (trade, 'S');
        const symbol = this.safeSymbol (marketId, market);
        const datetime = this.safeString (trade, 't');
        const timestamp = this.parse8601 (datetime);
        const alpacaSide = this.safeString (trade, 'tks');
        let side: string;
        if (alpacaSide === 'B') {
            side = 'buy';
        } else if (alpacaSide === 'S') {
            side = 'sell';
        }
        const priceString = this.safeString (trade, 'p');
        const amountString = this.safeString (trade, 's');
        return this.safeTrade ({
            'info': trade,
            'id': this.safeString (trade, 'i'),
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'symbol': symbol,
            'order': undefined,
            'type': undefined,
            'side': side,
            'takerOrMaker': 'taker',
            'price': priceString,
            'amount': amountString,
            'cost': undefined,
            'fee': undefined,
        }, market);
    }

    sign (path, api = 'instruments', method = 'GET', params = {}, headers = undefined, body = undefined) {
        const endpoint = '/' + this.implodeParams (path, params);
        const url = this.implodeHostname (this.urls['api'][api]) + endpoint;
        headers = (headers !== undefined) ? headers : {};
        this.checkRequiredCredentials ();
        headers['Authorization'] = 'Bearer ' + this.apiKey;
        const query = this.omit (params, this.extractParams (path));
        if (Object.keys (query).length) {
            body = this.json (query);
            headers['Content-Type'] = 'application/json';
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }

    handleErrors (code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        if (response === undefined) {
            return undefined; // default error handler
        }
        // {
        //     "code": 16,
        //     "message": "authentication token is missing or invalid",
        //     "description": "40003"
        // }
        const feedback = this.id + ' ' + body;
        const errorCode = this.safeString (response, 'code');
        const detailedErrorCode = this.safeString (response, 'description');
        if (code !== undefined) {
            this.throwExactlyMatchedException (this.exceptions['exact'], errorCode, feedback);
            this.throwExactlyMatchedException (this.exceptions['exact'], detailedErrorCode, feedback);
        }
        const message = this.safeValue (response, 'message', undefined);
        if (message !== undefined) {
            this.throwExactlyMatchedException (this.exceptions['exact'], message, feedback);
            this.throwBroadlyMatchedException (this.exceptions['broad'], message, feedback);
            throw new ExchangeError (feedback);
        }
        return undefined;
    }
}
