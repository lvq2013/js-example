(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-rmb" viewBox="0 0 1024 1024">'+""+'<path d="M237.28 153.76 312.32 153.76l194.688 348.8 194.688-348.8 75.04 0-213.952 371.136 163.264 0 0 41.568-186.592 0 0 106.464 186.592 0 0 41.6-186.592 0 0 163.264L474.56 877.792l0-163.264L288 714.528l0-41.6 186.592 0 0-106.464L288 566.464l0-41.568 163.264 0L237.28 153.76z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-zhifuchenggong" viewBox="0 0 1024 1024">'+""+'<path d="M512 0C229.25 0 0 229.25 0 512c0 282.75 229.25 512 512 512 282.75 0 512-229.25 512-512C1024 229.25 794.75 0 512 0L512 0zM832.75 405.125 474.75 763.125c-12 12-27.75 18-43.5 18-15.75 0-31.5-6-43.5-18L191.25 566.625c-24-24-24-62.875 0-86.875 24-24 62.875-24 86.875 0L431.25 632.75l314.5-314.5c24-24 62.875-24 86.875 0C856.625 342.25 856.625 381.125 832.75 405.125L832.75 405.125zM832.75 405.125"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-x" viewBox="0 0 1024 1024">'+""+'<path d="M947.682335 121.44905c12.361539-12.362562 12.361539-32.567743 0-44.958958l-1.39579-1.362021c-12.357446-12.392238-32.562627-12.392238-44.925189-0.034792L534.278911 442.145026c-12.357446 12.357446-32.568766 12.357446-44.926212 0L122.175085 75.093279c-12.357446-12.357446-32.562627-12.357446-44.925189 0l-1.396813 1.430582c-12.356422 12.357446-12.356422 32.562627 0 44.924165l367.144868 367.017978c12.362562 12.357446 12.362562 32.564673 0 44.927235L75.853084 900.472616c-12.356422 12.357446-12.356422 32.56365 0 44.925189l1.396813 1.429559c12.362562 12.357446 32.567743 12.357446 44.925189 0l367.177614-367.086539c12.357446-12.356422 32.568766-12.356422 44.926212 0l367.081423 367.086539c12.362562 12.357446 32.567743 12.357446 44.925189-0.033769l1.39579-1.364067c12.361539-12.393261 12.328793-32.599466 0-44.957935L580.634682 533.394263c-12.362562-12.363585-12.362562-32.570813 0-44.927235L947.682335 121.44905 947.682335 121.44905zM947.682335 121.44905"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)