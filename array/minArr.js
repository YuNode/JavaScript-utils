/**
 * 
 * @desc 找出数组中的最小值（数字类型的数组）
 * @param {Array} arr
 * @return {Number}
 */
// 第一种方法：
function minArr(arr) {
    return Math.min.apply(null, arr);
};

// 第二种方法：
// function minArr(arr) {
//     return Math.min(...arr);
// };

// 第三种方法：
// function minArr(arr) {
//     return arr.reduce(function (prev, next) {
//         return Math.min(prev, next);
//     });
// };

module.exports = minArr;