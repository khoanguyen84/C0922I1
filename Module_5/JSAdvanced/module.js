// 1. export
//  -> có default (duy nhất 1 lần), không bắt buộc
//  -> không có default
// 2. import
// import sum, * as math from "./libs.js";
// import sum, { times, power } from "./libs.js";
// import math from "./libs.js";
import math from './libs.js';
// let {sum, times} = math;

console.log(math.sum(4, 4, 5, 3, 3, 3, 3));
console.log(math.times(4, 4, 5, 3, 3, 3, 3));