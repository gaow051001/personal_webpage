(self.webpackChunkpersonal_webpage=self.webpackChunkpersonal_webpage||[]).push([[486],{2711:function(e,t,n){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},t="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return f.Date.now()};function g(e,n,r){var o,a,i,l,s,c,u=0,d=!1,f=!1,m=!0;if("function"!=typeof e)throw new TypeError(t);function g(t){var n=o,r=a;return o=a=void 0,u=t,l=e.apply(r,n)}function w(e){var t=e-c;return void 0===c||t>=n||t<0||f&&e-u>=i}function O(){var e=b();if(w(e))return k(e);s=setTimeout(O,function(e){var t=n-(e-c);return f?v(t,i-(e-u)):t}(e))}function k(e){return s=void 0,m&&o?g(e):(o=a=void 0,l)}function x(){var e=b(),t=w(e);if(o=arguments,a=this,c=e,t){if(void 0===s)return function(e){return u=e,s=setTimeout(O,n),d?g(e):l}(c);if(f)return s=setTimeout(O,n),g(c)}return void 0===s&&(s=setTimeout(O,n)),l}return n=h(n)||0,y(r)&&(d=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,n):i,m="trailing"in r?!!r.trailing:m),x.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=a=s=void 0},x.flush=function(){return void 0===s?l:k(b())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==o}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):i.test(e)?r:+e}var w=function(e,n,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return y(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),g(e,n,{leading:o,maxWait:n,trailing:a})},O="Expected a function",k=NaN,x="[object Symbol]",E=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,C=/^0o[0-7]+$/i,N=parseInt,S="object"==typeof e&&e&&e.Object===Object&&e,P="object"==typeof self&&self&&self.Object===Object&&self,A=S||P||Function("return this")(),T=Object.prototype.toString,M=Math.max,$=Math.min,L=function(){return A.Date.now()};function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==x}(e))return k;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(E,"");var n=z.test(e);return n||C.test(e)?N(e.slice(2),n?2:8):j.test(e)?k:+e}var H=function(e,t,n){var r,o,a,i,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(O);function m(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=a}function v(){var e=L();if(p(e))return b(e);l=setTimeout(v,function(e){var n=t-(e-s);return d?$(n,a-(e-c)):n}(e))}function b(e){return l=void 0,f&&r?m(e):(r=o=void 0,i)}function g(){var e=L(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(v,t),u?m(e):i}(s);if(d)return l=setTimeout(v,t),m(s)}return void 0===l&&(l=setTimeout(v,t)),i}return t=D(t)||0,q(n)&&(u=!!n.leading,a=(d="maxWait"in n)?M(D(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},g.flush=function(){return void 0===l?i:b(L())},g},Z=function(){};function B(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,r=void 0;for(n=0;n<t.length;n+=1){if((r=t[n]).dataset&&r.dataset.aos)return!0;if(r.children&&e(r.children))return!0}return!1}(t.concat(n)))return Z()}))}function I(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var V={isSupported:function(){return!!I()},ready:function(e,t){var n=window.document,r=new(I())(B);Z=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,J=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function K(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){W(this,e)}return R(e,[{key:"phone",value:function(){var e=K();return!(!_.test(e)&&!Y.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=K();return!(!G.test(e)&&!J.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),X=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},Q=function(e){return e.forEach((function(e,t){return function(e,t){var n=e.options,r=e.position,o=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(o,n.animatedClassNames),X("aos:out",o),e.options.id&&X("aos:in:"+e.options.id,o),e.animated=!1)});n.mirror&&t>=r.out&&!n.once?a():t>=r.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(o,n.animatedClassNames),X("aos:in",o),e.options.id&&X("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)}))},ee=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},te=function(e,t,n){var r=e.getAttribute("data-aos-"+t);if(void 0!==r){if("true"===r)return!0;if("false"===r)return!1}return r||n},ne=function(e,t){return e.forEach((function(e,n){var r=te(e.node,"mirror",t.mirror),o=te(e.node,"once",t.once),a=te(e.node,"id"),i=t.useClassNames&&e.node.getAttribute("data-aos"),l=[t.animatedClassName].concat(i?i.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var r=window.innerHeight,o=te(e,"anchor"),a=te(e,"anchor-placement"),i=Number(te(e,"offset",a?0:t)),l=a||n,s=e;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var c=ee(s).top-r;switch(l){case"top-bottom":break;case"center-bottom":c+=s.offsetHeight/2;break;case"bottom-bottom":c+=s.offsetHeight;break;case"top-center":c+=r/2;break;case"center-center":c+=r/2+s.offsetHeight/2;break;case"bottom-center":c+=r/2+s.offsetHeight;break;case"top-top":c+=r;break;case"bottom-top":c+=r+s.offsetHeight;break;case"center-top":c+=r+s.offsetHeight/2}return c+i}(e.node,t.offset,t.anchorPlacement),out:r&&function(e,t){window.innerHeight;var n=te(e,"anchor"),r=te(e,"offset",t),o=e;return n&&document.querySelectorAll(n)&&(o=document.querySelectorAll(n)[0]),ee(o).top+o.offsetHeight-r}(e.node,t.offset)},e.options={once:o,mirror:r,animatedClassNames:l,id:a}})),e},re=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},oe=[],ae=!1,ie={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},le=function(){return document.all&&!window.atob},se=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ae=!0),ae&&(oe=ne(oe,ie),Q(oe),window.addEventListener("scroll",w((function(){Q(oe,ie.once)}),ie.throttleDelay)))},ce=function(){if(oe=re(),de(ie.disable)||le())return ue();se()},ue=function(){oe.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ie.initClassName&&e.node.classList.remove(ie.initClassName),ie.animatedClassName&&e.node.classList.remove(ie.animatedClassName)}))},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ie=F(ie,e),oe=re(),ie.disableMutationObserver||V.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ie.disableMutationObserver=!0),ie.disableMutationObserver||V.ready("[data-aos]",ce),de(ie.disable)||le()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ie.easing),document.querySelector("body").setAttribute("data-aos-duration",ie.duration),document.querySelector("body").setAttribute("data-aos-delay",ie.delay),-1===["DOMContentLoaded","load"].indexOf(ie.startEvent)?document.addEventListener(ie.startEvent,(function(){se(!0)})):window.addEventListener("load",(function(){se(!0)})),"DOMContentLoaded"===ie.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&se(!0),window.addEventListener("resize",H(se,ie.debounceDelay,!0)),window.addEventListener("orientationchange",H(se,ie.debounceDelay,!0)),oe)},refresh:se,refreshHard:ce}}()},1220:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7294),o=n(8626),a=n(682),i=n(4184),l=n.n(i),s=n(6792),c=n(5893);const u=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const a=(0,s.vE)(e,"row"),i=(0,s.pi)(),u=(0,s.zG)(),d=`${a}-cols`,f=[];return i.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const o=e!==u?`-${e}`:"";null!=n&&f.push(`${d}${o}-${n}`)})),(0,c.jsx)(n,{ref:o,...r,className:l()(t,a,...f)})}));u.displayName="Row";var d=u;const f=r.forwardRef(((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:a,spans:i}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,s.vE)(t,"col");const o=(0,s.pi)(),a=(0,s.zG)(),i=[],c=[];return o.forEach((e=>{const n=r[e];let o,l,s;delete r[e],"object"==typeof n&&null!=n?({span:o,offset:l,order:s}=n):o=n;const u=e!==a?`-${e}`:"";o&&i.push(!0===o?`${t}${u}`:`${t}${u}-${o}`),null!=s&&c.push(`order${u}-${s}`),null!=l&&c.push(`offset${u}-${l}`)})),[{...r,className:l()(n,...i,...c)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,c.jsx)(o,{...r,ref:t,className:l()(n,!i.length&&a)})}));f.displayName="Col";var m=f,p=n(5005),v=n.p+"static/fullPic-ad51fb54f034e08f8c33095d86b1987e.jpg",b=n(1269),g=n(5697),y=n.n(g),h=["color","size","title"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.size,a=e.title,i=O(e,h);return r.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},i),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))}));k.propTypes={color:y().string,size:y().oneOfType([y().string,y().number]),title:y().string},k.defaultProps={color:"currentColor",size:"1em",title:null};var x=k,E=["color","size","title"];function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.size,a=e.title,i=z(e,E);return r.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},i),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}))}));C.propTypes={color:y().string,size:y().oneOfType([y().string,y().number]),title:y().string},C.defaultProps={color:"currentColor",size:"1em",title:null};var N=C,S=["color","size","title"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.size,a=e.title,i=A(e,S);return r.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},i),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))}));T.propTypes={color:y().string,size:y().oneOfType([y().string,y().number]),title:y().string},T.defaultProps={color:"currentColor",size:"1em",title:null};var M=T,$=["color","size","title"];function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.size,a=e.title,i=q(e,$);return r.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},i),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))}));D.propTypes={color:y().string,size:y().oneOfType([y().string,y().number]),title:y().string},D.defaultProps={color:"currentColor",size:"1em",title:null};var H=D,Z=["color","size","title"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.size,a=e.title,i=I(e,Z);return r.createElement("svg",B({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},i),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"}),r.createElement("path",{d:"M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"}))}));V.propTypes={color:y().string,size:y().oneOfType([y().string,y().number]),title:y().string},V.defaultProps={color:"currentColor",size:"1em",title:null};var W=V,R=n(2711),F=n.n(R);var _=()=>((0,r.useEffect)((()=>{F().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:50,delay:0,duration:1e3,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"})}),[]),r.createElement(o.Z,null,r.createElement(a.Z,null,r.createElement(d,null,r.createElement(m,null,r.createElement("img",{src:v,className:"fancyFrame-module--fancyFrame--7395f",style:{maxWidth:"inherit"}}),r.createElement("div",{"data-aos":"fade-down","data-aos-delay":"1000",style:{display:"inline-block",color:"white",textAlign:"center",width:"inherit",whiteSpace:"pre-wrap",fontWeight:"lighter",textShadow:"black 1px 1px"}},"Connect with Me"),r.createElement("div",{style:{display:"inline-block",color:"white",textAlign:"center",width:"inherit",whiteSpace:"pre-wrap"}},r.createElement(p.Z,{"data-aos":"fade-down","data-aos-delay":"1250",variant:"dark",size:"lg",style:{margin:"5px"},href:"https://github.com/gaow051001"},r.createElement(x,{style:{margin:"none",padding:"none",fontSize:"1.5em"}})),r.createElement(p.Z,{"data-aos":"fade-down","data-aos-delay":"1500",variant:"dark",size:"lg",style:{margin:"5px"}},r.createElement(N,{style:{margin:"none",padding:"none",fontSize:"1.5em"}})),r.createElement(p.Z,{"data-aos":"fade-down","data-aos-delay":"1750",variant:"dark",size:"lg",style:{margin:"5px"},href:"https://www.instagram.com/fiji_gao/?next=%2F"},r.createElement(M,{style:{margin:"none",padding:"none",fontSize:"1.5em"}})),r.createElement(p.Z,{"data-aos":"fade-down","data-aos-delay":"2000",variant:"dark",size:"lg",style:{margin:"5px"},href:"https://www.linkedin.com/in/wei-jie-gao-01aa29187/"},r.createElement(H,{style:{margin:"none",padding:"none",fontSize:"1.5em"}})))),r.createElement(m,{className:b.xi,style:{textAlign:"center",color:"white",fontWeight:"lighter",textShadow:"black 1px 1px"}},r.createElement("div",{"data-aos":"fade-down","data-aos-delay":"250",style:{display:"inline-block",textAlign:"center",width:"inherit",whiteSpace:"pre-wrap",fontSize:"200%"}},"Nice to meet you!"),r.createElement("p",{"data-aos":"fade-down","data-aos-delay":"500",style:{fontSize:"110%"}},'"Curiosity killed the cat, but satisfaction brought it back."',r.createElement("br",null),"..."),r.createElement("p",{"data-aos":"fade-down","data-aos-delay":"750",style:{textAlign:"justify"}},"Hi! My name is Wei-Jie Gao. I'm a software engineer with preferences in Full-Stack. I'm also currently in my Senior year of B.S. Computer Science at Texas A&M University, minoring in Business and Mathematics. I have gained a multitude of interests, including the likes of designing, constructing, and enhancing projects. If anything piques my interest, I'm more than willing to learn and adapt to the new environment."),r.createElement("p",{"data-aos":"fade-down","data-aos-delay":"1000",style:{fontSize:"150%"}},"— Email —"),r.createElement(p.Z,{"data-aos":"fade-down","data-aos-delay":"1250",variant:"outline-primary"},r.createElement(W,{style:{margin:"none",padding:"none",fontSize:"1.5em"}})),r.createElement("p",{"data-aos":"fade-down","data-aos-delay":"1500",style:{fontSize:"150%"}},"— Resume —"),r.createElement(p.Z,{"data-aos":"fade-down","data-aos-delay":"1750",variant:"outline-primary"},"Download PDF Version"))))))},1269:function(e,t,n){"use strict";n.d(t,{Gl:function(){return r},WB:function(){return i},XY:function(){return o},qm:function(){return a},xi:function(){return l}});var r="gridlayout-module--div1--d4d50",o="gridlayout-module--div4--7d0bf",a="gridlayout-module--parent--e3050",i="gridlayout-module--transparencyBox--adaa3",l="gridlayout-module--transparencyTextBox--da5f4"},5005:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),i=n(861),l=n(6792),s=n(5893);const c=a.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:a,className:c,...u},d)=>{const f=(0,l.vE)(t,"btn"),[m,{tagName:p}]=(0,i.FT)({tagName:e,...u}),v=p;return(0,s.jsx)(v,{...m,...u,ref:d,className:o()(c,f,a&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c}}]);
//# sourceMappingURL=component---src-pages-profile-js-a929d3e79f64cf007e07.js.map