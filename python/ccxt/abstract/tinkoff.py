from ccxt.base.types import Entry


class ImplicitAPI:
    instruments_post_etfs = instrumentsPostEtfs = Entry('Etfs', 'instruments', 'POST', {})
    marketdata_post_getlasttrades = marketdataPostGetLastTrades = Entry('GetLastTrades', 'marketdata', 'POST', {})
    marketdata_post_getorderbook = marketdataPostGetOrderBook = Entry('GetOrderBook', 'marketdata', 'POST', {})
    marketdata_post_getcandles = marketdataPostGetCandles = Entry('GetCandles', 'marketdata', 'POST', {})
    operations_post_getoperations = operationsPostGetOperations = Entry('GetOperations', 'operations', 'POST', {})
    operations_post_getportfolio = operationsPostGetPortfolio = Entry('GetPortfolio', 'operations', 'POST', {})
    operations_post_getpositions = operationsPostGetPositions = Entry('GetPositions', 'operations', 'POST', {})
    operations_post_getwithdrawlimits = operationsPostGetWithdrawLimits = Entry('GetWithdrawLimits', 'operations', 'POST', {})
    orders_post_postorder = ordersPostPostOrder = Entry('PostOrder', 'orders', 'POST', {})
    orders_post_cancelorder = ordersPostCancelOrder = Entry('CancelOrder', 'orders', 'POST', {})
    orders_post_getorderstate = ordersPostGetOrderState = Entry('GetOrderState', 'orders', 'POST', {})
    orders_post_getorders = ordersPostGetOrders = Entry('GetOrders', 'orders', 'POST', {})
    users_post_getaccounts = usersPostGetAccounts = Entry('GetAccounts', 'users', 'POST', {})
