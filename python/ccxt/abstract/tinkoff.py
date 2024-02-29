from ccxt.base.types import Entry


class ImplicitAPI:
    instruments_post_etfs = instrumentsPostEtfs = Entry('Etfs', 'instruments', 'POST', {})
    marketdata_post_getlasttrades = marketdataPostGetLastTrades = Entry('GetLastTrades', 'marketdata', 'POST', {})
    marketdata_post_getorderbook = marketdataPostGetOrderBook = Entry('GetOrderBook', 'marketdata', 'POST', {})
    marketdata_post_getcandles = marketdataPostGetCandles = Entry('GetCandles', 'marketdata', 'POST', {})
    orders_post_postorder = ordersPostPostOrder = Entry('PostOrder', 'orders', 'POST', {})
    orders_post_cancelorder = ordersPostCancelOrder = Entry('CancelOrder', 'orders', 'POST', {})
    orders_post_getorderstate = ordersPostGetOrderState = Entry('GetOrderState', 'orders', 'POST', {})
    orders_post_getorders = ordersPostGetOrders = Entry('GetOrders', 'orders', 'POST', {})
