"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[2574],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>f});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var s=n.createContext({}),i=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},d=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=i(l),f=r,m=c["".concat(s,".").concat(f)]||c[f]||k[f]||u;return l?n.createElement(m,a(a({ref:e},d),{},{components:l})):n.createElement(m,a({ref:e},d))}));function f(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,a=new Array(u);a[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var i=2;i<u;i++)a[i]=l[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},36742:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(67294),r=l(76),u=l(13919),a=l(10412);const o=(0,n.createContext)({collectLink:()=>{}});var s=l(44996);const i=function(t){let{isNavLink:e,to:l,href:i,activeClassName:d,isActive:k,"data-noBrokenLinkCheck":c,autoAddBaseUrl:f=!0,...m}=t;var h;const{withBaseUrl:v}=(0,s.C)(),p=(0,n.useContext)(o),g=l||i,R=(0,u.Z)(g),E=null==g?void 0:g.replace("pathname://",""),T=void 0!==E?(b=E,f&&(t=>t.startsWith("/"))(b)?v(b):b):void 0;var b;const O=(0,n.useRef)(!1),y=e?r.OL:r.rU,Z=a.Z.canUseIntersectionObserver;let A;(0,n.useEffect)((()=>(!Z&&R&&null!=T&&window.docusaurus.prefetch(T),()=>{Z&&A&&A.disconnect()})),[T,Z,R]);const x=null!==(h=null==T?void 0:T.startsWith("#"))&&void 0!==h&&h,N=!T||!R||x;return T&&R&&!x&&!c&&p.collectLink(T),N?n.createElement("a",Object.assign({href:T},g&&!R&&{target:"_blank",rel:"noopener noreferrer"},m)):n.createElement(y,Object.assign({},m,{onMouseEnter:()=>{O.current||null==T||(window.docusaurus.preload(T),O.current=!0)},innerRef:t=>{var e,l;Z&&t&&R&&(e=t,l=()=>{null!=T&&window.docusaurus.prefetch(T)},A=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e),A.disconnect(),l())}))})),A.observe(e))},to:T||""},e&&{isActive:k,activeClassName:d}))}},13919:(t,e,l)=>{function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}l.d(e,{Z:()=>r,b:()=>n})},44996:(t,e,l)=>{l.d(e,{C:()=>u,Z:()=>a});var n=l(52263),r=l(13919);function u(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.default)();return{withBaseUrl:(l,n)=>function(t,e,l,n){let{forcePrependBaseUrl:u=!1,absolute:a=!1}=void 0===n?{}:n;if(!l)return l;if(l.startsWith("#"))return l;if((0,r.b)(l))return l;if(u)return e+l;const o=l.startsWith(e)?l:e+l.replace(/^\//,"");return a?t+o:o}(e,t,l,n)}}function a(t,e){void 0===e&&(e={});const{withBaseUrl:l}=u();return l(t,e)}},841:(t,e,l)=>{l.r(e),l.d(e,{default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=l(87462),r=(l(67294),l(3905)),u=l(44996),a=l(36742);const o={id:"formula-list",title:"List of Formulas and Functions",hide_title:!0},s={unversionedId:"visual/formula-list",id:"visual/formula-list",isDocsHomePage:!1,title:"List of Formulas and Functions",description:"Logical Functions",source:"@site/docs/visual/formula-list.mdx",sourceDirName:"visual",slug:"/visual/formula-list",permalink:"/visual/formula-list",version:"current",frontMatter:{id:"formula-list",title:"List of Formulas and Functions",hide_title:!0},sidebar:"Visual",previous:{title:"Toggle Sign",permalink:"/visual/toggle-sign"},next:{title:"Insert Column and Insert Measures",permalink:"/visual/insert-column-and-insert-measures"}},i=[{value:"Logical Functions",id:"logical-functions",children:[]},{value:"Logical Operators",id:"logical-operators",children:[]},{value:"Text Formatting Functions",id:"text-formatting-functions",children:[]},{value:"Math Functions",id:"math-functions",children:[]},{value:"Other Operators",id:"other-operators",children:[]},{value:"Identifiers",id:"identifiers",children:[]}],d={toc:i};function k(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"logical-functions"},"Logical Functions"),(0,r.kt)("table",{className:"table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"NAME"),(0,r.kt)("th",null,"SYNTAX"),(0,r.kt)("th",null,"DESCRIPTION"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/if"),mdxType:"Link"},"IF")),(0,r.kt)("td",null,(0,r.kt)("code",null,"IF( logical_test, value_if_true, value_if_false )")),(0,r.kt)("td",null,"Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/switch"),mdxType:"Link"},"SWITCH")),(0,r.kt)("td",null,(0,r.kt)("code",null,"SWITCH ( expression, value1, result1, value2, result2, ... value_n, result_n [, default] )")),(0,r.kt)("td",null,"Evaluates; ;an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an  optional default value is returned.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/and"),mdxType:"Link"},"AND")),(0,r.kt)("td",null,(0,r.kt)("code",null,"AND( logical_test1, [logical_test2], ... )")),(0,r.kt)("td",null,"Checks whether all the arguments are TRUE, and returns TRUE if all arguments are TRUE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/or"),mdxType:"Link"},"OR")),(0,r.kt)("td",null,(0,r.kt)("code",null,"OR( logical_test1, [logical_test2], ... )")),(0,r.kt)("td",null,"Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/not"),mdxType:"Link"},"NOT")),(0,r.kt)("td",null,(0,r.kt)("code",null,"NOT( logical_test )")),(0,r.kt)("td",null,"Changes FALSE to TRUE, or TRUE to FALSE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/xor"),mdxType:"Link"},"XOR")),(0,r.kt)("td",null,(0,r.kt)("code",null,"XOR( logical_test1, [logical_test2], ... )")),(0,r.kt)("td",null,"Returns a logical 'Exclusive Or' of all arguments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/isnumber"),mdxType:"Link"},"ISNUMBER")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ISNUMBER(value)")),(0,r.kt)("td",null,"Checks whether value is a valid number")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/ifna"),mdxType:"Link"},"IFNA")),(0,r.kt)("td",null,(0,r.kt)("code",null,"IFNA(value1,value2)")),(0,r.kt)("td",null,"Return value2 if value1 is not number else returns value1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/in"),mdxType:"Link"},"IN")),(0,r.kt)("td",null,(0,r.kt)("code",null,"IN(value,[Item1,Item2])")),(0,r.kt)("td",null,"Returns true if the given value is in list")))),(0,r.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"OPERATORS")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"DESCRIPTION")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"&&"),(0,r.kt)("td",null,"Logical ",(0,r.kt)("a",{href:(0,u.Z)("references/formulas/and")},"AND"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"||"),(0,r.kt)("td",null,"Logical ",(0,r.kt)("a",{href:(0,u.Z)("references/formulas/or")},"OR"))))),(0,r.kt)("h2",{id:"text-formatting-functions"},"Text Formatting Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"NAME"),(0,r.kt)("th",null,"SYNTAX"),(0,r.kt)("th",null,"DESCRIPTION"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/text"),mdxType:"Link"},"TEXT")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TEXT(value, format)")),(0,r.kt)("td",null,"Format the value to the given format string")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/concatenate"),mdxType:"Link"},"CONCATENATE")),(0,r.kt)("td",null,(0,r.kt)("code",null,"CONCATENATE(string1, string2, ..)")),(0,r.kt)("td",null,"Concatenates all the arguments")))),(0,r.kt)("h2",{id:"math-functions"},"Math Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"NAME"),(0,r.kt)("th",null,"SYNTAX"),(0,r.kt)("th",null,"DESCRIPTION"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/sum"),mdxType:"Link"},"SUM")),(0,r.kt)("td",null,(0,r.kt)("code",null,"Sum(value1,[value2]....)")),(0,r.kt)("td",null,"Add all numbers in the arguments, which can be numbers or cell references")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/average"),mdxType:"Link"},"AVERAGE")),(0,r.kt)("td",null,(0,r.kt)("code",null,"Average(value1,[value2]....)")),(0,r.kt)("td",null,"Returns the average (arithmetic mean) of its arguments, which can be numbers or cell references")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/averageexzero"),mdxType:"Link"},"AVERGAEEXZERO")),(0,r.kt)("td",null,(0,r.kt)("code",null,"AverageExZero(value1,[value2]....)")),(0,r.kt)("td",null,"Returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or cell references")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/averageexneg"),mdxType:"Link"},"AVERAGEEXNEG")),(0,r.kt)("td",null,(0,r.kt)("code",null,"AverageExNeg(value1,[value2]....)")),(0,r.kt)("td",null,"Returns the average (arithmetic mean) of its arguments excluding negatives, which can be numbers or cell references")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/averageexzeroneg"),mdxType:"Link"},"AVERAGEEXZERONEG")),(0,r.kt)("td",null,(0,r.kt)("code",null,"AverageExZeroNeg(value1,[value2]....)")),(0,r.kt)("td",null,"Returns the average (arithmetic mean) of its arguments excluding zeros and negatives, which can be numbers or cell references")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/countif"),mdxType:"Link"},"COUNTIF")),(0,r.kt)("td",null,(0,r.kt)("code",null,"Count(list, condition)")),(0,r.kt)("td",null,"Returns the count of item matches the condition")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/abs"),mdxType:"Link"},"ABS")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ABS(value)")),(0,r.kt)("td",null,"Returns the absolute value of a number, a number without its sign")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/min"),mdxType:"Link"},"MIN")),(0,r.kt)("td",null,(0,r.kt)("code",null,"Min(value1,[value2]....)")),(0,r.kt)("td",null,"Returns the smallest number in a set of values. Cell references also accepted as arguments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/max"),mdxType:"Link"},"MAX")),(0,r.kt)("td",null,(0,r.kt)("code",null,"Max(value1,[value2]....)")),(0,r.kt)("td",null,"Returns the largest number in a set of values. Cell references also accepted as arguments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/power"),mdxType:"Link"},"POWER")),(0,r.kt)("td",null,(0,r.kt)("code",null,"POW(value,power)")),(0,r.kt)("td",null,"Returns the result of a number raised to a power")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/sqrt"),mdxType:"Link"},"SQRT")),(0,r.kt)("td",null,(0,r.kt)("code",null,"SQRT(value)")),(0,r.kt)("td",null,"Returns the square root of a number")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/exp"),mdxType:"Link"},"EXP")),(0,r.kt)("td",null,(0,r.kt)("code",null,"EXP(value)")),(0,r.kt)("td",null,"Returns e raised to the power of a given number")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/log"),mdxType:"Link"},"LOG")),(0,r.kt)("td",null,(0,r.kt)("code",null,"LOG(value,base)")),(0,r.kt)("td",null,"Returns the logarithm of a number to the base you specify")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/round"),mdxType:"Link"},"ROUND")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ROUND(value, significance)")),(0,r.kt)("td",null,"Returns the round of a number")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/ceiling"),mdxType:"Link"},"CEILING")),(0,r.kt)("td",null,(0,r.kt)("code",null,"CEILING(value, significance)")),(0,r.kt)("td",null,"Round a number up to nearest highest multiple")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(a.Z,{to:(0,u.Z)("references/formulas/floor"),mdxType:"Link"},"FLOOR")),(0,r.kt)("td",null,(0,r.kt)("code",null,"FLOOR(value, significance)")),(0,r.kt)("td",null,"Round up a number up to nearest lowest multiple")))),(0,r.kt)("h2",{id:"other-operators"},"Other Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"OPERATORS"),(0,r.kt)("th",null,"DESCRIPTION"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"()"),(0,r.kt)("td",null,"Parenthesis")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"+, -"),(0,r.kt)("td",null,"plus,minus(-1) sign")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"*, /"),(0,r.kt)("td",null,"Multiplication, Division")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"+, -"),(0,r.kt)("td",null,"Addition, Subtraction")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"==, !="),(0,r.kt)("td",null,"Equal to, Not equal to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">, >="),(0,r.kt)("td",null,"Greater than, Greater than or equal to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"<, <="),(0,r.kt)("td",null,"Less than, Less than or equal to")))),(0,r.kt)("h2",{id:"identifiers"},"Identifiers"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"IDENTIFIER"),(0,r.kt)("th",null,"Usage"),(0,r.kt)("th",null,"DESCRIPTION"),(0,r.kt)("th",null,"Example"),(0,r.kt)("th",null,"Explanation"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"COLUMN_ID"),(0,r.kt)("td",null,"Calculated Column Formula"),(0,r.kt)("td",null,"Represents the particular column, used in column formula"),(0,r.kt)("td",null,"AC + PY"),(0,r.kt)("td",null,"Returns the sum of the column AC and PY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ROW_ID"),(0,r.kt)("td",null,"Calculated Row Formula"),(0,r.kt)("td",null,"Represents the particular row, used in row formula"),(0,r.kt)("td",null,"R_WEST.R_URBAN + R_EAST.R_URBAN"),(0,r.kt)("td",null,"Returns the sum row Urban under West and East")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"COLUMN"),(0,r.kt)("td",null,"Calculated Row Formula"),(0,r.kt)("td",null,"Represents the active column in row calculation"),(0,r.kt)("td",null,'IF(COLUMN == "AC", 5000, 6000)'),(0,r.kt)("td",null,"On using in the row formula, returns 5000 for AC column and 6000 for other columns")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ROW.PARENT"),(0,r.kt)("td",null,"Calculated Column Formula, Used along with identifier PARENT and "),(0,r.kt)("td",null,"Represents the active row in column calculation"),(0,r.kt)("td",null,"ROW.PARENT.AC + ROW.PARENT.PY"),(0,r.kt)("td",null,"For each row it adds the value of its parent row's AC column and PY column")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PARENT(Chaining)"),(0,r.kt)("td",null,"Calculated Column Formula, Used along with identifier PARENT and "),(0,r.kt)("td",null,"Multiple chaining of PARENT is possible"),(0,r.kt)("td",null,"ROW.PARENT.PARENT.AC + ROW.PARENT.PARENT.PY"),(0,r.kt)("td",null,"For each row it adds the value of its grandparent row's AC column and PY column")))))}k.isMDXComponent=!0}}]);