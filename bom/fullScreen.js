/**
 * 
 * @desc 全屏显示与取消全屏
 * @html <a id="toggleFullScreen" href="javascript:;" onclick="toggleFullScreen()">全屏显示</a>
 */
function toggleFullScreen() {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            document.getElementById("toggleFullScreen").innerText = "退出全屏";
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
            document.getElementById("toggleFullScreen").innerText = "退出全屏";
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            document.getElementById("toggleFullScreen").innerText = "退出全屏";
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
            document.getElementById("toggleFullScreen").innerText = "全屏显示";
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            document.getElementById("toggleFullScreen").innerText = "全屏显示";
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            document.getElementById("toggleFullScreen").innerText = "全屏显示";
        }
    }
};
// 监听Esc按键退出全屏事件
window.onresize = function () {
    var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
    if (isFull === undefined) {
        isFull = false;
    }
    if (!isFull) {
        if (document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen) {
            document.getElementById("toggleFullScreen").innerText = "全屏显示";
        }
    }
};

module.exports = toggleFullScreen;