/*! jQuery v2.0.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],f="2.0.1",p=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return p.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,f,p,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,p,g,m,x,w;if((t?t.ownerDocument||t:b)!==f&&c(t),t=t||f,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){p=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=p.length;while(l--)p[l]=m+xt(p[l]);x=U.test(e)&&t.parentNode||t,w=p.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function pt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b;return t!==f&&9===t.nodeType&&t.documentElement?(f=t,p=t.documentElement,h=!s(t),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",pt,"#"===e.firstChild.getAttribute("href")),ct(R,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return p.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(p.contains)||p.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=p.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):f},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,f,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==f&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){f=t;while(f=f[g])if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],p=l[0]===w&&l[2],f=h&&m.childNodes[h];while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,h,p];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)p=l[1];else while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if((a?f.nodeName.toLowerCase()===y:1===f.nodeType)&&++p&&(x&&((f[v]||(f[v]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,f=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[f],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,f,p=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,p,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(f=l[c])&&(y[h[c]]=!(m[h[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?P.call(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),f=bt(function(e){return P.call(t,e)>-1},a,!0),p=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])p=[bt(wt(p),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(p),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}p.push(n)}return wt(p)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,p,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==f&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){p.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(p));y=Tt(y)}O.apply(p,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(p)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,f,p=vt(e);if(!o&&1===p.length){if(u=p[0]=p[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((f=i.find[c])&&(o=f(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,p)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,f,p,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(p=x.event.special[d]||{},d=(o?p.delegateType:p.bindType)||d,p=x.event.special[d]||{},f=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){f=x.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,f,p,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[d]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:p.bindType||d,f=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),f&&f.apply(a,n),f=c&&a[c],f&&x.acceptData(a)&&f.apply&&f.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||p._default&&p._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=f.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),pt),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),h=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||p.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=p.firstChild,o.textContent=""}else h.push(t.createTextNode(i));p.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(p.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function ft(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function pt(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=fn(c,T,o)),b=pn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(f,[m,C,T]):h.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function fn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function pn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(n.unit=o,n.start=+s||+r||0,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},f=e.style,p=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",l.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;p=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(p=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!p),p?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(p?h[r]:0,r,l),r in h||(h[r]=s.start,p&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);s.finish=function(){t.stop(!0)},(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),f=x(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on("pageshow.rails", function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*! jQuery UI - v1.10.3 - 2013-05-28
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */


(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */


(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
            deltaX = orgEvent.deltaX;
            delta  = deltaX * -1;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta  = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));
