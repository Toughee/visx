_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[116],{"1ZAE":function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),a=n.n(r),o=n("6wy5"),i=n("Vqip"),c=n("f6XN"),u=a.a.createElement;t.default=function(){return u(o.a,{component:i.b,title:"Stacked Areas",codeSandboxDirectoryName:"visx-stacked-areas",margin:{top:0,left:0,right:0,bottom:10},packageJson:c},"import React from 'react';\nimport { AreaStack } from '@visx/shape';\nimport { SeriesPoint } from '@visx/shape/lib/types';\nimport { GradientOrangeRed } from '@visx/gradient';\nimport browserUsage, { BrowserUsage } from '@visx/mock-data/lib/mocks/browserUsage';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport { timeParse } from 'd3-time-format';\n\ntype BrowserNames = keyof BrowserUsage;\n\nconst data = browserUsage;\nconst keys = Object.keys(data[0]).filter(k => k !== 'date') as BrowserNames[];\nconst parseDate = timeParse('%Y %b %d');\nexport const background = '#f38181';\n\nconst getDate = (d: BrowserUsage) => (parseDate(d.date) as Date).valueOf();\nconst getY0 = (d: SeriesPoint<BrowserUsage>) => d[0] / 100;\nconst getY1 = (d: SeriesPoint<BrowserUsage>) => d[1] / 100;\n\nexport type StackedAreasProps = {\n  width: number;\n  height: number;\n  events?: boolean;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function Example({\n  width,\n  height,\n  margin = { top: 0, right: 0, bottom: 0, left: 0 },\n  events = false,\n}: StackedAreasProps) {\n  // bounds\n  const yMax = height - margin.top - margin.bottom;\n  const xMax = width - margin.left - margin.right;\n\n  // scales\n  const xScale = scaleTime<number>({\n    range: [0, xMax],\n    domain: [Math.min(...data.map(getDate)), Math.max(...data.map(getDate))],\n  });\n  const yScale = scaleLinear<number>({\n    range: [yMax, 0],\n  });\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <GradientOrangeRed id=\"stacked-area-orangered\" />\n      <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />\n      <AreaStack\n        top={margin.top}\n        left={margin.left}\n        keys={keys}\n        data={data}\n        x={d => xScale(getDate(d.data)) ?? 0}\n        y0={d => yScale(getY0(d)) ?? 0}\n        y1={d => yScale(getY1(d)) ?? 0}\n      >\n        {({ stacks, path }) =>\n          stacks.map(stack => (\n            <path\n              key={`stack-${stack.key}`}\n              d={path(stack) || ''}\n              stroke=\"transparent\"\n              fill=\"url(#stacked-area-orangered)\"\n              onClick={() => {\n                if (events) alert(`${stack.key}`);\n              }}\n            />\n          ))\n        }\n      </AreaStack>\n    </svg>\n  );\n}\n")}},"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("uKU/"),a=n("xx0A"),o=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function i(e){return o(Object(r.a)(),e)}},"7kLB":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-areas",function(){return n("1ZAE")}])},"Cf/J":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.children,n=e.id,r=e.from,a=e.to,o=e.x1,u=e.y1,s=e.x2,f=e.y2,l=e.fromOffset,d=void 0===l?"0%":l,m=e.fromOpacity,p=void 0===m?1:m,g=e.toOffset,h=void 0===g?"100%":g,y=e.toOpacity,v=void 0===y?1:y,b=e.rotate,x=e.transform,O=e.vertical,k=void 0===O||O,w=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),j=o,M=s,T=u,S=f;return!k||j||M||T||S||(j="0",M="0",T="0",S="1"),i.a.createElement("defs",null,i.a.createElement("linearGradient",c({id:n,x1:j,y1:T,x2:M,y2:S,gradientTransform:b?"rotate("+b+")":x},w),!!t&&t,!t&&i.a.createElement("stop",{offset:d,stopColor:r,stopOpacity:p}),!t&&i.a.createElement("stop",{offset:h,stopColor:a,stopOpacity:v})))}u.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},"E+ue":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),c=n("JmwF"),u=n("dGDr");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){var t=e.className,n=e.top,r=e.left,o=e.keys,f=e.data,l=e.curve,d=e.defined,m=e.x,p=e.x0,g=e.x1,h=e.y0,y=e.y1,v=e.value,b=e.order,x=e.offset,O=e.color,k=e.children,w=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","top","left","keys","data","curve","defined","x","x0","x1","y0","y1","value","order","offset","color","children"]),j=Object(u.f)({keys:o,value:v,order:b,offset:x}),M=Object(u.b)({x:m,x0:p,x1:g,y0:h,y1:y,curve:l,defined:d}),T=j(f);return k?a.a.createElement(a.a.Fragment,null,k({stacks:T,path:M,stack:j})):a.a.createElement(c.a,{top:n,left:r},T.map((function(e,n){return a.a.createElement("path",s({className:i()("visx-stack",t),key:"stack-"+n+"-"+(e.key||""),d:M(e)||"",fill:null==O?void 0:O(e.key,n)},w))})))}},HO86:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("lEbO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},JmwF:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),c=n("O94r"),u=n.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,o=e.transform,c=e.className,f=e.children,l=e.innerRef,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["top","left","transform","className","children","innerRef"]);return i.a.createElement("g",s({ref:l,className:u()("visx-group",c),transform:o||"translate("+a+", "+n+")"},d),f)}f.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},QrqA:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),c=n("E+ue");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){var t=e.className,n=e.top,r=e.left,o=e.keys,s=e.data,f=e.curve,l=e.defined,d=e.x,m=e.x0,p=e.x1,g=e.y0,h=e.y1,y=e.value,v=e.order,b=e.offset,x=e.color,O=e.children,k=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","top","left","keys","data","curve","defined","x","x0","x1","y0","y1","value","order","offset","color","children"]);return a.a.createElement(c.a,u({className:t,top:n,left:r,keys:o,data:s,curve:f,defined:l,x:d,x0:m,x1:p,y0:g,y1:h,value:y,order:v,offset:b,color:x},k),O||function(e){var n=e.stacks,r=e.path;return n.map((function(e,n){return a.a.createElement("path",u({className:i()("visx-area-stack",t),key:"area-stack-"+n+"-"+(e.key||""),d:r(e)||"",fill:null==x?void 0:x(e.key,n)},k))}))})}},Vqip:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return b}));var r=n("fGyu"),a=n("ERkP"),o=n.n(a),i=n("QrqA"),c=n("wPPg"),u=n("eEjM"),s=n.n(u),f=n("cjvV"),l=n("67po"),d=n("mHfT"),m=o.a.createElement,p=s.a,g=Object.keys(p[0]).filter((function(e){return"date"!==e})),h=Object(d.b)("%Y %b %d"),y="#f38181",v=function(e){return h(e.date).valueOf()};function b(e){var t=e.width,n=e.height,a=e.margin,o=void 0===a?{top:0,right:0,bottom:0,left:0}:a,u=e.events,s=void 0!==u&&u,d=n-o.top-o.bottom,h=t-o.left-o.right,b=Object(f.a)({range:[0,h],domain:[Math.min.apply(Math,Object(r.a)(p.map(v))),Math.max.apply(Math,Object(r.a)(p.map(v)))]}),x=Object(l.a)({range:[d,0]});return t<10?null:m("svg",{width:t,height:n},m(c.a,{id:"stacked-area-orangered"}),m("rect",{x:0,y:0,width:t,height:n,fill:y,rx:14}),m(i.a,{top:o.top,left:o.left,keys:g,data:p,x:function(e){var t;return null!==(t=b(v(e.data)))&&void 0!==t?t:0},y0:function(e){var t;return null!==(t=x(function(e){return e[0]/100}(e)))&&void 0!==t?t:0},y1:function(e){var t;return null!==(t=x(function(e){return e[1]/100}(e)))&&void 0!==t?t:0}},(function(e){var t=e.stacks,n=e.path;return t.map((function(e){return m("path",{key:"stack-".concat(e.key),d:n(e)||"",stroke:"transparent",fill:"url(#stacked-area-orangered)",onClick:function(){s&&alert("".concat(e.key))}})}))})))}try{b.displayName="Example",b.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}},margin:{defaultValue:{value:"{ top: 0, right: 0, bottom: 0, left: 0 }"},description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-stacked-areas/Example.tsx#Example"]={docgenInfo:b.__docgenInfo,name:"Example",path:"src/sandboxes/visx-stacked-areas/Example.tsx#Example"})}catch(x){}},Zbhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("PB0s"),a=n("XAd9"),o=n("Cyas"),i=n("VBI3");function c(e,t,n,c){var u,s=Object(r.c)(e,t,n);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var f=Math.max(Math.abs(e),Math.abs(t));return null!=c.precision||isNaN(u=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(o.a)(t)/3)))-Object(o.a)(Math.abs(e)))}(s,f))||(c.precision=u),Object(i.b)(c,f);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(u=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(o.a)(t)-Object(o.a)(e))+1}(s,Math.max(Math.abs(e),Math.abs(t))))||(c.precision=u-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(u=function(e){return Math.max(0,-Object(o.a)(Math.abs(e)))}(s))||(c.precision=u-2*("%"===c.type))}return Object(i.a)(c)}},f6XN:function(e){e.exports=JSON.parse('{"name":"@visx/demo-stacked-areas","description":"Standalone visx stacked area demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/gradient":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-time-format":"2.2.3","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","stackedarea"]}')},fGyu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("lEbO");var a=n("HO86");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},mHfT:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var r=n("LNnp"),a=n("h734"),o=n("8eBc"),i=n("NeEQ"),c=n("VJwe"),u=n("gpY3");function s(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function f(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function l(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}var d,m,p,g={"-":"",_:" ",0:"0"},h=/^\s*\d+/,y=/^%/,v=/[\\^$*+?|[\]().{}]/g;function b(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",o=a.length;return r+(o<n?new Array(n-o+1).join(t)+a:a)}function x(e){return e.replace(v,"\\$&")}function O(e){return new RegExp("^(?:"+e.map(x).join("|")+")","i")}function k(e){for(var t={},n=-1,r=e.length;++n<r;)t[e[n].toLowerCase()]=n;return t}function w(e,t,n){var r=h.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function j(e,t,n){var r=h.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function M(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function T(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function S(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function C(e,t,n){var r=h.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function E(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function U(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function D(e,t,n){var r=h.exec(t.slice(n,n+1));return r?(e.q=3*r[0]-3,n+r[0].length):-1}function A(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function N(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function P(e,t,n){var r=h.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function L(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function H(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Y(e,t,n){var r=h.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function _(e,t,n){var r=h.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function F(e,t,n){var r=h.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function R(e,t,n){var r=y.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function B(e,t,n){var r=h.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function V(e,t,n){var r=h.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Z(e,t){return b(e.getDate(),t,2)}function q(e,t){return b(e.getHours(),t,2)}function J(e,t){return b(e.getHours()%12||12,t,2)}function W(e,t){return b(1+i.b.count(Object(c.a)(e),e),t,3)}function I(e,t){return b(e.getMilliseconds(),t,3)}function X(e,t){return I(e,t)+"000"}function Q(e,t){return b(e.getMonth()+1,t,2)}function z(e,t){return b(e.getMinutes(),t,2)}function G(e,t){return b(e.getSeconds(),t,2)}function $(e){var t=e.getDay();return 0===t?7:t}function K(e,t){return b(o.g.count(Object(c.a)(e)-1,e),t,2)}function ee(e,t){var n=e.getDay();return e=n>=4||0===n?Object(o.i)(e):o.i.ceil(e),b(o.i.count(Object(c.a)(e),e)+(4===Object(c.a)(e).getDay()),t,2)}function te(e){return e.getDay()}function ne(e,t){return b(o.c.count(Object(c.a)(e)-1,e),t,2)}function re(e,t){return b(e.getFullYear()%100,t,2)}function ae(e,t){return b(e.getFullYear()%1e4,t,4)}function oe(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+b(t/60|0,"0",2)+b(t%60,"0",2)}function ie(e,t){return b(e.getUTCDate(),t,2)}function ce(e,t){return b(e.getUTCHours(),t,2)}function ue(e,t){return b(e.getUTCHours()%12||12,t,2)}function se(e,t){return b(1+a.a.count(Object(u.a)(e),e),t,3)}function fe(e,t){return b(e.getUTCMilliseconds(),t,3)}function le(e,t){return fe(e,t)+"000"}function de(e,t){return b(e.getUTCMonth()+1,t,2)}function me(e,t){return b(e.getUTCMinutes(),t,2)}function pe(e,t){return b(e.getUTCSeconds(),t,2)}function ge(e){var t=e.getUTCDay();return 0===t?7:t}function he(e,t){return b(r.g.count(Object(u.a)(e)-1,e),t,2)}function ye(e,t){var n=e.getUTCDay();return e=n>=4||0===n?Object(r.i)(e):r.i.ceil(e),b(r.i.count(Object(u.a)(e),e)+(4===Object(u.a)(e).getUTCDay()),t,2)}function ve(e){return e.getUTCDay()}function be(e,t){return b(r.c.count(Object(u.a)(e)-1,e),t,2)}function xe(e,t){return b(e.getUTCFullYear()%100,t,2)}function Oe(e,t){return b(e.getUTCFullYear()%1e4,t,4)}function ke(){return"+0000"}function we(){return"%"}function je(e){return+e}function Me(e){return Math.floor(+e/1e3)}d=function(e){var t=e.dateTime,n=e.date,c=e.time,u=e.periods,d=e.days,m=e.shortDays,p=e.months,h=e.shortMonths,y=O(u),v=k(u),b=O(d),x=k(d),Te=O(m),Se=k(m),Ce=O(p),Ee=k(p),Ue=O(h),De=k(h),Ae={a:function(e){return m[e.getDay()]},A:function(e){return d[e.getDay()]},b:function(e){return h[e.getMonth()]},B:function(e){return p[e.getMonth()]},c:null,d:Z,e:Z,f:X,H:q,I:J,j:W,L:I,m:Q,M:z,p:function(e){return u[+(e.getHours()>=12)]},q:function(e){return 1+~~(e.getMonth()/3)},Q:je,s:Me,S:G,u:$,U:K,V:ee,w:te,W:ne,x:null,X:null,y:re,Y:ae,Z:oe,"%":we},Ne={a:function(e){return m[e.getUTCDay()]},A:function(e){return d[e.getUTCDay()]},b:function(e){return h[e.getUTCMonth()]},B:function(e){return p[e.getUTCMonth()]},c:null,d:ie,e:ie,f:le,H:ce,I:ue,j:se,L:fe,m:de,M:me,p:function(e){return u[+(e.getUTCHours()>=12)]},q:function(e){return 1+~~(e.getUTCMonth()/3)},Q:je,s:Me,S:pe,u:ge,U:he,V:ye,w:ve,W:be,x:null,X:null,y:xe,Y:Oe,Z:ke,"%":we},Pe={a:function(e,t,n){var r=Te.exec(t.slice(n));return r?(e.w=Se[r[0].toLowerCase()],n+r[0].length):-1},A:function(e,t,n){var r=b.exec(t.slice(n));return r?(e.w=x[r[0].toLowerCase()],n+r[0].length):-1},b:function(e,t,n){var r=Ue.exec(t.slice(n));return r?(e.m=De[r[0].toLowerCase()],n+r[0].length):-1},B:function(e,t,n){var r=Ce.exec(t.slice(n));return r?(e.m=Ee[r[0].toLowerCase()],n+r[0].length):-1},c:function(e,n,r){return Ye(e,t,n,r)},d:N,e:N,f:F,H:L,I:L,j:P,L:_,m:A,M:H,p:function(e,t,n){var r=y.exec(t.slice(n));return r?(e.p=v[r[0].toLowerCase()],n+r[0].length):-1},q:D,Q:B,s:V,S:Y,u:j,U:M,V:T,w:w,W:S,x:function(e,t,r){return Ye(e,n,t,r)},X:function(e,t,n){return Ye(e,c,t,n)},y:E,Y:C,Z:U,"%":R};function Le(e,t){return function(n){var r,a,o,i=[],c=-1,u=0,s=e.length;for(n instanceof Date||(n=new Date(+n));++c<s;)37===e.charCodeAt(c)&&(i.push(e.slice(u,c)),null!=(a=g[r=e.charAt(++c)])?r=e.charAt(++c):a="e"===r?" ":"0",(o=t[r])&&(r=o(n,a)),i.push(r),u=c+1);return i.push(e.slice(u,c)),i.join("")}}function He(e,t){return function(n){var c,u,d=l(1900,void 0,1);if(Ye(d,e,n+="",0)!=n.length)return null;if("Q"in d)return new Date(d.Q);if("s"in d)return new Date(1e3*d.s+("L"in d?d.L:0));if(t&&!("Z"in d)&&(d.Z=0),"p"in d&&(d.H=d.H%12+12*d.p),void 0===d.m&&(d.m="q"in d?d.q:0),"V"in d){if(d.V<1||d.V>53)return null;"w"in d||(d.w=1),"Z"in d?(u=(c=f(l(d.y,0,1))).getUTCDay(),c=u>4||0===u?r.c.ceil(c):Object(r.c)(c),c=a.a.offset(c,7*(d.V-1)),d.y=c.getUTCFullYear(),d.m=c.getUTCMonth(),d.d=c.getUTCDate()+(d.w+6)%7):(u=(c=s(l(d.y,0,1))).getDay(),c=u>4||0===u?o.c.ceil(c):Object(o.c)(c),c=i.b.offset(c,7*(d.V-1)),d.y=c.getFullYear(),d.m=c.getMonth(),d.d=c.getDate()+(d.w+6)%7)}else("W"in d||"U"in d)&&("w"in d||(d.w="u"in d?d.u%7:"W"in d?1:0),u="Z"in d?f(l(d.y,0,1)).getUTCDay():s(l(d.y,0,1)).getDay(),d.m=0,d.d="W"in d?(d.w+6)%7+7*d.W-(u+5)%7:d.w+7*d.U-(u+6)%7);return"Z"in d?(d.H+=d.Z/100|0,d.M+=d.Z%100,f(d)):s(d)}}function Ye(e,t,n,r){for(var a,o,i=0,c=t.length,u=n.length;i<c;){if(r>=u)return-1;if(37===(a=t.charCodeAt(i++))){if(a=t.charAt(i++),!(o=Pe[a in g?t.charAt(i++):a])||(r=o(e,n,r))<0)return-1}else if(a!=n.charCodeAt(r++))return-1}return r}return Ae.x=Le(n,Ae),Ae.X=Le(c,Ae),Ae.c=Le(t,Ae),Ne.x=Le(n,Ne),Ne.X=Le(c,Ne),Ne.c=Le(t,Ne),{format:function(e){var t=Le(e+="",Ae);return t.toString=function(){return e},t},parse:function(e){var t=He(e+="",!1);return t.toString=function(){return e},t},utcFormat:function(e){var t=Le(e+="",Ne);return t.toString=function(){return e},t},utcParse:function(e){var t=He(e+="",!0);return t.toString=function(){return e},t}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),m=d.format,p=d.parse,d.utcFormat,d.utcParse},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n("PB0s"),a=n("2+fR"),o=n("W1cA"),i=n("Zbhd");function c(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(r.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t();return Object(i.a)(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var a,o,i=t(),c=0,u=i.length-1,s=i[c],f=i[u],l=10;for(f<s&&(o=s,s=f,f=o,o=c,c=u,u=o);l-- >0;){if((o=Object(r.b)(s,f,n))===a)return i[c]=s,i[u]=f,t(i);if(o>0)s=Math.floor(s/o)*o,f=Math.ceil(f/o)*o;else{if(!(o<0))break;s=Math.ceil(s*o)/o,f=Math.floor(f*o)/o}a=o}return e},e}function u(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,u())},o.b.apply(e,arguments),c(e)}},wPPg:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),o=n("Cf/J");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.from,n=void 0===t?"#FCE38A":t,r=e.to,c=void 0===r?"#F38181":r,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["from","to"]);return a.a.createElement(o.a,i({from:n,to:c},u))}}},[["7kLB",0,2,1,3,4,5,6,7,11,24]]]);