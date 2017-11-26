/**
 * 
 * @desc   格式化字符串
 * @param  {String} str 
 * @param  {String} size:单个字符的长度
 * @param  {Number} delimiter:用来连接的字符
 * @return {String} 
 */
function stringFormat(str, size, delimiter) {
    var _size = size || 3,
        _delimiter = delimiter || ',';
    var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
    var reg = new RegExp(regText, 'g');
    return str.replace(reg, _delimiter);
};

module.exports = stringFormat;