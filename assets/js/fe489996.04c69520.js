"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[2244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16023:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={id:"not",title:"NOT"},o={unversionedId:"references/formulas/not",id:"references/formulas/not",isDocsHomePage:!1,title:"NOT",description:"A NOT statement returns TRUE if the argument is FALSE and FALSE if the argument is TRUE.",source:"@site/docs/references/formulas/not.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/not",permalink:"/references/formulas/not",version:"current",frontMatter:{id:"not",title:"NOT"},sidebar:"functionSideBar",previous:{title:"OR",permalink:"/references/formulas/or"},next:{title:"XOR",permalink:"/references/formulas/xor"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT")," statement returns TRUE if the argument is FALSE and FALSE if the argument is TRUE."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"NOT ( logical_test )\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"logical_test")," \u2013 The condition to be evaluated."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"Either True or False"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider a scenario in which an employee is eligible for Sales Bonus if Total Sales is greater than Sales Goal.\nSales Bonus is calculated as ",(0,a.kt)("inlineCode",{parentName:"p"},"Bonus% * Total Sales"),"."),(0,a.kt)("p",null,"To achieve this, the formula should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"IF (NOT (Total Sales > Sales Goal), 0 , Bonus% * Total Sales)\n")),(0,a.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.office.com/en-gb/article/not-function-9cfc6011-a054-40c7-a140-cd4ba2d87d77"},"NOT")))}u.isMDXComponent=!0}}]);