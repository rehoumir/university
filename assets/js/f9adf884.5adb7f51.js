"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[7092],{7726:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(5893),i=s(1151);const o={title:"NetSuite: Considerations & Limitations",sidebar_position:4,sidebar_label:"Considerations & Limitations"},r="Considerations & Limitations",a={id:"extensions/netsuite/considerations",title:"NetSuite: Considerations & Limitations",description:"Default webhook timeout is 30 seconds",source:"@site/docs/extensions/netsuite/considerations.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/considerations",permalink:"/docs/extensions/netsuite/considerations",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/netsuite/considerations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NetSuite: Considerations & Limitations",sidebar_position:4,sidebar_label:"Considerations & Limitations"},sidebar:"extensionsSidebar",previous:{title:"Export configuration",permalink:"/docs/extensions/netsuite/export-configuration"},next:{title:"REST API export",permalink:"/docs/extensions/rest-api-export/"}},d={},l=[{value:"Default webhook timeout is 30 seconds",id:"default-webhook-timeout-is-30-seconds",level:2},{value:"CURL version example",id:"curl-version-example",level:3},{value:"Webhook retries 5\xd7 on failed requests",id:"webhook-retries-5-on-failed-requests",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"considerations--limitations",children:"Considerations & Limitations"}),"\n",(0,n.jsx)(t.h2,{id:"default-webhook-timeout-is-30-seconds",children:"Default webhook timeout is 30 seconds"}),"\n",(0,n.jsx)(t.p,{children:"By default, all webhooks in Rossum timeout after 30 seconds. Usually, this time is enough for most webhooks. However, some more complex documents (longer ones with more line items) can take longer than that to export."}),"\n",(0,n.jsx)(t.p,{children:"To fix this issue, it is possible to set custom timeout by calling the following API endpoint:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"PATCH /v1/hooks/{id}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Request payload example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "config": {\n    // highlight-start\n    "timeout_s": 60\n    // highlight-end\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"curl-version-example",children:"CURL version example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl --location --request PATCH 'https://[EAMPLE].rossum.app/api/v1/hooks/[HOOK_ID]' \\\n--header 'Authorization: Bearer [API_TOKEN]' \\\n--header 'Content-Type: application/json' \\\n--data '{\"timeout_s\": 60}'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["See API reference for more details: ",(0,n.jsx)(t.a,{href:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook",children:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook"})]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The maximum allowed timeout is 60 seconds. Consider contacting ",(0,n.jsx)(t.a,{href:"https://rossum.ai/form/contact/",children:"Rossum Sales"})," department or Rossum Support team if you need help finding alternative solutions."]})}),"\n",(0,n.jsx)(t.h2,{id:"webhook-retries-5-on-failed-requests",children:"Webhook retries 5\xd7 on failed requests"}),"\n",(0,n.jsx)(t.p,{children:"By default, webhooks are retried 5\xd7 on failed requests. This behavior can be inconvenient if it's not possible to guarantee idempotency of the requests (for example, NetSuite exports). This can be changed or completely disabled using the following API endpoint:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"PATCH /v1/hooks/{id}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Request payload example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "config": {\n    // highlight-start\n    "retry_count": 0\n    // highlight-end\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Use number ",(0,n.jsx)(t.code,{children:"0"})," to disable retries or any other number to change the default number of retries."]}),"\n",(0,n.jsxs)(t.p,{children:["See API reference for more details: ",(0,n.jsx)(t.a,{href:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook",children:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);