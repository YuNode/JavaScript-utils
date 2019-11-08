/**
 * 
 * @desc   getFileExt
 * @param  {String} pathStr 
 * @return {String} 
 */
function getFileExt(pathStr) {
    let fileExt = pathStr.substring(pathStr.lastIndexOf('.') + 1).toLocaleLowerCase();
    return fileExt;
};
