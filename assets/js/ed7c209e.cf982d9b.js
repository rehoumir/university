"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[3350],{9167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),i=t(1151);const s={sidebar_position:1,title:"Configuration examples"},r=void 0,a={id:"extensions/generic-rest-api-export/configuration-examples",title:"Configuration examples",description:"This extension currently expects file to be generated using Custom format exports extension.",source:"@site/docs/extensions/generic-rest-api-export/configuration-examples.md",sourceDirName:"extensions/generic-rest-api-export",slug:"/extensions/generic-rest-api-export/configuration-examples",permalink:"/docs/extensions/generic-rest-api-export/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/generic-rest-api-export/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Generic REST API export",permalink:"/docs/extensions/generic-rest-api-export/"},next:{title:"Line item grouping",permalink:"/docs/extensions/line-item-grouping/"}},c={},l=[{value:"Simple REST API call",id:"simple-rest-api-call",level:2},{value:"REST API call with OAuth2",id:"rest-api-call-with-oauth2",level:2},{value:"Sending <code>multipart/form-data</code>",id:"sending-multipartform-data",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["This extension currently expects file to be generated using ",(0,o.jsx)(n.a,{href:"../custom-format-exports",children:"Custom format exports extension"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"simple-rest-api-call",children:"Simple REST API call"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_id": "export_annotation_to_csv",\n  "request": {\n    "url": "https://webhook.site/XXX-ZZZ",\n    "method": "POST",\n    "headers": {\n      "Content-Type": "text/plain"\n    },\n    "content": "{file.content}"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"rest-api-call-with-oauth2",children:"REST API call with OAuth2"}),"\n",(0,o.jsx)(n.p,{children:"The request can be extended to use OAuth2:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_id": "export_annotation_to_csv",\n  "request": {\n    "url": "https://webhook.site/XXX-ZZZ",\n    "method": "POST",\n    "headers": {\n      "Content-Type": "text/plain",\n      "Authorization": "Bearer {secret.access_token}"\n    },\n    "content": "{file.content}"\n  },\n  "auth": {\n    "url": "http://custom.url/token",\n    "method": "POST",\n    "data": {\n      "username": "your_username",\n      "password": "{secret.password}"\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"access_token"})," is automatically retrieved using given credentials and saved to hook secrets for later reuse."]}),"\n",(0,o.jsxs)(n.h2,{id:"sending-multipartform-data",children:["Sending ",(0,o.jsx)(n.code,{children:"multipart/form-data"})]}),"\n",(0,o.jsxs)(n.p,{children:["The following config will translate in an HTTP POST request with ",(0,o.jsx)(n.code,{children:"Content-Type: multipart/form-data"}),". Both file and additional data will be sent. For sending the file, the ",(0,o.jsx)(n.code,{children:"file_key"})," is used as a form-data ",(0,o.jsx)(n.code,{children:"name; filename"})," and content type are taken from the saved document."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_id": "export_annotation_to_csv",\n  "request": {\n    "url": "https://webhook.site/XXX-ZZZ",\n    "method": "POST",\n    "headers": {\n      "Authorization": "Bearer {secret.token}"\n    },\n    "file_name": "@{document_id}.json",\n    "file_key": "file",\n    "request_data": {\n      "other_field": "@{vendor}"\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);