/*
 * @Author: chaincode-labs dev@chaincode-labs.org
 * @Date: 2023-04-28 17:10:50
 * @LastEditors: chaincode-labs dev@chaincode-labs.org
 * @LastEditTime: 2023-06-04 21:52:35
 * @FilePath: /contracts-master/src/constants.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const DRAW_BUFFER_CARDINALITY: number = 255;
export const PRIZE_DISTRIBUTION_BUFFER_CARDINALITY: number = 180; // 6 months
export const PRIZE_DISTRIBUTION_FACTORY_MINIMUM_PICK_COST: string = "100000000000000000"; // 0.1 stETH
//export const BEACON_PERIOD_SECONDS: number = 604800; // 1 week
//export const END_TIMESTAMP_OFFSET: number = 5 * 60; // 5 minutes
// Todo: 上mainnet时需要修改
export const BEACON_PERIOD_SECONDS: number = 3600; // 1 week
export const END_TIMESTAMP_OFFSET: number = 10; // 5 minutes
export const TOKEN_DECIMALS: number = 18;
