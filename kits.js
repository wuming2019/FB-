/// 这里面就是封装我们的常用的代码的js代码
var kits = {};
// 封装一个获取指定区间的随机整数的方法
kits.randomInt = function (n,m) {
    return Math.floor(Math.random() * (m - n + 1) +n);
}
// 封装一个求圆的面积的方法
kits.getArea = function (r) {
    return Math.PI * r * r;
}
// 封装一个求阶乘的方法
kits.jc = function (n) {
    let sum = 1;
    for(let i = n ;i >= 1 ;i--) {
        sum *= i;
    }
    return sum;
}
// 封装一个求十六进制随机颜色的方法
kits.getRandomColor = function () {
    let color = '#';
    for(let i = 1 ; i <= 6; i++) {
        let r = Math.floor(Math.random() * 16);
        color += r.toString(16);
    }
    return color;
}
// 封装一个获取固定日期格式的方法 ： yyyy-MM-dd hh:mm:ss
kits.formatDate = function (date) {
    //如果date不是日期对象，返回
    if (!date instanceof Date) {
      return;
    }
    let y = date.getFullYear();
    let M = date.getMonth()+1;
    let d = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    M = M < 10 ? '0' + M : M;
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s ;
}
