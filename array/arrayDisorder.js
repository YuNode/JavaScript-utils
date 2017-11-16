/**
 * 
 * @desc 打乱数组顺序
 * @param {Array} arr
 * @return {Array}
 */
function arrayDisorder(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5;
    });
};

module.exports = arrayDisorder;