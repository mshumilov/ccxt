import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    instrumentsPostEtfs(params?: {}): Promise<implicitReturnType>;
    marketdataPostGetLastTrades(params?: {}): Promise<implicitReturnType>;
    marketdataPostGetOrderBook(params?: {}): Promise<implicitReturnType>;
    marketdataPostGetCandles(params?: {}): Promise<implicitReturnType>;
    operationsPostGetOperations(params?: {}): Promise<implicitReturnType>;
    operationsPostGetPortfolio(params?: {}): Promise<implicitReturnType>;
    operationsPostGetPositions(params?: {}): Promise<implicitReturnType>;
    operationsPostGetWithdrawLimits(params?: {}): Promise<implicitReturnType>;
    ordersPostPostOrder(params?: {}): Promise<implicitReturnType>;
    ordersPostCancelOrder(params?: {}): Promise<implicitReturnType>;
    ordersPostGetOrderState(params?: {}): Promise<implicitReturnType>;
    ordersPostGetOrders(params?: {}): Promise<implicitReturnType>;
    usersPostGetAccounts(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
