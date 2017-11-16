/**
 * 
 * @desc   字符串重复复制
 * @param  {String} str 
 * @param  {Number} count:复制次数 
 * @return {String} 
 */
function repeatCopy(str, count) {
    var text = '';
    for (var i = 0; i < count; i++) {
        text += str;
    }
    return text;
};

module.exports = repeatCopy