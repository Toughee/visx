_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[121],{Dhk8:function(t,n,o){var e=o("Syyo"),i=o("KCLV"),r=o("kHoZ"),a=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):r(t)}},ENE1:function(t,n,o){var e=o("IBsm");t.exports=function(){return e.Date.now()}},GLQV:function(t){t.exports=JSON.parse('{"name":"@visx/demo-tooltip","description":"Standalone visx tooltip demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/responsive":"latest","@visx/tooltip":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx"]}')},IBsm:function(t,n,o){var e=o("e93E"),i="object"==typeof self&&self&&self.Object===Object&&self,r=e||i||Function("return this")();t.exports=r},KCLV:function(t,n,o){var e=o("Syyo"),i=Object.prototype,r=i.hasOwnProperty,a=i.toString,l=e?e.toStringTag:void 0;t.exports=function(t){var n=r.call(t,l),o=t[l];try{t[l]=void 0;var e=!0}catch(s){}var i=a.call(t);return e&&(n?t[l]=o:delete t[l]),i}},MLPw:function(t,n,o){"use strict";o.r(n);var e=o("ERkP"),i=o.n(e),r=o("6wy5"),a=o("nygR"),l=o("GLQV"),s=i.a.createElement;n.default=function(){return s(r.a,{component:a.a,title:"Tooltip",codeSandboxDirectoryName:"visx-tooltip",packageJson:l},'import React, { useState, useCallback } from \'react\';\nimport {\n  Tooltip,\n  TooltipWithBounds,\n  useTooltip,\n  useTooltipInPortal,\n  defaultStyles,\n} from \'@visx/tooltip\';\n\nexport type TooltipProps = {\n  width: number;\n  height: number;\n  showControls?: boolean;\n};\n\ntype TooltipData = string;\n\nconst positionIndicatorSize = 8;\n\nconst tooltipStyles = {\n  ...defaultStyles,\n  backgroundColor: \'rgba(53,71,125,0.8)\',\n  color: \'white\',\n  width: 152,\n  height: 72,\n  padding: 12,\n};\n\nexport default function Example({ width, height, showControls = true }: TooltipProps) {\n  const [tooltipShouldDetectBounds, setTooltipShouldDetectBounds] = useState(true);\n  const [renderTooltipInPortal, setRenderTooltipInPortal] = useState(false);\n\n  const { containerRef, containerBounds, TooltipInPortal } = useTooltipInPortal({\n    scroll: true,\n    detectBounds: tooltipShouldDetectBounds,\n  });\n\n  const {\n    showTooltip,\n    hideTooltip,\n    tooltipOpen,\n    tooltipData,\n    tooltipLeft = 0,\n    tooltipTop = 0,\n  } = useTooltip<TooltipData>({\n    // initial tooltip state\n    tooltipOpen: true,\n    tooltipLeft: width / 3,\n    tooltipTop: height / 3,\n    tooltipData: \'Move me with your mouse or finger\',\n  });\n\n  // event handlers\n  const handlePointerMove = useCallback(\n    (event: React.PointerEvent<HTMLDivElement>) => {\n      // coordinates should be relative to the container in which Tooltip is rendered\n      const containerX = (\'clientX\' in event ? event.clientX : 0) - containerBounds.left;\n      const containerY = (\'clientY\' in event ? event.clientY : 0) - containerBounds.top;\n      showTooltip({\n        tooltipLeft: containerX,\n        tooltipTop: containerY,\n        tooltipData: tooltipShouldDetectBounds\n          ? \'I detect my container boundary\'\n          : \'I will get clipped by my container\',\n      });\n    },\n    [showTooltip, tooltipShouldDetectBounds, containerBounds],\n  );\n\n  const TooltipComponent = renderTooltipInPortal\n    ? TooltipInPortal\n    : tooltipShouldDetectBounds\n    ? TooltipWithBounds\n    : Tooltip;\n\n  return (\n    <>\n      <div\n        ref={containerRef}\n        className="tooltip-example"\n        style={{ width, height }}\n        onPointerMove={handlePointerMove}\n      >\n        {tooltipOpen ? (\n          <>\n            <div\n              className="position-indicator"\n              style={{\n                transform: `translate(${tooltipLeft - positionIndicatorSize / 2}px, ${tooltipTop -\n                  positionIndicatorSize / 2}px)`,\n              }}\n            />\n            <div\n              className="crosshair horizontal"\n              style={{ transform: `translateY(${tooltipTop}px)` }}\n            />\n            <div\n              className="crosshair vertical"\n              style={{ transform: `translateX(${tooltipLeft}px)` }}\n            />\n            <TooltipComponent\n              key={Math.random()} // needed for bounds to update correctly\n              left={tooltipLeft}\n              top={tooltipTop}\n              style={tooltipStyles}\n            >\n              {tooltipData}\n              <br />\n              <br />\n              <strong>left</strong> {tooltipLeft?.toFixed(0)}px&nbsp;&nbsp;\n              <strong>top</strong> {tooltipTop?.toFixed(0)}px\n            </TooltipComponent>\n          </>\n        ) : (\n          <div className="no-tooltip">Move or touch the canvas to see the tooltip</div>\n        )}\n        <div className="z-index-bummer">\n          I have an annoying z-index. Try&nbsp;\n          <label>\n            <input\n              type="checkbox"\n              defaultChecked={renderTooltipInPortal}\n              onClick={e => {\n                // if rendered in clickable container, don\'t trigger that event\n                e.stopPropagation();\n                setRenderTooltipInPortal(!renderTooltipInPortal);\n              }}\n            />\n            &nbsp;rendering in Portal\n          </label>\n          &nbsp;\n          <span role="img" aria-label="yay">\n            \ud83e\udd73\n          </span>\n        </div>\n      </div>\n      {showControls && (\n        <div className="tooltip-controls">\n          <label>\n            <input\n              type="checkbox"\n              checked={tooltipShouldDetectBounds}\n              onChange={() => setTooltipShouldDetectBounds(!tooltipShouldDetectBounds)}\n            />\n            &nbsp;Tooltip with boundary detection\n          </label>\n\n          <button onClick={() => hideTooltip()}>Hide tooltip</button>\n        </div>\n      )}\n      <style>{`\n        .tooltip-example {\n          z-index: 0;\n          position: relative;\n          overflow: hidden;\n          border-radius: 16px;\n          background: linear-gradient(45deg, #6c5b7b, #c06c84, #f67280);\n          font-size: 14px;\n          color: white;\n          width: 100%;\n          height: 100%;\n        }\n        .tooltip-controls label {\n          font-size: 14px;\n          margin-right: 8px;\n        }\n        .position-indicator {\n          width: ${positionIndicatorSize}px;\n          height: ${positionIndicatorSize}px;\n          border-radius: 50%;\n          background: #35477d;\n          position: absolute;\n        }\n        .crosshair {\n          position: absolute;\n          top: 0;\n          left: 0;\n        }\n        .crosshair.horizontal {\n          width: 100%;\n          height: 1px;\n          border-top: 1px dashed #35477d;\n        }\n        .crosshair.vertical {\n          height: 100%;\n          width: 1px;\n          border-left: 1px dashed #35477d;\n        }\n        .no-tooltip {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n        .z-index-bummer {\n          position: absolute;\n          right: 12%;\n          bottom: 20%;\n          max-width: 190px;\n          z-index: 2000;\n          background: rgba(255, 255, 255, 0.8);\n          color: #35477d;\n          border-radius: 8px;\n          padding: 16px;\n          line-height: 1.2em;\n        }\n      `}</style>\n    </>\n  );\n}\n')}},RNvQ:function(t,n,o){var e=o("tQYX"),i=o("ENE1"),r=o("nvU9"),a=Math.max,l=Math.min;t.exports=function(t,n,o){var s,p,c,d,u,h,f=0,b=!1,v=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var o=s,e=p;return s=p=void 0,f=n,d=t.apply(e,o)}function y(t){return f=t,u=setTimeout(w,n),b?x(t):d}function g(t){var o=t-h;return void 0===h||o>=n||o<0||v&&t-f>=c}function w(){var t=i();if(g(t))return T(t);u=setTimeout(w,function(t){var o=n-(t-h);return v?l(o,c-(t-f)):o}(t))}function T(t){return u=void 0,m&&s?x(t):(s=p=void 0,d)}function S(){var t=i(),o=g(t);if(s=arguments,p=this,h=t,o){if(void 0===u)return y(h);if(v)return clearTimeout(u),u=setTimeout(w,n),x(h)}return void 0===u&&(u=setTimeout(w,n)),d}return n=r(n)||0,e(o)&&(b=!!o.leading,c=(v="maxWait"in o)?a(r(o.maxWait)||0,n):c,m="trailing"in o?!!o.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),f=0,s=h=p=u=void 0},S.flush=function(){return void 0===u?d:T(i())},S}},Syyo:function(t,n,o){var e=o("IBsm").Symbol;t.exports=e},XUBG:function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tooltip",function(){return o("MLPw")}])},a88S:function(t,n,o){var e=o("Dhk8"),i=o("tLQN");t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==e(t)}},e93E:function(t,n,o){(function(n){var o="object"==typeof n&&n&&n.Object===Object&&n;t.exports=o}).call(this,o("fRV1"))},fRV1:function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===typeof window&&(o=window)}t.exports=o},kHoZ:function(t,n){var o=Object.prototype.toString;t.exports=function(t){return o.call(t)}},nvU9:function(t,n,o){var e=o("tQYX"),i=o("a88S"),r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=l.test(t);return o||s.test(t)?p(t.slice(2),o?2:8):a.test(t)?NaN:+t}},nygR:function(t,n,o){"use strict";o.d(n,"a",(function(){return f}));var e=o("zjfJ"),i=o("ERkP"),r=o.n(i),a=o("+fu8"),l=o("dPyl"),s=o("QnoR"),p=o("8/jq"),c=r.a.createElement;function d(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,e)}return o}function u(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?d(Object(o),!0).forEach((function(n){Object(e.a)(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}var h=u(u({},a.b),{},{backgroundColor:"rgba(53,71,125,0.8)",color:"white",width:152,height:72,padding:12});function f(t){var n=t.width,o=t.height,e=t.showControls,d=void 0===e||e,u=Object(i.useState)(!0),f=u[0],b=u[1],v=Object(i.useState)(!1),m=v[0],x=v[1],y=Object(l.a)({scroll:!0,detectBounds:f}),g=y.containerRef,w=y.containerBounds,T=y.TooltipInPortal,S=Object(s.a)({tooltipOpen:!0,tooltipLeft:n/3,tooltipTop:o/3,tooltipData:"Move me with your mouse or finger"}),O=S.showTooltip,P=S.hideTooltip,k=S.tooltipOpen,j=S.tooltipData,E=S.tooltipLeft,N=void 0===E?0:E,I=S.tooltipTop,C=void 0===I?0:I,D=Object(i.useCallback)((function(t){var n=("clientX"in t?t.clientX:0)-w.left,o=("clientY"in t?t.clientY:0)-w.top;O({tooltipLeft:n,tooltipTop:o,tooltipData:f?"I detect my container boundary":"I will get clipped by my container"})}),[O,f,w]),z=m?T:f?p.a:a.a;return c(r.a.Fragment,null,c("div",{ref:g,className:"tooltip-example",style:{width:n,height:o},onPointerMove:D},k?c(r.a.Fragment,null,c("div",{className:"position-indicator",style:{transform:"translate(".concat(N-4,"px, ").concat(C-4,"px)")}}),c("div",{className:"crosshair horizontal",style:{transform:"translateY(".concat(C,"px)")}}),c("div",{className:"crosshair vertical",style:{transform:"translateX(".concat(N,"px)")}}),c(z,{key:Math.random(),left:N,top:C,style:h},j,c("br",null),c("br",null),c("strong",null,"left")," ",null===N||void 0===N?void 0:N.toFixed(0),"px\xa0\xa0",c("strong",null,"top")," ",null===C||void 0===C?void 0:C.toFixed(0),"px")):c("div",{className:"no-tooltip"},"Move or touch the canvas to see the tooltip"),c("div",{className:"z-index-bummer"},"I have an annoying z-index. Try\xa0",c("label",null,c("input",{type:"checkbox",defaultChecked:m,onClick:function(t){t.stopPropagation(),x(!m)}}),"\xa0rendering in Portal"),"\xa0",c("span",{role:"img","aria-label":"yay"},"\ud83e\udd73"))),d&&c("div",{className:"tooltip-controls"},c("label",null,c("input",{type:"checkbox",checked:f,onChange:function(){return b(!f)}}),"\xa0Tooltip with boundary detection"),c("button",{onClick:function(){return P()}},"Hide tooltip")),c("style",null,"\n        .tooltip-example {\n          z-index: 0;\n          position: relative;\n          overflow: hidden;\n          border-radius: 16px;\n          background: linear-gradient(45deg, #6c5b7b, #c06c84, #f67280);\n          font-size: 14px;\n          color: white;\n          width: 100%;\n          height: 100%;\n        }\n        .tooltip-controls label {\n          font-size: 14px;\n          margin-right: 8px;\n        }\n        .position-indicator {\n          width: ".concat(8,"px;\n          height: ").concat(8,"px;\n          border-radius: 50%;\n          background: #35477d;\n          position: absolute;\n        }\n        .crosshair {\n          position: absolute;\n          top: 0;\n          left: 0;\n        }\n        .crosshair.horizontal {\n          width: 100%;\n          height: 1px;\n          border-top: 1px dashed #35477d;\n        }\n        .crosshair.vertical {\n          height: 100%;\n          width: 1px;\n          border-left: 1px dashed #35477d;\n        }\n        .no-tooltip {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n        .z-index-bummer {\n          position: absolute;\n          right: 12%;\n          bottom: 20%;\n          max-width: 190px;\n          z-index: 2000;\n          background: rgba(255, 255, 255, 0.8);\n          color: #35477d;\n          border-radius: 8px;\n          padding: 16px;\n          line-height: 1.2em;\n        }\n      ")))}try{f.displayName="Example",f.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-tooltip/Example.tsx#Example"]={docgenInfo:f.__docgenInfo,name:"Example",path:"src/sandboxes/visx-tooltip/Example.tsx#Example"})}catch(b){}},tLQN:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},tQYX:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}}},[["XUBG",0,2,1,3,6,21]]]);