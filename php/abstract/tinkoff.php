<?php

namespace ccxt\abstract;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


abstract class tinkoff extends \ccxt\Exchange {
    public function instruments_post_etfs($params = array()) {
        return $this->request('Etfs', 'instruments', 'POST', $params, null, null, array());
    }
    public function marketdata_post_getlasttrades($params = array()) {
        return $this->request('GetLastTrades', 'marketdata', 'POST', $params, null, null, array());
    }
    public function marketdata_post_getorderbook($params = array()) {
        return $this->request('GetOrderBook', 'marketdata', 'POST', $params, null, null, array());
    }
    public function marketdata_post_getcandles($params = array()) {
        return $this->request('GetCandles', 'marketdata', 'POST', $params, null, null, array());
    }
    public function operations_post_getoperations($params = array()) {
        return $this->request('GetOperations', 'operations', 'POST', $params, null, null, array());
    }
    public function operations_post_getportfolio($params = array()) {
        return $this->request('GetPortfolio', 'operations', 'POST', $params, null, null, array());
    }
    public function operations_post_getpositions($params = array()) {
        return $this->request('GetPositions', 'operations', 'POST', $params, null, null, array());
    }
    public function operations_post_getwithdrawlimits($params = array()) {
        return $this->request('GetWithdrawLimits', 'operations', 'POST', $params, null, null, array());
    }
    public function orders_post_postorder($params = array()) {
        return $this->request('PostOrder', 'orders', 'POST', $params, null, null, array());
    }
    public function orders_post_cancelorder($params = array()) {
        return $this->request('CancelOrder', 'orders', 'POST', $params, null, null, array());
    }
    public function orders_post_getorderstate($params = array()) {
        return $this->request('GetOrderState', 'orders', 'POST', $params, null, null, array());
    }
    public function orders_post_getorders($params = array()) {
        return $this->request('GetOrders', 'orders', 'POST', $params, null, null, array());
    }
    public function users_post_getaccounts($params = array()) {
        return $this->request('GetAccounts', 'users', 'POST', $params, null, null, array());
    }
    public function instrumentsPostEtfs($params = array()) {
        return $this->request('Etfs', 'instruments', 'POST', $params, null, null, array());
    }
    public function marketdataPostGetLastTrades($params = array()) {
        return $this->request('GetLastTrades', 'marketdata', 'POST', $params, null, null, array());
    }
    public function marketdataPostGetOrderBook($params = array()) {
        return $this->request('GetOrderBook', 'marketdata', 'POST', $params, null, null, array());
    }
    public function marketdataPostGetCandles($params = array()) {
        return $this->request('GetCandles', 'marketdata', 'POST', $params, null, null, array());
    }
    public function operationsPostGetOperations($params = array()) {
        return $this->request('GetOperations', 'operations', 'POST', $params, null, null, array());
    }
    public function operationsPostGetPortfolio($params = array()) {
        return $this->request('GetPortfolio', 'operations', 'POST', $params, null, null, array());
    }
    public function operationsPostGetPositions($params = array()) {
        return $this->request('GetPositions', 'operations', 'POST', $params, null, null, array());
    }
    public function operationsPostGetWithdrawLimits($params = array()) {
        return $this->request('GetWithdrawLimits', 'operations', 'POST', $params, null, null, array());
    }
    public function ordersPostPostOrder($params = array()) {
        return $this->request('PostOrder', 'orders', 'POST', $params, null, null, array());
    }
    public function ordersPostCancelOrder($params = array()) {
        return $this->request('CancelOrder', 'orders', 'POST', $params, null, null, array());
    }
    public function ordersPostGetOrderState($params = array()) {
        return $this->request('GetOrderState', 'orders', 'POST', $params, null, null, array());
    }
    public function ordersPostGetOrders($params = array()) {
        return $this->request('GetOrders', 'orders', 'POST', $params, null, null, array());
    }
    public function usersPostGetAccounts($params = array()) {
        return $this->request('GetAccounts', 'users', 'POST', $params, null, null, array());
    }
}
