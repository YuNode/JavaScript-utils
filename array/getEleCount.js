/**
 * 
 * @desc 返回数组或字符串中一个元素出现的次数
 * @param {Array|String} arr
 * @param {Number|String} ele
 * @return {Number}
 */
function getEleCount(obj, ele) {
    var num = 0;
    for (var i = 0, len = obj.length; i < len; i++) {
        if (ele === obj[i]) {
            num++;
        }
    };
    return num;
};

module.exports = getEleCount;