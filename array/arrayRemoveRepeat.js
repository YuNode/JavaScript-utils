/**
 * 
 * @desc 数组去重
 * @param {Array} arr 
 * @return {Array}
 */
// 第一种方法：
function arrayRemoveRepeat(arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
};

// 第二种方法：
// function arrayRemoveRepeat(arr) {
//     let newarr = [];
//     arr.forEach((item, index) => {
//         newarr.indexOf(item) === -1 ? newarr.push(item) : '';
//     });
//     return newarr;
// };

// 第三种方法：
// function arrayRemoveRepeat(arr) {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 j = ++i;
//             };
//         };
//         newarr.push(arr[i]);
//     };
//     return newarr;
// };

// 第四种方法：
// function arrayRemoveRepeat(arr) {
//     let newarr = [];
//     Array.prototype.forEach.call(arguments[0], (item, index) => {
//         newarr.indexOf(item) === -1 ? newarr.push(item) : '';
//     });
//     return newarr;
// };

// 第五种方法：
// function arrayRemoveRepeat(arr) {
//     return Array.from(new Set(arr));
// };

// 第六种方法：
// function arrayRemoveRepeat(arr) {
//     return [...new Set(arr)];
// };

module.exports = arrayRemoveRepeat;