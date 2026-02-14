var pre = document.createElement('pre');
pre.style.font = "normal 16px/1.5 monospace";
pre.innerHTML = "<h2>Include</h2>";
for(var i in polyfill.require) {
  pre.innerHTML +=  "*  <u>"+ i + "</u>:" + (polyfill.require[i] ? ' <b style="color: red">Yes</b>': " <b>No</b>");
  pre.innerHTML += "<br>";
}
document.body.appendChild(pre);
