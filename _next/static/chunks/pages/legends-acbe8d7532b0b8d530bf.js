_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[105],{"/B0Q":function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return r}));var i=t("W1cA");const a=Symbol("implicit");function r(){var n=new Map,e=[],t=[],l=a;function o(i){var r=i+"",o=n.get(r);if(!o){if(l!==a)return l;n.set(r,o=e.push(i))}return t[(o-1)%t.length]}return o.domain=function(t){if(!arguments.length)return e.slice();e=[],n=new Map;for(const i of t){const t=i+"";n.has(t)||n.set(t,e.push(i))}return o},o.range=function(n){return arguments.length?(t=Array.from(n),o):t.slice()},o.unknown=function(n){return arguments.length?(l=n,o):l},o.copy=function(){return r(e,t).unknown(l)},i.b.apply(o,arguments),o}},"1rRp":function(n,e,t){"use strict";var i=Math.PI,a=2*i,r=a-1e-6;function l(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function o(){return new l}l.prototype=o.prototype={constructor:l,moveTo:function(n,e){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,e){this._+="L"+(this._x1=+n)+","+(this._y1=+e)},quadraticCurveTo:function(n,e,t,i){this._+="Q"+ +n+","+ +e+","+(this._x1=+t)+","+(this._y1=+i)},bezierCurveTo:function(n,e,t,i,a,r){this._+="C"+ +n+","+ +e+","+ +t+","+ +i+","+(this._x1=+a)+","+(this._y1=+r)},arcTo:function(n,e,t,a,r){n=+n,e=+e,t=+t,a=+a,r=+r;var l=this._x1,o=this._y1,c=t-n,s=a-e,u=l-n,f=o-e,d=u*u+f*f;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=n)+","+(this._y1=e);else if(d>1e-6)if(Math.abs(f*c-s*u)>1e-6&&r){var h=t-l,g=a-o,b=c*c+s*s,m=h*h+g*g,p=Math.sqrt(b),v=Math.sqrt(d),y=r*Math.tan((i-Math.acos((b+d-m)/(2*p*v)))/2),x=y/v,L=y/p;Math.abs(x-1)>1e-6&&(this._+="L"+(n+x*u)+","+(e+x*f)),this._+="A"+r+","+r+",0,0,"+ +(f*h>u*g)+","+(this._x1=n+L*c)+","+(this._y1=e+L*s)}else this._+="L"+(this._x1=n)+","+(this._y1=e);else;},arc:function(n,e,t,l,o,c){n=+n,e=+e,c=!!c;var s=(t=+t)*Math.cos(l),u=t*Math.sin(l),f=n+s,d=e+u,h=1^c,g=c?l-o:o-l;if(t<0)throw new Error("negative radius: "+t);null===this._x1?this._+="M"+f+","+d:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-d)>1e-6)&&(this._+="L"+f+","+d),t&&(g<0&&(g=g%a+a),g>r?this._+="A"+t+","+t+",0,1,"+h+","+(n-s)+","+(e-u)+"A"+t+","+t+",0,1,"+h+","+(this._x1=f)+","+(this._y1=d):g>1e-6&&(this._+="A"+t+","+t+",0,"+ +(g>=i)+","+h+","+(this._x1=n+t*Math.cos(o))+","+(this._y1=e+t*Math.sin(o))))},rect:function(n,e,t,i){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+e)+"h"+ +t+"v"+ +i+"h"+-t+"Z"},toString:function(){return this._}},e.a=o},"67po":function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var i=t("uKU/"),a=t("xx0A"),r=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function l(n){return r(Object(i.a)(),n)}},"8C+A":function(n,e,t){"use strict";var i=t("NOr4"),a=Math.sin(i.j/10)/Math.sin(7*i.j/10),r=Math.sin(i.m/10)*a,l=-Math.cos(i.m/10)*a;e.a={draw:function(n,e){var t=Math.sqrt(.8908130915292852*e),a=r*t,o=l*t;n.moveTo(0,-t),n.lineTo(a,o);for(var c=1;c<5;++c){var s=i.m*c/5,u=Math.cos(s),f=Math.sin(s);n.lineTo(f*t,-u*t),n.lineTo(u*a-f*o,f*a+u*o)}n.closePath()}}},ASpc:function(n,e,t){"use strict";var i=Math.sqrt(3);e.a={draw:function(n,e){var t=-Math.sqrt(e/(3*i));n.moveTo(0,2*t),n.lineTo(-i*t,-t),n.lineTo(i*t,-t),n.closePath()}}},AoqJ:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var i=t("5f3a"),a=t("W1cA");function r(){var n,e=[.5],t=[0,1],l=1;function o(a){return a<=a?t[Object(i.a)(e,a,0,l)]:n}return o.domain=function(n){return arguments.length?(e=Array.from(n),l=Math.min(e.length,t.length-1),o):e.slice()},o.range=function(n){return arguments.length?(t=Array.from(n),l=Math.min(e.length,t.length-1),o):t.slice()},o.invertExtent=function(n){var i=t.indexOf(n);return[e[i-1],e[i]]},o.unknown=function(e){return arguments.length?(n=e,o):n},o.copy=function(){return r().domain(e).range(t).unknown(n)},a.b.apply(o,arguments)}},"D+es":function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var i=t("/B0Q"),a=t("xx0A"),r=Object(a.b)("domain","range","reverse","unknown");function l(n){return r(Object(i.a)(),n)}},"Df+F":function(n,e,t){"use strict";e.a=function(n){return function(){return n}}},EIeE:function(n,e,t){"use strict";var i=t("NOr4");e.a={draw:function(n,e){var t=Math.sqrt(e/i.j);n.moveTo(t,0),n.arc(0,0,t,0,i.m)}}},JmwF:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var i=t("aWzz"),a=t.n(i),r=t("ERkP"),l=t.n(r),o=t("O94r"),c=t.n(o);function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function u(n){var e=n.top,t=void 0===e?0:e,i=n.left,a=void 0===i?0:i,r=n.transform,o=n.className,u=n.children,f=n.innerRef,d=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["top","left","transform","className","children","innerRef"]);return l.a.createElement("g",s({ref:f,className:c()("visx-group",o),transform:r||"translate("+a+", "+t+")"},d),u)}u.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},LfwY:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var i=t("AoqJ"),a=t("xx0A"),r=Object(a.b)("domain","range","reverse");function l(n){return r(Object(i.a)(),n)}},NOr4:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return r})),t.d(e,"h",(function(){return l})),t.d(e,"i",(function(){return o})),t.d(e,"k",(function(){return c})),t.d(e,"l",(function(){return s})),t.d(e,"f",(function(){return u})),t.d(e,"j",(function(){return f})),t.d(e,"g",(function(){return d})),t.d(e,"m",(function(){return h})),t.d(e,"b",(function(){return g})),t.d(e,"c",(function(){return b}));var i=Math.abs,a=Math.atan2,r=Math.cos,l=Math.max,o=Math.min,c=Math.sin,s=Math.sqrt,u=1e-12,f=Math.PI,d=f/2,h=2*f;function g(n){return n>1?0:n<-1?f:Math.acos(n)}function b(n){return n>=1?d:n<=-1?-d:Math.asin(n)}},RC21:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t("UNpM"),a=t("5f3a"),r=t("SbnM"),l=t("W1cA");function o(){var n,e=[],t=[],c=[];function s(){var n=0,a=Math.max(1,t.length);for(c=new Array(a-1);++n<a;)c[n-1]=Object(i.b)(e,n/a);return u}function u(e){return isNaN(e=+e)?n:t[Object(a.a)(c,e)]}return u.invertExtent=function(n){var i=t.indexOf(n);return i<0?[NaN,NaN]:[i>0?c[i-1]:e[0],i<c.length?c[i]:e[e.length-1]]},u.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let t of n)null==t||isNaN(t=+t)||e.push(t);return e.sort(r.a),s()},u.range=function(n){return arguments.length?(t=Array.from(n),s()):t.slice()},u.unknown=function(e){return arguments.length?(n=e,u):n},u.quantiles=function(){return c.slice()},u.copy=function(){return o().domain(e).range(t).unknown(n)},l.b.apply(u,arguments)}},TNf3:function(n,e,t){"use strict";e.a={draw:function(n,e){var t=Math.sqrt(e/5)/2;n.moveTo(-3*t,-t),n.lineTo(-t,-t),n.lineTo(-t,-3*t),n.lineTo(t,-3*t),n.lineTo(t,-t),n.lineTo(3*t,-t),n.lineTo(3*t,t),n.lineTo(t,t),n.lineTo(t,3*t),n.lineTo(-t,3*t),n.lineTo(-t,t),n.lineTo(-3*t,t),n.closePath()}}},UNpM:function(n,e,t){"use strict";function i(n,e){let t;if(void 0===e)for(const i of n)null!=i&&(t<i||void 0===t&&i>=i)&&(t=i);else{let i=-1;for(let a of n)null!=(a=e(a,++i,n))&&(t<a||void 0===t&&a>=a)&&(t=a)}return t}function a(n,e){let t;if(void 0===e)for(const i of n)null!=i&&(t>i||void 0===t&&i>=i)&&(t=i);else{let i=-1;for(let a of n)null!=(a=e(a,++i,n))&&(t>a||void 0===t&&a>=a)&&(t=a)}return t}t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return s}));var r=t("SbnM");function l(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}var o=t("bBH6");function c(n,e,t){if(c=(n=Float64Array.from(Object(o.b)(n,t))).length){if((e=+e)<=0||c<2)return a(n);if(e>=1)return i(n);var c,s=(c-1)*e,u=Math.floor(s),f=i(function n(e,t,i=0,a=e.length-1,o=r.a){for(;a>i;){if(a-i>600){const r=a-i+1,l=t-i+1,c=Math.log(r),s=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*s*(r-s)/r)*(l-r/2<0?-1:1);n(e,t,Math.max(i,Math.floor(t-l*s/r+u)),Math.min(a,Math.floor(t+(r-l)*s/r+u)),o)}const r=e[t];let c=i,s=a;for(l(e,i,t),o(e[a],r)>0&&l(e,i,a);c<s;){for(l(e,c,s),++c,--s;o(e[c],r)<0;)++c;for(;o(e[s],r)>0;)--s}0===o(e[i],r)?l(e,i,s):(++s,l(e,s,a)),s<=t&&(i=s+1),t<=s&&(a=s-1)}return e}(n,u).subarray(0,u+1));return f+(a(n.subarray(u+1))-f)*(s-u)}}function s(n,e,t=o.a){if(i=n.length){if((e=+e)<=0||i<2)return+t(n[0],0,n);if(e>=1)return+t(n[i-1],i-1,n);var i,a=(i-1)*e,r=Math.floor(a),l=+t(n[r],r,n);return l+(+t(n[r+1],r+1,n)-l)*(a-r)}}},Zbhd:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var i=t("PB0s"),a=t("XAd9"),r=t("Cyas"),l=t("VBI3");function o(n,e,t,o){var c,s=Object(i.c)(n,e,t);switch((o=Object(a.a)(null==o?",f":o)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=o.precision||isNaN(c=function(n,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(e)/3)))-Object(r.a)(Math.abs(n)))}(s,u))||(o.precision=c),Object(l.b)(o,u);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(c=function(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Object(r.a)(e)-Object(r.a)(n))+1}(s,Math.max(Math.abs(n),Math.abs(e))))||(o.precision=c-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(c=function(n){return Math.max(0,-Object(r.a)(Math.abs(n)))}(s))||(o.precision=c-2*("%"===o.type))}return Object(l.a)(o)}},b0RK:function(n,e,t){"use strict";var i=Math.sqrt(1/3),a=2*i;e.a={draw:function(n,e){var t=Math.sqrt(e/a),r=t*i;n.moveTo(0,-t),n.lineTo(r,0),n.lineTo(0,t),n.lineTo(-r,0),n.closePath()}}},sgpZ:function(n,e,t){"use strict";e.a={draw:function(n,e){var t=Math.sqrt(e),i=-t/2;n.rect(i,i,t,t)}}},"uKU/":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return c}));var i=t("PB0s"),a=t("2+fR"),r=t("W1cA"),l=t("Zbhd");function o(n){var e=n.domain;return n.ticks=function(n){var t=e();return Object(i.a)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var i=e();return Object(l.a)(i[0],i[i.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var a,r,l=e(),o=0,c=l.length-1,s=l[o],u=l[c],f=10;for(u<s&&(r=s,s=u,u=r,r=o,o=c,c=r);f-- >0;){if((r=Object(i.b)(s,u,t))===a)return l[o]=s,l[c]=u,e(l);if(r>0)s=Math.floor(s/r)*r,u=Math.ceil(u/r)*r;else{if(!(r<0))break;s=Math.ceil(s*r)/r,u=Math.floor(u*r)/r}a=r}return n},n}function c(){var n=Object(a.b)();return n.copy=function(){return Object(a.a)(n,c())},r.b.apply(n,arguments),o(n)}},uPKa:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legends",function(){return t("wZSV")}])},vCHK:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var i=t("RC21"),a=t("xx0A"),r=Object(a.b)("domain","range","reverse");function l(n){return r(Object(i.a)(),n)}},wZSV:function(n,e,t){"use strict";t.r(e);var i=t("ERkP"),a=t.n(i),r=t("6wy5"),l=t("ER2I"),o=t("L4cs"),c=a.a.createElement;e.default=function(){return c(r.a,{events:!0,component:l.a,title:"Legends",codeSandboxDirectoryName:"visx-legend",packageJson:o},"import React from 'react';\nimport { format } from 'd3-format';\nimport { scaleLinear, scaleOrdinal, scaleThreshold, scaleQuantile } from '@visx/scale';\nimport { GlyphStar, GlyphWye, GlyphTriangle, GlyphDiamond } from '@visx/glyph';\nimport {\n  Legend,\n  LegendLinear,\n  LegendQuantile,\n  LegendOrdinal,\n  LegendSize,\n  LegendThreshold,\n  LegendItem,\n  LegendLabel,\n} from '@visx/legend';\n\nconst oneDecimalFormat = format('.1f');\n\nconst sizeScale = scaleLinear<number>({\n  domain: [0, 10],\n  range: [5, 13],\n});\n\nconst sizeColorScale = scaleLinear({\n  domain: [0, 10],\n  range: ['#75fcfc', '#3236b8'],\n});\n\nconst quantileScale = scaleQuantile({\n  domain: [0, 0.15],\n  range: ['#eb4d70', '#f19938', '#6ce18b', '#78f6ef', '#9096f8'],\n});\n\nconst linearScale = scaleLinear({\n  domain: [0, 10],\n  range: ['#ed4fbb', '#e9a039'],\n});\n\nconst thresholdScale = scaleThreshold({\n  domain: [0.01, 0.02, 0.04, 0.06, 0.08],\n  range: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#756bb1', '#54278f'],\n});\n\nconst ordinalColorScale = scaleOrdinal({\n  domain: ['a', 'b', 'c', 'd'],\n  range: ['#66d981', '#71f5ef', '#4899f1', '#7d81f6'],\n});\n\nconst ordinalColor2Scale = scaleOrdinal({\n  domain: ['a', 'b', 'c', 'd'],\n  range: ['#fae856', '#f29b38', '#e64357', '#8386f7'],\n});\n\nconst shapeScale = scaleOrdinal<string, React.FC | React.ReactNode>({\n  domain: ['a', 'b', 'c', 'd', 'e'],\n  range: [\n    <GlyphStar key=\"a\" size={50} top={50 / 6} left={50 / 6} fill=\"#dd59b8\" />,\n    <GlyphWye key=\"b\" size={50} top={50 / 6} left={50 / 6} fill=\"#de6a9a\" />,\n    <GlyphTriangle key=\"c\" size={50} top={50 / 6} left={50 / 6} fill=\"#de7d7b\" />,\n    <GlyphDiamond key=\"d\" size={50} top={50 / 6} left={50 / 6} fill=\"#df905f\" />,\n    () => (\n      <text key=\"e\" fontSize=\"12\" dy=\"1em\" dx=\".33em\" fill=\"#e0a346\">\n        $\n      </text>\n    ),\n  ],\n});\n\nconst legendGlyphSize = 15;\n\nexport default function Example({ events = false }: { events?: boolean }) {\n  return (\n    <div className=\"legends\">\n      <LegendDemo title=\"Size\">\n        <LegendSize scale={sizeScale}>\n          {labels =>\n            labels.map(label => {\n              const size = sizeScale(label.datum) ?? 0;\n              const color = sizeColorScale(label.datum);\n              return (\n                <LegendItem\n                  key={`legend-${label.text}-${label.index}`}\n                  onClick={() => {\n                    if (events) alert(`clicked: ${JSON.stringify(label)}`);\n                  }}\n                >\n                  <svg width={size} height={size} style={{ margin: '5px 0' }}>\n                    <circle fill={color} r={size / 2} cx={size / 2} cy={size / 2} />\n                  </svg>\n                  <LegendLabel align=\"left\" margin=\"0 4px\">\n                    {label.text}\n                  </LegendLabel>\n                </LegendItem>\n              );\n            })\n          }\n        </LegendSize>\n      </LegendDemo>\n      <LegendDemo title=\"Quantile\">\n        <LegendQuantile scale={quantileScale}>\n          {labels =>\n            labels.map((label, i) => (\n              <LegendItem\n                key={`legend-${i}`}\n                onClick={() => {\n                  if (events) alert(`clicked: ${JSON.stringify(label)}`);\n                }}\n              >\n                <svg width={legendGlyphSize} height={legendGlyphSize} style={{ margin: '2px 0' }}>\n                  <circle\n                    fill={label.value}\n                    r={legendGlyphSize / 2}\n                    cx={legendGlyphSize / 2}\n                    cy={legendGlyphSize / 2}\n                  />\n                </svg>\n                <LegendLabel align=\"left\" margin=\"0 4px\">\n                  {label.text}\n                </LegendLabel>\n              </LegendItem>\n            ))\n          }\n        </LegendQuantile>\n      </LegendDemo>\n      <LegendDemo title=\"Linear\">\n        <LegendLinear\n          scale={linearScale}\n          labelFormat={(d, i) => (i % 2 === 0 ? oneDecimalFormat(d) : '')}\n        >\n          {labels =>\n            labels.map((label, i) => (\n              <LegendItem\n                key={`legend-quantile-${i}`}\n                onClick={() => {\n                  if (events) alert(`clicked: ${JSON.stringify(label)}`);\n                }}\n              >\n                <svg width={legendGlyphSize} height={legendGlyphSize} style={{ margin: '2px 0' }}>\n                  <circle\n                    fill={label.value}\n                    r={legendGlyphSize / 2}\n                    cx={legendGlyphSize / 2}\n                    cy={legendGlyphSize / 2}\n                  />\n                </svg>\n                <LegendLabel align=\"left\" margin=\"0 4px\">\n                  {label.text}\n                </LegendLabel>\n              </LegendItem>\n            ))\n          }\n        </LegendLinear>\n      </LegendDemo>\n      <LegendDemo title=\"Threshold\">\n        <LegendThreshold scale={thresholdScale}>\n          {labels =>\n            labels.reverse().map((label, i) => (\n              <LegendItem\n                key={`legend-quantile-${i}`}\n                margin=\"1px 0\"\n                onClick={() => {\n                  if (events) alert(`clicked: ${JSON.stringify(label)}`);\n                }}\n              >\n                <svg width={legendGlyphSize} height={legendGlyphSize}>\n                  <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />\n                </svg>\n                <LegendLabel align=\"left\" margin=\"2px 0 0 10px\">\n                  {label.text}\n                </LegendLabel>\n              </LegendItem>\n            ))\n          }\n        </LegendThreshold>\n      </LegendDemo>\n      <LegendDemo title=\"Ordinal\">\n        <LegendOrdinal scale={ordinalColorScale} labelFormat={label => `${label.toUpperCase()}`}>\n          {labels => (\n            <div style={{ display: 'flex', flexDirection: 'row' }}>\n              {labels.map((label, i) => (\n                <LegendItem\n                  key={`legend-quantile-${i}`}\n                  margin=\"0 5px\"\n                  onClick={() => {\n                    if (events) alert(`clicked: ${JSON.stringify(label)}`);\n                  }}\n                >\n                  <svg width={legendGlyphSize} height={legendGlyphSize}>\n                    <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />\n                  </svg>\n                  <LegendLabel align=\"left\" margin=\"0 0 0 4px\">\n                    {label.text}\n                  </LegendLabel>\n                </LegendItem>\n              ))}\n            </div>\n          )}\n        </LegendOrdinal>\n      </LegendDemo>\n      <LegendDemo title=\"Custom Legend\">\n        <Legend scale={shapeScale}>\n          {labels => (\n            <div style={{ display: 'flex', flexDirection: 'row' }}>\n              {labels.map((label, i) => {\n                const color = ordinalColor2Scale(label.datum);\n                const shape = shapeScale(label.datum);\n                const isValidElement = React.isValidElement(shape);\n                return (\n                  <LegendItem\n                    key={`legend-quantile-${i}`}\n                    margin=\"0 4px 0 0\"\n                    flexDirection=\"column\"\n                    onClick={() => {\n                      const { datum, index } = label;\n                      if (events) alert(`clicked: ${JSON.stringify({ datum, color, index })}`);\n                    }}\n                  >\n                    <svg\n                      width={legendGlyphSize}\n                      height={legendGlyphSize}\n                      style={{ margin: '0 0 8px 0' }}\n                    >\n                      {isValidElement\n                        ? React.cloneElement(shape as React.ReactElement)\n                        : React.createElement(shape as React.ComponentType<{ fill: string }>, {\n                            fill: color,\n                          })}\n                    </svg>\n                    <LegendLabel align=\"left\" margin={0}>\n                      {label.text}\n                    </LegendLabel>\n                  </LegendItem>\n                );\n              })}\n            </div>\n          )}\n        </Legend>\n      </LegendDemo>\n\n      <style jsx>{`\n        .legends {\n          font-family: arial;\n          font-weight: 900;\n          background-color: black;\n          border-radius: 14px;\n          padding: 24px 24px 24px 32px;\n          overflow-y: auto;\n          flex-grow: 1;\n        }\n        .chart h2 {\n          margin-left: 10px;\n        }\n      `}</style>\n    </div>\n  );\n}\n\nfunction LegendDemo({ title, children }: { title: string; children: React.ReactNode }) {\n  return (\n    <div className=\"legend\">\n      <div className=\"title\">{title}</div>\n      {children}\n      <style jsx>{`\n        .legend {\n          line-height: 0.9em;\n          color: #efefef;\n          font-size: 10px;\n          font-family: arial;\n          padding: 10px 10px;\n          float: left;\n          border: 1px solid rgba(255, 255, 255, 0.3);\n          border-radius: 8px;\n          margin: 5px 5px;\n        }\n        .title {\n          font-size: 12px;\n          margin-bottom: 10px;\n          font-weight: 100;\n        }\n      `}</style>\n    </div>\n  );\n}\n")}},"x3v/":function(n,e,t){"use strict";var i=-.5,a=Math.sqrt(3)/2,r=1/Math.sqrt(12),l=3*(r/2+1);e.a={draw:function(n,e){var t=Math.sqrt(e/l),o=t/2,c=t*r,s=o,u=t*r+t,f=-s,d=u;n.moveTo(o,c),n.lineTo(s,u),n.lineTo(f,d),n.lineTo(i*o-a*c,a*o+i*c),n.lineTo(i*s-a*u,a*s+i*u),n.lineTo(i*f-a*d,a*f+i*d),n.lineTo(i*o+a*c,i*c-a*o),n.lineTo(i*s+a*u,i*u-a*s),n.lineTo(i*f+a*d,i*d-a*f),n.closePath()}}},xjnW:function(n,e,t){"use strict";t.d(e,"b",(function(){return d}));var i=t("1rRp"),a=t("EIeE"),r=t("TNf3"),l=t("b0RK"),o=t("8C+A"),c=t("sgpZ"),s=t("ASpc"),u=t("x3v/"),f=t("Df+F"),d=[a.a,r.a,l.a,c.a,o.a,s.a,u.a];e.a=function(){var n=Object(f.a)(a.a),e=Object(f.a)(64),t=null;function r(){var a;if(t||(t=a=Object(i.a)()),n.apply(this,arguments).draw(t,+e.apply(this,arguments)),a)return t=null,a+""||null}return r.type=function(e){return arguments.length?(n="function"===typeof e?e:Object(f.a)(e),r):n},r.size=function(n){return arguments.length?(e="function"===typeof n?n:Object(f.a)(+n),r):e},r.context=function(n){return arguments.length?(t=null==n?null:n,r):t},r}}},[["uPKa",0,2,1,3,4,5,6,26]]]);