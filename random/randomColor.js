/**
 * 
 * @desc 随机生成颜色
 * @return {String} 
 */
// 第一种方法：
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
};

// 第二种方法：
// function randomColor() {
//     return '#' + Math.random().toString(16).substring(2).substr(0, 6);
// };

module.exports = randomColor;