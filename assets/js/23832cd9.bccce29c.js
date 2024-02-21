"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[240],{7337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>E,contentTitle:()=>V,default:()=>C,frontMatter:()=>S,metadata:()=>N,toc:()=>T});var r=t(5893),a=t(1151),o=t(7294),s=t(512),i=t(2466),l=t(6550),u=t(469),c=t(1980),d=t(7392),h=t(12);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=m(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,c]=f({queryString:t,groupId:r}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,h.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),g=(()=>{const e=l??d;return b({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var y=t(2389);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.Z)("tabs__item",_.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=g(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",_.tabList),children:[(0,r.jsx)(v,{...e,...n}),(0,r.jsx)(x,{...e,...n})]})}function j(e){const n=(0,y.Z)();return(0,r.jsx)(k,{...e,children:p(e.children)},String(n))}const w={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(w.tabItem,a),hidden:t,children:n})}const S={title:"Import webhook",sidebar_position:2},V=void 0,N={id:"integrations/netsuite/import-webhook",title:"Import webhook",description:"Full data imports (weekly)",source:"@site/docs/integrations/netsuite/import-webhook.md",sourceDirName:"integrations/netsuite",slug:"/integrations/netsuite/import-webhook",permalink:"/cookbook/docs/integrations/netsuite/import-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/integrations/netsuite/import-webhook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Import webhook",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/cookbook/docs/integrations/netsuite/configuration"},next:{title:"Export webhook",permalink:"/cookbook/docs/integrations/netsuite/export-webhook"}},E={},T=[{value:"Full data imports (weekly)",id:"full-data-imports-weekly",level:2},{value:"Differential data imports (daily)",id:"differential-data-imports-daily",level:2}];function q(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"full-data-imports-weekly",children:"Full data imports (weekly)"}),"\n",(0,r.jsxs)(n.p,{children:["Schedule: ",(0,r.jsx)(n.code,{children:"0 0 * * 6"})]}),"\n",(0,r.jsxs)(j,{groupId:"netsuite-flavor",queryString:!0,children:[(0,r.jsx)(I,{value:"modern",label:"Modern",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n  // \ud83d\udea7 WORK IN PROGESS \ud83d\udea7\n}\n"})})}),(0,r.jsx)(I,{value:"original",label:"Original",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_config": [\n    {\n      // Inventory items\n      "ns_type": "Item",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_InventoryItem",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_inventoryItem",\n            "attribute_name": "type"\n          }\n        ]\n      }\n    },\n    {\n      // Locations\n      "ns_type": "Location",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Location"\n    },\n    {\n      // Subsidiaries\n      "ns_type": "Subsidiary",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Subsidiary"\n    },\n    {\n      // Vendors\n      "ns_type": "Vendor",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Vendor"\n    }\n  ],\n  "concurrency_limit": 4\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"differential-data-imports-daily",children:"Differential data imports (daily)"}),"\n",(0,r.jsxs)(n.p,{children:["Schedule: ",(0,r.jsx)(n.code,{children:"0 0 * * *"})]}),"\n",(0,r.jsxs)(j,{groupId:"netsuite-flavor",queryString:!0,children:[(0,r.jsx)(I,{value:"modern",label:"Modern",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n  // \ud83d\udea7 WORK IN PROGESS \ud83d\udea7\n}\n"})})}),(0,r.jsxs)(I,{value:"original",label:"Original",children:[(0,r.jsxs)(n.p,{children:["The main idea is to add the following ",(0,r.jsx)(n.code,{children:"last_modified_date"})," search value to each import config:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_config": [\n    {\n      "ns_type": "Item",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_InventoryItem",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_inventoryItem",\n            "attribute_name": "type"\n          },\n          // highlight-start\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n          // highlight-end\n        ]\n      }\n    }\n  ],\n  "concurrency_limit": 4\n}\n'})})]})]})]})}function C(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);