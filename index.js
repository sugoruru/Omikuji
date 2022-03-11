let counter = 1;
let ti = null;
function strat(){
  if(window.Cookies.get("th")===undefined){
    counter=1;
    window.Cookies.set('th', true, {expires: 1});
    ti=setInterval(th,200);
  }else{
    alert("今日は実行しています");
  }
}
! function(e) {
    var n;
    if ("function" == typeof define && window.define.amd && (window.define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var t = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t, o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) n[o] = t[o]
        }
        return n
    }

    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}

        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }

        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("="),
                        u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u), t) try {
                            u = JSON.parse(u)
                        } catch (e) {}
                        if (r[a] = u, e === a) break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i, r.get = function(e) {
            return c(e, !1)
        }, r.getJSON = function(e) {
            return c(e, !0)
        }, r.remove = function(n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }, r.defaults = {}, r.withConverter = t, r
    }(function() {})
});
function random(min,max){
  return Math.floor( Math.random() * (max-min+1) ) + min;
}
function th(){
counter++
let anser = random(1,8);
    if(anser==1){
      document.getElementById("box").textContent="大吉";
      window.Cookies.set('si', "大吉", {expires: 1});
      if(counter==10)alert("大吉！\n今日は楽しい一日！");
    }else{
      if(anser==2||anser==3){
        document.getElementById("box").textContent="中吉";
        window.Cookies.set('si', "中吉", {expires: 1});
        if(counter==10)alert("中吉！\nいいことがあるかも！？");
      }else{
        if(anser==4||anser==5){
          document.getElementById("box").textContent="末吉";
          window.Cookies.set('si', "末吉", {expires: 1});
          if(counter==10)alert("末吉！\nまあまあいいことがあるかも！？");
        }else{
          if(anser==6||anser==7){
            document.getElementById("box").textContent="小吉";
            window.Cookies.set('si', "小吉", {expires: 1});
            if(counter==10)alert("小吉！\n少しいいことがあるかも！？");
          }else{
            document.getElementById("box").textContent="凶";
            window.Cookies.set('si', "凶", {expires: 1});
            if(counter==10)alert("凶...\n今日はおとなしくしておこう...");
          }
        }
      }
    }
  if(counter==10){
    window.clearInterval(ti);
  }
}
if(window.Cookies.get("si")!==undefined){
  document.getElementById("box").textContent=window.Cookies.get("si");
}