var METRO_AUTO_REINIT,METRO_LOCALE,METRO_WEEK_START,METRO_DIALOG=!1;(function(c){c.Metro=function(a){c.extend({},a)};c.Metro.getDeviceSize=function(){return{width:0<window.innerWidth?window.innerWidth:screen.width,height:0<window.innerHeight?window.innerHeight:screen.height}}})(jQuery);$(function(){$("html").on("click",function(c){$(".dropdown-menu").each(function(a,b){$(b).hasClass("keep-open")||"block"!=$(b).css("display")||$(b).hide()})})});
$(function(){$(window).on("resize",function(){if(METRO_DIALOG){var c=($(window).height()-METRO_DIALOG.outerHeight())/2,a=($(window).width()-METRO_DIALOG.outerWidth())/2;METRO_DIALOG.css({top:c,left:a})}})});(function(c){c.Metro.currentLocale="en";c.Metro.currentLocale=void 0!=METRO_LOCALE?METRO_LOCALE:"en";c.Metro.Locale={en:{months:"January February March April May June July August September October November December Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday Su Mo Tu We Th Fr Sa".split(" "),buttons:"Today Clear Cancel Help Prior Next Finish".split(" ")},fr:{months:"Janvier F\u00e9vrier Mars Avril Mai Juin Juillet Ao\u00fbt Septembre Octobre Novembre D\u00e9cembre Jan F\u00e9v Mars Avr Mai Juin Juil Ao\u00fbt Sept Oct Nov D\u00e9c".split(" "),
days:"Dimanche Lundi Mardi Mercredi Jeudi Vendredi Samedi Di Lu Ma Me Je Ve Sa".split(" "),buttons:"Aujourd'hui Effacer Annuler Aide Pr\u00e9cedent Suivant Fin".split(" ")},nl:{months:"Januari Februari Maart April Mei Juni Juli Augustus September Oktober November December Jan Feb Mrt Apr Mei Jun Jul Aug Sep Okt Nov Dec".split(" "),days:"Zondag Maandag Dinsdag Woensdag Donderdag Vrijdag Zaterdag Zo Ma Di Wo Do Vr Za".split(" "),buttons:"Vandaag Verwijderen Annuleren Hulp Vorige Volgende Einde".split(" ")},
ua:{months:"\u0421\u0456\u0447\u0435\u043d\u044c \u041b\u044e\u0442\u0438\u0439 \u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c \u041a\u0432\u0456\u0442\u0435\u043d\u044c \u0422\u0440\u0430\u0432\u0435\u043d\u044c \u0427\u0435\u0440\u0432\u0435\u043d\u044c \u041b\u0438\u043f\u0435\u043d\u044c \u0421\u0435\u0440\u043f\u0435\u043d\u044c \u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c \u0416\u043e\u0432\u0442\u0435\u043d\u044c \u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434 \u0413\u0440\u0443\u0434\u0435\u043d\u044c \u0421\u0456\u0447 \u041b\u044e\u0442 \u0411\u0435\u0440 \u041a\u0432\u0456 \u0422\u0440\u0430 \u0427\u0435\u0440 \u041b\u0438\u043f \u0421\u0435\u0440 \u0412\u0435\u0440 \u0416\u043e\u0432 \u041b\u0438\u0441 \u0413\u0440\u0443".split(" "),
days:"\u041d\u0435\u0434\u0456\u043b\u044f \u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0421\u0435\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440 \u041f\u2019\u044f\u0442\u043d\u0438\u0446\u044f \u0421\u0443\u0431\u043e\u0442\u0430 \u041d\u0434 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),buttons:"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0414\u043e\u043f\u043e\u043c\u043e\u0433\u0430 \u041d\u0430\u0437\u0430\u0434 \u0412\u043f\u0435\u0440\u0435\u0434 \u0413\u043e\u0442\u043e\u0432\u043e".split(" ")},
ru:{months:"\u042f\u043d\u0432\u0430\u0440\u044c \u0424\u0435\u0432\u0440\u0430\u043b\u044c \u041c\u0430\u0440\u0442 \u0410\u043f\u0440\u0435\u043b\u044c \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u041e\u043a\u0442\u044f\u0431\u0440\u044c \u041d\u043e\u044f\u0431\u0440\u044c \u0414\u0435\u043a\u0430\u0431\u0440\u044c \u042f\u043d\u0432 \u0424\u0435\u0432 \u041c\u0430\u0440 \u0410\u043f\u0440 \u041c\u0430\u0439 \u0418\u044e\u043d \u0418\u044e\u043b \u0410\u0432\u0433 \u0421\u0435\u043d \u041e\u043a\u0442 \u041d\u043e\u044f \u0414\u0435\u043a".split(" "),
days:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430 \u0412\u0441 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),buttons:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u041f\u043e\u043c\u043e\u0449\u044c \u041d\u0430\u0437\u0430\u0434 \u0412\u043f\u0435\u0440\u0435\u0434 \u0413\u043e\u0442\u043e\u0432\u043e".split(" ")},
zhCN:{months:"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708 \u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),days:"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d \u65e5 \u4e00 \u4e8c \u4e09 \u56db \u4e94 \u516d".split(" "),
buttons:"\u4eca\u65e5 \u6e05\u9664 Cancel Help Prior Next Finish".split(" ")},it:{months:"Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gen; Feb;Mar;Apr;Mag;Giu;Lug;Ago;Set;Ott;Nov;Dic".split(";"),days:"Luned\u00ec Marted\u00ec Mercoled\u00ec Gioved\u00ec Venerd\u00ec Sabato Domenica Lun Mar Mer Gio Ven Sab Dom".split(" "),buttons:"Oggi Cancella Cancel Help Prior Next Finish".split(" ")},de:{months:"Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember Jan Feb Mrz Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
days:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag So Mo Di Mi Do Fr Sa".split(" "),buttons:"Heute Zur\u00fccksetzen Abbrechen Hilfe Fr\u00fcher Sp\u00e4ter Fertig".split(" ")},es:{months:"Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre Ene Feb Mar Abr May Jun Jul Ago Sept Oct Nov Dic".split(" "),days:"Domingo Lunes Martes Mi\u00e9rcoles Jueves Viernes S\u00e1bado Do Lu Mar Mi\u00e9 Jue Vi S\u00e1b".split(" "),buttons:"Hoy Limpiar Cancel Help Prior Next Finish".split(" ")}};
c.Metro.setLocale=function(a,b){c.Metro.Locale[a]=b}})(jQuery);var hasTouch="ontouchend"in window,eventTimer,moveDirection="undefined",startX,startY,deltaX,deltaY,mouseDown=!1;function addTouchEvents(c){hasTouch&&(c.addEventListener("touchstart",touch2Mouse,!0),c.addEventListener("touchmove",touch2Mouse,!0),c.addEventListener("touchend",touch2Mouse,!0))}
function touch2Mouse(c){var a=c.changedTouches[0],b;switch(c.type){case "touchstart":b="mousedown";break;case "touchend":b="mouseup";break;case "touchmove":b="mousemove";break;default:return}"mousedown"==b&&(eventTimer=(new Date).getTime(),startX=a.clientX,startY=a.clientY,mouseDown=!0);"mouseup"==b&&(500>=(new Date).getTime()-eventTimer?b="click":1E3<(new Date).getTime()-eventTimer&&(b="longclick"),eventTimer=0,mouseDown=!1);"mousemove"==b&&mouseDown&&(deltaX=a.clientX-startX,deltaY=a.clientY-startY,
moveDirection=deltaX>deltaY?"horizontal":"vertical");var d=document.createEvent("MouseEvent");d.initMouseEvent(b,!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(d);c.preventDefault()};(function(c){c.widget("metro.accordion",{version:"1.0.0",options:{closeAny:!0,open:function(a){},action:function(a){}},_frames:{},_create:function(){var a=this.element;void 0!=a.data("closeany")&&(this.options.closeAny=a.data("closeany"));this.init()},init:function(){var a=this;a.element.on("click",".accordion-frame > .heading",function(b){b.preventDefault();b.stopPropagation();if(!c(this).attr("disabled")&&"none"!=c(this).data("action")){a.options.closeAny&&a._closeFrames();var d=c(this).parent(),
e=d.children(".content");console.log(this);c(e).is(":hidden")?(c(e).slideDown(),c(this).removeClass("collapsed"),a._trigger("frame",b,{frame:d}),a.options.open(d)):(c(e).slideUp(),c(this).addClass("collapsed"));a.options.action(d)}});this.element.children(".accordion-frame").each(function(){var a=c(this).children(".heading"),d=c(this).children(".content");c(this).hasClass("active")&&!c(this).attr("disabled")&&"none"!=c(this).data("action")?(c(d).show(),c(a).removeClass("collapsed")):c(a).addClass("collapsed")})},
_closeFrames:function(){var a=this.element.children(".accordion-frame");c.each(a,function(){var a=c(this);a.children(".heading").addClass("collapsed");a.children(".content").slideUp()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.buttonset",{version:"1.0.0",options:{click:function(a,b){}},_buttons:{},_create:function(){this._buttons=this.element.find("button, .button");this.init()},init:function(){var a=this;this._buttons.each(function(){var b=c(this);b.on("click",function(d){d.preventDefault();b.toggleClass("active");a.options.click(b,b.hasClass("active"));a._trigger("click",null,{button:b,on:b.hasClass("active")})})})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,
b)}})})(jQuery);
(function(c){c.widget("metro.buttongroup",{version:"1.0.0",options:{click:function(a,b){}},_buttons:{},_create:function(){this._buttons=this.element.find("button, .button");this.init()},init:function(){var a=this;this._buttons.each(function(){var b=c(this);b.on("click",function(d){d.preventDefault();a._buttons.removeClass("active");b.addClass("active");a.options.click(b,b.hasClass("active"));a._trigger("click",null,{button:b,on:b.hasClass("active")})})})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)}})})(jQuery);var dateFormat=function(){var c=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,a=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,b=/[^-+\dA-Z]/g,d=function(a,b){a=String(a);for(b=b||2;a.length<b;)a="0"+a;return a};return function(e,f,g){var h=dateFormat;1!=arguments.length||("[object String]"!=Object.prototype.toString.call(e)||/\d/.test(e))||(f=e,e=void 0);e=e?new Date(e):new Date;f=String(h.masks[f]||
f||h.masks["default"]);"UTC:"==f.slice(0,4)&&(f=f.slice(4),g=!0);locale=$.Metro.currentLocale;var k=g?"getUTC":"get",h=e[k+"Date"](),l=e[k+"Day"](),n=e[k+"Month"](),p=e[k+"FullYear"](),m=e[k+"Hours"](),q=e[k+"Minutes"](),u=e[k+"Seconds"](),k=e[k+"Milliseconds"](),r=g?0:e.getTimezoneOffset(),s={d:h,dd:d(h),ddd:$.Metro.Locale[locale].days[l],dddd:$.Metro.Locale[locale].days[l+7],m:n+1,mm:d(n+1),mmm:$.Metro.Locale[locale].months[n],mmmm:$.Metro.Locale[locale].months[n+12],yy:String(p).slice(2),yyyy:p,
h:m%12||12,hh:d(m%12||12),H:m,HH:d(m),M:q,MM:d(q),s:u,ss:d(u),l:d(k,3),L:d(99<k?Math.round(k/10):k),t:12>m?"a":"p",tt:12>m?"am":"pm",T:12>m?"A":"P",TT:12>m?"AM":"PM",Z:g?"UTC":(String(e).match(a)||[""]).pop().replace(b,""),o:(0<r?"-":"+")+d(100*Math.floor(Math.abs(r)/60)+Math.abs(r)%60,4),S:["th","st","nd","rd"][3<h%10?0:(10!=h%100-h%10)*h%10]};return f.replace(c,function(a){return a in s?s[a]:a.slice(1,a.length-1)})}}();
dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.i18n={dayNames:"Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),monthNames:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};
Date.prototype.format=function(c,a){return dateFormat(this,c,a)};(function(c){c.widget("metro.calendar",{version:"1.0.0",options:{format:"yyyy-mm-dd",multiSelect:!1,startMode:"day",weekStart:void 0!=METRO_WEEK_START?METRO_WEEK_START:0,otherDays:!1,date:new Date,buttons:!0,locale:c.Metro.currentLocale,getDates:function(a){},click:function(a,b){},_storage:[]},_year:0,_month:0,_day:0,_today:new Date,_event:"",_mode:"day",_distance:0,_events:[],_create:function(){var a=this.element;void 0!=a.data("multiSelect")&&(this.options.multiSelect=a.data("multiSelect"));void 0!=
a.data("format")&&(this.options.format=a.data("format"));void 0!=a.data("date")&&(this.options.date=new Date(a.data("date")));void 0!=a.data("locale")&&(this.options.locale=a.data("locale"));void 0!=a.data("startMode")&&(this.options.startMode=a.data("startMode"));void 0!=a.data("weekStart")&&(this.options.weekStart=a.data("weekStart"));void 0!=a.data("otherDays")&&(this.options.otherDays=a.data("otherDays"));this._year=this.options.date.getFullYear();this._distance=parseInt(this.options.date.getFullYear())-
4;this._month=this.options.date.getMonth();this._day=this.options.date.getDate();this._mode=this.options.startMode;a.data("_storage",[]);this._renderCalendar()},_renderMonth:function(){var a=this._year,b=this._month,d=28;1==b&&(0!=a%100&&0==a%4||0==a%400)&&(d=29);var e=["31",""+d+"","31","30","31","30","31","31","30","31","30","31"],f=e[b],g=(new Date(a,b,1)).getDay(),h,k;this.element.html("");d=c("<table/>").addClass("bordered");h=c("<tr/>");c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-previous'></i></a>").appendTo(h);
c("<td/>").addClass("text-center").html("<a class='btn-previous-month' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(h);c("<td/>").attr("colspan",3).addClass("text-center").html("<a class='btn-select-month' href='#'>"+c.Metro.Locale[this.options.locale].months[b]+" "+a+"</a>").appendTo(h);c("<td/>").addClass("text-center").html("<a class='btn-next-month' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(h);c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-next'></i></a>").appendTo(h);
h.addClass("calendar-header").appendTo(d);var l;h=c("<tr/>");for(k=0;7>k;k++)this.options.weekStart?(l=k+1,7==l&&(l=0),c("<td/>").addClass("text-center day-of-week").html(c.Metro.Locale[this.options.locale].days[l+7]).appendTo(h)):c("<td/>").addClass("text-center day-of-week").html(c.Metro.Locale[this.options.locale].days[k+7]).appendTo(h);h.addClass("calendar-subheader").appendTo(d);h=this._month-1;0>h&&(h=11);e=e[h];l=(this.options.weekStart?g+6:g)%7;var n="";h=c("<tr/>");for(k=0;k<l;k++)this.options.otherDays&&
(n=e-(l-k-1)),c("<td/>").addClass("empty").html("<small class='other-day'>"+n+"</small>").appendTo(h);g=(this.options.weekStart?g+6:g)%7;for(k=1;k<=f;k++)g%=7,0==g&&(h.appendTo(d),h=c("<tr/>")),e=c("<td/>").addClass("text-center day").html("<a href='#'>"+k+"</a>"),a==this._today.getFullYear()&&(b==this._today.getMonth()&&this._today.getDate()==k)&&e.addClass("today"),l=(new Date(this._year,this._month,k)).format("yyyy-mm-dd"),0<=this.element.data("_storage").indexOf(l)&&e.find("a").addClass("selected"),
e.appendTo(h),g++;a="";for(k=g+1;7>=k;k++)this.options.otherDays&&(a=k-g),c("<td/>").addClass("empty").html("<small class='other-day'>"+a+"</small>").appendTo(h);h.appendTo(d);this.options.buttons&&(h=c("<tr/>").addClass("calendar-actions"),e=c("<td/>").attr("colspan",7).addClass("text-left").html("<button class='button calendar-btn-today small success'>"+c.Metro.Locale[this.options.locale].buttons[0]+"</button>&nbsp;<button class='button calendar-btn-clear small warning'>"+c.Metro.Locale[this.options.locale].buttons[1]+
"</button>"),e.appendTo(h),h.appendTo(d));d.appendTo(this.element);this.options.getDates(this.element.data("_storage"))},_renderMonths:function(){var a,b,d,e,f;this.element.html("");a=c("<table/>").addClass("bordered");b=c("<tr/>");c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(b);c("<td/>").attr("colspan",2).addClass("text-center").html("<a class='btn-select-year' href='#'>"+this._year+"</a>").appendTo(b);c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(b);
b.addClass("calendar-header").appendTo(a);b=c("<tr/>");for(e=f=0;12>e;e++)d=c("<td/>").addClass("text-center month").html("<a href='#' data-month='"+e+"'>"+c.Metro.Locale[this.options.locale].months[e+12]+"</a>"),this._month==e&&(new Date).getFullYear()==this._year&&d.addClass("today"),d.appendTo(b),0==(f+1)%4&&(b.appendTo(a),b=c("<tr/>")),f+=1;a.appendTo(this.element)},_renderYears:function(){var a,b,d,e,f;this.element.html("");a=c("<table/>").addClass("bordered");b=c("<tr/>");c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(b);
c("<td/>").attr("colspan",2).addClass("text-center").html(this._distance+"-"+(this._distance+11)).appendTo(b);c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(b);b.addClass("calendar-header").appendTo(a);b=c("<tr/>");f=0;for(e=this._distance;e<this._distance+12;e++)d=c("<td/>").addClass("text-center year").html("<a href='#' data-year='"+e+"'>"+e+"</a>"),(new Date).getFullYear()==e&&d.addClass("today"),d.appendTo(b),0==(f+
1)%4&&(b.appendTo(a),b=c("<tr/>")),f+=1;a.appendTo(this.element)},_renderCalendar:function(){switch(this._mode){case "year":this._renderYears();break;case "month":this._renderMonths();break;default:this._renderMonth()}this._initButtons()},_initButtons:function(){var a=this,b=this.element.find("table");"day"==this._mode?(b.find(".btn-select-month").on("click",function(b){b.preventDefault();b.stopPropagation();a._mode="month";a._renderCalendar()}),b.find(".btn-previous-month").on("click",function(b){a._event=
"eventPrevious";b.preventDefault();b.stopPropagation();a._month-=1;0>a._month&&(a._year-=1,a._month=11);a._renderCalendar()}),b.find(".btn-next-month").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._month+=1;12==a._month&&(a._year+=1,a._month=0);a._renderCalendar()}),b.find(".btn-previous-year").on("click",function(b){a._event="eventPrevious";b.preventDefault();b.stopPropagation();a._year-=1;a._renderCalendar()}),b.find(".btn-next-year").on("click",function(b){a._event=
"eventNext";b.preventDefault();b.stopPropagation();a._year+=1;a._renderCalendar()}),b.find(".calendar-btn-today").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a.options.date=new Date;a._year=a.options.date.getFullYear();a._month=a.options.date.getMonth();a._day=a.options.date.getDate();a._renderCalendar()}),b.find(".calendar-btn-clear").on("click",function(b){b.preventDefault();b.stopPropagation();a.options.date=new Date;a._year=a.options.date.getFullYear();a._month=
a.options.date.getMonth();a._day=a.options.date.getDate();a.element.data("_storage",[]);a._renderCalendar()}),b.find(".day a").on("click",function(d){d.preventDefault();d.stopPropagation();d=(new Date(a._year,a._month,parseInt(c(this).html()))).format(a.options.format,null);var e=new Date(a._year,a._month,parseInt(c(this).html()));a.options.multiSelect?(c(this).toggleClass("selected"),c(this).hasClass("selected")?a._addDate(d):a._removeDate(d)):(b.find(".day a").removeClass("selected"),c(this).addClass("selected"),
a.element.data("_storage",[]),a._addDate(d));a.options.getDates(a.element.data("_storage"));a.options.click(d,e)})):"month"==this._mode?(b.find(".month a").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._month=parseInt(c(this).data("month"));a._mode="day";a._renderCalendar()}),b.find(".btn-previous-year").on("click",function(b){a._event="eventPrevious";b.preventDefault();b.stopPropagation();a._year-=1;a._renderCalendar()}),b.find(".btn-next-year").on("click",
function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._year+=1;a._renderCalendar()}),b.find(".btn-select-year").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._mode="year";a._renderCalendar()})):(b.find(".year a").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._year=parseInt(c(this).data("year"));a._mode="month";a._renderCalendar()}),b.find(".btn-previous-year").on("click",function(b){a._event="eventPrevious";
b.preventDefault();b.stopPropagation();a._distance-=10;a._renderCalendar()}),b.find(".btn-next-year").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._distance+=10;a._renderCalendar()}))},_addDate:function(a){0>this.element.data("_storage").indexOf(a)&&this.element.data("_storage").push(a)},_removeDate:function(a){a=this.element.data("_storage").indexOf(a);this.element.data("_storage").splice(a,1)},setDate:function(a){a=new Date(a);a=(new Date(a.getFullYear()+
"/"+(a.getMonth()+1)+"/"+a.getDate())).format("yyyy-mm-dd");this._addDate(a);this._renderCalendar()},getDate:function(a){return(new Date(void 0!=a?this.element.data("_storage")[a]:this.element.data("_storage")[0])).format(this.options.format)},getDates:function(){return this.element.data("_storage")},unsetDate:function(a){a=new Date(a);a=(new Date(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate())).format("yyyy-mm-dd");this._removeDate(a);this._renderCalendar()},_destroy:function(){},_setOption:function(a,
b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.datepicker",{version:"1.0.0",options:{format:"dd.mm.yyyy",date:void 0,effect:"none",position:"bottom",locale:c.Metro.currentLocale,weekStart:void 0!=METRO_WEEK_START?METRO_WEEK_START:0,otherDays:!1,selected:function(a,b){},_calendar:void 0},_create:function(){var a=this,b=this.element,d=b.children("input"),e=b.children("button.btn-date");void 0!=b.data("date")&&(this.options.date=b.data("date"));void 0!=b.data("format")&&(this.options.format=b.data("format"));void 0!=
b.data("effect")&&(this.options.effect=b.data("effect"));void 0!=b.data("position")&&(this.options.position=b.data("position"));void 0!=b.data("locale")&&(this.options.locale=b.data("locale"));void 0!=b.data("weekStart")&&(this.options.weekStart=b.data("weekStart"));void 0!=b.data("otherDays")&&(this.options.otherDays=b.data("otherDays"));this._createCalendar(b,this.options.date);d.attr("readonly",!0);e.on("click",function(b){b.stopPropagation();"none"==a.options._calendar.css("display")?a._show():
a._hide()});b.on("click",function(b){b.stopPropagation();"none"==a.options._calendar.css("display")?a._show():a._hide()});c("html").on("click",function(a){c(".calendar-dropdown").hide()})},_createCalendar:function(a,b){var d,e=this;d=c("<div/>").css({position:"absolute",display:"none","max-width":260,"z-index":1E3}).addClass("calendar calendar-dropdown").appendTo(a);void 0!=e.options.date&&d.data("date",e.options.date);d.calendar({multiSelect:!1,format:e.options.format,buttons:!1,locale:e.options.locale,
otherDays:e.options.otherDays,weekStart:e.options.weekStart,click:function(b,c){d.calendar("setDate",c);a.children("input[type=text]").val(b);e.options.selected(b,c);e._hide()}});void 0!=b&&(d.calendar("setDate",b),a.children("input[type=text]").val(d.calendar("getDate")));switch(this.options.position){case "top":d.css({top:0-d.height(),left:0});break;default:d.css({top:"100%",left:0})}this.options._calendar=d},_show:function(){"slide"==this.options.effect?(c(".calendar-dropdown").slideUp("fast"),
this.options._calendar.slideDown("fast")):"fade"==this.options.effect?(c(".calendar-dropdown").fadeOut("fast"),this.options._calendar.fadeIn("fast")):(c(".calendar-dropdown").hide(),this.options._calendar.show())},_hide:function(){"slide"==this.options.effect?this.options._calendar.slideUp("fast"):"fade"==this.options.effect?this.options._calendar.fadeOut("fast"):this.options._calendar.hide()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.carousel",{version:"1.0.0",options:{auto:!0,period:2E3,duration:500,effect:"slowdown",direction:"left",markers:{show:!0,type:"default",position:"left"},controls:!0,stop:!0,width:"100%",height:300},_slides:{},_currentIndex:0,_interval:0,_outPosition:0,_create:function(){var a=this,b=this.options,d=carousel=this.element,c=carousel.find(".controls");void 0!=d.data("auto")&&(b.auto=d.data("auto"));void 0!=d.data("period")&&(b.period=d.data("period"));void 0!=d.data("duration")&&
(b.duration=d.data("duration"));void 0!=d.data("effect")&&(b.effect=d.data("effect"));void 0!=d.data("direction")&&(b.direction=d.data("direction"));void 0!=d.data("width")&&(b.width=d.data("width"));void 0!=d.data("height")&&(b.height=d.data("height"));void 0!=d.data("stop")&&(b.stop=d.data("stop"));void 0!=d.data("controls")&&(b.controls=d.data("controls"));void 0!=d.data("markersShow")&&(b.markers.show=d.data("markersShow"));void 0!=d.data("markersType")&&(b.markers.type=d.data("markersType"));
void 0!=d.data("markersPosition")&&(b.markers.position=d.data("markersPosition"));carousel.css({width:this.options.width,height:this.options.height});this._slides=carousel.find(".slide");if(!(1>=this._slides.length)){!1!==this.options.markers&&(this.options.markers.show&&1<this._slides.length)&&this._markers(a);this.options.controls&&1<this._slides.length?(carousel.find(".controls.left").on("click",function(){a._slideTo("prior")}),carousel.find(".controls.right").on("click",function(){a._slideTo("next")})):
c.hide();if(this.options.stop)carousel.on("mouseenter",function(){clearInterval(a._interval)}).on("mouseleave",function(){a.options.auto&&(a._autoStart(),a.options.period)});this.options.auto&&this._autoStart()}},_autoStart:function(){var a=this;this._interval=setInterval(function(){"left"==a.options.direction?a._slideTo("next"):a._slideTo("prior")},this.options.period)},_slideTo:function(a){var b=this._slides[this._currentIndex];void 0==a&&(a="next");"prior"===a?(this._currentIndex-=1,0>this._currentIndex&&
(this._currentIndex=this._slides.length-1),this._outPosition=this.element.width()):"next"===a&&(this._currentIndex+=1,this._currentIndex>=this._slides.length&&(this._currentIndex=0),this._outPosition=-this.element.width());a=this._slides[this._currentIndex];switch(this.options.effect){case "switch":this._effectSwitch(b,a);break;case "slowdown":this._effectSlowdown(b,a,this.options.duration);break;case "fade":this._effectFade(b,a,this.options.duration);break;default:this._effectSlide(b,a,this.options.duration)}var d=
this;this.element.find(".markers ul li a").each(function(){c(this).data("num")===d._currentIndex?c(this).parent().addClass("active"):c(this).parent().removeClass("active")})},_slideToSlide:function(a){var b=this._slides[this._currentIndex],c=this._slides[a];this._outPosition=a>this._currentIndex?-this.element.width():this.element.width();switch(this.options.effect){case "switch":this._effectSwitch(b,c);break;case "slowdown":this._effectSlowdown(b,c,this.options.duration);break;case "fade":this._effectFade(b,
c,this.options.duration);break;default:this._effectSlide(b,c,this.options.duration)}this._currentIndex=a},_markers:function(a){var b,d,e,f;b=c('<div class="markers '+this.options.markers.type+'" />');d=c("<ul></ul>").appendTo(b);for(f=0;f<this._slides.length;f++)e=c('<li><a href="javascript:void(0)" data-num="'+f+'"></a></li>'),0===f&&e.addClass("active"),e.appendTo(d);d.find("li a").removeClass("active").on("click",function(){var b=c(this),e=b.data("num");d.find("li").removeClass("active");b.parent().addClass("active");
if(e==a._currentIndex)return!0;a._slideToSlide(e);return!0});b.appendTo(this.element);switch(this.options.markers.position){case "top-left":b.css({left:"10px",right:"auto",bottom:"auto",top:"10px"});break;case "top-right":b.css({left:"auto",right:"10px",bottom:"auto",top:"0px"});break;case "top-center":b.css({left:this.element.width()/2-b.width()/2,right:"auto",bottom:"auto",top:"0px"});break;case "bottom-left":b.css({left:"10px",right:"auto"});break;case "bottom-right":b.css({right:"10px",left:"auto"});
break;case "bottom-center":b.css({left:this.element.width()/2-b.width()/2,right:"auto"})}},_effectSwitch:function(a,b){c(a).hide();c(b).css({left:0}).show()},_effectSlide:function(a,b,d){c(a).animate({left:this._outPosition},d);c(b).css("left",-1*this._outPosition).show().animate({left:0},d)},_effectSlowdown:function(a,b,d){d={duration:d,easing:"doubleSqrt"};c.easing.doubleSqrt=function(a){return Math.sqrt(Math.sqrt(a))};c(a).animate({left:this._outPosition},d);c(b).css("left",-1*this._outPosition).show().animate({left:0},
d)},_effectFade:function(a,b,d){c(a).fadeOut(d);c(b).css({left:0}).fadeIn(d)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.countdown",{version:"1.0.0",options:{style:{background:"bg-dark",foreground:"fg-white",divider:"fg-dark"},blink:!0,days:1,stoptimer:0,ontick:function(a,b,c,e){},onstop:function(){}},wrappers:{},_interval:0,_create:function(){var a=this,b=this.element;c.each(["Days","Hours","Minutes","Seconds"],function(){c('<span class="count'+this+'">').html('<span class="digit-wrapper">                        <span class="digit">0</span>                    </span>                    <span class="digit-wrapper">                        <span class="digit">0</span>                    </span>').appendTo(b);
"Seconds"!=this&&b.append('<span class="divider"></span>')});this.wrappers=this.element.find(".digit-wrapper");void 0!=b.data("blink")&&(this.options.blink=b.data("blick"));void 0!=b.data("styleBackground")&&(this.options.style.background=b.data("styleBackground"));void 0!=b.data("styleForeground")&&(this.options.style.foreground=b.data("styleForeground"));void 0!=b.data("styleDivider")&&(this.options.style.divider=b.data("styleDivider"));"default"!=this.options.style.background&&this.element.find(".digit").addClass(this.options.style.background);
"default"!=this.options.style.foreground&&this.element.find(".digit").addClass(this.options.style.foreground);"default"!=this.options.style.divider&&this.element.find(".divider").addClass(this.options.style.divider);void 0!=b.data("stoptimer")&&(this.options.stoptimer=new Date(b.data("stoptimer")));0==this.options.stoptimer&&(this.options.stoptimer=(new Date).getTime()+864E5*this.options.days);setTimeout(function(){a.tick()},1E3)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)},tick:function(){var a=this;this._interval=setInterval(function(){var b,c,e,f;b=Math.floor((a.options.stoptimer-new Date)/1E3);0>b&&(b=0);c=Math.floor(b/86400);a.updateDuo(0,1,c);b-=86400*c;e=Math.floor(b/3600);a.updateDuo(2,3,e);b-=3600*e;f=Math.floor(b/60);a.updateDuo(4,5,f);b-=60*f;a.updateDuo(6,7,b);a.options.ontick(c,e,f,b);a.blinkDivider();0===c&&(0===e&&0===f&&0===b)&&(a.options.onstop(),a.stopDigit(),a._trigger("alarm"),clearInterval(a._interval))},1E3)},blinkDivider:function(){this.options.blink&&
this.element.find(".divider").toggleClass("no-visible")},stopDigit:function(){this.wrappers.each(function(){c(this).children(".digit").addClass("stop")})},updateDuo:function(a,b,c){this.switchDigit(this.wrappers.eq(a),Math.floor(c/10)%10);this.switchDigit(this.wrappers.eq(b),c%10)},switchDigit:function(a,b){var d=a.find(".digit");if(d.is(":animated")||a.data("digit")==b)return!1;a.data("digit",b);var e=c("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:b});e.addClass(this.options.style.background);
e.addClass(this.options.style.foreground);d.before(e).removeClass("static").animate({top:"2.5em"},"fast",function(){d.remove()});e.delay(100).animate({top:0,opacity:1},"fast");return!0}})})(jQuery);(function(c){c.widget("metro.dropdown",{version:"1.0.1",options:{effect:"slide",toggleElement:!1},_create:function(){var a=this,b=this.element,d=this.name,e=this.element.parent(),e=this.options.toggleElement||e.children(".dropdown-toggle");void 0!=b.data("effect")&&(this.options.effect=b.data("effect"));e.on("click."+d,function(d){d.preventDefault();d.stopPropagation();"block"!=b.css("display")||b.hasClass("keep-open")?(c(".dropdown-menu").each(function(d,e){b.parents(".dropdown-menu").is(e)||(c(e).hasClass("keep-open")||
"block"!=c(e).css("display"))||a._close(e)}),a._open(b)):a._close(b)});c(b).find("li.disabled a").on("click",function(a){a.preventDefault()})},_open:function(a){switch(this.options.effect){case "fade":c(a).fadeIn("fast");break;case "slide":c(a).slideDown("fast");break;default:c(a).show()}this._trigger("onOpen",null,a)},_close:function(a){switch(this.options.effect){case "fade":c(a).fadeOut("fast");break;case "slide":c(a).slideUp("fast");break;default:c(a).hide()}this._trigger("onClose",null,a)},_destroy:function(){},
_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.inputControl",{version:"1.0.0",options:{},_create:function(){var a=this.element;a.hasClass("text")?this.initTextInput(a,this):a.hasClass("password")?this.initPasswordInput(a,this):a.hasClass("checkbox")||a.hasClass("radio")||a.hasClass("switch")?this.initCheckboxInput(a,this):a.hasClass("file")&&this.initFileInput(a,this)},initCheckboxInput:function(a,b){},initFileInput:function(a,b){var d,e,f;f=c("<input type='text' id='__input_file_wrapper__' readonly style='z-index: 1; cursor: default;'>");
d=a.children(".btn-file");e=a.children('input[type="file"]');e.css("z-index",0);f.insertAfter(e);e.attr("tabindex","-1");d.attr("type","button");e.on("change",function(){var a=c(this).val();""!=a&&f.val(a)});d.on("click",function(){e.trigger("click")})},initTextInput:function(a,b){var d=a.children(".btn-clear"),e=a.children("input[type=text]");if(0!=d.length&&(d.attr("tabindex","-1"),d.attr("type","button"),d.on("click",function(){e=a.children("input");e.prop("readonly")||(e.val(""),e.focus(),b._trigger("onClear",
null,a))}),!e.attr("disabled")))e.on("click",function(){c(this).focus()})},initPasswordInput:function(a,b){var d=a.children(".btn-reveal"),e=a.children("input[type=password]");if(0!=d.length&&(d.attr("tabindex","-1"),d.attr("type","button"),d.on("mousedown",function(a){e.attr("type","text")}),d.on("mouseup, mouseleave, blur",function(a){e.attr("type","password").focus()}),!e.attr("disabled")))e.on("click",function(){c(this).focus()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)}})})(jQuery);
(function(c){c.widget("metro.inputTransform",{version:"1.0.0",options:{transformType:"text"},_create:function(){var a=this.element,b;if(!a.parent().hasClass("input-control")){b=a.get(0).tagName.toLowerCase();"textarea"==b?this.options.transformType="textarea":"select"==b?this.options.transformType="select":void 0!=a.data("transformType")?this.options.transformType=a.data("transformType"):this.options.transformType=a.attr("type");a=void 0;switch(this.options.transformType){case "password":a=this._createInputPassword();
break;case "file":a=this._createInputFile();break;case "checkbox":a=this._createInputCheckbox();break;case "radio":a=this._createInputRadio();break;case "switch":a=this._createInputSwitch();break;case "select":a=this._createInputSelect();break;case "textarea":a=this._createInputTextarea();break;case "search":a=this._createInputSearch();break;case "email":a=this._createInputEmail();break;case "tel":a=this._createInputTel();break;case "number":a=this._createInputNum();break;default:a=this._createInputText()}a.inputControl()}},
_createInputTextarea:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("textarea"),d=a.clone(!0);a.parent();d.appendTo(b);b.insertBefore(a);a.remove();return b},_createInputSelect:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("select"),d=a.clone(!0);a.parent();d.val(a.val()).appendTo(b);b.insertBefore(a);a.remove();return b},_createInputSwitch:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("switch"),d=c("<label/>"),
e=c("<span/>").addClass("check"),f=a.clone(!0);a.parent();var g=c("<span/>").addClass("caption").html(void 0!=a.data("caption")?a.data("caption"):"");d.appendTo(b);f.appendTo(d);e.appendTo(d);g.appendTo(d);b.insertBefore(a);a.remove();return b},_createInputCheckbox:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("checkbox"),d=c("<label/>"),e=c("<span/>").addClass("check"),f=a.clone(!0);a.parent();var g=c("<span/>").addClass("caption").html(void 0!=a.data("caption")?
a.data("caption"):"");d.appendTo(b);f.appendTo(d);e.appendTo(d);g.appendTo(d);b.insertBefore(a);a.remove();return b},_createInputRadio:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("radio"),d=c("<label/>"),e=c("<span/>").addClass("check"),f=a.clone(!0);a.parent();var g=c("<span/>").addClass("caption").html(void 0!=a.data("caption")?a.data("caption"):"");d.appendTo(b);f.appendTo(d);e.appendTo(d);g.appendTo(d);b.insertBefore(a);a.remove();return b},_createInputSearch:function(){return this._createInputVal("text",
"btn-search")},_createInputNum:function(){return this._createInputVal("number","btn-clear")},_createInputTel:function(){return this._createInputVal("tel","btn-clear")},_createInputEmail:function(){return this._createInputVal("email","btn-clear")},_createInputText:function(){return this._createInputVal("text","btn-clear")},_createInputPassword:function(){return this._createInputVal("password","btn-reveal")},_createInputFile:function(){return this._createInputVal("file","btn-file")},_createInputVal:function(a,
b){var d=this.element,e=c("<div/>").addClass("input-control").addClass(a),f=c("<button/>").addClass(b),g=d.clone(!0);d.parent();g.appendTo(e);f.appendTo(e);e.insertBefore(d);d.remove();return e},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.livetile",{version:"1.0.0",options:{effect:"slideLeft",period:4E3,duration:700,easing:"doubleSqrt"},_frames:{},_currentIndex:0,_interval:0,_outPosition:0,_size:{},_create:function(){var a=this,b=this.element;void 0!=b.data("effect")&&(this.options.effect=b.data("effect"));void 0!=b.data("direction")&&(this.options.direction=b.data("direction"));void 0!=b.data("period")&&(this.options.period=b.data("period"));void 0!=b.data("duration")&&(this.options.duration=b.data("duration"));
void 0!=b.data("easing")&&(this.options.easing=b.data("easing"));this._frames=b.children("[class*='-content']");1>=this._frames.length||(c.easing.doubleSqrt=function(a){return Math.sqrt(Math.sqrt(a))},this._size={width:b.width(),height:b.height()},b.on("mouseenter",function(){a.stop()}),b.on("mouseleave",function(){a.start()}),this.start())},start:function(){var a=this;this._interval=setInterval(function(){a._animate()},this.options.period)},stop:function(){clearInterval(this._interval)},_animate:function(){var a=
this._frames[this._currentIndex],b;this._currentIndex+=1;this._currentIndex>=this._frames.length&&(this._currentIndex=0);b=this._frames[this._currentIndex];switch(this.options.effect){case "slideLeft":this._effectSlideLeft(a,b);break;case "slideRight":this._effectSlideRight(a,b);break;case "slideDown":this._effectSlideDown(a,b);break;case "slideUpDown":this._effectSlideUpDown(a,b);break;case "slideLeftRight":this._effectSlideLeftRight(a,b);break;default:this._effectSlideUp(a,b)}},_effectSlideLeftRight:function(a,
b){0==this._currentIndex%2?this._effectSlideLeft(a,b):this._effectSlideRight(a,b)},_effectSlideUpDown:function(a,b){0==this._currentIndex%2?this._effectSlideUp(a,b):this._effectSlideDown(a,b)},_effectSlideUp:function(a,b){var d=this._size.height,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({top:-d},e);c(b).css({top:d}).show().animate({top:0},e)},_effectSlideDown:function(a,b){var d=this._size.height,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({top:d},
e);c(b).css({top:-d}).show().animate({top:0},e)},_effectSlideLeft:function(a,b){var d=this._size.width,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({left:-1*d},e);c(b).css({left:d}).show().animate({left:0},e)},_effectSlideRight:function(a,b){var d=this._size.width,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({left:d},e);c(b).css({left:-d}).show().animate({left:0},e)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)}})})(jQuery);(function(c){c.widget("metro.dragtile",{version:"1.0.0",options:{},_create:function(){var a=(tile=this.element).parents(".tile-area");a.find(".tile");a.find(".tile-group");tile.attr("draggable","true");addTouchEvents(tile[0]);tile[0].addEventListener("dragstart",this._dragStart,!1);tile[0].addEventListener("dragend",this._dragEnd,!1);tile.on("mousedown",function(a){});tile.on("mouseup",function(a){})},_dragStart:function(a){c(this).css("opacity",0.4)},_dragEnd:function(a){c(this).css("opacity",1)},
_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.progressbar",{version:"1.0.1",options:{value:0,color:"bg-cyan",animate:!1,max:100,onchange:function(a){}},_create:function(){var a=this.element,b=this.options;void 0!=a.data("value")&&this.value(a.data("value")+"%");void 0!=a.data("color")&&(b.color=a.data("color"));void 0!=a.data("animate")&&(b.animate=a.data("animate"));void 0!=a.data("max")&&(b.max=a.data("max"));b.max=0>b.max?0:b.max;b.max=100<b.max?100:b.max;this._showBar()},_showBar:function(a){a=a||this.options.value;
var b=this.element;b.html("");var d=c("<div />");d.addClass("bar");this.options.color.indexOf("bg-")+1?d.addClass(this.options.color):d.css("background",this.options.color);d.appendTo(b);this.options.animate?d.css("width",this.value()+"%").animate({width:a+"%"}):d.css("width",a+"%");this.options.onchange(this.value())},value:function(a){if(void 0!=a)a=parseInt(a),a=a>this.max?this.max:a,a=0>a?0:a,this._showBar(a),this.options.value=a;else return parseInt(this.options.value)},color:function(a){this.options.color=
a;this.options.color.indexOf("bg-")+1?this.element.find(".bar").addClass(this.options.color):this.element.find(".bar").css("background",this.options.color);this._showBar()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.rating",{version:"1.0.0",options:{score:0,half:!1,stars:5,"static":!0,hints:["bad","poor","regular","good","gorgeous"],showHint:!1,showScore:!1,scoreHint:"Current score: ",click:function(a,b){}},_create:function(){var a=this.element;void 0!=a.data("score")&&(this.options.score=a.data("score"));void 0!=a.data("half")&&(this.options.half=a.data("half"));void 0!=a.data("stars")&&(this.options.stars=a.data("stars"));void 0!=a.data("showHint")&&(this.options.showHint=a.data("showHint"));
void 0!=a.data("static")&&(this.options.static=a.data("static"));void 0!=a.data("showScore")&&(this.options.showScore=a.data("showScore"));void 0!=a.data("scoreHint")&&(this.options.scoreHint=a.data("scoreHint"));this._showRating()},rate:function(a){this.options.score=a;this._showRating()},_showRating:function(){var a=this,b=this.element,d=this.options,e,f;b.addClass("rating");b.html("");e=c("<ul/>");d.static||b.addClass("active");for(var g=0;g<d.stars;g++)f=c("<li/>"),f.data("value",g+1),d.showHint&&
f.attr("title",d.hints[g]),g<=d.score-1&&f.addClass("rated"),f.on("click",function(){d.click(c(this).data("value"),a)}),f.appendTo(e);e.appendTo(b);d.showScore?(c("<span/>").addClass("score-hint").html(d.scoreHint+d.score).appendTo(b),b.css("height","auto")):b.find("ul").css("margin-bottom",0)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.slider",{version:"1.0.2",options:{position:0,accuracy:0,color:"default",completeColor:"default",markerColor:"default",colors:[],showHint:!1,change:function(a,b){},changed:function(a,b){},min:0,max:100,animate:!0,_slider:{vertical:!1,offset:0,length:0,marker:0,ppp:0,start:0,stop:0}},_create:function(){var a=this,b=this.element,c=this.options,e=this.options._slider;void 0!=b.data("accuracy")&&(c.accuracy=0<b.data("accuracy")?b.data("accuracy"):0);void 0!=b.data("animate")&&
(c.animate=b.data("animate"));void 0!=b.data("min")&&(c.min=b.data("min"));c.min=0>c.min?0:c.min;c.min=c.min>c.max?c.max:c.min;void 0!=b.data("max")&&(c.max=b.data("max"));c.max=100<c.max?100:c.max;c.max=c.max<c.min?c.min:c.max;void 0!=b.data("position")&&(c.position=this._correctValue(b.data("position")>this.options.min?b.data("position")>this.options.max?this.options.max:b.data("position"):this.options.min));void 0!=b.data("color")&&(c.color=b.data("color"));void 0!=b.data("completeColor")&&(c.completeColor=
b.data("completeColor"));void 0!=b.data("markerColor")&&(c.markerColor=b.data("markerColor"));void 0!=b.data("colors")&&(c.colors=b.data("colors").split(","));void 0!=b.data("showHint")&&(c.showHint=b.data("showHint"));e.vertical=b.hasClass("vertical");this._createSlider();this._initPoints();this._placeMarker(c.position);addTouchEvents(b[0]);b.children(".marker").on("mousedown",function(b){b.preventDefault();a._startMoveMarker(b)});b.on("mousedown",function(b){b.preventDefault();a._startMoveMarker(b)})},
_startMoveMarker:function(a){var b=this.element,d=this.options,e=this,f=b.children(".hint");c(document).mousemove(function(a){e._movingMarker(a);b.hasClass("permanent-hint")||f.css("display","block")});c(document).mouseup(function(){c(document).off("mousemove");c(document).off("mouseup");b.data("value",e.options.position);b.trigger("changed",e.options.position);d.changed(e.options.position,b);b.hasClass("permanent-hint")||f.css("display","none")});this._initPoints();this._movingMarker(a)},_movingMarker:function(a){var b;
b=this.options._slider.vertical;var c=this.options._slider.offset,e=this.options._slider.start,f=this.options._slider.stop,g=this.options._slider.length,h=this.options._slider.marker;a=b?a.pageY-c:a.pageX-c;a<e?a=e:a>f&&(a=f);b=this._pixToPerc(b?g-a-h/2:a-h/2);this._placeMarker(b);this.options.position=b;this.options.change(Math.round(b),this.element)},_placeMarker:function(a){var b,c,e=this.options,f=0,g=f=0,h=this.element.children(".marker"),k=this.element.children(".complete"),l=this.element.children(".hint");
c=this._percToPix(this.options.position);f=e.colors.length;g=e._slider.length/f;if(this.options._slider.vertical){var n=this._percToPix(this.options.position)+this.options._slider.marker,p=this.options._slider.length-n;b=this._percToPix(a)+this.options._slider.marker;c=this.options._slider.length-b;this._animate(h.css("top",p),{top:c});this._animate(k.css("height",n),{height:b});f&&(f=Math.round(b/g)-1,k.css("background-color",e.colors[0>f?0:f]));e.showHint&&l.html(Math.round(a)).css("top",c-l.height()/
2)}else b=this._percToPix(a),this._animate(h.css("left",c),{left:b}),this._animate(k.css("width",c),{width:b}),f&&(f=Math.round(b/g)-1,k.css("background-color",e.colors[0>f?0:f])),e.showHint&&this._animate(l.html(Math.round(a)).css("left",c-l.width()/2),{left:b-l.width()/2})},_animate:function(a,b){this.options.animate?a.stop(!0).animate(b):a.css(b)},_pixToPerc:function(a){return this._correctValue(a*this.options._slider.ppp)},_percToPix:function(a){return 0===this.options._slider.ppp?0:a/this.options._slider.ppp},
_correctValue:function(a){var b=this.options.accuracy,c=this.options.max,e=this.options.min;if(0===b)return a;if(a===c)return c;if(a===e)return e;a=Math.floor(a/b)*b+Math.round(a%b/b)*b;return a>c?c:a<e?e:a},_initPoints:function(){var a=this.options._slider,b=this.element;a.vertical?(a.offset=b.offset().top,a.length=b.height(),a.marker=b.children(".marker").height()):(a.offset=b.offset().left,a.length=b.width(),a.marker=b.children(".marker").width());a.ppp=this.options.max/(a.length-a.marker);a.start=
a.marker/2;a.stop=a.length-a.marker/2},_createSlider:function(){var a=this.element,b=this.options,d,e;a.html("");d=c("<div/>").addClass("complete").appendTo(a);e=c("<a/>").addClass("marker").appendTo(a);b.showHint&&c("<span/>").addClass("hint").appendTo(a);"default"!=b.color&&a.css("background-color",b.color);"default"!=b.completeColor&&d.css("background-color",b.completeColor);"default"!=b.markerColor&&e.css("background-color",b.markerColor)},value:function(a){a=a>this.options.max?this.options.max:
a;a=a<this.options.min?this.options.min:a;return"undefined"!==typeof a?(this._placeMarker(parseInt(a)),this.options.position=parseInt(a),this.options.change(Math.round(parseInt(a)),this.element),this):Math.round(this.options.position)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.tabcontrol",{version:"1.0.0",options:{effect:"none",activateStoredTab:!1,tabclick:function(a){},tabchange:function(a){}},_create:function(){var a=this,b=this.element,d=c(b.children(".tabs")).children("li"),e=c(b.children(".frames")).children(".frame"),f=b.attr("id");void 0!=b.data("effect")&&(this.options.effect=b.data("effect"));this.init(d,e);b.on("click",".tabs > li > a",function(d){d.preventDefault();d.stopPropagation();a.options.tabclick(this);if(c(this).parent().hasClass("disabled"))return!1;
b.children(".tabs").children("li").removeClass("active");b.children(".frames").children(".frame").hide();c(this).parent().addClass("active");d=c(c(this).attr("href"));switch(a.options.effect){case "slide":d.slideDown();break;case "fade":d.fadeIn();break;default:d.show()}a._trigger("change",null,d);a.options.tabchange(this);void 0!=f&&window.localStorage.setItem(f+"-current-tab",c(this).attr("href"));return!0});this.options.activateStoredTab&&this._activateStoredTab(d)},init:function(a,b){var d=this;
a.each(function(){if(c(this).hasClass("active")){var a=c(c(c(this).children("a")).attr("href"));b.hide();a.show();d._trigger("change",null,a)}})},_activateStoredTab:function(a){var b=window.localStorage.getItem(this.element.attr("id")+"-current-tab");void 0!=b&&a.each(function(){var a=c(this).children("a");a.attr("href")==b&&a.click()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.tablecontrol",{version:"1.0.0",options:{width:"100%",height:"auto",cls:"table",checkRow:!1,colModel:[],data:[]},_create:function(){var a=this.element;a.css({width:this.options.width,height:this.options.height});a=this.createTable(a);this.addHeader(a,this.options.colModel);this.addTableData(a,this.options.data);a.addClass(this.options.cls)},addHeader:function(a,b){var d=c("<thead/>").appendTo(a),e=c("<tr/>").appendTo(d);c.each(b,function(a,b){c("<th/>").addClass(b.hcls).html(b.caption).appendTo(e)})},
createTable:function(a){return c("<table/>").appendTo(a)},addTableData:function(a,b){var d=this,e=c("<tbody/>").appendTo(a);c.each(b,function(a,b){d.addRowData(e,b)})},addRowData:function(a,b){var d=c("<tr/>").appendTo(a);void 0!=b.__row_class&&d.addClass(b.__row_class);c.each(this.options.colModel,function(a,f){c("<td/>").css("width",f.width).addClass(f.cls).html(b[f.field]).appendTo(d)})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);$(function(){$("[data-role=table]").tablecontrol()});(function(c){c.widget("metro.times",{version:"1.0.0",options:{style:{background:"bg-dark",foreground:"fg-white",divider:"fg-dark"},blink:!0,alarm:{h:0,m:0,s:0},ontick:function(a,b,c){},onalarm:function(){}},wrappers:{},_interval:0,_create:function(){var a=this,b=this.element;c.each(["Hours","Minutes","Seconds"],function(){c('<span class="count'+this+'">').html('<span class="digit-wrapper">                        <span class="digit">0</span>                    </span>                    <span class="digit-wrapper">                        <span class="digit">0</span>                    </span>').appendTo(b);
"Seconds"!=this&&b.append('<span class="divider"></span>')});this.wrappers=this.element.find(".digit-wrapper");void 0!=b.data("blink")&&(this.options.blink=b.data("blick"));void 0!=b.data("styleBackground")&&(this.options.style.background=b.data("styleBackground"));void 0!=b.data("styleForeground")&&(this.options.style.foreground=b.data("styleForeground"));void 0!=b.data("styleDivider")&&(this.options.style.divider=b.data("styleDivider"));"default"!=this.options.style.background&&this.element.find(".digit").addClass(this.options.style.background);
"default"!=this.options.style.foreground&&this.element.find(".digit").addClass(this.options.style.foreground);"default"!=this.options.style.divider&&this.element.find(".divider").addClass(this.options.style.divider);if(void 0!=b.data("alarm")){var d=b.data("alarm").split(":");this.options.alarm.h=void 0!=d[0]?d[0]:0;this.options.alarm.m=void 0!=d[1]?d[1]:0;this.options.alarm.s=void 0!=d[2]?d[2]:0}b.data("onalarm");setTimeout(function(){a.tick()},1E3)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)},tick:function(){var a=this;this._interval=setInterval(function(){var b=new Date,c,e;c=b.getHours();a.updateDuo(0,1,c);e=b.getMinutes();a.updateDuo(2,3,e);b=b.getSeconds();a.updateDuo(4,5,b);a.options.ontick(c,e,b);a.blinkDivider();var f=a.options.alarm;f&&(void 0!=f.h&&f.h==c&&void 0!=f.m&&f.m==e&&void 0!=f.s&&f.s==b)&&(a.options.onalarm(),a._trigger("alarm"))},1E3)},blinkDivider:function(){this.options.blink&&this.element.find(".divider").toggleClass("no-visible")},updateDuo:function(a,b,c){this.switchDigit(this.wrappers.eq(a),
Math.floor(c/10)%10);this.switchDigit(this.wrappers.eq(b),c%10)},switchDigit:function(a,b){var d=a.find(".digit");if(d.is(":animated")||a.data("digit")==b)return!1;a.data("digit",b);var e=c("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:b});e.addClass(this.options.style.background);e.addClass(this.options.style.foreground);d.before(e).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){d.remove()});e.delay(100).animate({top:0,opacity:1},"fast");return!0}})})(jQuery);(function(c){c.Dialog=function(a){if(c.Dialog.opened)return METRO_DIALOG;c.Dialog.opened=!0;c.Dialog.settings=a;a=c.extend({icon:!1,title:"",content:"",flat:!1,shadow:!1,overlay:!1,width:"auto",height:"auto",position:"default",padding:!1,overlayClickClose:!0,sysButtons:{btnClose:!0},onShow:function(a){},sysBtnCloseClick:function(a){},sysBtnMinClick:function(a){},sysBtnMaxClick:function(a){}},a);var b,d,e,f;b=c("<div/>").addClass("metro window-overlay");a.overlay&&b.css({backgroundColor:"rgba(0,0,0,.7)"});
d=c("<div/>").addClass("window");a.flat&&d.addClass("flat");a.shadow&&d.addClass("shadow").css("overflow","hidden");e=c("<div/>").addClass("caption");f=c("<div/>").addClass("content");f.css({paddingTop:32+a.padding,paddingLeft:a.padding,paddingRight:a.padding,paddingBottom:a.padding});a.sysButtons&&(a.sysButtons.btnClose&&c("<button/>").addClass("btn-close").on("click",function(b){b.preventDefault();b.stopPropagation();c.Dialog.close();a.sysBtnCloseClick(b)}).appendTo(e),a.sysButtons.btnMax&&c("<button/>").addClass("btn-max").on("click",
function(b){b.preventDefault();b.stopPropagation();a.sysBtnMaxClick(b)}).appendTo(e),a.sysButtons.btnMin&&c("<button/>").addClass("btn-min").on("click",function(b){b.preventDefault();b.stopPropagation();a.sysBtnMinClick(b)}).appendTo(e));a.icon&&c(a.icon).addClass("icon").appendTo(e);c("<div/>").addClass("title").html(a.title).appendTo(e);f.html(a.content);e.appendTo(d);f.appendTo(d);d.appendTo(b);"auto"!=a.width&&d.css("min-width",a.width);"auto"!=a.height&&d.css("min-height",a.height);b.hide().appendTo("body").fadeIn("fast");
METRO_DIALOG=d;d.css("position","fixed").css("z-index",parseInt(b.css("z-index"))+1).css("top",(c(window).height()-METRO_DIALOG.outerHeight())/2).css("left",(c(window).width()-d.outerWidth())/2);addTouchEvents(d[0]);if(a.draggable)e.on("mousedown",function(a){c.Dialog.drag=!0;e.css("cursor","move");d.css("z-index");var b=d.outerHeight(),f=d.outerWidth(),l=d.offset().top+b-a.pageY,n=d.offset().left+f-a.pageX;d.css("z-index",99999).parents().on("mousemove",function(a){var e=0<a.pageY?a.pageY+l-b:0;
a=0<a.pageX?a.pageX+n-f:0;c.Dialog.drag&&(0<=e&&e<=window.innerHeight-d.outerHeight()&&d.offset({top:e}),0<=a&&a<=window.innerWidth-d.outerWidth()&&d.offset({left:a}))});a.preventDefault()}).on("mouseup",function(){d.removeClass("draggable");c.Dialog.drag=!1;e.css("cursor","default")});d.on("click",function(a){a.stopPropagation()});if(a.overlayClickClose)b.on("click",function(a){a.preventDefault();c.Dialog.close()});a.onShow(METRO_DIALOG);c.Dialog.autoResize();return METRO_DIALOG};c.Dialog.content=
function(a){return c.Dialog.opened&&void 0!=METRO_DIALOG?a?(METRO_DIALOG.children(".content").html(a),c.Dialog.autoResize(),!0):METRO_DIALOG.children(".content").html():!1};c.Dialog.title=function(a){if(!c.Dialog.opened||void 0==METRO_DIALOG)return!1;var b=METRO_DIALOG.children(".caption").children(".title");a?b.html(a):b.html();return!0};c.Dialog.autoResize=function(){if(!c.Dialog.opened||void 0==METRO_DIALOG)return!1;var a=METRO_DIALOG.children(".content"),b=(c(window).height()-METRO_DIALOG.outerHeight())/
2,d=(c(window).width()-METRO_DIALOG.outerWidth())/2;METRO_DIALOG.css({width:a.outerWidth(),height:a.outerHeight(),top:b,left:d});return!0};c.Dialog.close=function(){if(!c.Dialog.opened||void 0==METRO_DIALOG)return!1;c.Dialog.opened=!1;METRO_DIALOG.parent(".window-overlay").fadeOut(function(){c(this).remove()});return!1}})(jQuery);(function(c){var a=!1,b=[],d={_container:null,_notify:null,_timer:null,options:{icon:"",caption:"",content:"",shadow:!0,width:"auto",height:"auto",style:!1,position:"right",timeout:3E3},init:function(a){this.options=c.extend({},this.options,a);this._build();return this},_build:function(){a=this._container=a||c("<div/>").addClass("metro notify-container").appendTo("body");var d=this.options;if(""==d.content||void 0==d.content)return!1;this._notify=c("<div/>").addClass("notify");d.shadow&&this._notify.addClass("shadow");
d.style&&void 0!=d.style.background&&this._notify.css("background-color",d.style.background);d.style&&void 0!=d.style.color&&this._notify.css("color",d.style.color);""!=d.caption&&void 0!=d.caption&&c("<div/>").addClass("caption").html(d.caption).appendTo(this._notify);""!=d.content&&void 0!=d.content&&c("<div/>").addClass("content").html(d.content).appendTo(this._notify);"auto"!=d.width&&this._notify.css("min-width",d.width);"auto"!=d.height&&this._notify.css("min-height",d.height);this._notify.hide().appendTo(this._container).fadeIn("slow");
b.push(this._notify);this.close(d.timeout)},close:function(a){this.clear();if(a==parseInt(a)){var b=this;this._timer=setTimeout(function(){b._timer=null;b._hide()},a)}else if(void 0==a)return this._hide();return this},clear:function(){return null!=this._timer?(clearTimeout(this._timer),this._timer=null,this):!1},_hide:function(){this.clear();return void 0!=this._notify?(this._notify.hide("slow",function(){c(this).remove();b.splice(b.indexOf(this._notify),1)}),this):!1},closeAll:function(){b.forEach(function(a){a.hide("slow",
function(){a.remove();b.splice(b.indexOf(a),1)})});return this}};c.Notify=function(a){return Object.create(d).init(a)};c.Notify.show=function(a,b){return c.Notify({content:a,caption:b})}})(jQuery);(function(c){c.widget("metro.listview",{version:"1.0.0",options:{onGroupExpand:function(a){},onGroupCollapse:function(a){},onListClick:function(a){}},_create:function(){var a=this,b=this.element;b.children(".collapsed").children(".group-content").hide();b.find(".group-title").on("click",function(b){var e=c(this).parent(".list-group"),f=e.children(".group-content");e.toggleClass("collapsed");e.hasClass("collapsed")?(f.slideUp(),a.options.onGroupCollapse(e)):(f.slideDown(),a.options.onGroupExpand(e));
b.preventDefault()});b.find(".list").on("click",function(d){b.find(".list").removeClass("active");c(this).toggleClass("active");a.options.onListClick(c(this));d.preventDefault()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.treeview",{version:"1.0.0",options:{onNodeClick:function(a){},onNodeCollapsed:function(a){},onNodeExpanded:function(a){}},_create:function(){var a=this,b=this.element;b.find(".node.collapsed").find("ul").hide();b.find(".node-toggle").on("click",function(b){var e=c(this).parent().parent("li");e.hasClass("keep-open")||(e.toggleClass("collapsed"),e.hasClass("collapsed")?(e.children("ul").fadeOut("fast"),a.options.onNodeCollapsed(e)):(e.children("ul").fadeIn("fast"),a.options.onNodeExpanded(e)),
a.options.onNodeClick(e),b.preventDefault(),b.stopPropagation())});b.find("a").each(function(){var a=c(this);a.css({paddingLeft:10*(a.parents("ul").length-1)})});b.find("a").on("click",function(d){var e=c(this),f=e.parent("li");b.find("a").removeClass("active");e.toggleClass("active");a.options.onNodeClick(f);d.preventDefault()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.fluentmenu",{version:"1.0.0",options:{onSpecialClick:function(a,b){},onTabClick:function(a,b){}},_create:function(){var a=this,b=this.element,d=this.options,e=b.find(".tabs-holder > li > a");this._hidePanels();this._showPanel();e.on("click",function(e){if(c(this).parent("li").hasClass("special"))d.onSpecialClick(e,c(this));else{var g=c(c(this).attr("href"));a._hidePanels();a._showPanel(g);b.find(".tabs-holder > li").removeClass("active");c(this).parent("li").addClass("active");
d.onTabClick(e,c(this))}e.preventDefault()})},_hidePanels:function(){this.element.find(".tab-panel").hide()},_showPanel:function(a){void 0==a&&(a=this.element.find(".tabs-holder li.active a").attr("href"));c(a).show()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.hint",{version:"1.0.0",options:{position:"bottom",background:"#FFFCC0",shadow:!1,border:!1,mode:1,_hint:void 0},_create:function(){var a=this,b=this.options;this.element.on("mouseenter",function(d){c(".hint, .hint2").remove();a.createHint();b._hint.show();d.preventDefault()});this.element.on("mouseleave",function(a){b._hint.hide().remove();a.preventDefault()})},createHint:function(){var a=this.element,b=a.data("hint").split("|"),d=this.options;void 0!=a.data("hintPosition")&&
(d.position=a.data("hintPosition"));void 0!=a.data("hintBackground")&&(d.background=a.data("hintBackground"));void 0!=a.data("hintShadow")&&(d.shadow=a.data("hintShadow"));void 0!=a.data("hintBorder")&&(d.border=a.data("hintBorder"));void 0!=a.data("hintMode")&&(d.mode=a.data("hintMode"));if("TD"==a[0].tagName||"TH"==a[0].tagName){var e=c("<div/>").css("display","inline-block").html(a.html());a.html(e);a=e}var e=1<b.length?b[0]:!1,f=1<b.length?b[1]:b[0],b=c("<div/>").appendTo("body");2==d.mode?b.addClass("hint2"):
b.addClass("hint");e&&c("<div/>").addClass("hint-title").html(e).appendTo(b);c("<div/>").addClass("hint-text").html(f).appendTo(b);b.addClass(d.position);d.shadow&&b.addClass("shadow");d.background&&b.css("background-color",d.background);d.border&&b.css("border-color",d.border);"top"==d.position?b.css({top:a.offset().top-c(window).scrollTop()-b.outerHeight()-20,left:2==d.mode?a.offset().left+a.outerWidth()/2-b.outerWidth()/2:a.offset().left-c(window).scrollLeft()}):"bottom"==d.position?b.css({top:a.offset().top-
c(window).scrollTop()+a.outerHeight(),left:2==d.mode?a.offset().left+a.outerWidth()/2-b.outerWidth()/2:a.offset().left-c(window).scrollLeft()}):"right"==d.position?b.css({top:2==d.mode?a.offset().top+a.outerHeight()/2-b.outerHeight()/2-c(window).scrollTop()-10:a.offset().top-10-c(window).scrollTop(),left:a.offset().left+a.outerWidth()+15-c(window).scrollLeft()}):"left"==d.position&&b.css({top:2==d.mode?a.offset().top+a.outerHeight()/2-b.outerHeight()/2-c(window).scrollTop()-10:a.offset().top-10-c(window).scrollTop(),
left:a.offset().left-b.outerWidth()-10-c(window).scrollLeft()});d._hint=b},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.streamer",{version:"1.0.0",options:{scrollBar:!1,meter:{start:9,stop:19,interval:20},slideToGroup:1,slideToTime:"10:20",slideSleep:1E3,slideSpeed:1E3,onClick:function(a){},onLongClick:function(a){}},_create:function(){var a=this,b=this.element,d=this.options,e=b.find(".stream"),f=b.find(".event"),g=b.find(".events"),h=b.find(".events-area"),k=b.find(".event-group"),l=b.find(".event-stream");void 0!=b.data("scrollBar")&&(d.scrollBar=b.data("scrollBar"));void 0!=b.data("meterStart")&&
(d.meter.start=parseInt(b.data("meterStart")));void 0!=b.data("meterStop")&&(d.meter.stop=parseInt(b.data("meterStop")));void 0!=b.data("meterInterval")&&(d.meter.interval=b.data("meterInterval"));void 0!=b.data("slideToGroup")&&(d.slideToGroup=parseInt(b.data("slideToGroup")));void 0!=b.data("slideSleep")&&(d.slideSleep=parseInt(b.data("slideSleep")));void 0!=b.data("slideSpeed")&&(d.slideSpeed=parseInt(b.data("slideSpeed")));b.data("streamSelect",-1);var n=c("<ul/>").addClass("meter"),p,m,q,u=d.meter.stop,
r=d.meter.interval,s=[];for(p=d.meter.start;p<u;p++)for(m=0;60>m;m+=r)q=(10>p?"0"+p:p)+":"+(10>m?"0"+m:m),c("<li/>").addClass("js-interval-"+q.replace(":","-")).html("<em>"+q+"</em>").appendTo(n),s.push(q);b.data("intervals",s);n.insertBefore(b.find(".events-grid"));b.find(".event-stream").each(function(a,b){var d=0,f=c(b).find(".event");f.each(function(a,b){d+=c(b).outerWidth()});c(b).css({width:d+2*(f.length-1)+1});c(b).find(".time").css("background-color",c(e[a]).css("background-color"))});g.css({"overflow-x":d.scrollBar?
"scroll":"hidden"});b.css({height:b.find(".streams").outerHeight()+(d.scrollBar?20:0)});var t=0;k.each(function(a,b){t+=c(b).outerWidth()});t+=2*(k.length-1)+10;h.css("width",t);f.each(function(a,b){addTouchEvents(b)});f.mousedown(function(a){a.altKey&&c(this).toggleClass("selected")});b.mousewheel(function(a,b){var c=50*b;g.scrollLeft(g.scrollLeft()-c);return!1});e.each(function(a,d){c(d).mousedown(function(d){b.data("streamSelect")==a?(f.removeClass("event-disable"),b.data("streamSelect",-1)):(b.data("streamSelect",
a),f.addClass("event-disable"),c(l[a]).find(".event").removeClass("event-disable"))})});f.on("click",function(a){a.preventDefault();d.onClick(c(this))});f.on("longclick",function(a){c(this).toggleClass("selected");a.preventDefault();d.onLongClick(c(this))});b.find(".js-go-previous-time").on("click",function(c){c=b.data("intervals").indexOf(b.data("current-time"));0!=c&&(c--,c=b.data("intervals")[c],a.slideToTime(c,0,d.slideSpeed))});b.find(".js-go-next-time").on("click",function(c){c=b.data("intervals").indexOf(b.data("current-time"));
c!=b.data("intervals").length-1&&(c++,c=b.data("intervals")[c],a.slideToTime(c,0,d.slideSpeed))});b.find(".js-show-all-streams").on("click",function(a){b.find(".event").removeClass("event-disable");b.data("streamSelect",-1);a.preventDefault()});b.find(".js-schedule-mode").on("click",function(a){c(this).toggleClass("inverse");b.data("schedule-mode",c(this).hasClass("inverse"));a.preventDefault()});d.slideToTime?this.slideToTime(d.slideToTime,d.slideSleep,d.slideSpeed):this.slideToGroup(d.slideToGroup,
d.slideSleep,d.slideSpeed)},slideToTime:function(a,b,c){var e=this,f=this.element,g=f.find(".meter li.js-interval-"+a.replace(":","-"))[0],h=f.find(".streams").outerWidth()+2;setTimeout(function(){f.find(".events").animate({scrollLeft:"+="+(g.offsetLeft-h)},c,function(){e._afterSlide()})},b);f.data("current-time",a)},slideToGroup:function(a,b,c){var e=this,f=this.element,g=f.find(".event-group"),h=f.find(".streams").outerWidth()+2;setTimeout(function(){f.find(".events").animate({scrollLeft:"+="+(g[a-
1].offsetLeft-h)},c,function(){e._afterSlide()})},b)},_afterSlide:function(){},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.scrollbar",{version:"1.0.0",options:{height:"100%",width:"100%",axis:["x","y"],wheel:55},startSize:{width:null,height:null},elemPadding:!1,bothScroll:!1,scrollbar:null,contentHeight:0,contentWidth:0,contentMinHeight:0,contentMinWidth:0,dragElem:null,dragStart:!1,startCoords:{x:0,y:0},currCoords:{x:0,y:0},handlers:!1,_create:function(){var a=this.element,b=this;if(void 0!=a.data("scroll")){var d=a.data("scroll");"vertical"==d&&(this.options.axis="y");"horizontal"==d&&(this.options.axis=
"x");"both"==d&&(this.options.axis=["x","y"])}void 0!=a.data("height")&&(this.options.height=a.data("height"));void 0!=a.data("width")&&(this.options.width=a.data("width"));void 0!=a.data("wheel")&&(this.options.wheel=a.data("wheel"));a.css({position:"relative"});var d=a.outerWidth(),e=a.outerHeight();this.contentMinWidth=d;this.contentMinHeight=e;this.startSize.width=this.options.width;this.startSize.height=this.options.height;var f=this.startSize.width==parseInt(this.startSize.width)?this.startSize.width+
"px":this.startSize.width,g=this.startSize.height==parseInt(this.startSize.height)?this.startSize.height+"px":this.startSize.height;a.wrap('<div class="scrollbar" style="width: '+f+"; height: "+g+';"></div>');this.scrollbar=a.parents(".scrollbar").first();this.scrollbar.parents().first().css({overflow:"hidden"});this._build(d,e);c(window).resize(function(){b._resize()})},_resize:function(){var a=this.element;if(!isNaN(parseInt(this.element.css("left")))&&0!=parseInt(this.element.css("left"))||!isNaN(parseInt(this.element.css("top")))&&
parseInt(this.element.css("top"))){var b=Math.abs(parseInt(this.element.css("left"))),c=Math.abs(parseInt(this.element.css("top"))),e=this.scrollbar.width(),f=this.scrollbar.height();this.contentWidth-b<e&&(b-=e-(this.contentWidth-b),0>b&&(b=0),this.element.css("left",-1*b));this.element.css("left",-1*b);this.contentHeight-c<f&&(c-=f-(this.contentHeight-c),0>c&&(c=0),this.element.css("top",-1*c))}this.options.width=this.startSize.width;this.options.height=this.startSize.height;this.scrollbar.css({padding:0});
this.elemPadding&&(this.element.css({paddingRight:"-=5",paddingBottom:"-=5"}),this.elemPadding=!1);0<this.scrollbar.find(".scrollbar-v").length&&this.scrollbar.find(".scrollbar-v").remove();0<this.scrollbar.find(".scrollbar-h").length&&this.scrollbar.find(".scrollbar-h").remove();0<this.scrollbar.find(".scrollbar-both").length&&this.scrollbar.find(".scrollbar-both").remove();b=a.outerWidth();a=a.outerHeight();this.contentWidth=b;this.contentHeight=a;this._removeHandlers();this._build(b,a)},_build:function(a,
b){var c=this.element;this.options.width="100%"==this.options.width?this.scrollbar.outerWidth():this.options.width;this.options.height="100%"==this.options.height?this.scrollbar.outerHeight():this.options.height;this.scrollbar.css({width:this.startSize.width,height:this.startSize.height});this.contentWidth=a;this.contentHeight=b;"y"==this.options.axis?this.contentHeight>this.options.height?(this.scrollbar.css({paddingRight:20,paddingBottom:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=
a,this.contentHeight=b,this._verticalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-v").length&&this.scrollbar.find(".scrollbar-v").hide(),this.scrollbar.css({paddingRight:0,paddingBottom:0})):"x"==this.options.axis?this.contentWidth>this.options.width?("100%"==this.startSize.height&&(this.scrollbar.css({paddingBottom:20,paddingRight:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,this.contentHeight=b),this._horizontalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-h").length&&
this.scrollbar.find(".scrollbar-h").hide(),this.scrollbar.css({paddingBottom:0,paddingRight:0})):this.contentHeight>this.options.height&&this.contentWidth>this.options.width?(this.bothScroll=!0,0<this.scrollbar.find(".scrollbar-both").length?this.scrollbar.find(".scrollbar-both").show():this.scrollbar.append('<div class="scrollbar-both"></div>'),this.elemPadding||(this.element.css({paddingRight:"+=5",paddingBottom:"+=5"}),this.elemPadding=!0),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,
this.contentHeight=b,this._verticalScrollbar(),this._horizontalScrollbar(),this._startHandlers()):(this.bothScroll=!1,0<this.scrollbar.find(".scrollbar-both").length&&this.scrollbar.find(".scrollbar-both").hide(),this.elemPadding&&(this.element.css({paddingRight:"-=5",paddingBottom:"-=5"}),this.elemPadding=!1),this.contentWidth>this.options.width?("100%"==this.startSize.height&&(this.scrollbar.css({paddingBottom:20,paddingRight:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,this.contentHeight=
b),this._horizontalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-h").length&&this.scrollbar.find(".scrollbar-h").hide(),this.scrollbar.css({paddingBottom:0,paddingRight:0})),this.contentHeight>this.options.height?(this.scrollbar.css({paddingRight:20,paddingBottom:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,this.contentHeight=b,this._verticalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-v").length&&this.scrollbar.find(".scrollbar-v").hide(),
this.scrollbar.css({paddingRight:0,paddingBottom:0})))},_verticalScrollbar:function(){if(1>this.scrollbar.find(".scrollbar-v").length){var a=[];a[a.length]='<div class="scrollbar-v">';a[a.length]='<div class="scrollbar-v-up"></div>';a[a.length]='<div class="scrollbar-v-down"></div>';a[a.length]='<div class="scrollbar-line-v">';a[a.length]='<div class="scrollbar-line-v-btn"></div>';a[a.length]="</div>";a[a.length]="</div>";a=a.join("");this.scrollbar.append(a)}else this.scrollbar.find(".scrollbar-v").show();
var b=this.scrollbar.find(".scrollbar-line-v"),a=this.scrollbar.find(".scrollbar-line-v-btn"),c=this.scrollbar.find(".scrollbar-v");if(this.bothScroll){c.height(this.options.height);var e=c.height()-15;this.options.height=e;c.height(e)}else c.height(this.options.height);c=this.options.height-32;e=c/this.contentHeight;b.height(c);e>=(this.contentHeight-32)/this.contentHeight?a.hide():(b=e*this.options.height,a.show().height(b))},_horizontalScrollbar:function(){if(1>this.scrollbar.find(".scrollbar-h").length){var a=
[];a[a.length]='<div class="scrollbar-h">';a[a.length]='<div class="scrollbar-h-up"></div>';a[a.length]='<div class="scrollbar-h-down"></div>';a[a.length]='<div class="scrollbar-line-h">';a[a.length]='<div class="scrollbar-line-h-btn"></div>';a[a.length]="</div>";a[a.length]="</div>";a=a.join("");this.scrollbar.append(a)}else this.scrollbar.find(".scrollbar-h").show();var a=this.scrollbar.find(".scrollbar-line-h"),b=this.scrollbar.find(".scrollbar-line-h-btn"),c=this.scrollbar.find(".scrollbar-h");
if(this.bothScroll){c.width(this.options.width);var e=c.width()-15;this.options.width=e;c.width(e)}else c.width(this.options.width);var c=this.options.width-32,e=c/this.contentWidth,f=e*this.options.width,g=isNaN(parseInt(this.element.css("left")))?0:parseInt(this.element.css("left")),g=Math.abs(g)*e;a.width(c);e>=(this.contentWidth-32)/this.contentWidth?b.hide():b.show().width(f).css({left:g})},_startHandlers:function(){if(this.handlers)return!1;this.handlers=!0;var a=this;c(document).mousemove(function(b){a._drag(b)});
c(document).mouseup(function(b){a._dragEnd(b)});this.scrollbar.find(".scrollbar-line-v-btn,.scrollbar-line-h-btn").on("mousedown",function(b){a._dragStart(b,c(this))});this.scrollbar.find(".scrollbar-line-v,.scrollbar-line-h").on("click",function(b){a._clickPos(b,c(this))});this.scrollbar.find(".scrollbar-v-up,.scrollbar-h-up").on("click",function(b){a._fixScroll(1,c(this))});this.scrollbar.find(".scrollbar-v-down,.scrollbar-h-down").on("click",function(b){a._fixScroll(-1,c(this))});this.scrollbar.mousewheel(function(b,
c){a._fixScroll(c);return!1})},_removeHandlers:function(){if(!this.handlers)return!1;this.handlers=!1;c(document).mousemove(function(a){return!1});c(document).mouseup(function(a){return!1});this.scrollbar.find(".scrollbar-line-v-btn,.scrollbar-line-h-btn").off("mousedown");this.scrollbar.find(".scrollbar-line-v,.scrollbar-line-h").off("click");this.scrollbar.find(".scrollbar-v-up,.scrollbar-h-up").off("click");this.scrollbar.find(".scrollbar-v-down,.scrollbar-h-down").off("click")},_clickPos:function(a,
b){if("scrollbar-line-v"==c(a.target).attr("class")||"scrollbar-line-h"==c(a.target).attr("class")){var d=b.offset();if("scrollbar-line-v"==c(a.target).attr("class")){var e=a.pageY-d.top,f=b.find(".scrollbar-line-v-btn");this.dragElem={elem:f,width:f.width(),height:f.height(),parent:b,parentWidth:b.width(),parentHeight:b.height(),parentOffset:d};this._scrollTo(0,e,"y")}else e=a.pageX-d.left,f=b.find(".scrollbar-line-h-btn"),this.dragElem={elem:f,width:f.width(),height:f.height(),parent:b,parentWidth:b.width(),
parentHeight:b.height(),parentOffset:d},this._scrollTo(e,0,"x");this.dragElem=null}},_fixScroll:function(a,b){var c,e,f,g=this.options.wheel;if(void 0!==b&&(b.hasClass("scrollbar-h-up")||b.hasClass("scrollbar-h-down"))||"x"==this.options.axis||"x"!=this.options.axis&&"y"!=this.options.axis&&1>this.scrollbar.find(".scrollbar-v").length){var h=100*(g/this.contentWidth);e=(this.options.width-32)/100*h;h=parseInt(this.element.css("left"));f=isNaN(h)?0:Math.abs(h);h=this.scrollbar.find(".scrollbar-line-h-btn");
c=this.scrollbar.find(".scrollbar-line-h");var k=parseFloat(h.css("left")),k=isNaN(k)?0:k;0<a?(g=f-g,f=k-e):(g=f+g,f=k+e);0>g&&(g=0);g>this.contentWidth-this.options.width&&(g=this.contentWidth-this.options.width);e=c.width();c.height();c=h.width();h.height();0>f&&(f=0);f+c>e&&(f=e-c);this.element.css({left:-1*g});h.css({left:f})}else h=100*(g/this.contentHeight),e=(this.options.height-32)/100*h,h=parseInt(this.element.css("top")),f=isNaN(h)?0:Math.abs(h),h=this.scrollbar.find(".scrollbar-line-v-btn"),
c=this.scrollbar.find(".scrollbar-line-v"),k=parseFloat(h.css("top")),k=isNaN(k)?0:k,0<a?(g=f-g,e=k-e):(g=f+g,e=k+e),0>g&&(g=0),g>this.contentHeight-this.options.height&&(g=this.contentHeight-this.options.height),c.width(),f=c.height(),h.width(),c=h.height(),0>e&&(e=0),e+c>f&&(e=f-c),this.element.css({top:-1*g}),h.css({top:e})},_scrollTo:function(a,b,c){"x"==c?(c=(this.options.width-32)/this.contentWidth,b=a/c,0>b&&(b=0),b>this.contentWidth-this.options.width&&(b=this.contentWidth-this.options.width),
0>a&&(a=0),a>this.dragElem.parentWidth-this.dragElem.width&&(a=this.dragElem.parentWidth-this.dragElem.width),this.dragElem.elem.css({left:a}),this.element.css({left:-1*b})):(c=(this.options.height-32)/this.contentHeight,a=b/c,0>a&&(a=0),a>this.contentHeight-this.options.height&&(a=this.contentHeight-this.options.height),0>b&&(b=0),b>this.dragElem.parentHeight-this.dragElem.height&&(b=this.dragElem.parentHeight-this.dragElem.height),this.dragElem.elem.css({top:b}),this.element.css({top:-1*a}))},_scroll:function(){if(this.dragElem.elem.hasClass("scrollbar-line-h-btn")){var a=
(this.options.width-32)/this.contentWidth,b=parseInt(this.dragElem.elem.css("left")),a=(isNaN(b)?0:Math.abs(b))/a;0>a&&(a=0);a>this.contentWidth-this.options.width&&(a=this.contentWidth-this.options.width);this.element.css({left:-1*a})}else a=(this.options.height-32)/this.contentHeight,b=parseInt(this.dragElem.elem.css("top")),a=(isNaN(b)?0:Math.abs(b))/a,0>a&&(a=0),a>this.contentHeight-this.options.height&&(a=this.contentHeight-this.options.height),this.element.css({top:-1*a})},_startCoordsDiff:function(a){var b=
this.dragElem.elem.offset();this.startCoords.x=a.pageX-b.left;this.startCoords.y=a.pageY-b.top},_dragStart:function(a,b){var c=b.parents().first();this.dragElem={elem:b,width:b.width(),height:b.height(),parent:c,parentWidth:c.width(),parentHeight:c.height(),parentOffset:c.offset()};this.dragStart=!0;this.currCoords.x=a.pageX;this.currCoords.y=a.pageY;this._startCoordsDiff(a)},_drag:function(a){if(this.dragStart){this.currCoords.x=a.pageX;this.currCoords.y=a.pageY;a=this.currCoords.x-this.startCoords.x-
this.dragElem.parentOffset.left;var b=this.currCoords.y-this.startCoords.y-this.dragElem.parentOffset.top;0>a&&(a=0);a+this.dragElem.width>=this.dragElem.parentWidth&&(a=this.dragElem.parentWidth-this.dragElem.width);0>b&&(b=0);b+this.dragElem.height>this.dragElem.parentHeight&&(b=this.dragElem.parentHeight-this.dragElem.height);this.dragElem.elem.css({left:a,top:b});this._scroll()}},_dragEnd:function(a){this.dragStart&&(this.dragElem=null,this.dragStart=!1,this.startCoords.x=0,this.startCoords.y=
0,this.currCoords.x=null,this.currCoords.y=null)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.stepper",{version:"1.0.0",options:{steps:3,start:1,onStep:function(a,b){}},_create:function(){var a=this.element,b=this.options;void 0!=a.data("steps")&&(b.steps=a.data("steps"));void 0!=a.data("start")&&(b.start=a.data("start"));this._createStepper();this._positioningSteps();this._stepTo(b.start)},_createStepper:function(){var a=this.element,b=this.options,d,e;e=c("<ul/>");for(d=0;d<b.steps;d++)c("<li/>").appendTo(e);e.appendTo(a)},_positioningSteps:function(){var a=
this.element,b=a.find("li"),d=a.width(),e=b.length-1,f=c(b[0]).width();c.each(b,function(a,b){var k=0==a?0:(d-f)/e*a;c(b).animate({left:k})})},_stepTo:function(a){var b=this.options,d=this.element.find("li");d.removeClass("current").removeClass("complete");c.each(d,function(d,f){d<a-1&&c(f).addClass("complete");d==a-1&&(c(f).addClass("current"),b.onStep(d+1,f))})},first:function(){var a=this.options;a.start=1;this._stepTo(a.start)},last:function(){var a=this.options,b=this.element.find("li");a.start=
b.length;this._stepTo(a.start)},next:function(){var a=this.options,b=this.element.find("li");a.start+1>b.length||(a.start++,this._stepTo(a.start))},prior:function(){var a=this.options;0!=a.start-1&&(a.start--,this._stepTo(a.start))},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.pullmenu",{version:"1.0.0",options:{},_create:function(){var a=this.element,b=void 0!=a.data("relation")?a.data("relation"):a.parent().children(".element-menu, .horizontal-menu");addTouchEvents(a[0]);a.on("click",function(a){b.slideToggle();a.preventDefault();a.stopPropagation()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);
$(window).resize(function(){800<(0<window.innerWidth?window.innerWidth:screen.width)?$(".element-menu").show():$(".element-menu").hide()});(function(c){c.widget("metro.wizard",{version:"1.0.0",options:{stepper:!0,stepperType:"default",locale:c.Metro.currentLocale,finishStep:"default",buttons:{cancel:!0,help:!0,prior:!0,next:!0,finish:!0},onCancel:function(a,b){},onHelp:function(a,b){},onPrior:function(a,b){return!0},onNext:function(a,b){return!0},onFinish:function(a,b){},onPage:function(a,b){}},_stepper:void 0,_currentStep:0,_steps:void 0,_create:function(){var a=this.element,b=this.options,c=a.find(".step");this._steps=c;b.stepper&&
(this._stepper=this._createStepper(c.length).insertBefore(a.find(".steps")));void 0!=a.data("locale")&&(b.locale=a.data("locale"));this._createEvents();this.options.onPage(this._currentStep+1,a)},_createStepper:function(a){var b=this.options;a=c("<div/>").addClass("stepper").attr("data-role","stepper").attr("data-steps",a);"default"!=b.stepperType&&a.addClass(b.stepperType);return a},_createEvents:function(){var a=this,b=this.element,d=this.options;if(d.buttons){var e=c("<div/>").addClass("actions").appendTo(b),
f=c("<div/>").addClass("group-left").appendTo(e),e=c("<div/>").addClass("group-right").appendTo(e);if(d.buttons.cancel)c("<button type='button'/>").addClass("btn-cancel").html(c.Metro.Locale[d.locale].buttons[2]).appendTo(f).on("click",function(){d.onCancel(a._currentStep+1,b)});if(d.buttons.help)c("<button type='button'/>").addClass("btn-help").html(c.Metro.Locale[d.locale].buttons[3]).appendTo(e).on("click",function(){d.onHelp(a._currentStep+1,b)});if(d.buttons.prior)c("<button type='button'/>").addClass("btn-prior").html(c.Metro.Locale[d.locale].buttons[4]).appendTo(e).on("click",
function(){d.onPrior(a._currentStep+1,b)&&a.prior()});if(d.buttons.next)c("<button type='button'/>").addClass("btn-next").html(c.Metro.Locale[d.locale].buttons[5]).appendTo(e).on("click",function(){d.onNext(a._currentStep+1,b)&&a.next()});if(d.buttons.finish)c("<button type='button' disabled/>").addClass("btn-finish").html(c.Metro.Locale[d.locale].buttons[6]).appendTo(e).on("click",function(){d.onFinish(a._currentStep+1,b)})}},next:function(){var a=this._currentStep+1;if(a==this._steps.length)return!1;
this._currentStep=a;this._steps.hide();c(this._steps[a]).show();this.options.onPage(this._currentStep+1,this.element);this._stepper.stepper("next");var b=parseInt("default"==this.options.finishStep?this._steps.length-1:this.options.finishStep);a==b?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0);return!0},prior:function(){var a=this._currentStep-1;if(0>a)return!1;this._currentStep=a;this._steps.hide();c(this._steps[a]).show();this.options.onPage(this._currentStep+
1,this.element);this._stepper.stepper("prior");var b=parseInt("default"==this.options.finishStep?this._steps.length-1:this.options.finishStep);a==b?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0);return!0},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.panel",{version:"1.0.0",options:{onCollapse:function(){},onExpand:function(){}},_create:function(){var a=this.element,b=this.options,c=a.children(".panel-header"),e=a.children(".panel-content");c.on("click",function(){e.slideToggle("fast",function(){a.toggleClass("collapsed");if(a.hasClass("collapsed"))b.onCollapse();else b.onExpand()})})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.tileTransform",{version:"1.0.0",options:{},_create:function(){var a=this.element,b=a.width(),d=a.height();a.on("click",function(a){});a.on("mousedown",function(e){var f=e.pageX-c(this).offset().left;e=e.pageY-c(this).offset().top;var g="top";f<1*b/3&&(e<1*d/2||e>1*d/2)?g="left":f>2*b/3&&(e<1*d/2||e>1*d/2)?g="right":f>1*b/3&&(f<2*b/3&&e>d/2)&&(g="bottom");c(this).addClass("tile-transform-"+g);"A"==a[0].tagName&&a.attr("href")&&setTimeout(function(){document.location.href=
a.attr("href")},500)});a.on("mouseup",function(){c(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")});a.on("mouseleave",function(){c(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.popover",{version:"1.0.0",options:{popoverText:"",popoverTimeout:3E3,popoverPosition:"top",popoverBackground:"bg-cyan",popoverColor:"fg-white",popoverMode:"none",popoverShadow:!0},popover:{},_create:function(){this.createPopover()},createPopover:function(){var a=this,b,d=this.options;b=this.element;c.each(b.data(),function(a,b){try{d[a]=c.parseJSON(b)}catch(e){d[a]=b}});var e,f;e=c("<div/>").addClass("notice").appendTo("body").hide();c("<div/>").appendTo(e);d.popoverShadow&&
e.addClass("shadow");d.popoverBackground&&("#"==d.popoverBackground[0]?e.css("background-color",d.popoverBackground):e.addClass(d.popoverBackground));d.popoverColor&&("#"==d.popoverColor[0]?e.css("color",d.popoverColor):e.addClass(d.popoverColor));switch(d.popoverPosition){case "left":f="marker-on-right";break;case "right":f="marker-on-left";break;case "bottom":f="marker-on-top";break;default:f="marker-on-bottom"}e.css({position:"fixed"});e.addClass(f);this.popover=e;this.setText(d.popoverText);b.on(d.popoverMode,
function(b){e.data("visible")||a.show()});c(window).scroll(function(){a.popover.data("visible")&&a.setPosition()})},setPosition:function(){var a=this.options,b=this.popover,d=this.element;"top"==a.popoverPosition?b.css({top:d.offset().top-c(window).scrollTop()-b.outerHeight()-10,left:d.offset().left+d.outerWidth()/2-b.outerWidth()/2-c(window).scrollLeft()}):"bottom"==a.popoverPosition?b.css({top:d.offset().top-c(window).scrollTop()+d.outerHeight()+10,left:d.offset().left+d.outerWidth()/2-b.outerWidth()/
2-c(window).scrollLeft()}):"right"==a.popoverPosition?b.css({top:d.offset().top+d.outerHeight()/2-b.outerHeight()/2-c(window).scrollTop(),left:d.offset().left+d.outerWidth()-c(window).scrollLeft()+10}):"left"==a.popoverPosition&&b.css({top:d.offset().top+d.outerHeight()/2-b.outerHeight()/2-c(window).scrollTop(),left:d.offset().left-b.outerWidth()-c(window).scrollLeft()-10});return this},setText:function(a){this.popover.children("div").html(a)},show:function(){var a=this.options,b=this.popover;this.setPosition();
b.fadeIn(function(){b.data("visible",!0);setTimeout(function(){b.fadeOut(function(){b.data("visible",!1)})},a.popoverTimeout)})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.Metro.initAccordions=function(a){void 0!=a?c(a).find("[data-role=accordion]").accordion():c("[data-role=accordion]").accordion()};c.Metro.initButtonSets=function(a){void 0!=a?(c(a).find("[data-role=button-set]").buttonset(),c(a).find("[data-role=button-group]").buttongroup()):(c("[data-role=button-set]").buttonset(),c("[data-role=button-group]").buttongroup())};c.Metro.initCalendars=function(a){void 0!=a?c(a).find("[data-role=calendar]").calendar():c("[data-role=calendar]").calendar()};
c.Metro.initCarousels=function(a){void 0!=a?c(a).find("[data-role=carousel]").carousel():c("[data-role=carousel]").carousel()};c.Metro.initCountdowns=function(a){void 0!=a?c(a).find("[data-role=countdown]").countdown():c("[data-role=countdown]").countdown()};c.Metro.initDatepickers=function(a){void 0!=a?c(a).find("[data-role=datepicker]").datepicker():c("[data-role=datepicker]").datepicker()};c.Metro.initDropdowns=function(a){void 0!=a?c(a).find("[data-role=dropdown]").dropdown():c("[data-role=dropdown]").dropdown()};
c.Metro.initFluentMenus=function(a){void 0!=a?c(a).find("[data-role=fluentmenu]").fluentmenu():c("[data-role=fluentmenu]").fluentmenu()};c.Metro.initHints=function(a){void 0!=a?c(a).find("[data-hint]").hint():c("[data-hint]").hint()};c.Metro.initInputs=function(a){void 0!=a?c(a).find("[data-role=input-control], .input-control").inputControl():c("[data-role=input-control], .input-control").inputControl()};c.Metro.transformInputs=function(a){void 0!=a?c(a).find("[data-transform=input-control]").inputTransform():
c("[data-transform=input-control]").inputTransform()};c.Metro.initListViews=function(a){void 0!=a?c(a).find("[data-role=listview]").listview():c("[data-role=listview]").listview()};c.Metro.initLives=function(a){void 0!=a?c(a).find("[data-role=live-tile], [data-role=live]").livetile():c("[data-role=live-tile], [data-role=live]").livetile()};c.Metro.initProgreeBars=function(a){void 0!=a?c(a).find("[data-role=progress-bar]").progressbar():c("[data-role=progress-bar]").progressbar()};c.Metro.initRatings=
function(a){void 0!=a?c(a).find("[data-role=rating]").rating():c("[data-role=rating]").rating()};c.Metro.initScrolls=function(a){void 0!=a?c(a).find("[data-role=scrollbox]").scrollbar():c("[data-role=scrollbox]").scrollbar()};c.Metro.initSliders=function(a){void 0!=a?c(a).find("[data-role=slider]").slider():c("[data-role=slider]").slider()};c.Metro.initTabs=function(a){void 0!=a?c(a).find("[data-role=tab-control]").tabcontrol():c("[data-role=tab-control]").tabcontrol()};c.Metro.initTimes=function(a){void 0!=
a?c(a).find("[data-role=times]").times():c("[data-role=times]").times()};c.Metro.initTrees=function(a){void 0!=a?c(a).find("[data-role=treeview]").treeview():c("[data-role=treeview]").treeview()};c.Metro.initSteppers=function(a){void 0!=a?c(a).find("[data-role=stepper]").stepper():c("[data-role=stepper]").stepper()};c.Metro.initStreamers=function(a){void 0!=a?c(a).find("[data-role=streamer]").streamer():c("[data-role=streamer]").streamer()};c.Metro.initDragTiles=function(a){void 0!=a?c(a).find("[data-role=drag-drop]").dragtile():
c("[data-role=drag-drop]").dragtile()};c.Metro.initPulls=function(a){void 0!=a&&c(a).find("[data-role=pull-menu], .pull-menu").pullmenu();c("[data-role=pull-menu], .pull-menu").pullmenu()};c.Metro.initPanels=function(a){void 0!=a&&c(a).find("[data-role=panel]").panel();c("[data-role=panel]").panel()};c.Metro.initTileTransform=function(a){void 0!=a&&c(a).find("[data-click=transform]").tileTransform();c("[data-click=transform]").tileTransform()};c.Metro.initPopover=function(a){void 0!=a&&c(a).find("[data-popover=popover]").popover();
c("[data-popover=popover]").popover()};c.Metro.initAll=function(a){c.Metro.initAccordions(a);c.Metro.initButtonSets(a);c.Metro.initCalendars(a);c.Metro.initCarousels(a);c.Metro.initCountdowns(a);c.Metro.initDatepickers(a);c.Metro.initDropdowns(a);c.Metro.initFluentMenus(a);c.Metro.initHints(a);c.Metro.initInputs(a);c.Metro.transformInputs(a);c.Metro.initListViews(a);c.Metro.initLives(a);c.Metro.initProgreeBars(a);c.Metro.initRatings(a);c.Metro.initScrolls(a);c.Metro.initSliders(a);c.Metro.initTabs(a);
c.Metro.initTimes(a);c.Metro.initTrees(a);c.Metro.initSteppers(a);c.Metro.initStreamers(a);c.Metro.initDragTiles(a);c.Metro.initPulls(a);c.Metro.initPanels(a);c.Metro.initTileTransform(a);c.Metro.initPopover(a)}})(jQuery);$(function(){$.Metro.initAll()});$(function(){if(METRO_AUTO_REINIT){var c=$(".metro").html(),a;setInterval(function(){a=$(".metro").html();c!==a&&(c=a,$.Metro.initAll())},500)}});
/* Project: Bootstrap Growl = v3.0.2 | Description: Turns standard Bootstrap alerts into "Growl-like" notifications. | Author: Mouse0270 aka Robert McIntosh | License: MIT License | Website: https://github.com/mouse0270/bootstrap-growl */

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function e(e,i,n){var i={content:{message:"object"==typeof i?i.message:i,title:i.title?i.title:"",icon:i.icon?i.icon:"",url:i.url?i.url:"#",target:i.target?i.target:"-"}};n=t.extend(!0,{},i,n),this.settings=t.extend(!0,{},s,n),this._defaults=s,"-"==this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"},"number"==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),this.init()}var s={element:"body",position:null,type:"info",allow_dismiss:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};String.format=function(){for(var t=arguments[0],e=1;e<arguments.length;e++)t=t.replace(RegExp("\\{"+(e-1)+"\\}","gm"),arguments[e]);return t},t.extend(e.prototype,{init:function(){var t=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),"#"!=this.settings.content.url&&this.styleURL(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(e,s){var i={};"string"==typeof e?i[e]=s:i=e;for(var e in i)switch(e){case"type":this.$ele.removeClass("alert-"+t.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+t.settings.type),t.settings.type=i[e],this.$ele.addClass("alert-"+i[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+i[e]);break;case"icon":var n=this.$ele.find('[data-notify="icon"]');"class"==t.settings.icon_type.toLowerCase()?n.removeClass(t.settings.content.icon).addClass(i[e]):(n.is("img")||n.find("img"),n.attr("src",i[e]));break;case"progress":var a=t.settings.delay-t.settings.delay*(i[e]/100);this.$ele.data("notify-delay",a),this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i[e]).css("width",i[e]+"%");break;case"url":this.$ele.find('[data-notify="url"]').attr("href",i[e]);break;case"target":this.$ele.find('[data-notify="url"]').attr("target",i[e]);break;default:this.$ele.find('[data-notify="'+e+'"]').html(i[e])}var o=this.$ele.outerHeight()+parseInt(t.settings.spacing)+parseInt(t.settings.offset.y);t.reposition(o)},close:function(){t.close()}}},buildNotify:function(){var e=this.settings.content;this.$ele=t(String.format(this.settings.template,this.settings.type,e.title,e.message,e.url,e.target)),this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none"),(this.settings.delay<=0&&!this.settings.showProgressbar||!this.settings.showProgressbar)&&this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){"class"==this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:"0px",position:"absolute",top:"0px",width:"100%",zIndex:this.settings.z_index+1}),this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"5px",zIndex:this.settings.z_index+2})},placement:function(){var e=this,s=this.settings.offset.y,i={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",zIndex:this.settings.z_index},n=!1,a=this.settings;switch(t('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){return s=Math.max(s,parseInt(t(this).css(a.placement.from))+parseInt(t(this).outerHeight())+parseInt(a.spacing))}),1==this.settings.newest_on_top&&(s=this.settings.offset.y),i[this.settings.placement.from]=s+"px",this.settings.placement.align){case"left":case"right":i[this.settings.placement.align]=this.settings.offset.x+"px";break;case"center":i.left=0,i.right=0}this.$ele.css(i).addClass(this.settings.animate.enter),t(this.settings.element).append(this.$ele),1==this.settings.newest_on_top&&(s=parseInt(s)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(s)),t.isFunction(e.settings.onShow)&&e.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(){n=!0}).one(this.animations.end,function(){t.isFunction(e.settings.onShown)&&e.settings.onShown.call(this)}),setTimeout(function(){n||t.isFunction(e.settings.onShown)&&e.settings.onShown.call(this)},600)},bind:function(){var e=this;if(this.$ele.find('[data-notify="dismiss"]').on("click",function(){e.close()}),this.$ele.mouseover(function(){t(this).data("data-hover","true")}).mouseout(function(){t(this).data("data-hover","false")}),this.$ele.data("data-hover","false"),this.settings.delay>0){e.$ele.data("notify-delay",e.settings.delay);var s=setInterval(function(){var t=parseInt(e.$ele.data("notify-delay"))-e.settings.timer;if("false"===e.$ele.data("data-hover")&&"pause"==e.settings.mouse_over||"pause"!=e.settings.mouse_over){var i=(e.settings.delay-t)/e.settings.delay*100;e.$ele.data("notify-delay",t),e.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i).css("width",i+"%")}t<=-e.settings.timer&&(clearInterval(s),e.close())},e.settings.timer)}},close:function(){var e=this,s=parseInt(this.$ele.css(this.settings.placement.from)),i=!1;this.$ele.data("closing","true").addClass(this.settings.animate.exit),e.reposition(s),t.isFunction(e.settings.onClose)&&e.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(){i=!0}).one(this.animations.end,function(){t(this).remove(),t.isFunction(e.settings.onClosed)&&e.settings.onClosed.call(this)}),setTimeout(function(){i||(e.$ele.remove(),e.settings.onClosed&&e.settings.onClosed(e.$ele))},600)},reposition:function(e){var s=this,i='[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])',n=this.$ele.nextAll(i);1==this.settings.newest_on_top&&(n=this.$ele.prevAll(i)),n.each(function(){t(this).css(s.settings.placement.from,e),e=parseInt(e)+parseInt(s.settings.spacing)+t(this).outerHeight()})}}),t.notify=function(t,s){var i=new e(this,t,s);return i.notify},t.notifyDefaults=function(e){return s=t.extend(!0,{},s,e)},t.notifyClose=function(e){"undefined"==typeof e||"all"==e?t("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):t('[data-notify-position="'+e+'"]').find('[data-notify="dismiss"]').trigger("click")}});
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//










