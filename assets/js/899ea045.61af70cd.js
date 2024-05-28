"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[7245],{8050:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=a(5893),r=a(1151),s=a(4866),i=a(5162);const o={title:"Import webhook",sidebar_position:3},c=void 0,l={id:"extensions/netsuite/import-webhook",title:"Import webhook",description:"Notice that each configuration has concurrency_limit configured. The best way how to determine the right number is to visit Setup > Integration > Integration Governance where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.",source:"@site/docs/extensions/netsuite/import-webhook.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/import-webhook",permalink:"/docs/extensions/netsuite/import-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/university/tree/master/docs/extensions/netsuite/import-webhook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Import webhook",sidebar_position:3},sidebar:"extensionsSidebar",previous:{title:"Integration configuration",permalink:"/docs/extensions/netsuite/integration-configuration"},next:{title:"Export webhook",permalink:"/docs/extensions/netsuite/export-webhook"}},d={},h=[{value:"Differential data imports (daily)",id:"differential-data-imports-daily",level:2},{value:"Async settings",id:"async-settings",level:3},{value:"Importing individual records",id:"importing-individual-records",level:3},{value:"Using advanced transaction search",id:"using-advanced-transaction-search",level:2},{value:"Main line advanced search",id:"main-line-advanced-search",level:3},{value:"Initial full data imports",id:"initial-full-data-imports",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Notice that each configuration has ",(0,t.jsx)(n.code,{children:"concurrency_limit"})," configured. The best way how to determine the right number is to visit ",(0,t.jsx)(n.strong,{children:"Setup > Integration > Integration Governance"})," where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number."]}),"\n",(0,t.jsx)(n.h2,{id:"differential-data-imports-daily",children:"Differential data imports (daily)"}),"\n",(0,t.jsxs)(n.p,{children:["Recommended schedule: ",(0,t.jsx)(n.code,{children:"0 0 * * *"})]}),"\n",(0,t.jsxs)(s.Z,{groupId:"netsuite-flavor",queryString:!0,children:[(0,t.jsxs)(i.Z,{value:"modern",label:"Modern",default:!0,children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Visit the following link when trying to figure out how should the import searches be configured (drill down to the required fields): ",(0,t.jsx)(n.a,{href:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package",children:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package"})]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "netsuite_settings": {\n    "account": "XXX_SB1", // Case sensitive!\n    "concurrency_limit": 4,\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  },\n  "import_configs": [\n    {\n      // Currencies\n      "master_data_name": "sandbox_NS_Currency_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "getAll",\n        "method_args": [\n          {\n            "_ns_type": "GetAllRecord",\n            "recordType": "currency"\n          }\n        ]\n      }\n    },\n    {\n      // Inventory items\n      "master_data_name": "sandbox_NS_InventoryItem_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "ItemSearchBasic",\n            "type": {\n              "searchValue": "_inventoryItem",\n              "operator": "anyOf"\n            },\n            "isInactive": {\n              "searchValue": false\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Item Receipts (GRNs)\n      "master_data_name": "sandbox_NS_ItemReceipt_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_itemReceipt"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Locations\n      "master_data_name": "sandbox_NS_Location_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "LocationSearchBasic"\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Purchase Orders\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "searchValue": "_purchaseOrder",\n              "operator": "anyOf"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Subsidiaries\n      "master_data_name": "sandbox_NS_Subsidiary_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "SubsidiarySearchBasic",\n            "isInactive": {\n              "searchValue": "false"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Vendors\n      "master_data_name": "sandbox_NS_Vendor_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "VendorSearchBasic",\n            "isInactive": {\n              "searchValue": "false"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    },\n    {\n      // Vendor Bills (Invoices)\n      "master_data_name": "sandbox_NS_VendorBill_v1",\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "searchValue": "_vendorBill",\n              "operator": "anyOf"\n            },\n            "lastModifiedDate": {\n              "operator": "onOrAfter",\n              "searchValue": "{last_modified_date}"\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      }\n    }\n  ]\n}\n'})})]}),(0,t.jsxs)(i.Z,{value:"original",label:"Original",children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:['The following "original" configuration is ',(0,t.jsx)(n.strong,{children:"deprecated"}),'. Consider using the "modern" version instead.']})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_config": [\n    {\n      // Currencies\n      "ns_type": "Currency",\n      "search_type": "getAll",\n      "master_data_name": "sandbox_NS_Currency_v1"\n    },\n    {\n      // Inventory items\n      "ns_type": "Item",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_InventoryItem_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_inventoryItem",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchBooleanField",\n            "searchValue": "false",\n            "attribute_name": "isInactive"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    },\n    {\n      // Item Receipts (GRNs)\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_ItemReceipt_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_itemReceipt",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    },\n    {\n      // Locations\n      "ns_type": "Location",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Location_v1"\n    },\n    {\n      // Purchase Orders\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_purchaseOrder",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    },\n    {\n      // Subsidiaries\n      "ns_type": "Subsidiary",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Subsidiary_v1"\n    },\n    {\n      // Vendors\n      "ns_type": "Vendor",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Vendor_v1"\n    },\n    {\n      // Vendor Bills (Invoices)\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_VendorBill_v1",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_vendorBill",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n        ]\n      }\n    }\n  ],\n  "concurrency_limit": 4\n}\n'})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"async-settings",children:"Async settings"}),"\n",(0,t.jsx)(n.p,{children:"Usually, all imports (as well as exports) will run in asynchronous mode, see:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you'd like to modify the async settings, you can do so using the following ",(0,t.jsx)(n.code,{children:"async_settings"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_configs": [\n    {\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1",\n      // highlight-start\n      "async_settings": {\n        "retries": 2, // max: 10\n        "max_run_time_s": 7200 // 2 hours default, min: 60 (1 minute), max: 36000 (10 hours)\n        "valid_for_s": 43200 // 12 hours default, min: 300 (5 minutes), max: 172800 (2 days)\n      },\n      // highlight-end\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "searchValue": "_purchaseOrder",\n              "operator": "anyOf"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that this configuration must be applied to all relevant import configs. Each config can even have a different timeouts and retries."}),"\n",(0,t.jsx)(n.h3,{id:"importing-individual-records",children:"Importing individual records"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes, it can be handy to import just one specific record:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_configs": [\n    {\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "tranId": {\n              "operator": "is",\n              "searchValue": "PO-45512"\n            },\n            "_ns_type": "TransactionSearchBasic"\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "async_settings": {\n        "retries": 5\n      },\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1"\n    }\n  ],\n  "netsuite_settings": {\n    // \u2026\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-advanced-transaction-search",children:"Using advanced transaction search"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"TransactionSearchAdvanced"})," can be beneficial if we want to select which fields should be fetched from NetSuite (to lower the payload size as well as data storage requirements). Additionally, it can be useful to fetch additional columns such as ",(0,t.jsx)(n.code,{children:"createdFromJoin"})," or ",(0,t.jsx)(n.code,{children:"applyingTransactionJoin"})," and similar."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Advanced transaction search requires 'Transactions -> Find Transaction' permission."})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"TransactionSearchAdvanced"})," requires two main fields: ",(0,t.jsx)(n.code,{children:"criteria"})," (to specify the actual search) and ",(0,t.jsx)(n.code,{children:"columns"})," (to specify what columns should be returned). It is also important to set ",(0,t.jsx)(n.code,{children:"returnSearchColumns"})," to ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": false,\n  "import_configs": [\n    {\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchAdvanced",\n            // highlight-start\n            "criteria": {\n              // highlight-end\n              "_ns_type": "TransactionSearch",\n              "basic": {\n                "_ns_type": "TransactionSearchBasic",\n                "type": {\n                  "operator": "anyOf",\n                  "searchValue": "_purchaseOrder"\n                },\n                "dateCreated": {\n                  "operator": "onOrAfter",\n                  "searchValue": "2024-01-01T00:00:01Z"\n                }\n              }\n            },\n            // highlight-start\n            "columns": {\n              // highlight-end\n              "_ns_type": "TransactionSearchRow",\n              "basic": {\n                "_ns_type": "TransactionSearchRowBasic",\n                "tranId": {},\n                "tranDate": {},\n                "internalId": {},\n                "recordType": {}\n              },\n              "createdFromJoin": {\n                "_ns_type": "TransactionSearchRowBasic",\n                "tranId": {},\n                "internalId": {},\n                "recordType": {}\n              }\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            // highlight-start\n            "returnSearchColumns": true\n            // highlight-end\n          }\n        }\n      },\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1"\n    }\n  ],\n  "netsuite_settings": {\n    // \u2026\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"main-line-advanced-search",children:"Main line advanced search"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the advanced search returns one record for each line item. In case we'd not care about the line items, we can change the search behavior to return one line per main line record by configuring ",(0,t.jsx)(n.code,{children:"criteria.basic.mainLine"})," (see ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4459563851.html",children:"Main Line in NetSuite"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": "TransactionSearchAdvanced",\n  "columns": {\n    "_ns_type": "TransactionSearchRow",\n    "basic": {\n      // \u2026\n    }\n  },\n  "criteria": {\n    "_ns_type": "TransactionSearch",\n    "basic": {\n      "_ns_type": "TransactionSearchBasic",\n      // highlight-start\n      "mainLine": {\n        "searchValue": true\n      }\n      // highlight-end\n      // \u2026\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"initial-full-data-imports",children:"Initial full data imports"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Rossum's team of Solution Architects is typically needed for large NetSuite imports and recoveries. Consider contacting ",(0,t.jsx)(n.a,{href:"https://rossum.ai/form/contact/",children:"Rossum Sales"})," department or Rossum Support team."]})}),"\n",(0,t.jsxs)(n.p,{children:["When creating a new organization, the Master Data Hub collections are empty and need to be imported from NetSuite. The most naive approach is to simply run the ",(0,t.jsx)(n.a,{href:"#differential-data-imports-daily",children:"differential import from above"})," which will on the first run import everything. This is because when the collections are empty, the ",(0,t.jsx)(n.code,{children:"last_modified_date"})," will default to January 1st, 1970 (effectively resulting in a full import)."]}),"\n",(0,t.jsxs)(n.p,{children:["However, initial imports are typically very large and can take ",(0,t.jsx)(n.strong,{children:"several days"})," when ran sequentially. It's expected that the initial imports can fail during this period. Moreover, the maximum runtime of import jobs is currently ",(0,t.jsx)(n.strong,{children:"10 hours"}),". The following section describes how to deal with such failures and how to approach initial imports in a less naive and more controlled way."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Consider whether full dataset import is necessary. It might be enough to pull the last year only, for example."})}),"\n",(0,t.jsxs)(n.p,{children:['All imported records typically have sorting specified. For example, all transactions are typically sorted by "Date Created", see: ',(0,t.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html",children:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html"})]}),"\n",(0,t.jsx)(n.p,{children:"We can leverage this default sorting and partition the initial imports to years (so that we can download several years in parallel):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "import_configs": [\n    {\n      // Download Purchase Orders for year 2022:\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "dateCreated": {\n              // highlight-start\n              "operator": "within",\n              "searchValue": "2022-01-01T00:00:01Z",\n              "searchValue2": "2023-01-01T00:00:01Z"\n              // highlight-end\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1"\n    },\n    {\n      // Download Purchase Orders for year 2023:\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "_ns_type": "TransactionSearchBasic",\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "dateCreated": {\n              // highlight-start\n              "operator": "within",\n              "searchValue": "2023-01-01T00:00:01Z",\n              "searchValue2": "2024-01-01T00:00:01Z"\n              // highlight-end\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1"\n    },\n    {\n      // Download Purchase Orders for the rest of the years:\n      "payload": {\n        "method_name": "search",\n        "method_args": [\n          {\n            "type": {\n              "operator": "anyOf",\n              "searchValue": "_purchaseOrder"\n            },\n            "_ns_type": "TransactionSearchBasic",\n            "dateCreated": {\n              // highlight-start\n              "operator": "onOrAfter",\n              "searchValue": "2024-01-01T00:00:01Z"\n              // highlight-end\n            }\n          }\n        ],\n        "method_headers": {\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          }\n        }\n      },\n      "master_data_name": "sandbox_NS_PurchaseOrder_v1"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is necessary to observe whether all the partitions were imported successfully. In case they were not (for example some network issue cause the import jobs to fail), we can adjust the ",(0,t.jsx)(n.code,{children:"within"})," window to ignore the already imported dates and restart the import. To check the latest available date in the partition, you can use the following MongoDB query:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "createdDate": {\n          "$gte": { "$date": "2024-01-01T00:00:01Z" },\n          "$lte": { "$date": "2025-01-01T00:00:01Z" }\n        }\n      }\n    },\n    { "$sort": { "createdDate": -1 } },\n    { "$limit": 10 },\n    { "$project": { "createdDate": 1, "itemList": 1 } }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Confusingly, NetSuite returns ",(0,t.jsx)(n.code,{children:"createdDate"})," field but the SOAP API exposes ",(0,t.jsx)(n.code,{children:"dateCreated"})," search argument instead!"]})}),"\n",(0,t.jsxs)(n.p,{children:["After the successful import, it is a good idea to run differential import (using ",(0,t.jsx)(n.code,{children:"lastModifiedDate"}),") for the period during which we were performing the initial migration (to synchronize records that were updated in the meantime):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "lastModifiedDate": {\n    "operator": "onOrAfter",\n    "searchValue": "__date of the full import start__" // replace with ISO date format\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"And finally, it is possible to switch to differential imports only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "lastModifiedDate": {\n    "operator": "onOrAfter",\n    "searchValue": "{last_modified_date}"\n  }\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>i});a(7294);var t=a(512);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>S});var t=a(7294),r=a(512),s=a(2466),i=a(6550),o=a(469),c=a(1980),l=a(7392),d=a(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function _(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,h]=p({queryString:a,groupId:r}),[_,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=l??_;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function b(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=o[a].value;r!==t&&(l(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=_(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function S(e){const n=(0,f.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(7294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);