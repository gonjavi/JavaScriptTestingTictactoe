!function(e){var n={};function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(o,l,function(n){return e[n]}.bind(null,l));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),l=t(2);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1};o(l,r);e.exports=l.locals||{}},function(e,n,t){"use strict";var o,l=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],l=0;l<e.length;l++){var r=e[l],d=n.base?r[0]+n.base:r[0],u=t[d]||0,m="".concat(d," ").concat(u);t[d]=u+1;var a=c(m),y={css:r[1],media:r[2],sourceMap:r[3]};-1!==a?(i[a].references++,i[a].updater(y)):i.push({identifier:m,updater:E(y,n),references:1}),o.push(m)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var l=t.nc;l&&(o.nonce=l)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var m,a=(m=[],function(e,n){return m[e]=n,m.filter(Boolean).join("\n")});function y(e,n,t,o){var l=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=a(n,l);else{var r=document.createTextNode(l),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function s(e,n,t){var o=t.css,l=t.media,r=t.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,f=0;function E(e,n){var t,o,l;if(n.singleton){var r=f++;t=g||(g=u(n)),o=y.bind(null,t,r,!1),l=y.bind(null,t,r,!0)}else t=u(n),o=s.bind(null,t,n),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else l()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=l());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var l=c(t[o]);i[l].references--}for(var r=d(e,n),u=0;u<t.length;u++){var m=c(t[u]);0===i[m].references&&(i[m].updater(),i.splice(m,1))}t=r}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,".icon-block {\r\n  padding: 0 15px;\r\n}\r\n.icon-block .material-icons {\r\n\tfont-size: inherit;\r\n}\r\n\r\n.board {\r\n  border: 2px solid orange;\r\n  width: 12em;\r\n  margin: auto;\r\n  \r\n  flex-wrap: wrap;\r\n}\r\n\r\nth{\r\n  border: 2px solid orange;\r\n  text-align: center;\r\n  width: 3em;\r\n  height: 3em;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var l=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([l]).join("\n")}var i,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var l={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(l[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&l[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},function(e,n,t){"use strict";t.r(n);t(0);let o="O";const l=()=>(o="X"===o?"O":"X",o);var r=(e="",n="",t="",o="",l="",r="",i="",c="",d="")=>[e,n,t,o,l,r,i,c,d];const i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let c,d,u=!1;const m=e=>(i.forEach(n=>{n.forEach(n=>{"O"===e[n]&&(c+=1,3===c&&(u=!0)),"X"===e[n]&&(d+=1,3===d&&(u=!0))}),d=0,c=0}),u),a=()=>{document.getElementById("0").innerHTML="",document.getElementById("0").value="",document.getElementById("1").innerHTML="",document.getElementById("1").value="",document.getElementById("2").innerHTML="",document.getElementById("2").value="",document.getElementById("3").innerHTML="",document.getElementById("3").value="",document.getElementById("4").innerHTML="",document.getElementById("4").value="",document.getElementById("5").innerHTML="",document.getElementById("5").value="",document.getElementById("6").innerHTML="",document.getElementById("6").value="",document.getElementById("7").innerHTML="",document.getElementById("7").value="",document.getElementById("8").innerHTML="",document.getElementById("8").value="",c=0,d=0};let y,s,g,f,E,I="";document.getElementById("board").style.visibility="hidden",document.getElementById("restart").style.visibility="hidden",document.getElementById("start").onclick=()=>{document.getElementById("board").style.visibility="visible";const e=document.getElementById("player1").value,n=document.getElementById("player2").value;y=e,s=n,document.getElementById("symbol1").innerHTML="Player with symbol X is:",document.getElementById("symbol2").innerHTML="Player With Symbol O is:",y.pname&&s.pname?(document.getElementById("p1").innerHTML=y.pname,document.getElementById("p2").innerHTML=s.pname,a()):(document.getElementById("p1").innerHTML="player 1",document.getElementById("p2").innerHTML="player 2"),document.getElementById("start").style.visibility="hidden"};let B="",p="",v="",b="",h="",M="",T="",L="",H="";function k(){document.getElementById("0").onclick=null,document.getElementById("1").onclick=null,document.getElementById("2").onclick=null,document.getElementById("3").onclick=null,document.getElementById("4").onclick=null,document.getElementById("5").onclick=null,document.getElementById("6").onclick=null,document.getElementById("7").onclick=null,document.getElementById("8").onclick=null}function w(e){!0===e?(!0===g&&"O"===I&&(document.getElementById("restart").style.visibility="visible",document.getElementById("win_text").innerHTML="The winner is:",s.pname?document.getElementById("win_name").innerHTML=s.pname:document.getElementById("win_name").innerHTML="Player 2",document.getElementById("restart").innerHTML="Play Again",k()),!0===g&&"X"===I&&(document.getElementById("restart").style.visibility="visible",document.getElementById("win_text").innerHTML="The winner is:",y.pname?document.getElementById("win_name").innerHTML=y.pname:document.getElementById("win_name").innerHTML="Player 1",document.getElementById("restart").innerHTML="Play Again",k())):(E=(e=>{let n=!1,t=0;return e.forEach(e=>{"X"!==e&&"O"!==e||(t+=1),9===t&&(n=!0)}),n})(f),!0===E&&(document.getElementById("draw").innerHTML="The game is drawn",document.getElementById("restart").style.visibility="visible",document.getElementById("restart").innerHTML="Play Again",k()))}document.getElementById("restart").onclick=()=>{a(),document.getElementById("symbol1").innerHTML="",document.getElementById("symbol2").innerHTML="",document.getElementById("p1").innerHTML="",document.getElementById("p2").innerHTML="",document.getElementById("win_text").innerHTML="",document.getElementById("win_name").innerHTML="",document.getElementById("restart").innerHTML="",document.getElementById("start").style.visibility="visible",document.getElementById("board").style.visibility="hidden",window.location.reload()},document.getElementById("0").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("0").innerHTML=I,document.getElementById("0").value=I,B=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("0").onclick=null},document.getElementById("1").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("1").innerHTML=I,document.getElementById("1").value=I,p=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("1").onclick=null},document.getElementById("2").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("2").innerHTML=I,document.getElementById("2").value=I,v=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("2").onclick=null},document.getElementById("3").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("3").innerHTML=I,document.getElementById("3").value=I,b=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("3").onclick=null},document.getElementById("4").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("4").innerHTML=I,document.getElementById("4").value=I,h=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("4").onclick=null},document.getElementById("5").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("5").innerHTML=I,document.getElementById("5").value=I,M=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("5").onclick=null},document.getElementById("6").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("6").innerHTML=I,document.getElementById("6").value=I,T=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("6").onclick=null},document.getElementById("7").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("7").innerHTML=I,document.getElementById("7").value=I,L=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("7").onclick=null},document.getElementById("8").onclick=()=>{I=l(),f=r(B,p,v,b,h,M,T,L,H),g=m(f),document.getElementById("8").innerHTML=I,document.getElementById("8").value=I,H=I,f=r(B,p,v,b,h,M,T,L,H),g=m(f),w(g),document.getElementById("8").onclick=null}}]);