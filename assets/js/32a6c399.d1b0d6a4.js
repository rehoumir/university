"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[887],{5703:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>_,metadata:()=>r,toc:()=>p});var i=t(5893),o=t(1151);const _={title:"Export configuration",sidebar_position:2},a=void 0,r={id:"extensions/workday/export-configuration",title:"Export configuration",description:"PO-backed invoice",source:"@site/docs/extensions/workday/export-configuration.md",sourceDirName:"extensions/workday",slug:"/extensions/workday/export-configuration",permalink:"/docs/extensions/workday/export-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/workday/export-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Export configuration",sidebar_position:2},sidebar:"extensionsSidebar",previous:{title:"Import configuration",permalink:"/docs/extensions/workday/import-configuration"}},c={},p=[{value:"PO-backed invoice",id:"po-backed-invoice",level:2},{value:"Non-PO-backed invoices",id:"non-po-backed-invoices",level:2}];function u(n){const e={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"po-backed-invoice",children:"PO-backed invoice"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "wsdl": {\n        "domain": "wd3-impl-services1.workday.com",\n        "tenant": "\u2026",\n        "api_version": "v39.1"\n      },\n      "request": {\n        "mapping": {\n          "Add_Only": true,\n          "Supplier_Invoice_Data": {\n            "Memo": "@{memo}",\n            "Submit": true,\n            "Invoice_Date": "@{date_issue}",\n            "Company_Reference": {\n              "ID": [\n                {\n                  "type": "Organization_Reference_ID",\n                  "_value_1": "@{entity_wd}"\n                }\n              ]\n            },\n            "Currency_Reference": {\n              "ID": [\n                {\n                  "type": "Currency_ID",\n                  "_value_1": "@{currency}"\n                }\n              ]\n            },\n            "External_PO_Number": "@{order_id}",\n            "Supplier_Reference": {\n              "ID": [\n                {\n                  "type": "Supplier_ID",\n                  "_value_1": "@{supplier_wd}"\n                }\n              ]\n            },\n            "Control_Amount_Total": "@{amount_total}",\n            "Suppliers_Invoice_Number": "@{document_id}",\n            "Invoice_Line_Replacement_Data": {\n              "$FOR_EACH_SCHEMA_ID$": {\n                "mapping": {\n                  "Quantity": "@{item_quantity}",\n                  "Unit_Cost": "@{item_amount_base}",\n                  "Line_Order": "10000001",\n                  "Extended_Amount": "@{item_total_base}",\n                  "Item_Description": "@{item_description}",\n                  "Purchase_Order_Line_Reference": {\n                    "ID": [\n                      {\n                        "type": "Line_Number",\n                        "_value_1": "@{item_order_line_nr_wd}",\n                        "parent_id": "@{item_document_number_po_wd}",\n                        "parent_type": "Document_Number"\n                      }\n                    ]\n                  }\n                },\n                "schema_id": "line_item"\n              }\n            },\n            "Supplier_Connection_Reference": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": {\n                  "ID": [\n                    {\n                      "type": "Supplier_Connection_ID",\n                      "_value_1": "@{account_num}"\n                    }\n                  ]\n                },\n                "schema_id": "account_num",\n                "fallback_mapping": {}\n              }\n            },\n            "Statutory_Invoice_Type_Reference": {\n              "ID": [\n                {\n                  "type": "Invoice_Type_ID",\n                  "_value_1": "@{invoice_type_wd}"\n                }\n              ]\n            }\n          }\n        },\n        "service": "Resource_Management",\n        "operation": "Submit_Supplier_Invoice"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"non-po-backed-invoices",children:"Non-PO-backed invoices"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "debug": true,\n  "configurations": [\n    {\n      "wsdl": {\n        "domain": "wd3-impl-services1.workday.com",\n        "tenant": "\u2026",\n        "api_version": "v39.1"\n      },\n      "request": {\n        "mapping": {\n          "Add_Only": true,\n          "Supplier_Invoice_Data": {\n            "Memo": "@{memo}",\n            "Submit": true,\n            "Tax_Amount": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": "@{amount_total_tax}",\n                "schema_id": "amount_total_tax"\n              }\n            },\n            "Invoice_Date": "@{date_issue}",\n            "Company_Reference": {\n              "ID": [\n                {\n                  "type": "Organization_Reference_ID",\n                  "_value_1": "@{entity_wd}"\n                }\n              ]\n            },\n            "Currency_Reference": {\n              "ID": [\n                {\n                  "type": "Currency_ID",\n                  "_value_1": "@{currency}"\n                }\n              ]\n            },\n            "Supplier_Reference": {\n              "ID": [\n                {\n                  "type": "Supplier_ID",\n                  "_value_1": "@{supplier_wd}"\n                }\n              ]\n            },\n            "Control_Amount_Total": "@{amount_total}",\n            "Suppliers_Invoice_Number": "@{document_id}",\n            "Default_Tax_Option_Reference": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": {\n                  "ID": [\n                    {\n                      "type": "Tax_Option_ID",\n                      "_value_1": "@{tax_option_id}"\n                    }\n                  ]\n                },\n                "schema_id": "tax_option_id",\n                "fallback_mapping": {}\n              }\n            },\n            "Invoice_Line_Replacement_Data": {\n              "$FOR_EACH_SCHEMA_ID$": {\n                "mapping": {\n                  "Line_Order": "10000001",\n                  "Extended_Amount": "@{item_total_base}",\n                  "Item_Description": "@{item_description}",\n                  "Worktags_Reference": [\n                    {\n                      "ID": [\n                        {\n                          "type": "Cost_Center_Reference_ID",\n                          "_value_1": "@{item_cost_center_wd}"\n                        }\n                      ]\n                    },\n                    {\n                      "$IF_SCHEMA_ID$": {\n                        "mapping": {\n                          "ID": [\n                            {\n                              "type": "Project_ID",\n                              "_value_1": "@{item_project_wd}"\n                            }\n                          ]\n                        },\n                        "schema_id": "item_project_wd",\n                        "fallback_mapping": {}\n                      }\n                    }\n                  ],\n                  "Purchase_Item_Reference": {\n                    "ID": [\n                      {\n                        "type": "Purchase_Item_ID",\n                        "_value_1": "@{item_purchase_item_wd}"\n                      }\n                    ]\n                  },\n                  "Tax_Applicability_Reference": {\n                    "$IF_SCHEMA_ID$": {\n                      "mapping": {\n                        "ID": [\n                          {\n                            "type": "Tax_Applicability_ID",\n                            "_value_1": "@{item_tax_applicability_id}"\n                          }\n                        ]\n                      },\n                      "schema_id": "item_tax_applicability_id",\n                      "fallback_mapping": {}\n                    }\n                  }\n                },\n                "schema_id": "line_item"\n              }\n            },\n            "Supplier_Connection_Reference": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": {\n                  "ID": [\n                    {\n                      "type": "Supplier_Connection_ID",\n                      "_value_1": "@{account_num}"\n                    }\n                  ]\n                },\n                "schema_id": "account_num",\n                "fallback_mapping": {}\n              }\n            },\n            "Statutory_Invoice_Type_Reference": {\n              "ID": [\n                {\n                  "type": "Invoice_Type_ID",\n                  "_value_1": "@{invoice_type_wd}"\n                }\n              ]\n            }\n          }\n        },\n        "service": "Resource_Management",\n        "operation": "Submit_Supplier_Invoice"\n      }\n    }\n  ]\n}\n'})})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>a});var i=t(7294);const o={},_=i.createContext(o);function a(n){const e=i.useContext(_);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(_.Provider,{value:e},n.children)}}}]);