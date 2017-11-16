/**
 * 
 * @desc 生成指定范围随机数
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
function randomNum(min, max) {
    // 如果传入两个参数，返回min到max范围的随机数，包括min，max
    if (arguments.length === 2) {
        return Math.round(min + Math.random() * (max - min));
    }
    // 如果只传入一个参数，返回0到min范围的随机数，包括0，min
    else if (arguments.length === 1) {
        return Math.round(Math.random() * min)
    }
    // 如果不传入参数，返回0到255范围的随机数，包括0，255
    else {
        return Math.round(Math.random() * 255)
    }
};

module.exports = randomNum;