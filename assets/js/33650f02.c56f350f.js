"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[928],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,y=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],i={title:"Smart Analysis",sidebar_position:9,slug:"Smartanalysis"},s={unversionedId:"analyze/Smart Analysis",id:"analyze/Smart Analysis",isDocsHomePage:!1,title:"Smart Analysis",description:"You can create a column to do analysis of each row value compared to a base value.",source:"@site/docs/analyze/Smart Analysis.md",sourceDirName:"analyze",slug:"/analyze/Smartanalysis",permalink:"/analyze/Smartanalysis",version:"current",sidebarPosition:9,frontMatter:{title:"Smart Analysis",sidebar_position:9,slug:"Smartanalysis"},sidebar:"Analyze",previous:{title:"Filter and Search",permalink:"/analyze/filter-and-search"},next:{title:"Top N",permalink:"/analyze/TopN"}},u=[{value:"Related Links",id:"related-links",children:[]}],c={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create a column to do analysis of each row value compared to a base value."),(0,o.kt)("p",null,"You can insert two types of Smart analysis columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Variance")," \u2013 Difference between base value (row selected) and each record"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contribution")," \u2013 Percentage of each record to the base value")),(0,o.kt)("p",null,"To insert the smart analysis column,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the cell to be used as the base value."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Insert")," Tab from the toolbar, and select ",(0,o.kt)("strong",{parentName:"li"},"Smart Analysis")," from the ",(0,o.kt)("strong",{parentName:"li"},"Cells")," ribbon bar category."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Contribution")," from the drop down."),(0,o.kt)("li",{parentName:"ul"},"The % Contribution column is inserted into the visual.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Column with % Contribution of Net Revenue",src:n(96233).Z})),(0,o.kt)("p",null,"Column with % Contribution of Net Revenue"),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"visual/insert-row"},"Insert Row")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"visual/insert-column-and-insert-measures"},"Insert Column and Insert measure")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"build/Annotatenotes"},"Annotate with Notes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"None")," from the drop down to switch off the smart analysis.")))}p.isMDXComponent=!0},96233:function(e,t,n){t.Z=n.p+"assets/images/Smart1-dd6bcbcd211e0ae21fe1abb271b311ca.png"}}]);