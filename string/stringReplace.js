/**
 * 
 * @desc   字符串替换
 * @param  {String} str 
 * @param  {String} FindText:要替换的字符或正则表达式
 * @param  {String} RegText:替换成什么
 * @return {String} 
 */
function stringReplace(str, FindText, RegText) {
    fRegExp = new RegExp(FindText, "g");
    return str.replace(fRegExp, RegText);
};

module.exports = stringReplace