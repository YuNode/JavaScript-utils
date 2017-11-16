/**
 * 
 * @desc 数组求和（数字类型的数组）
 * @param {Array} arr
 * @return {Number}
 */
function arraySum(arr) {
    return arr.reduce(function (pre, cur) {
        return pre + cur;
    });
};

module.exports = arraySum;