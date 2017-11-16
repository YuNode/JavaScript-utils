/**
 * 
 * @desc   字符串去除空格
 * @param  {String} str 
 * @param  {Number} type 1:去除所有空格  2:去除前后空格  3:去除前空格 4:去除后空格
 * @return {String} 
 */
function removeSpace(str, type) {
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
};

module.exports = removeSpace