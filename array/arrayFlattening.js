/**
 * 
 * @desc 数组扁平化
 * @param {Array} arr
 * @return {Array}
 */
// 第一种方法：
function arrayFlattening(arr) {
    var newArr = [],
        _this = this;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 如果是数组，调用(递归)arrayFlattening 将其扁平化
            // 然后再 push 到 newArr 中
            newArr.push.apply(newArr, _this.arrayFlattening(arr[i]));
        } else {
            // 不是数组直接 push 到 newArr 中
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// 第二种方法：
// function arrayFlattening(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             // 如果是数组，调用(递归)arrayFlattening 将其扁平化
//             // 然后再 push 到 newArr 中
//             newArr = newArr.concat(arrayFlattening(arr[i]));
//         } else {
//             // 不是数组直接 push 到 newArr 中
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };

// 第三种方法：
// function arrayFlattening(arr) {
//     while (arr.some((item) => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// };

module.exports = arrayFlattening;