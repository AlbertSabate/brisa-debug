// @bun
var n=Symbol.for("isJSX");function S(r){return i(null,r)}function i(r,{children:e,...o},s){let a=e;if(Array.isArray(e)&&!l(e))a=e.map((t)=>t?.[n]?t:S({children:t}));return Object.assign([r,{...o,key:s},a],{[n]:!0})}function l(r){return Array.isArray(r)&&((n in r)||m(r))}function m(r){return r?.[0]==="HTML"&&typeof r[1]?.html==="string"}export{i as jsxs,i as jsxDEV,i as jsx,m as isDangerHTML,l as isArrawOfJSXContent,S as Fragment};