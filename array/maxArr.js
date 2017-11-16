/**
 * 
 * @desc 找出数组中的最大值（数字类型的数组）
 * @param {Array} arr
 * @return {Number}
 */
// 第一种方法：
function maxArr(arr) {
    return Math.max.apply(null, arr);
};

// 第二种方法：
// function maxArr(arr) {
//     return Math.max(...arr);
// };

// 第三种方法：
// function maxArr(arr) {
//     return arr.reduce(function (prev, next) {
//         return Math.max(prev, next);
//     });
// };

module.exports = maxArr;