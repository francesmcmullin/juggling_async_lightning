!function e(t,n,i){function r(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof i?r=i:"undefined"!=typeof self&&(r=self);var o=r;o=o.bespoke||(o.bespoke={}),o=o.themes||(o.themes={}),o.simpleSlide=e()}}(function(){return function t(n,i,r){function o(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=i[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return o(t?t:e)},u,u.exports,t,n,i,r)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t){var n=e("bespoke-classes"),i=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}body{font-family:Arial,Helvetica,sans-serif}h1{font-size:3em;text-align:center}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}li{list-style:none}li,p{text-align:center}.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;overflow:hidden}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:640px;height:480px;position:absolute;top:50%;left:50%;margin-left:-320px;margin-top:-240px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bespoke-inactive,.bespoke-bullet-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw}.bespoke-progress-bar{position:absolute;height:100%;background:#ccc;transition:width .6s ease}.emphatic{background:#222}.emphatic-text{color:#fff}';return i(e,{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,r){var o=e.slides[e.slide()],a=r-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==o&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(r){e.slides.map(i),t(r.slide,"active"),n(r.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var i=document.createElement("style");i.setAttribute("type","text/css"),"textContent"in i?i.textContent=e:i.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];t&&t.prepend?r.insertBefore(i,r.childNodes[0]):r.appendChild(i)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){(function(i){!function(e){if("object"==typeof n&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof i?r=i:"undefined"!=typeof self&&(r=self);var o=r;o=o.bespoke||(o.bespoke={}),o=o.plugins||(o.plugins={}),o.vcr=e()}}(function(){return function t(n,i,r){function o(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=i[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return o(t?t:e)},u,u.exports,t,n,i,r)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t){var n=function(){var e=localStorage["bespoke-vcr"];return e?JSON.parse(e):[]},i=function(){var e=n();return e.length?e[e.length-1]:void 0},r=function(e){localStorage["bespoke-vcr"]=JSON.stringify(e)},o=function(){delete localStorage["bespoke-vcr"]},a=function(e){return function(t){e=e||{},e.reporter=e.reporter||"console";var o,s=n()||[],l=e.recording||i(),c="string"==typeof e.reporter?a.reporters[e.reporter]:e.reporter,u=!1,p=!1,f=function(){var e=document.createElement("div"),t="8px";return e.style.width=t,e.style.height=t,e.style.borderRadius=t,e.style.position="absolute",e.style.left="4px",e.style.bottom="4px",e.style.backgroundColor="transparent",document.body.appendChild(e),{red:function(){e.style.backgroundColor="red"},green:function(){e.style.backgroundColor="green"},clear:function(){e.style.backgroundColor="transparent"}}}(),d=function(){return u?m():(t.slide(0),u=!0,p=!1,f.red(),c("Recording to local storage..."),o=(new Date).getTime(),l=[],s.push(l),void 0)},g=function(){u&&m(),0!==l.length&&(p=!0,f.green(),c("Playing the following recording:",l),t.slide(0),l.forEach(function(e){setTimeout(function(){e.command?t[e.command].apply(null,e.arguments||[]):(c("Playback complete"),p=!1,f.clear())},e.timeout)}))},m=function(){u&&(l.push({timeout:(new Date).getTime()-o}),r(s),c("Successfully recorded the following to local storage:",l)),u=!1,p=!1,f.clear()};["next","prev","slide"].forEach(function(e){t.on(e,function(t){var n={command:e,timeout:(new Date).getTime()-o};"slide"===e&&(n.arguments=[t.index]),u&&(l.push(n),r(s))})});var h=e.remote||function(e){window.addEventListener("keydown",function(t){var n=80,i=82,r=83;switch(t.which){case i:e.record();break;case r:e.stop();break;case n:e.play()}})},b={record:d,play:g,stop:m};h(b)}};a.reporters={console:function(e,t){console.log("BESPOKE-VCR: "+e+"\n"+(t?JSON.stringify(t,null,2)+"\n":""))}},a.latest=function(){a.reporters.console("Latest recording:",i())},a.all=function(){a.reporters.console("All recordings:",n())},a.clear=o,t.exports=a},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var i={};for(var r in e)e.hasOwnProperty(r)&&(i[r]=t.util.clone(e[r]));return i;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var i=t.util.clone(t.languages[e]);for(var r in n)i[r]=n[r];return i},insertBefore:function(e,n,i,r){r=r||t.languages;var o=r[e];if(2==arguments.length){i=arguments[1];for(var a in i)i.hasOwnProperty(a)&&(o[a]=i[a]);return o}var s={};for(var l in o)if(o.hasOwnProperty(l)){if(l==n)for(var a in i)i.hasOwnProperty(a)&&(s[a]=i[a]);s[l]=o[l]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,i){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],i||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var i,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),o=0;i=r[o++];)t.highlightElement(i,e===!0,n)},highlightElement:function(i,r,o){for(var a,s,l=i;l&&!e.test(l.className);)l=l.parentNode;if(l&&(a=(l.className.match(e)||[,""])[1],s=t.languages[a]),i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,l=i.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+a),s){var c=i.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:i,language:a,grammar:s,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var p=new Worker(t.filename);p.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),a),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),t.hooks.run("after-highlight",u)},p.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(i),t.hooks.run("after-highlight",u)}}},highlight:function(e,i,r){var o=t.tokenize(e,i);return n.stringify(t.util.encode(o),r)},tokenize:function(e,n){var i=t.Token,r=[e],o=n.rest;if(o){for(var a in o)n[a]=o[a];delete n.rest}e:for(var a in n)if(n.hasOwnProperty(a)&&n[a]){var s=n[a];s="Array"===t.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],u=c.inside,p=!!c.lookbehind,f=0,d=c.alias;c=c.pattern||c;for(var g=0;g<r.length;g++){var m=r[g];if(r.length>e.length)break e;if(!(m instanceof i)){c.lastIndex=0;var h=c.exec(m);if(h){p&&(f=h[1].length);var b=h.index-1+f,h=h[0].slice(f),v=h.length,y=b+v,k=m.slice(0,b+1),w=m.slice(y+1),x=[g,1];k&&x.push(k);var E=new i(a,u?t.tokenize(h,u):h,d);x.push(E),w&&x.push(w),Array.prototype.splice.apply(r,x)}}}}}return r},hooks:{all:{},add:function(e,n){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(n)},run:function(e,n){var i=t.hooks.all[e];if(i&&i.length)for(var r,o=0;r=i[o++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,i,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,i,e)}).join("");var o={type:e.type,content:n.stringify(e.content,i,r),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:r};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var a="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,a)}t.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=l+'="'+(o.attributes[l]||"")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'" '+s+">"+o.content+"</"+o.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[i])))),self.close()},!1),self.Prism):self.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\[\s\S]|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}}),function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var i,r=t.getAttribute("data-src"),o=t,a=/\blang(?:uage)?-(?!\*)(\w+)\b/i;o&&!a.test(o.className);)o=o.parentNode;if(o&&(i=(t.className.match(a)||[,""])[1]),!i){var s=(r.match(/\.(\w+)$/)||[,""])[1];i=e[s]||s}var l=document.createElement("code");l.className="language-"+i,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l)):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)})},self.Prism.fileHighlight())}()},{}],4:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],5:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),r="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[r]=100*e.index/(t.slides.length-1)+"%"})}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n,i,r="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+r],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+r]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],7:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),i=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],o={},a=function(e,t){i[e]&&(u("deactivate",p(r,t)),r=i[e],u("activate",p(r,t)))},s=function(e,t){return arguments.length?(u("slide",p(i[e],t))&&a(e,t),void 0):i.indexOf(r)},l=function(e,t){var n=i.indexOf(r)+e;u(e>0?"next":"prev",p(r,t))&&a(n,t)},c=function(e,t){return(o[e]||(o[e]=[])).push(t),function(){o[e]=o[e].filter(function(e){return e!==t})}},u=function(e,t){return(o[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},p=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,fire:u,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),a(0),f};t.exports={from:n}},{}],8:[function(e){var t=e("bespoke"),n=e("bespoke-keys"),i=e("bespoke-touch"),r=e("bespoke-progress"),o=e("./../../bower_components/bespoke-vcr/dist/bespoke-vcr.js"),a=e("./../../bower_components/bespoke-theme-simple-slide/dist/bespoke-theme-simple-slide.js");t.from("article",[n(),i(),o({recording:[{command:"next",timeout:100},{command:"next",timeout:15e3},{command:"next",timeout:5e4},{command:"next",timeout:1e5},{command:"next",timeout:13e4},{command:"next",timeout:15e4},{command:"next",timeout:18e4},{command:"next",timeout:23e4},{command:"next",timeout:295e3}]}),a(),r()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/bespoke-theme-simple-slide/dist/bespoke-theme-simple-slide.js":1,"./../../bower_components/bespoke-vcr/dist/bespoke-vcr.js":2,"./../../bower_components/prism/prism.js":3,bespoke:7,"bespoke-keys":4,"bespoke-progress":5,"bespoke-touch":6}]},{},[8]);