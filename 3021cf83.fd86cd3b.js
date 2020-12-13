(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);var i=({title:e,url:t,img:a})=>r.a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,title:e,width:"100%"},r.a.createElement("source",{src:t,type:"video/mp4"}),r.a.createElement("img",{src:a}))},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(89)),o=a(110),c={id:"getting-started",title:"Getting Started",description:"A performant interactive bottom sheet with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"img/bottom-sheet-preview.gif",hide_title:!0,slug:"/",hide_table_of_contents:!0},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"A performant interactive bottom sheet with fully configurable options \ud83d\ude80",source:"@site/docs/getting-started.mdx",slug:"/",permalink:"/react-native-bottom-sheet/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.mdx",version:"current",sidebar:"packages",next:{title:"Usage",permalink:"/react-native-bottom-sheet/usage"}},s=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[{value:"Version 2",id:"version-2",children:[]},{value:"Version 3",id:"version-3",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"react-native-bottom-sheet"},"React Native Bottom Sheet"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@gorhom/bottom-sheet?style=flat-square",alt:"npm"})))," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/l/@gorhom/bottom-sheet?style=flat-square",alt:"npm"})))," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/types-included-blue?style=flat-square",alt:"npm"})))," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"runs with expo"})))),Object(i.b)("p",null,"A performant interactive bottom sheet with fully configurable options \ud83d\ude80"),Object(i.b)(o.a,{title:"React Native Bottom Sheet",url:"./video/bottom-sheet-preview.mp4",img:"./img/bottom-sheet-preview.gif",mdxType:"Video"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Initially, this project was a cloned of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-scroll-bottom-sheet")," by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rgommezz"}),"@rgommezz")," \u2764\ufe0f. However, it is been fully re-written to add extra functionalities and simplify the approach.")),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83c\udf1f Modal presentation view, ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./modal"}),"Bottom Sheet Modal"),"."),Object(i.b)("li",{parentName:"ul"},"Smooth gesture interactions & snapping animations."),Object(i.b)("li",{parentName:"ul"},"Support ",Object(i.b)("inlineCode",{parentName:"li"},"FlatList"),", ",Object(i.b)("inlineCode",{parentName:"li"},"SectionList"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ScrollView")," & ",Object(i.b)("inlineCode",{parentName:"li"},"View")," scrolling interactions, ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./scrollables"}),"read more"),"."),Object(i.b)("li",{parentName:"ul"},"Support ",Object(i.b)("inlineCode",{parentName:"li"},"React Navigation")," Integration, ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./react-navigation-integration"}),"read more"),"."),Object(i.b)("li",{parentName:"ul"},"Compatible with ",Object(i.b)("inlineCode",{parentName:"li"},"Reanimated v1 & v2"),"."),Object(i.b)("li",{parentName:"ul"},"Compatible with ",Object(i.b)("inlineCode",{parentName:"li"},"Expo"),"."),Object(i.b)("li",{parentName:"ul"},"Written in ",Object(i.b)("inlineCode",{parentName:"li"},"TypeScript"),".")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"This library provides two versions that are align with ",Object(i.b)("inlineCode",{parentName:"p"},"Reanimated v1 & v2")),Object(i.b)("h3",{id:"version-2"},"Version 2"),Object(i.b)("p",null,"This version is written with ",Object(i.b)("inlineCode",{parentName:"p"},"Reanimated v1")," & compatible with ",Object(i.b)("inlineCode",{parentName:"p"},"Reanimated v2"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @gorhom/bottom-sheet@2.0.0-alpha.5\n")),Object(i.b)("h4",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"This library needs these dependencies to be installed in your project before you can use it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-reanimated react-native-gesture-handler\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",Object(i.b)("strong",{parentName:"p"},"React Native Gesture Handler")," needs extra steps to finalize its installation, please follow their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),"installation instructions"),"."),Object(i.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",Object(i.b)("strong",{parentName:"p"},"React Native Reanimated v1")," needs extra steps to finalize its installation, please follow their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/getting_started"}),"installation instructions"),".")),Object(i.b)("h3",{id:"version-3"},"Version 3"),Object(i.b)("p",null,"This version is written with ",Object(i.b)("inlineCode",{parentName:"p"},"Reanimated v2")," and ",Object(i.b)("strong",{parentName:"p"},"CAN NOT RUN")," with ",Object(i.b)("inlineCode",{parentName:"p"},"Reanimated v1"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @gorhom/bottom-sheet@3.0.0-alpha.0\n")),Object(i.b)("h4",{id:"dependencies-1"},"Dependencies"),Object(i.b)("p",null,"This library needs these dependencies to be installed in your project before you can use it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-reanimated@alpha react-native-gesture-handler\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",Object(i.b)("strong",{parentName:"p"},"React Native Gesture Handler")," needs extra steps to finalize its installation, please follow their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),"installation instructions"),"."),Object(i.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",Object(i.b)("strong",{parentName:"p"},"React Native Reanimated v2")," needs extra steps to finalize its installation, please follow their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/installation"}),"installation instructions"),".")))}p.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);