_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[118],{"/B0Q":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t("W1cA");const a=Symbol("implicit");function i(){var e=new Map,n=[],t=[],c=a;function s(r){var i=r+"",s=e.get(i);if(!s){if(c!==a)return c;e.set(i,s=n.push(r))}return t[(s-1)%t.length]}return s.domain=function(t){if(!arguments.length)return n.slice();n=[],e=new Map;for(const r of t){const t=r+"";e.has(t)||e.set(t,n.push(r))}return s},s.range=function(e){return arguments.length?(t=Array.from(e),s):t.slice()},s.unknown=function(e){return arguments.length?(c=e,s):c},s.copy=function(){return i(n,t).unknown(c)},r.b.apply(s,arguments),s}},"0yDh":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i),s=t("O94r"),u=t.n(s),o=t("VFFr");function l(e){var n=e.id,t=e.width,r=e.height,a=e.path,i=e.fill,s=void 0===i?"transparent":i,l=e.stroke,d=e.strokeWidth,f=e.strokeDasharray,h=e.strokeLinecap,p=void 0===h?"square":h,m=e.shapeRendering,g=void 0===m?"auto":m,b=e.background,v=e.className;return c.a.createElement(o.a,{id:n,width:t,height:r},!!b&&c.a.createElement("rect",{width:t,height:r,fill:b}),c.a.createElement("path",{className:u()("visx-pattern-path",v),d:a,fill:s,stroke:l,strokeWidth:d,strokeDasharray:f,strokeLinecap:p,shapeRendering:g}))}function d(e){var n=e.id,t=e.width,r=e.height,a=e.fill,i=e.stroke,s=e.strokeWidth,o=e.strokeDasharray,d=e.strokeLinecap,f=e.shapeRendering,h=e.background,p=e.className;return c.a.createElement(l,{className:u()("visx-pattern-wave",p),path:"M 0 "+r/2+" c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+-r/2+" "+r/2+"\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+r+" "+r/2+"\n             c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0",id:n,width:t,height:r,fill:a,stroke:i,strokeWidth:s,strokeDasharray:o,strokeLinecap:d,shapeRendering:f,background:h})}l.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,path:a.a.string,fill:a.a.string,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number])},d.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,fill:a.a.string,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number])}},"1Wmu":function(e,n,t){"use strict";function r(e,n){e(n)}t.d(n,"a",(function(){return r}))},"201w":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("J4UP");function a(e){return Object(r.a)(e)}},"67po":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("uKU/"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(e){return i(Object(r.a)(),e)}},"D+es":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("/B0Q"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","unknown");function c(e){return i(Object(r.a)(),e)}},"E+ue":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ERkP"),a=t.n(r),i=t("O94r"),c=t.n(i),s=t("JmwF"),u=t("dGDr");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e){var n=e.className,t=e.top,r=e.left,i=e.keys,l=e.data,d=e.curve,f=e.defined,h=e.x,p=e.x0,m=e.x1,g=e.y0,b=e.y1,v=e.value,y=e.order,k=e.offset,O=e.color,x=e.children,w=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["className","top","left","keys","data","curve","defined","x","x0","x1","y0","y1","value","order","offset","color","children"]),j=Object(u.f)({keys:i,value:v,order:y,offset:k}),E=Object(u.b)({x:h,x0:p,x1:m,y0:g,y1:b,curve:d,defined:f}),R=j(l);return x?a.a.createElement(a.a.Fragment,null,x({stacks:R,path:E,stack:j})):a.a.createElement(s.a,{top:t,left:r},R.map((function(e,t){return a.a.createElement("path",o({className:c()("visx-stack",n),key:"stack-"+t+"-"+(e.key||""),d:E(e)||"",fill:null==O?void 0:O(e.key,t)},w))})))}},J4UP:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));const r=1/4294967296;function a(e=Math.random()){let n=0|(0<=e&&e<1?e/r:Math.abs(e));return()=>(n=1664525*n+1013904223|0,r*(n>>>0))}},"RD/X":function(e,n,t){"use strict";t.r(n);var r=t("ERkP"),a=t.n(r),i=t("6wy5"),c=t("W0xs"),s=t("dkc1"),u=a.a.createElement;n.default=function(){return u(i.a,{component:c.b,title:"Streamgraph",codeSandboxDirectoryName:"visx-streamgraph",packageJson:s},"/* eslint-disable react-hooks/rules-of-hooks */\n/**\n * Inspired by Mike Bostock's Streamgraph & Lee Byron\u2019s test data generator:\n * https://bl.ocks.org/mbostock/4060954\n */\nimport React from 'react';\nimport { Stack } from '@visx/shape';\nimport { PatternCircles, PatternWaves } from '@visx/pattern';\nimport { scaleLinear, scaleOrdinal } from '@visx/scale';\nimport { transpose } from 'd3-array';\nimport { animated, useSpring } from 'react-spring';\n\nimport useForceUpdate from './useForceUpdate';\nimport generateData from './generateData';\n\n// constants\nconst NUM_LAYERS = 20;\nconst SAMPLES_PER_LAYER = 200;\nconst BUMPS_PER_LAYER = 10;\nexport const BACKGROUND = '#ffdede';\n\n// utils\nconst range = (n: number) => Array.from(new Array(n), (_, i) => i);\n\nconst keys = range(NUM_LAYERS);\n\n// scales\nconst xScale = scaleLinear<number>({\n  domain: [0, SAMPLES_PER_LAYER - 1],\n});\nconst yScale = scaleLinear<number>({\n  domain: [-30, 50],\n});\nconst colorScale = scaleOrdinal<number, string>({\n  domain: keys,\n  range: ['#ffc409', '#f14702', '#262d97', 'white', '#036ecd', '#9ecadd', '#51666e'],\n});\nconst patternScale = scaleOrdinal<number, string>({\n  domain: keys,\n  range: ['mustard', 'cherry', 'navy', 'circles', 'circles', 'circles', 'circles'],\n});\n\n// accessors\ntype Datum = number[];\nconst getY0 = (d: Datum) => yScale(d[0]) ?? 0;\nconst getY1 = (d: Datum) => yScale(d[1]) ?? 0;\n\nexport type StreamGraphProps = {\n  width: number;\n  height: number;\n  animate?: boolean;\n};\n\nexport default function Streamgraph({ width, height, animate = true }: StreamGraphProps) {\n  const forceUpdate = useForceUpdate();\n  const handlePress = () => forceUpdate();\n\n  if (width < 10) return null;\n\n  xScale.range([0, width]);\n  yScale.range([height, 0]);\n\n  // generate layers in render to update on touch\n  const layers = transpose<number>(\n    keys.map(() => generateData(SAMPLES_PER_LAYER, BUMPS_PER_LAYER)),\n  );\n\n  return (\n    <svg width={width} height={height}>\n      <PatternCircles id=\"mustard\" height={40} width={40} radius={5} fill=\"#036ecf\" complement />\n      <PatternWaves\n        id=\"cherry\"\n        height={12}\n        width={12}\n        fill=\"transparent\"\n        stroke=\"#232493\"\n        strokeWidth={1}\n      />\n      <PatternCircles id=\"navy\" height={60} width={60} radius={10} fill=\"white\" complement />\n      <PatternCircles\n        complement\n        id=\"circles\"\n        height={60}\n        width={60}\n        radius={10}\n        fill=\"transparent\"\n      />\n\n      <g onClick={handlePress} onTouchStart={handlePress}>\n        <rect x={0} y={0} width={width} height={height} fill={BACKGROUND} rx={14} />\n        <Stack<number[], number>\n          data={layers}\n          keys={keys}\n          offset=\"wiggle\"\n          color={colorScale}\n          x={(_, i) => xScale(i) ?? 0}\n          y0={getY0}\n          y1={getY1}\n        >\n          {({ stacks, path }) =>\n            stacks.map(stack => {\n              // Alternatively use renderprops <Spring to={{ d }}>{tweened => ...}</Spring>\n              const tweened = animate ? useSpring({ d: path(stack) }) : { d: path(stack) };\n              const color = colorScale(stack.key);\n              const pattern = patternScale(stack.key);\n              return (\n                <g key={`series-${stack.key}`}>\n                  <animated.path d={tweened.d || ''} fill={color} />\n                  <animated.path d={tweened.d || ''} fill={`url(#${pattern})`} />\n                </g>\n              );\n            })\n          }\n        </Stack>\n      </g>\n    </svg>\n  );\n}\n")}},VFFr:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i);function s(e){var n=e.id,t=e.width,r=e.height,a=e.children;return c.a.createElement("defs",null,c.a.createElement("pattern",{id:n,width:t,height:r,patternUnits:"userSpaceOnUse"},a))}s.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,children:a.a.node.isRequired}},Vi0D:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return l}));var r=t("+Y26"),a=t("M3gT"),i=t("Ddjo"),c=t("Xyxy"),s=t("Q4nK"),u={expand:r.a,diverging:a.a,none:i.a,silhouette:c.a,wiggle:s.a},o=Object.keys(u);function l(e){return e&&u[e]||u.none}},W0xs:function(e,n,t){"use strict";t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return R}));var r=t("ERkP"),a=t.n(r),i=t("E+ue"),c=t("dKJj"),s=t("0yDh"),u=t("67po"),o=t("D+es"),l=t("ue4z"),d=t("1GyV");var f,h=t("201w"),p=Object(h.a)(.65),m=function(e,n){for(var t=1/(.1+p()),r=2*p()-.5,a=10/(.1+p()),i=0;i<n;i+=1){var c=(i/n-r)*a;e[i]+=t*Math.exp(-c*c)}},g=function(e,n){var t,r=[];for(t=0;t<e;t+=1)r[t]=0;for(t=0;t<n;t+=1)m(r,e);return r},b=a.a.createElement,v="#ffdede",y=(f=20,Array.from(new Array(f),(function(e,n){return n}))),k=Object(u.a)({domain:[0,199]}),O=Object(u.a)({domain:[-30,50]}),x=Object(o.a)({domain:y,range:["#ffc409","#f14702","#262d97","white","#036ecd","#9ecadd","#51666e"]}),w=Object(o.a)({domain:y,range:["mustard","cherry","navy","circles","circles","circles","circles"]}),j=function(e){var n;return null!==(n=O(e[0]))&&void 0!==n?n:0},E=function(e){var n;return null!==(n=O(e[1]))&&void 0!==n?n:0};function R(e){var n=e.width,t=e.height,a=e.animate,u=void 0===a||a,o=function(){var e=Object(r.useState)(0)[1];return function(){return e((function(e){return e+1}))}}(),f=function(){return o()};if(n<10)return null;k.range([0,n]),O.range([t,0]);var h=Object(l.f)(y.map((function(){return g(200,10)})));return b("svg",{width:n,height:t},b(c.a,{id:"mustard",height:40,width:40,radius:5,fill:"#036ecf",complement:!0}),b(s.a,{id:"cherry",height:12,width:12,fill:"transparent",stroke:"#232493",strokeWidth:1}),b(c.a,{id:"navy",height:60,width:60,radius:10,fill:"white",complement:!0}),b(c.a,{complement:!0,id:"circles",height:60,width:60,radius:10,fill:"transparent"}),b("g",{onClick:f,onTouchStart:f},b("rect",{x:0,y:0,width:n,height:t,fill:v,rx:14}),b(i.a,{data:h,keys:y,offset:"wiggle",color:x,x:function(e,n){var t;return null!==(t=k(n))&&void 0!==t?t:0},y0:j,y1:E},(function(e){var n=e.stacks,t=e.path;return n.map((function(e){var n=u?Object(d.useSpring)({d:t(e)}):{d:t(e)},r=x(e.key),a=w(e.key);return b("g",{key:"series-".concat(e.key)},b(d.animated.path,{d:n.d||"",fill:r}),b(d.animated.path,{d:n.d||"",fill:"url(#".concat(a,")")}))}))}))))}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-streamgraph/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-streamgraph/Example.tsx#Example"})}catch(S){}},Zbhd:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("PB0s"),a=t("XAd9"),i=t("Cyas"),c=t("VBI3");function s(e,n,t,s){var u,o=Object(r.c)(e,n,t);switch((s=Object(a.a)(null==s?",f":s)).type){case"s":var l=Math.max(Math.abs(e),Math.abs(n));return null!=s.precision||isNaN(u=function(e,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(e)))}(o,l))||(s.precision=u),Object(c.b)(s,l);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(u=function(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Object(i.a)(n)-Object(i.a)(e))+1}(o,Math.max(Math.abs(e),Math.abs(n))))||(s.precision=u-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(u=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(o))||(s.precision=u-2*("%"===s.type))}return Object(c.a)(s)}},dGDr:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return m})),t.d(n,"e",(function(){return g})),t.d(n,"f",(function(){return b}));var r=t("mBAT"),a=t("KdQ8"),i=t("+pY8"),c=t("lg8u"),s=t("FVKn"),u=t("uvDt"),o=t("1Wmu"),l=t("oWfS"),d=t("Vi0D");function f(e){var n=void 0===e?{}:e,t=n.innerRadius,a=n.outerRadius,i=n.cornerRadius,c=n.startAngle,s=n.endAngle,u=n.padAngle,l=n.padRadius,d=Object(r.a)();return null!=t&&Object(o.a)(d.innerRadius,t),null!=a&&Object(o.a)(d.outerRadius,a),null!=i&&Object(o.a)(d.cornerRadius,i),null!=c&&Object(o.a)(d.startAngle,c),null!=s&&Object(o.a)(d.endAngle,s),null!=u&&Object(o.a)(d.padAngle,u),null!=l&&Object(o.a)(d.padRadius,l),d}function h(e){var n=void 0===e?{}:e,t=n.x,r=n.x0,i=n.x1,c=n.y,s=n.y0,u=n.y1,l=n.defined,d=n.curve,f=Object(a.a)();return t&&Object(o.a)(f.x,t),r&&Object(o.a)(f.x0,r),i&&Object(o.a)(f.x1,i),c&&Object(o.a)(f.y,c),s&&Object(o.a)(f.y0,s),u&&Object(o.a)(f.y1,u),l&&f.defined(l),d&&f.curve(d),f}function p(e){var n=void 0===e?{}:e,t=n.x,r=n.y,a=n.defined,c=n.curve,s=Object(i.a)();return t&&Object(o.a)(s.x,t),r&&Object(o.a)(s.y,r),a&&s.defined(a),c&&s.curve(c),s}function m(e){var n=void 0===e?{}:e,t=n.startAngle,r=n.endAngle,a=n.padAngle,i=n.value,s=n.sort,u=n.sortValues,l=Object(c.a)();return(null===s||null!=s)&&l.sort(s),(null===u||null!=u)&&l.sortValues(u),null!=i&&l.value(i),null!=a&&Object(o.a)(l.padAngle,a),null!=t&&Object(o.a)(l.startAngle,t),null!=r&&Object(o.a)(l.endAngle,r),l}function g(e){var n=void 0===e?{}:e,t=n.angle,r=n.radius,a=n.defined,i=n.curve,c=Object(s.a)();return t&&Object(o.a)(c.angle,t),r&&Object(o.a)(c.radius,r),a&&c.defined(a),i&&c.curve(i),c}function b(e){var n=e.keys,t=e.value,r=e.order,a=e.offset,i=Object(u.a)();return n&&i.keys(n),t&&Object(o.a)(i.value,t),r&&i.order(Object(l.c)(r)),a&&i.offset(Object(d.c)(a)),i}},dKJj:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i),s=t("O94r"),u=t.n(s),o=t("VFFr");function l(e){var n,t=e.id,r=e.width,a=e.height,i=e.radius,s=void 0===i?2:i,l=e.fill,d=e.stroke,f=e.strokeWidth,h=e.strokeDasharray,p=e.background,m=e.complement,g=void 0!==m&&m,b=e.className;return g&&(n=[[0,0],[0,a],[r,0],[r,a]]),c.a.createElement(o.a,{id:t,width:r,height:a},!!p&&c.a.createElement("rect",{width:r,height:a,fill:p}),c.a.createElement("circle",{className:u()("visx-pattern-circle",b),cx:r/2,cy:a/2,r:s,fill:l,stroke:d,strokeWidth:f,strokeDasharray:h}),n&&n.map((function(e){var n=e[0],r=e[1];return c.a.createElement("circle",{key:t+"-complement-"+n+"-"+r,className:u()("visx-pattern-circle visx-pattern-circle-complement",b),cx:n,cy:r,r:s,fill:l,stroke:d,strokeWidth:f,strokeDasharray:h})})))}l.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,radius:a.a.number,fill:a.a.string,className:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.number,a.a.string]),complement:a.a.bool,background:a.a.string}},dkc1:function(e){e.exports=JSON.parse('{"name":"@visx/demo-streamgraph","description":"Standalone visx streamgraph demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/d3-array":"^2.0.0","@types/react":"^16","@types/react-dom":"^16","@visx/mock-data":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","react-spring":"^8.0.27","typescript":"^3"},"keywords":["visualization","d3","react","visx","streamgraph","react-spring"]}')},oWfS:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return l}));var r=t("Zx3a"),a=t("c6zU"),i=t("yU24"),c=t("V+6I"),s=t("NKRu"),u={ascending:r.a,descending:a.a,insideout:i.a,none:c.a,reverse:s.a},o=Object.keys(u);function l(e){return e&&u[e]||u.none}},rt8E:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamgraph",function(){return t("RD/X")}])},"uKU/":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t("PB0s"),a=t("2+fR"),i=t("W1cA"),c=t("Zbhd");function s(e){var n=e.domain;return e.ticks=function(e){var t=n();return Object(r.a)(t[0],t[t.length-1],null==e?10:e)},e.tickFormat=function(e,t){var r=n();return Object(c.a)(r[0],r[r.length-1],null==e?10:e,t)},e.nice=function(t){null==t&&(t=10);var a,i,c=n(),s=0,u=c.length-1,o=c[s],l=c[u],d=10;for(l<o&&(i=o,o=l,l=i,i=s,s=u,u=i);d-- >0;){if((i=Object(r.b)(o,l,t))===a)return c[s]=o,c[u]=l,n(c);if(i>0)o=Math.floor(o/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;o=Math.ceil(o*i)/i,l=Math.floor(l*i)/i}a=i}return e},e}function u(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,u())},i.b.apply(e,arguments),s(e)}},ue4z:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return l})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return d}));var r=function(e,n){return e<n?-1:e>n?1:e>=n?0:NaN},a=function(e){var n;return 1===e.length&&(n=e,e=function(e,t){return r(n(e),t)}),{left:function(n,t,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){var i=r+a>>>1;e(n[i],t)<0?r=i+1:a=i}return r},right:function(n,t,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){var i=r+a>>>1;e(n[i],t)>0?a=i:r=i+1}return r}}};var i=a(r);i.right,i.left;var c=function(e,n){var t,r,a,i=e.length,c=-1;if(null==n){for(;++c<i;)if(null!=(t=e[c])&&t>=t)for(r=a=t;++c<i;)null!=(t=e[c])&&(r>t&&(r=t),a<t&&(a=t))}else for(;++c<i;)if(null!=(t=n(e[c],c,e))&&t>=t)for(r=a=t;++c<i;)null!=(t=n(e[c],c,e))&&(r>t&&(r=t),a<t&&(a=t));return[r,a]},s=Array.prototype,u=(s.slice,s.map,function(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=0|Math.max(0,Math.ceil((n-e)/t)),i=new Array(a);++r<a;)i[r]=e+r*t;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var o=function(e,n){var t,r,a=e.length,i=-1;if(null==n){for(;++i<a;)if(null!=(t=e[i])&&t>=t)for(r=t;++i<a;)null!=(t=e[i])&&t>r&&(r=t)}else for(;++i<a;)if(null!=(t=n(e[i],i,e))&&t>=t)for(r=t;++i<a;)null!=(t=n(e[i],i,e))&&t>r&&(r=t);return r},l=function(e){for(var n,t,r,a=e.length,i=-1,c=0;++i<a;)c+=e[i].length;for(t=new Array(c);--a>=0;)for(n=(r=e[a]).length;--n>=0;)t[--c]=r[n];return t},d=function(e){if(!(a=e.length))return[];for(var n=-1,t=function(e,n){var t,r,a=e.length,i=-1;if(null==n){for(;++i<a;)if(null!=(t=e[i])&&t>=t)for(r=t;++i<a;)null!=(t=e[i])&&r>t&&(r=t)}else for(;++i<a;)if(null!=(t=n(e[i],i,e))&&t>=t)for(r=t;++i<a;)null!=(t=n(e[i],i,e))&&r>t&&(r=t);return r}(e,f),r=new Array(t);++n<t;)for(var a,i=-1,c=r[n]=new Array(a);++i<a;)c[i]=e[i][n];return r};function f(e){return e.length}}},[["rt8E",0,2,1,3,4,5,6,7,13]]]);