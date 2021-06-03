/*
 * 封装吸顶函数，需结合css实现。
 * 也可以直接用js改变样式，可以自行修改。
 */
function ceiling(obj, stickyToWindow = false) {
  var ot = stickyToWindow ? getOffset(obj) : obj.offsetTop;
  document.onscroll = function () {
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    obj.setAttribute("data-fixed", st >= ot ? "fixed" : "");
  };
}

function getOffset(obj) {
  let offsetT = 0;
  while (obj !== window.document.body && obj !== null) {
    offsetT += obj.offsetTop;
    obj = obj.offsetParent;
  }
  return offsetT;
}
