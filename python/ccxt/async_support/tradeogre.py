# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.async_support.base.exchange import Exchange
from ccxt.abstract.tradeogre import ImplicitAPI
from ccxt.base.types import IndexType, Int, Market, Num, Order, OrderSide, OrderType, Str, Ticker
from typing import List
from ccxt.base.errors import ExchangeError
from ccxt.base.errors import BadRequest
from ccxt.base.errors import InsufficientFunds
from ccxt.base.errors import AuthenticationError
from ccxt.base.decimal_to_precision import TICK_SIZE


class tradeogre(Exchange, ImplicitAPI):

    def describe(self):
        return self.deep_extend(super(tradeogre, self).describe(), {
            'id': 'tradeogre',
            'name': 'tradeogre',
            'countries': [],
            'rateLimit': 100,
            'version': 'v2',
            'pro': False,
            'has': {
                'CORS': None,
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'addMargin': False,
                'cancelAllOrders': True,
                'cancelOrder': True,
                'cancelOrders': False,
                'closeAllPositions': False,
                'closePosition': False,
                'createDepositAddress': False,
                'createMarketOrder': False,
                'createOrder': True,
                'createOrders': False,
                'createPostOnlyOrder': False,
                'createReduceOnlyOrder': False,
                'createStopLimitOrder': False,
                'createStopMarketOrder': False,
                'createStopOrder': False,
                'fetchAccounts': False,
                'fetchBalance': True,
                'fetchBorrowInterest': False,
                'fetchBorrowRateHistory': False,
                'fetchClosedOrders': False,
                'fetchCrossBorrowRate': False,
                'fetchCrossBorrowRates': False,
                'fetchDeposit': False,
                'fetchDepositAddress': False,
                'fetchDepositAddresses': False,
                'fetchDepositAddressesByNetwork': False,
                'fetchDeposits': False,
                'fetchDepositsWithdrawals': False,
                'fetchFundingHistory': False,
                'fetchFundingRate': False,
                'fetchFundingRateHistory': False,
                'fetchFundingRates': False,
                'fetchIndexOHLCV': False,
                'fetchIsolatedBorrowRate': False,
                'fetchIsolatedBorrowRates': False,
                'fetchLedger': False,
                'fetchLedgerEntry': False,
                'fetchLeverageTiers': False,
                'fetchMarketLeverageTiers': False,
                'fetchMarkets': True,
                'fetchMarkOHLCV': False,
                'fetchMyTrades': False,
                'fetchOHLCV': False,
                'fetchOpenInterest': False,
                'fetchOpenInterestHistory': False,
                'fetchOpenOrders': True,
                'fetchOrder': True,
                'fetchOrderBook': True,
                'fetchOrderBooks': False,
                'fetchOrders': False,
                'fetchOrderTrades': False,
                'fetchPermissions': False,
                'fetchPosition': False,
                'fetchPositions': False,
                'fetchPositionsForSymbol': False,
                'fetchPositionsRisk': False,
                'fetchPremiumIndexOHLCV': False,
                'fetchTicker': True,
                'fetchTickers': False,
                'fetchTrades': True,
                'fetchTradingLimits': False,
                'fetchTransactionFee': False,
                'fetchTransactionFees': False,
                'fetchTransactions': False,
                'fetchTransfers': False,
                'fetchWithdrawAddresses': False,
                'fetchWithdrawal': False,
                'fetchWithdrawals': False,
                'reduceMargin': False,
                'setLeverage': False,
                'setMargin': False,
                'setMarginMode': False,
                'setPositionMode': False,
                'signIn': False,
                'transfer': False,
                'withdraw': False,
            },
            'urls': {
                'referral': '',
                'logo': 'https://github.com/ccxt/ccxt/assets/43336371/3aa748b7-ea44-45e9-a9e7-b1d207a2578a',
                'api': {
                    'rest': 'https://tradeogre.com/api/v1',
                },
                'www': 'https://tradeogre.com',
                'doc': 'https://tradeogre.com/help/api',
                'fees': 'https://tradeogre.com/help/fees',
            },
            'fees': {
                'trading': {
                    'maker': self.parse_number('0.002'),
                    'taker': self.parse_number('0.002'),
                },
            },
            'api': {
                'public': {
                    'get': {
                        'markets': 1,
                        'orders/{market}': 1,
                        'ticker/{market}': 1,
                        'history/{market}': 1,
                    },
                },
                'private': {
                    'get': {
                        'account/balance': 1,
                        'account/balances': 1,
                        'account/order/{uuid}': 1,
                    },
                    'post': {
                        'order/buy': 1,
                        'order/sell': 1,
                        'order/cancel': 1,
                        'orders': 1,
                        'account/orders': 1,
                    },
                },
            },
            'commonCurrencies': {
            },
            'precisionMode': TICK_SIZE,
            'exceptions': {
                'exact': {
                    'Must be authorized': AuthenticationError,
                    'Market not found': BadRequest,
                    'Insufficient funds': InsufficientFunds,
                    'Order not found': BadRequest,
                },
            },
            'options': {
            },
        })

    async def fetch_markets(self, params={}) -> List[Market]:
        """
        retrieves data on all markets for bigone
        :see: https://github.com/P2B-team/p2b-api-docs/blob/master/api-doc.md#markets
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict[]: an array of objects representing market data
        """
        response = await self.publicGetMarkets(params)
        #
        #   [
        #       {
        #          "AEON-BTC": {
        #             "initialprice": "0.00022004",
        #             "price": "0.00025992",
        #             "high": "0.00025992",
        #             "low": "0.00022003",
        #             "volume": "0.00359066",
        #             "bid": "0.00022456",
        #             "ask": "0.00025993"
        #          }
        #       }
        #   ]
        #
        result = []
        for i in range(0, len(response)):
            rawMarket = response[i]
            keys = list(rawMarket.keys())
            id = self.safe_string(keys, 0)
            keyParts = id.split('-')
            baseId = self.safe_string(keyParts, 0)
            quoteId = self.safe_string(keyParts, 1)
            base = self.safe_currency_code(baseId)
            quote = self.safe_currency_code(quoteId)
            market = self.safe_market_structure({
                'id': id,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': None,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': None,
                'type': 'spot',
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'active': True,
                'contract': False,
                'linear': None,
                'inverse': None,
                'contractSize': None,
                'taker': self.fees['trading']['taker'],
                'maker': self.fees['trading']['taker'],
                'expiry': None,
                'expiryDatetime': None,
                'strike': None,
                'optionType': None,
                'precision': {
                    'amount': self.parse_number(self.parse_precision('8')),
                    'price': self.parse_number(self.parse_precision('8')),  # they're not explicit about it
                },
                'limits': {
                    'leverage': {
                        'min': None,
                        'max': None,
                    },
                    'amount': {
                        'min': None,
                        'max': None,
                    },
                    'price': {
                        'min': None,
                        'max': None,
                    },
                    'cost': {
                        'min': None,
                        'max': None,
                    },
                },
                'created': None,
                'info': rawMarket,
            })
            result.append(market)
        return result

    async def fetch_ticker(self, symbol: str, params={}) -> Ticker:
        """
        fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
        :param str symbol: unified symbol of the market to fetch the ticker for
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: a `ticker structure <https://docs.ccxt.com/#/?id=ticker-structure>`
        """
        await self.load_markets()
        market = self.market(symbol)
        request = {
            'market': market['id'],
        }
        response = await self.publicGetTickerMarket(self.extend(request, params))
        #
        #   {
        #       "success":true,
        #       "initialprice":"0.02502002",
        #       "price":"0.02500000",
        #       "high":"0.03102001",
        #       "low":"0.02500000",
        #       "volume":"0.15549958",
        #       "bid":"0.02420000",
        #       "ask":"0.02625000"
        #   }
        #
        return self.parse_ticker(response, market)

    def parse_ticker(self, ticker, market: Market = None):
        #
        #  {
        #       "success":true,
        #       "initialprice":"0.02502002",
        #       "price":"0.02500000",
        #       "high":"0.03102001",
        #       "low":"0.02500000",
        #       "volume":"0.15549958",
        #       "bid":"0.02420000",
        #       "ask":"0.02625000"
        #   }
        #
        return self.safe_ticker({
            'symbol': self.safe_string(market, 'symbol'),
            'timestamp': None,
            'datetime': None,
            'high': self.safe_string(ticker, 'high'),
            'low': self.safe_string(ticker, 'low'),
            'bid': self.safe_string(ticker, 'bid'),
            'bidVolume': None,
            'ask': self.safe_string(ticker, 'ask'),
            'askVolume': None,
            'vwap': None,
            'open': self.safe_string(ticker, 'open'),
            'close': None,
            'last': None,
            'previousClose': None,
            'change': None,
            'percentage': None,
            'average': None,
            'baseVolume': self.safe_string(ticker, 'volume'),
            'quoteVolume': None,
            'info': ticker,
        }, market)

    async def fetch_order_book(self, symbol: str, limit: Int = None, params={}):
        """
        fetches information on open orders with bid(buy) and ask(sell) prices, volumes and other data
        :param str symbol: unified symbol of the market to fetch the order book for
        :param int [limit]: the maximum amount of order book entries to return
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: A dictionary of `order book structures <https://docs.ccxt.com/#/?id=order-book-structure>` indexed by market symbols
        """
        await self.load_markets()
        market = self.market(symbol)
        request = {
            'market': market['id'],
        }
        response = await self.publicGetOrdersMarket(self.extend(request, params))
        #
        # {
        #     "success": True,
        #     "buy": {
        #        "0.02425501": "36.46986607",
        #        "0.02425502": "93.64201137",
        #        "0.02425503": "19.02000000",
        #        "0.02425515": "115.49000000"
        # }
        #
        rawBids = self.safe_dict(response, 'buy', {})
        rawAsks = self.safe_dict(response, 'sell', {})
        rawOrderbook = {
            'bids': rawBids,
            'asks': rawAsks,
        }
        orderbook = self.parse_order_book(rawOrderbook, symbol)
        return orderbook

    def parse_bids_asks(self, bidasks, priceKey: IndexType = 0, amountKey: IndexType = 1, countOrIdKey: IndexType = 2):
        prices = list(bidasks.keys())
        result = []
        for i in range(0, len(prices)):
            priceString = self.safe_string(prices, i)
            price = self.safe_number(prices, i)
            volume = self.safe_number(bidasks, priceString)
            result.append([price, volume])
        return result

    async def fetch_trades(self, symbol: str, since: Int = None, limit: Int = None, params={}):
        """
        get the list of most recent trades for a particular symbol
        :param str symbol: unified symbol of the market to fetch trades for
        :param int [since]: timestamp in ms of the earliest trade to fetch
        :param int [limit]: the maximum number of trades to fetch
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :param int params['lastId']: order id
        :returns Trade[]: a list of `trade structures <https://docs.ccxt.com/#/?id=public-trades>`
        """
        await self.load_markets()
        market = self.market(symbol)
        request = {
            'market': market['id'],
        }
        response = await self.publicGetHistoryMarket(self.extend(request, params))
        return self.parse_trades(response, market, since, limit)

    def parse_trade(self, trade, market: Market = None):
        #
        #  {
        #      "date":1515128233,
        #      "type":"sell",
        #      "price":"0.02454320",
        #      "quantity":"0.17614230"
        #  }
        #
        timestamp = self.safe_integer_product(trade, 'date', 1000)
        return self.safe_trade({
            'info': trade,
            'id': None,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'symbol': self.safe_string(market, 'symbol'),
            'order': None,
            'type': None,
            'side': self.safe_string(trade, 'type'),
            'takerOrMaker': None,
            'price': self.safe_string(trade, 'price'),
            'amount': self.safe_string(trade, 'quantity'),
            'cost': None,
            'fee': {
                'currency': None,
                'cost': None,
            },
        }, market)

    async def fetch_balance(self, params={}):
        """
        query for balance and get the amount of funds available for trading or funds locked in orders
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: a `balance structure <https://docs.ccxt.com/#/?id=balance-structure>`
        """
        await self.load_markets()
        response = await self.privateGetAccountBalances(params)
        result = self.safe_dict(response, 'balances', {})
        return self.parse_balance(result)

    def parse_balance(self, response):
        #
        #    {
        #        "USDT": "12"
        #    }
        #
        result = {
            'info': response,
        }
        keys = list(response.keys())
        for i in range(0, len(keys)):
            currencyId = keys[i]
            balance = response[currencyId]
            code = self.safe_currency_code(currencyId)
            account = {
                'total': balance,
            }
            result[code] = account
        return self.safe_balance(result)

    async def create_order(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={}):
        """
        create a trade order
        :param str symbol: unified symbol of the market to create an order in
        :param str type: not used by tradeogre
        :param str side: 'buy' or 'sell'
        :param float amount: how much of currency you want to trade in units of base currency
        :param float price: the price at which the order is to be fullfilled, in units of the quote currency
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: an `order structure <https://docs.ccxt.com/#/?id=order-structure>`
        """
        await self.load_markets()
        market = self.market(symbol)
        request = {
            'market': market['id'],
            'quantity': self.parse_to_numeric(self.amount_to_precision(symbol, amount)),
            'price': self.parse_to_numeric(self.price_to_precision(symbol, price)),
        }
        if type == 'market':
            raise BadRequest(self.id + ' createOrder does not support market orders')
        response = None
        if side == 'buy':
            response = await self.privatePostOrderBuy(self.extend(request, params))
        else:
            response = await self.privatePostOrderSell(self.extend(request, params))
        return self.parse_order(response, market)

    async def cancel_order(self, id: str, symbol: Str = None, params={}):
        """
        cancels an open order
        :param str id: order id
        :param str symbol: unified symbol of the market the order was made in
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: An `order structure <https://docs.ccxt.com/#/?id=order-structure>`
        """
        await self.load_markets()
        request = {
            'uuid': id,
        }
        response = await self.privatePostOrderCancel(self.extend(request, params))
        return self.parse_order(response)

    async def cancel_all_orders(self, symbol: Str = None, params={}):
        """
        cancel all open orders
        :param str symbol: alpaca cancelAllOrders cannot setting symbol, it will cancel all open orders
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict[]: a list of `order structures <https://docs.ccxt.com/#/?id=order-structure>`
        """
        await self.load_markets()
        return await self.cancel_order('all', symbol, params)

    async def fetch_open_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={}):
        """
        fetch all unfilled currently open orders
        :param str symbol: unified market symbol of the market orders were made in
        :param int [since]: the earliest time in ms to fetch orders for
        :param int [limit]: the maximum number of order structures to retrieve
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns Order[]: a list of `order structures <https://docs.ccxt.com/#/?id=order-structure>`
        """
        await self.load_markets()
        market = None
        if symbol is not None:
            market = self.market(symbol)
        request = {}
        if symbol is not None:
            request['market'] = market['id']
        response = await self.privatePostAccountOrders(self.extend(request, params))
        return self.parse_orders(response, market, since, limit)

    async def fetch_order(self, id: str, symbol: Str = None, params={}):
        """
        fetches information on an order made by the user
        :see: https://github.com/ace-exchange/ace-official-api-docs/blob/master/api_v2.md#open-api---order-status
        :param str symbol: unified symbol of the market the order was made in
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: An `order structure <https://docs.ccxt.com/#/?id=order-structure>`
        """
        await self.load_markets()
        request = {
            'uuid': id,
        }
        response = await self.privateGetAccountOrderUuid(self.extend(request, params))
        return self.parse_order(response, None)

    def parse_order(self, order, market: Market = None) -> Order:
        #
        #
        # {
        #     "uuid": "a40ac710-8dc5-b5a8-aa69-389715197b14",
        #     "date": 1514876938,
        #     "type": "sell",
        #     "price": "0.02621960",
        #     "quantity": "1.55772526",
        #     "market": "XMR-BTC"
        # }
        #
        timestamp = self.safe_integer_product(order, 'date', 1000)
        marketId = self.safe_string(order, 'market')
        market = self.safe_market(marketId, market)
        return self.safe_order({
            'info': order,
            'id': self.safe_string(order, 'uuid'),
            'clientOrderId': None,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'lastTradeTimestamp': None,
            'symbol': market['symbol'],
            'type': None,
            'timeInForce': None,
            'postOnly': None,
            'side': self.safe_string(order, 'type'),
            'price': self.safe_string(order, 'price'),
            'stopPrice': None,
            'amount': self.safe_string(order, 'quantity'),
            'cost': None,
            'average': None,
            'filled': self.safe_string(order, 'fulfilled'),
            'remaining': None,
            'status': None,
            'fee': {
                'currency': None,
                'cost': None,
            },
            'trades': None,
        }, market)

    def sign(self, path, api='public', method='GET', params={}, headers=None, body=None):
        url = self.urls['api']['rest'] + '/' + self.implode_params(path, params)
        params = self.omit(params, self.extract_params(path))
        if method == 'GET':
            if params:
                url += '?' + self.urlencode(params)
        if api == 'private':
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': 'CCXT',
                'authorization': 'Basic ' + self.string_to_base64(self.apiKey + ':' + self.secret),
            }
            if method != 'GET':
                body = self.urlencode(params)
        return {'url': url, 'method': method, 'body': body, 'headers': headers}

    def handle_errors(self, code, reason, url, method, headers, body, response, requestHeaders, requestBody):
        if response is None:
            return None
        if not ('success' in response):
            return None
        #
        #  {"success":false,"error":"Must be authorized"}
        #
        success = self.safe_bool(response, 'success')
        if success:
            return None
        successString = self.safe_string(response, 'success')
        if successString == 'true':
            return None
        error = self.safe_value(response, 'error')
        errorCode = self.safe_string(error, 'code')
        feedback = self.id + ' ' + self.json(response)
        self.throw_exactly_matched_exception(self.exceptions['exact'], errorCode, feedback)
        raise ExchangeError(feedback)
