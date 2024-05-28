"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2941],{8701:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151);const a={sidebar_position:1,title:"Getting Started with Rossum",slug:"getting-started",description:"Basic Rossum platform concepts all integrators should be familiar with."},r=void 0,o={id:"guides/getting-started",title:"Getting Started with Rossum",description:"Basic Rossum platform concepts all integrators should be familiar with.",source:"@site/docs/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/docs/guides/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/university/tree/master/docs/guides/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started with Rossum",slug:"getting-started",description:"Basic Rossum platform concepts all integrators should be familiar with."},sidebar:"guidesSidebar",next:{title:"Rossum in a Document Workflow",permalink:"/docs/guides/rossum-in-a-document-pipeline"}},c={},d=[];function l(e){const t={a:"a",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This page will give you the first feel about Rossum. You'll be up and running in a jiffy!"}),"\n",(0,n.jsxs)(t.p,{children:["Rossum is a ",(0,n.jsx)(t.a,{href:"https://rossum.ai/help/faq/what-is-cognitive-data-capture/",children:"cognitive data capture"})," platform for information extraction from business documents. It consists of four main components: the ",(0,n.jsx)(t.strong,{children:"AI Core Engine"})," that can automatically detect data fields, the ",(0,n.jsx)(t.strong,{children:"Validation Interface"})," for data verification, correction and training, the ",(0,n.jsx)(t.strong,{children:"Extension Environment"})," that allows custom business rules to be plugged in and applications built around Rossum, and the ",(0,n.jsx)(t.strong,{children:"Reporting Engine"})," for process analysis and efficiency improvements."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Rossum integration architecture",src:s(7147).Z+"",width:"1526",height:"703"})}),"\n",(0,n.jsxs)(t.p,{children:["The key to understanding how Rossum works is understanding the flow of document through the platform. Documents are received first, then pre-processed using the AI engine, then available for review and eventually the captured data are exported to downstream systems. Documents flow within potentially multiple ",(0,n.jsx)(t.em,{children:"queues"})," \u2013 they separate documents handled differently, and each queue can be configured to capture different set of datapoints (so-called ",(0,n.jsx)(t.em,{children:"schema"}),")."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Document lifecycle 1",src:s(7698).Z+"",width:"1714",height:"552"})}),"\n",(0,n.jsxs)(t.p,{children:["In terms of states, during a typical ",(0,n.jsx)(t.a,{href:"https://rossum.ai/help/article/document-lifecycle-a-guide-to-the-document-statuses/",children:"document lifecycle"}),", the documents are ",(0,n.jsx)(t.strong,{children:"imported"})," first, then transition through the ",(0,n.jsx)(t.strong,{children:"to review"})," state, and usually end up in the ",(0,n.jsx)(t.strong,{children:"exported"})," state \u2013 at that point, the capture data may be downloaded, or an extension was already notified and the data were pushed to it. If something goes wrong, documents may of course end up in error states, or deleted or postponed."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Document lifecycle 2",src:s(303).Z+"",width:"1364",height:"482"})}),"\n",(0,n.jsx)(t.p,{children:"There are multiple ways to integrate Rossum in your particular process, ranging from simple to powerful:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Manual integration"})," with files uploaded manually or via email, and captured data downloaded as XML or spreadsheet manually as well and imported to an ERP."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"./integrate-rossum-with-zapier",children:"Zapier"})," integration"]}),' that automates integration over the internet (ideal for integration with modern cloud services) by using simple graphical workflows ("Zaps") and no programming required.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"RPA integration"})," that automates integration on the OS level (ideal for integration with on-premise systems using their graphical user interfaces) by using an RPA workflow such as a UiPath-based one."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Programmatic API integration"})," that runs as a separate service interacting with Rossum \u2013 it can apply business rules, import and get notified about finalized documents, and even customize the validation interface with interactive functionality such as dynamic supplier matching."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We also call the programmatic API integration ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://developers.rossum.ai/docs/extensions-overview",children:"Rossum Extensions"})}),". They can either call the Rossum API, or get called by Rossum pro-actively. The ability for anyone to implement and run their own extension is crucial for us at Rossum, as it allows true customization to a particular need."]}),"\n",(0,n.jsxs)(t.p,{children:["Start experimenting with integrating Rossum right away! ",(0,n.jsx)(t.a,{href:"https://elis.rossum.ai/registration",children:"Create a fresh trial account here."})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7698:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/document-lifecycle-1-b55551805bd60e2d3d2dc792bff1936f.png"},303:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/document-lifecycle-2-4ea0b3597f88f4f272be0089037ada03.png"},7147:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/rossum_integration_architecture-5361bc3767544c7c50f50190216d2c45.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var n=s(7294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);