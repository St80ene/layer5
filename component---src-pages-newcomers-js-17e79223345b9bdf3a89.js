(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5043],{14538:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(67294),l=n(70456),r=n(20092),c=n(36179),o=n(45027),m=n(34967),s=n(97956),i=n(38155),u=l.ZP.div.withConfig({displayName:"webformstyle__Webform",componentId:"sc-12fj3qb-0"})(['\n  \n  .timeline {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 50px 0;\n  }\n  \n  .li {\n    transition: all 200ms ease-in;\n  }\n  \n  .timestamp {\n    margin-bottom: 20px;\n    padding: 0px 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: 100;\n  }\n  \n  .status {\n    padding: 0px 40px;\n    display: flex;\n    justify-content: center;\n    border-top: 5px solid #EFEFEF;\n    position: relative;\n    transition: all 200ms ease-in;\n  }\n  .status:before {\n    content: "";\n    width: 25px;\n    height: 25px;\n    background-color: white;\n    border-radius: 25px;\n    border: 5px solid #EFEFEF;\n    position: absolute;\n    top: -15px;\n    left: 42%;\n    transition: all 200ms ease-in;\n  }\n\n  .li.active .status::before {\n    border-color: #00B39F;\n  }\n\n  .li.complete .status,\n  .li.active .status {\n    border-top: 5px solid #00B39F;\n  }\n  .li.complete .status:before {\n    background-color: #00B39F;\n    border: none;\n    transition: all 200ms ease-in;\n  }\n  .li.complete .status h4 {\n    color: #66DC71;\n  }\n\n  .required-sign {\n    color: #8b0000;\n  }\n\n  .checkbox-label {\n    font-size: .8rem;\n  }\n  \n  @media (min-width: 320px) and (max-width: 700px) {\n    .status {\n      border-top: 3px solid #EFEFEF;\n      padding: 0px 25px;\n    }\n    .status:before {\n      content: "";\n      width: 20px;\n      height: 20px;\n      border-radius: 20px;\n      border: 3px solid #EFEFEF;\n      top: -12px;\n      left: -10%\n    }\n  }\n  .member-header{\n    align-items:center;\n    padding-left:200px\n  }\n\n    .title {\n        font-weight: 700;\n        margin: 70px 0px 10px 0px;\n    }\n\n    .para {\n        color: #777777;\n    }\n    .label {\n      font-size: 1rem;\n    }\n\n    .container-1 {\n      margin: 40px 0;\n      \n      .text {\n        margin: 80px 0;\n      }\n    }\n\n    .btn-prev1 {\n      float: right;\n      margin: 20px 0;\n      background-color: white; \n      border: none;\n      color: #828C8C;\n      padding: 12px 15px;\n      font-size: 16px;\n      cursor: pointer;\n      margin: 0 5px;\n\n      .back {\n        font-size: 20px;\n      }\n    }\n\n    .btn-prev1:hover {\n      transition: all 200ms ease-in;\n      color: #00B39F;\n    }\n\n    .form {\n        margin: 40px 40px;\n\n        .form-name {\n            font-weight: 600;\n            margin: 20px 0px 5px 3px;\n            display: block;\n        }\n\n        .text-field {\n            width: 100%;\n            border: 1px solid black;\n            border-radius: 10px;\n            padding: 1rem .5rem;\n            font-size: 1rem;\n        }\n\n        .text-field:focus {\n          border: 2px solid #00B39F;\n\n        }\n\n        .form-select {\n            width: 150px;\n            border: 1px solid black;\n            border-radius: 10px;\n            padding: 1rem .5rem;\n        }\n\n        .upload-field {\n            width: 100%;\n            border: 1px dashed black;\n            border-radius: 15px;\n            height: 50px;\n            padding: 12px;\n        }\n\n        .form-check {\n          width: 20px;\n          height: 20px;\n          border-radius: 15px;\n          margin: 2px 10px !important;\n        }\n\n        .btn {\n          float: right;\n          margin: 20px 0;\n        }\n\n      }\n      .btn-wrapper {\n        float: right;\n        width: 350px;\n\n        .btn-next {\n          float: left;\n        }\n\n        button.btn-prev {\n          background-color: white; \n          border: none;\n          color: #828C8C;\n          float: left;\n          padding: 12px 15px;\n          font-size: 16px;\n          cursor: pointer;\n          margin: 0 5px;\n\n          .back {\n            font-size: 20px;\n          }\n        }\n\n        .btn-prev:hover {\n          transition: all 200ms ease-in;\n          color: #00B39F;\n        }\n      }\n\n    .center {\n        /* display: flex;\n        flex-wrap: wrap; */\n        align-items: center;\n        justify-content: center;\n        margin: 90px;\n        padding:0px 10px;\n    }\n\n    .option {\n        cursor: pointer;\n        flex: 1 1 160px;\n        /* border-radius: 15px; */\n        background-color: #C9FCF6;\n        margin: 25px 5px;\n        color: #00B39F;\n        text-align: center;\n        padding: 25px 10px; \n    }\n    .option:hover{\n        background-color: #00B39F;\n        color:white;\n    }\n\n    .black-box {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      min-height: 400px;\n      margin: 3rem 13%;\n      background-color: ',";\n      \n      h2, h4 {\n        color: white;\n      }\n      h4{\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n      }\n      p {\n        margin-top: .85rem;\n        color: white;\n      }\n\n      .btn-box {\n\n        .btn-one, .btn-two {\n          margin: .65rem;\n        }\n\n        .btn-one:hover {\n          color: ",";\n        }\n        .btn-two:hover {\n          color: ",";\n        }\n      }\n\n      @media only screen and (max-width: 600px) {\n        .btn-box {\n          width: 100%;\n        }\n      }\n    }\n"],(function(e){return e.theme.darkJungleGreenColor}),(function(e){return e.theme.darkJungleGreenColor}),(function(e){return e.theme.darkJungleGreenColor})),p=n(22626),h=l.ZP.div.withConfig({displayName:"SlackLinkNotif__SlackNotif",componentId:"sc-11rv4r7-0"})(["\n    .container {\n        background-color: #FFF7D8; \n        padding: 16px 0px 16px 0px;\n    }\n\n    .text { \n        text-align: center;\n    }\n\n    .notice {\n      background-color: #00B39F;\n      border-radius: 50%;\n      color: white;\n      padding: 1px 10px;\n      font-weight: 700;\n    }\n"]),b=function(){return a.createElement(h,null,a.createElement("div",{className:"container"},a.createElement("div",{className:"text"},a.createElement("span",{className:"notice"}," !")," If you have not already joined us in Slack, jump in! ",a.createElement(p.Z,{secondary:!0,title:"Join Now",url:"http://slack.layer5.io/",external:!0}))))},d=n(57067),E=(n.p,n.p,n(75708)),f=n(96633),g=n.n(f),N=function(){var e=(0,a.useState)(0),t=e[0],n=e[1],l=(0,a.useState)(""),r=l[0],c=l[1],o=(0,a.useState)({}),m=o[0],s=o[1],i=(0,a.useState)({}),h=i[0],f=i[1],N=(0,a.useState)({}),y=N[0],x=N[1],k=(0,a.useState)(!1),w=k[0],v=k[1],F=function(){4===t&&v(!0),window.scrollTo(0,0)},M=function(){n(t-1)};(0,a.useEffect)((function(){w&&g().post("https://hook.integromat.com/64g6bpjsr37eec49zo3oawgw91n9a6xg",{memberFormOne:m,MemberFormThirdValue:h,MemberFormFourValue:y,role:r})}),[w]);var S=function(){return a.createElement("ul",{className:"timeline",id:"timeline"},a.createElement("li",{className:0===t?"li active":t>0?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:1===t?"li active":t>1?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:2===t?"li active":t>2?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:3===t?"li active":t>3?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:t>=4?"li complete":"li"},a.createElement("div",{className:"status"})))},C=function(){return a.createElement(d.W2,null,a.createElement("h2",{className:"title"},"New Community Member"),a.createElement("p",{className:"para"},"Hi! Welcome to the Layer5 community. As you get oriented with the community and its projects, will you consider filling in this form? It helps us get familiarized with you and you with the ongoing projects and community. There is much to learn around the technologies at-hand. We'll look to get you acclimated and engaged around your areas of interest and passion. "),a.createElement(E.J9,{initialValues:{firstname:"",lastname:"",email:"",occupation:"",org:"",github:"",twitter:"",linkedin:"",tshirtSize:"",picture:""},onSubmit:function(e){s(e),n(1),F()}},a.createElement(E.l0,{className:"form",method:"post"},a.createElement("label",{htmlFor:"email",className:"form-name"},"Email Address ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(E.gN,{type:"text",className:"text-field",id:"email",name:"email",required:!0}),a.createElement("label",{htmlFor:"fname",className:"form-name"},"First Name ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(E.gN,{type:"text",className:"text-field",id:"firstname",name:"firstname",required:!0}),a.createElement("label",{htmlFor:"lname",className:"form-name"},"Last Name ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(E.gN,{type:"text",className:"text-field",id:"lastname",name:"lastname",required:!0}),a.createElement("label",{htmlFor:"occupation",className:"form-name"},"Occupation / Title"),a.createElement(E.gN,{type:"text",className:"text-field",id:"occupation",name:"occupation"}),a.createElement("label",{htmlFor:"org",className:"form-name"},"Organization / Company / School"),a.createElement(E.gN,{type:"text",className:"text-field",id:"org",name:"org"}),a.createElement("label",{htmlFor:"github",className:"form-name"},"GitHub"),a.createElement(E.gN,{type:"url",placeholder:"https://github.com/",className:"text-field",id:"github",name:"github",pattern:"http(s?)(:\\/\\/)((www.)?)github.com(\\/)([a-zA-z0-9\\-_]+)"}),a.createElement("label",{htmlFor:"twitter",className:"form-name"},"Twitter"),a.createElement(E.gN,{type:"url",placeholder:"https://twitter.com/",className:"text-field",id:"twitter",name:"twitter",pattern:"http(s?)(:\\/\\/)((www.)?)twitter.com(\\/)([a-zA-z0-9\\-_]+)"}),a.createElement("label",{htmlFor:"linkedin",className:"form-name"},"Linkedin"),a.createElement(E.gN,{type:"url",placeholder:"https://www.linkedin.com/",className:"text-field",id:"linkedin",name:"linkedin"}),a.createElement("label",{htmlFor:"tshirtSize",className:"form-name"},"T-shirt size"),a.createElement("div",{role:"group","aria-labelledby":"my-radio-group"},a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"tshirtSize",value:"XS"}),"XS"),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"tshirtSize",value:"S"}),"S"),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"tshirtSize",value:"M"}),"M"),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"tshirtSize",value:"L"}),"L"),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"tshirtSize",value:"XL"}),"XL"),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"tshirtSize",value:"XXL"}),"XXL")),a.createElement("label",{htmlFor:"picture",className:"form-name"},"Picture"),a.createElement(E.gN,{type:"url",className:"text-field",id:"picture",name:"picture"}),a.createElement(p.Z,{secondary:!0,type:"submit",className:"btn",title:"Next Step"})," ",a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null))))},I=function(){return a.createElement(d.W2,null,a.createElement("h2",{className:"title"},"About You and Why You're Here"),a.createElement("p",{className:"para"},"Which describes your main focus as a community member?"," "),a.createElement("div",{className:"center"},a.createElement("div",{className:"option",onClick:function(){c("Contributor"),n(2)}},"I'm here as a Contributor"),a.createElement("div",{className:"option",onClick:function(){c("Developer"),n(2)}},"I'm here as a Developer"),a.createElement("div",{className:"option",onClick:function(){c("User"),n(2)}},"I'm here as a User and Contibutor"),a.createElement("div",{className:"option",onClick:function(){c("Participant"),n(2)}},"I'm here as a Community Participant")),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{className:"btn-wrapper"},a.createElement("button",{onClick:M,className:"btn-prev"},a.createElement("span",{className:"back"},"←")," Previous step")),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null))},L=function(){return a.createElement(d.W2,null,a.createElement("h2",{className:"title"},"Layer5 and You"),a.createElement(E.J9,{initialValues:{projects:[],tutorials:[],meshMate:[],interests:"",profiency:"",interestToShareContribution:"",areaOfFocus:[]},onSubmit:function(e){f(e),n(3),F()}},a.createElement(E.l0,{className:"form"},a.createElement("p",{className:"form-name"},"Which project(s) are of interest to you?"),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"Meshery",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Meshery")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"Service Mesh Performance (SMP)",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Service Mesh Performance (SMP)")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"NightHawk",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"NightHawk")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"Service Mesh Landscape",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Service Mesh Landscape")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"WASM Filter Hub",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"WASM Filter Hub")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"I'm not sure,yet. I'm still exploring",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"I'm not sure,yet. I'm still exploring")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"projects",value:"All of them!",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"All of them!")),a.createElement("p",{className:"form-name"},"Mark any of the following 101 tutorials that you would like to receive."),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"A Git and Github primer",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"A Git and Github primer")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"Contributing to Meshery UI with ReactJS, NextJS and Material UI",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Contributing to Meshery UI with ReactJS, NextJS and Material UI")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"Introduction to Service Meshes",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to Service Meshes")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"Introduction to using a service mesh management plane: Meshery",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to using a service mesh management plane: Meshery")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"How to evaluate service mesh performance and analyze the data",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How to evaluate service mesh performance and analyze the data")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"How gRPC is used in Meshery and Service Mesh Performance (SMP)",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How gRPC is used in Meshery and Service Mesh Performance (SMP)")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"How Jekyll websites work and how to contribute to Layer5 projects",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How Jekyll websites work and how to contribute to Layer5 projects")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"How mesheryctl uses Go Cobra",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How mesheryctl uses Go Cobra")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"Introduction to Gatsby and Layer5-ng",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to Gatsby and Layer5-ng")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"Introduction to Istio",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to Istio")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"tutorials",value:"None of the above",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"None of the above")),a.createElement("p",{className:"form-name"},"Layer5 has a community member mentoring program, MeshMates, that is aimed at individuals new to open source or simply new to Layer5 projects. Learn more at https://layer5.io/community. Is this program of interest to you?"),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"meshMate",value:"Yes, and I would like to explore engaging with a Layer5 MeshMate.",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Yes, and I would like to explore engaging with a Layer5 MeshMate.")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"meshMate",value:"Maybe later.",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Maybe later.")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"meshMate",value:"No, thank you.",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"No, thank you.")),a.createElement("br",null),a.createElement("p",{className:"para label"},"If you would like to pair with a MeshMate, please review each MeshMate profile to identify your ideal mentor. Once you have identified your ideal MeshMate or if you can’t decide on one, simple ask to be partnered in the #newcomers channel in the Layer5 Slack."),a.createElement("label",{htmlFor:"interests",className:"form-name"},"What has your recent focus been? What are you passionate about? Is there a specific project or aspect a project that interests you? ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(E.gN,{type:"text",className:"text-field",id:"interests",name:"interests",required:!0}),a.createElement("label",{htmlFor:"profiency",className:"form-name"},"If a contributor, what tools, technologies, and languages are you most proficient with?"),a.createElement(E.gN,{type:"text",className:"text-field",id:"profiency",name:"profiency"}),a.createElement("label",{htmlFor:"interestToShareContribution",className:"form-name"},"Now or eventually, would you like to speak or write about your works in the community and/or on the projects? ",a.createElement("span",{className:"required-sign"},"*")),a.createElement("div",{role:"group","aria-labelledby":"my-radio-group"},a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"interestToShareContribution",value:"Yes",required:!0}),"Yes"),a.createElement("label",null,a.createElement(E.gN,{type:"radio",name:"interestToShareContribution",value:"No",required:!0}),"No")),a.createElement("p",{className:"form-name"},"Area(s) of Desired Focus"),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Community Ambassador",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Community Ambassador")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Community Management",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Community Management")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Documentation",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Documentation")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Digital Marketing",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Digital Marketing")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Frontend Engineering",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Frontend Engineering")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Backend Engineering",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Backend Engineering")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"DevOps",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"DevOps")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"User",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"User")),a.createElement("br",null),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"areaOfFocus",value:"Other",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Other")),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{className:"btn-wrapper"},a.createElement("button",{onClick:M,className:"btn-prev"},a.createElement("span",{className:"back"},"←")," Previous step"),a.createElement(p.Z,{secondary:!0,type:"submit",className:"btn-next",title:"Next Step"})),a.createElement("br",null),a.createElement("br",null))))},j=function(){return a.createElement(d.W2,null,a.createElement("h2",{className:"title"},"Expectations and Programs FAQ"),a.createElement(E.J9,{initialValues:{expect:!1,highlighted:!1,paid:!1,affiliated:!1,help:""},onSubmit:function(e){x(e),n(4),F()}},a.createElement(E.l0,{className:"form"},a.createElement("p",{className:"form-name"},"What can I expect from Layer5? What does Layer5 expect of me?"),a.createElement("p",{className:"para label"},"The Layer5 community expects you to get as much or more out of your time than you give to the projects. We expect earnest effort from its contributors. What “earnest effort” means is different for each community member as all have different circumstances. Suffice to say, the more you put into your efforts, the greater your reward will be. Most community contributors stay with the project for many months, if not indefinitely. Length of involvement is entirely up to the individual community member."),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"expect",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"I see works of other contributors being highlighted in the Layer5, Meshery, and SMP Twitter feeds, the Meshery and SMP showcases, and in the Layer5 YouTube channel."),a.createElement("p",{className:"para label"},"We try to elevate the works of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with these Twitter accounts, YouTube, and LinkedIn accounts."),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"highlighted",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"Are community contributors paid? Are internships paid? What do I get in return?"),a.createElement("p",{className:"para label"},"With few exceptions, generally community contributors and interns are not paid. Those that participate through Google Summer of Code, CommunityBridge, or Google Season of Docs do receive a stipend at the culmination of their internship. The largest return on time invested in the community for any contributor is the knowledge, relationships, recognition, and experience gained throughout their engagement. Their participation affords them an opportunity to work with world-class engineers, gives focus and purpose to their learning efforts on technologies they otherwise may not understand, and exposes their work broadly to the Cloud Native community.Letters of recommendation, mentorship and coaching, introduction to engineers at globally-recognized technology companies, potential contract or full-time work at Layer5, public writing and speaking opportunities are all examples of benefits those that participate can receive for their time spent."),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"paid",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"I see other contributors have affiliated themselves with Layer5 on LinkedIn. Am I encouraged to do the same?"),a.createElement("p",{className:"para label"},"Yes! We welcome you to affiliate with the community and projects. We consider this affiliation helpful in boosting your profile and resume in context of job searches and overall in general. Be sure to update your profile, and be social about your activities. We love to highlight our members!"),a.createElement("label",null,a.createElement(E.gN,{type:"checkbox",name:"affiliated",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"Is there anything else we should know about you? How can we help you?"),a.createElement(E.gN,{type:"text",className:"text-field",name:"help"}),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{className:"btn-wrapper"},a.createElement("button",{onClick:M,className:"btn-prev"},a.createElement("span",{className:"back"},"←")," Previous step"),a.createElement(p.Z,{secondary:!0,type:"submit",className:"btn-next",title:"Submit"})),a.createElement("br",null),a.createElement("br",null))))},W=function(){return a.createElement(d.W2,null,a.createElement("div",{className:"black-box"},a.createElement("h2",null,"Welcome to the Layer5 Community!"),a.createElement("h4",null,"Resources are on their way. See these in the meantime:"),a.createElement("div",{className:"btn-box"},a.createElement(p.Z,{primary:!0,className:"btn-one",type:"button",title:"Community Handbook",url:"https://layer5.io/community/handbook"}),a.createElement(p.Z,{secondary:!0,className:"btn-two",type:"button",title:"Newcomers Roadmap",url:"https://layer5.io/community/newcomers"})),a.createElement("p",null,"We are pleased to have you as a new member!")))};return a.createElement(u,null,a.createElement("div",null,a.createElement(b,null),a.createElement("div",null,a.createElement(S,null),0===t&&a.createElement(C,null),1===t&&a.createElement(I,null),2===t&&a.createElement(L,null),3===t&&a.createElement(j,null),4===t&&a.createElement(W,null))))},y=function(){return a.createElement(l.f6,{theme:i.Z},a.createElement(s.Z,null),a.createElement(c.Z,{title:"Layer5 newcomers form",description:"Layer5 newcomers form for contributors, users and visitors"}),a.createElement(r.Z,null,a.createElement(o.Z,null),a.createElement(N,null),a.createElement(m.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-newcomers-js-17e79223345b9bdf3a89.js.map