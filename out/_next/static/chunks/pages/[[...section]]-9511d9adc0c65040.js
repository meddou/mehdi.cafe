(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{4184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)i.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},4553:function(e,t,n){"use strict";var i=n(2109),r=n(2092).findIndex,o=n(1223),l="findIndex",a=!0;l in[]&&Array(1).findIndex((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},9826:function(e,t,n){"use strict";var i=n(2109),r=n(2092).find,o=n(1223),l="find",a=!0;l in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},2425:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Ee},default:function(){return Te}});n(1539),n(2419);var i=n(2777),r=n(2262),o=n(1550),l=n(5959),a=n(3553),s=n(7247),c=(n(1249),n(9254),n(7294)),u=n(1163),d=n(7536),p=n.n(d),f=n(5756);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);l=!0);}catch(s){a=!0,r=s}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=n(7379),x=n(1473),v=n(4939),y=n(7322),b=n(9710),w=n(8346),k=n(8233),j=n(5893),C=g.ZP.div.withConfig({displayName:"Landing__Container",componentId:"sc-1qlnjb7-0"})(["min-height:100vh;width:100%;display:flex;flex-direction:row;justify-content:center;","{flex-direction:column;}"],(function(e){return e.theme.isPhone})),_=g.ZP.div.withConfig({displayName:"Landing__InfoContainer",componentId:"sc-1qlnjb7-1"})(["display:flex;flex-direction:column;justify-content:space-around;z-index:3;","{margin-top:74px;}"],(function(e){return e.theme.isPhone})),Z=(0,g.ZP)(v.Z).withConfig({displayName:"Landing__AvatarPicture",componentId:"sc-1qlnjb7-2"})(["width:20vw;min-width:300px;filter:drop-shadow(0px 2px 2px rgba(0,0,0,0.3));align-self:center;z-index:2;","{display:none;}"],(function(e){return e.theme.isPhone})),P=g.ZP.div.withConfig({displayName:"Landing__TitleContainer",componentId:"sc-1qlnjb7-3"})(["margin-right:2vw;max-width:50vw;padding:16px;","{position:relative;left:0;top:0;box-shadow:none;margin-top:56px;max-width:100vw;}"],(function(e){return e.theme.isPhone})),N=(0,g.iv)(["line-height:1;font-family:'Oswald',sans-serif;margin-top:0;margin-bottom:12px;font-size:4.5em;font-weight:normal;"]),S=g.ZP.h1.withConfig({displayName:"Landing__PrimaryTitle",componentId:"sc-1qlnjb7-4"})([""," line-height:1;font-size:2.5em;margin-bottom:16px;"],N),I=g.ZP.h2.withConfig({displayName:"Landing__SecondaryTitle",componentId:"sc-1qlnjb7-5"})([""," margin-top:12px;"],N),O=(0,g.ZP)(b.Z).withConfig({displayName:"Landing__MainDescription",componentId:"sc-1qlnjb7-6"})(["font-size:1.75em;margin:2em 0;margin-top:8px;"]),T=(0,g.ZP)(x.Z).withConfig({displayName:"Landing__MediaContainerRow",componentId:"sc-1qlnjb7-7"})(["margin-top:32px;align-items:center;"]),E=function(){var e=(new Date).getHours();return e>=6&&e<17};var R=function(e){var t=e.descriptions;return(0,j.jsx)(k.Z,{noPaddingTop:!0,children:(0,j.jsxs)(C,{children:[(0,j.jsx)(_,{children:(0,j.jsxs)(P,{children:[(0,j.jsxs)(I,{children:[E()?"Bonjour":"Bonsoir",", je suis Mehdi."]}),(0,j.jsxs)(S,{children:[t.title,"."]}),(0,j.jsx)(O,{text:t.shortDescription}),(0,j.jsxs)(T,{children:[(0,j.jsx)(w.rU,{isImportant:!0,href:"/work",children:"Voir mes projets"}),(0,j.jsx)(y.Z,{className:"bp-large"})]})]})}),(0,j.jsx)(Z,{src:"/images-webp/mehdi.png",alt:"Mehdi Meddour"})]})})},V=(n(7042),n(9600),n(8309),n(4916),n(5306),n(561),n(4553),n(7437)),M=g.ZP.h4.withConfig({displayName:"SubTitle",componentId:"sc-wzbhid-0"})(["font-family:'Oswald',sans-serif;margin-top:0;font-size:22px;margin-bottom:0;text-transform:uppercase;"]),L=n(3032),A=n(8587),F=n(4491),q=n(3652);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var B=(0,g.ZP)(x.Z).withConfig({displayName:"ProjectList__Container",componentId:"sc-5xwqe3-0"})(["width:25%;max-width:25%;margin-right:2.5%;padding-right:2.5%;overflow-x:auto;border-right:3px solid black;box-sizing:border-box;padding-bottom:32px;","{width:100%;max-width:100%;padding-bottom:16px;margin-bottom:16px;margin-left:calc(4% + 16px);margin-right:calc(4% + 16px);padding-right:0;border-right:0;border-bottom:3px solid black;}"],(function(e){return e.theme.isPhone})),D=g.ZP.span.withConfig({displayName:"ProjectList__NoProjectText",componentId:"sc-5xwqe3-1"})(["display:flex;flex-direction:column;font-family:'Roboto';text-align:center;sub{margin:12px;font-size:20px !important;font-family:'Roboto';text-transform:uppercase;}"]),U=g.ZP.span.withConfig({displayName:"ProjectList__EmojiContainer",componentId:"sc-5xwqe3-2"})(["font-size:80px;text-align:center;"]),W=g.ZP.button.withConfig({displayName:"ProjectList__FilterText",componentId:"sc-5xwqe3-3"})(["margin-right:8px;margin-bottom:16px;width:100%;text-align:right;cursor:"," ","{text-align:left;}"],(function(e){return e.hasPointer?"pointer":"normal"}),(function(e){return e.theme.isPhone})),Q=g.ZP.button.withConfig({displayName:"ProjectList__ProjectButton",componentId:"sc-5xwqe3-4"})(["overflow:visible;"]),G=(0,g.ZP)(x.Z).withConfig({displayName:"ProjectList__FilterRow",componentId:"sc-5xwqe3-5"})(["justify-content:flex-end;width:100%;","{justify-content:center;width:auto;}"],(function(e){return e.theme.isPhone})),X=(0,g.ZP)(x.Z).withConfig({displayName:"ProjectList__ListContainer",componentId:"sc-5xwqe3-6"})(["flex:1;position:relative;.row{align-items:flex-start;}","{width:100%;max-width:100%;}"],(function(e){return e.theme.isPhone})),H=g.ZP.span.withConfig({displayName:"ProjectList__ClearFilterButton",componentId:"sc-5xwqe3-7"})(["visibility:",""],(function(e){return e.isVisible?"visible":"hidden"})),J=(0,g.ZP)(V.Z).withConfig({displayName:"ProjectList__ProjectTitle",componentId:"sc-5xwqe3-8"})([""]),K=(0,g.ZP)(x.Z).withConfig({displayName:"ProjectList__ProjectRow",componentId:"sc-5xwqe3-9"})(["margin-top:16px;"]),Y=function(e){(0,l.Z)(n,e);var t=z(n);function n(e){var r;(0,i.Z)(this,n);var l=(r=t.call(this,e)).props,a=l.projects,s=l.filterableSkills;return r.hasMoreSkill=!1,r.projects=a,r.skills=s,r.filters=[],r.filtersGroup=["iOS","NodeJS","Angular","Laravel","MongoDB","C++"],r.state={projects:r.projects.slice(0),skills:r.skills.slice(0)},r.addSkillFromQS(),r.clearFilters=r.clearFilters.bind((0,o.Z)(r)),r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.filters=n.getFiltersFromQS(),this.updateProjects()}},{key:"componentDidUpdate",value:function(){var e=this.filters.slice(0);this.filters=n.getFiltersFromQS(),this.addSkillFromQS(),e.join("")!==this.filters.join("")&&this.updateProjects()}},{key:"onSkillSelect",value:function(e){var t=this.updateFilters(e);this.updateQS(t)}},{key:"getSkillGrouped",value:function(){for(var e=this.state.skills.slice(0),t=[{group:[],id:-1}],n=0;n<e.length;n+=1)t[t.length-1].group.push(e[n]),-1!==this.filtersGroup.indexOf(e[n].name)&&t.push({group:[],id:t.length});return t}},{key:"updateQS",value:function(e){this.props.router.replace({pathname:"/work",query:{skill:e}},void 0,{shallow:!0})}},{key:"updateFilters",value:function(e){for(var t,n=this.filters.slice(0),i=[e],r=0;r<i.length;r+=1)t=n.indexOf(i[r]),i[r]&&-1===t?n.push(i[r]):i[r]&&n.splice(t,1);return n}},{key:"updateProjects",value:function(){for(var e,t=[],n=0;n<this.projects.length;n+=1){if(e=!0,this.filters.length>0)for(var i=0;i<this.filters.length;i+=1)if(-1===this.projects[n].languages.indexOf(this.filters[i])){e=!1;break}e&&t.push(this.projects[n])}this.setState({projects:t})}},{key:"addSkillFromQS",value:function(){var e,t=this.state.skills,i=f.Z.qs().skill?n.skillToArray(f.Z.qs().skill):[],r=t.slice(0),o=function(e){return function(t){return t.name===e}};if(i&&i.length>0)for(var l=0;l<i.length;l+=1)e=q.Z.getFromName(i[l]),-1===r.findIndex(o(i[l]))&&(!1===this.hasMoreSkill&&(this.filtersGroup.unshift(i[l]),this.hasMoreSkill=!0),r.unshift(e),this.setState({skills:r}))}},{key:"goToProject",value:function(e,t){var n=this.props.router;t.preventDefault(),n.push("/work/".concat(e.name))}},{key:"clearFilters",value:function(e){var t=this.props.router;e.preventDefault(),t.replace("work",void 0,{shallow:!0})}},{key:"render",value:function(){var e=this,t=this.state.projects;return(0,j.jsx)(k.Z,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(J,{noMargin:!0,children:"Mes projets"}),(0,j.jsxs)(K,{children:[(0,j.jsxs)(B,{className:"bp-large",children:[(0,j.jsx)(W,{type:"submit",hasPointer:this.filters.length>0,onClick:this.clearFilters,children:(0,j.jsxs)(M,{children:[(0,j.jsx)(H,{isVisible:this.filters.length>0,children:"(X)"}),"FILTRES"]})}),this.getSkillGrouped().map((function(t){return(0,j.jsx)(G,{children:t.group.map((function(t){return(0,j.jsx)(F.Z,{onClick:function(){return e.onSkillSelect(t.name)},children:(0,j.jsx)(A.Z,{name:t.name,backgroundImage:t.backgroundImage,backgroundColor:t.backgroundColor,logo:t.logo,experience:t.experience,isSelected:-1!==e.filters.indexOf(t.name),isLittle:!0})},t.name)}))},t.id)}))]}),(0,j.jsxs)(X,{center:!0,children:[t.map((function(t){return(0,j.jsx)(Q,{type:"submit",onClick:function(n){return e.goToProject(t,n)},children:(0,j.jsx)(F.Z,{children:(0,j.jsx)(L.Z,{backgroundColor:t.backgroundColor,backgroundImage:t.backgroundImage,name:t.name,logo:t.logo})})},t.name)})),0===t.length&&(0,j.jsxs)(D,{children:[(0,j.jsx)(U,{role:"img","aria-label":"No project",children:"\ud83d\ude25"}),(0,j.jsx)("sub",{children:"Aucun projet"})]})]})]})]})})}}],[{key:"fmtSkills",value:function(e){return e?Array.isArray(e)?e:[e]:[]}},{key:"skillToArray",value:function(e){return this.fmtSkills(e).map((function(e){return decodeURIComponent(e)}))}},{key:"getFiltersFromQS",value:function(){return n.fmtSkills(f.Z.qs().skill)}}]),n}(c.Component),$=(0,u.withRouter)(Y),ee=n(1664),te=(n(9714),function(){function e(){(0,i.Z)(this,e)}return(0,r.Z)(e,null,[{key:"getWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth}},{key:"isLarge",value:function(){return e.getWidth()>=e.ceil}},{key:"isSafari",value:function(){return/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!==typeof window.safari&&window.safari.pushNotification).toString()}}]),e}());te.ceil=812;var ne=te,ie=g.ZP.div.withConfig({displayName:"SkillList__TitleContainer",componentId:"sc-1v5nfsv-0"})([""]),re=g.ZP.div.withConfig({displayName:"SkillList__SubTextContainer",componentId:"sc-1v5nfsv-1"})(["display:flex;flex-direction:row;"]),oe=g.ZP.div.withConfig({displayName:"SkillList__ExperiancePreview",componentId:"sc-1v5nfsv-2"})(["filter:drop-shadow(0px 2px 2px rgba(0,0,0,0.3));width:65px;min-width:65px;height:13px;margin-right:16px;background-color:#ffab00;display:inline-block;align-self:center;"]),le=g.ZP.aside.withConfig({displayName:"SkillList__ExperianceText",componentId:"sc-1v5nfsv-3"})(["font-size:22px;text-transform:uppercase;"]),ae=(0,g.ZP)(x.Z).withConfig({displayName:"SkillList__MarginRow",componentId:"sc-1v5nfsv-4"})(["margin-top:64px;"]);var se=function(e){var t=e.skills,n=ne.isLarge()?ee.default:function(e){return e.children};return(0,j.jsxs)(k.Z,{children:[(0,j.jsx)(ie,{children:(0,j.jsx)(V.Z,{noMargin:!0,children:"Mes skills"})}),(0,j.jsxs)(re,{children:[(0,j.jsx)(oe,{}),(0,j.jsx)(le,{children:"Ann\xe9es d'exp\xe9rience"})]}),(0,j.jsx)(ae,{center:!0,children:t.map((function(e){return(0,j.jsx)(F.Z,{children:(0,j.jsx)(n,{href:{pathname:"/work",query:{skill:e.name}},children:(0,j.jsx)("a",{children:(0,j.jsx)(A.Z,{name:e.name,backgroundColor:e.backgroundColor,backgroundImage:e.backgroundImage,experience:e.experience,logo:e.logo,showExperience:!0})})})},e.name)}))})]})},ce=n(4313);n(4107);function ue(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var de=(0,g.ZP)(ce.VerticalTimeline).withConfig({displayName:"Experience__StyledVerticalTimeline",componentId:"sc-1rlw6ig-0"})(["padding-top:",";margin-left:-14px;padding-left:0;margin-bottom:0;padding-bottom:64px;::before{background:",";width:6px;}.vertical-timeline-element-icon{height:calc(32px + 16px + 6px);width:calc(32px + 16px + 6px);border:3px solid white;border-radius:0;margin-left:-8px;box-shadow:none;}.vertical-timeline-element img{height:32px;width:32px;margin:8px;display:block;}.vertical-timeline-element-content{border-radius:0;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);margin-left:84px;background:white;color:black !important;padding-bottom:0;}.element-content-first .vertical-timeline-element-content{margin-top:32px;}.vertical-timeline-element-content{width:max-content;max-width:calc(100% - 84px - 46px);}","{.vertical-timeline--two-columns .vertical-timeline-element-icon{width:64px;height:64px;margin-left:-32px;}}","{.vertical-timeline-element-content{margin-left:calc(84px + 42px);}.vertical-timeline-element-content .vertical-timeline-element-date{color:white;}.vertical-timeline-element-icon{margin-left:20px;}.vertical-timeline::before{left:54px;}}.bounce-in{animation:none !important;}.vertical-timeline.vertical-timeline--animate.vertical-timeline--two-columns{margin-bottom:0;}.vertical-timeline-element-content::before{display:none;}.vertical-timeline-element-content .vertical-timeline-element-date{font-size:18px;color:black;text-transform:uppercase;font-weight:normal;opacity:1;}p{font-size:1.3rem;}.vertical-timeline-element-content-arrow{display:none;}p a{font-family:'Roboto',sans-serif;text-transform:uppercase;text-decoration:none;transition:0.3s;background-color:",";color:",";padding:0.05em 0.075em;font-weight:500;:hover{background-color:",";}}@media (prefers-color-scheme:dark){.vertical-timeline-element-content{color:white !important;background-color:#515151;}.vertical-timeline-element-content .vertical-timeline-element-date{color:white;}}"],(function(e){return e.theme.sectionDefaultPaddingTop}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.isLaptop}),(function(e){return e.theme.isPhone}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.mainTextColor}),(function(e){return e.theme.mainColor})),pe=(0,g.ZP)(k.Z).withConfig({displayName:"Experience__NoPaddingBottomBasicPage",componentId:"sc-1rlw6ig-1"})(["padding-bottom:0;"]),fe=g.ZP.h3.withConfig({displayName:"Experience__ElementTitle",componentId:"sc-1rlw6ig-2"})(["font-size:2.5em;margin-block-start:0;margin-block-end:0;","{font-size:1.75em;}"],(function(e){return e.theme.isPhone})),he=g.ZP.h4.withConfig({displayName:"Experience__ElementSubTitle",componentId:"sc-1rlw6ig-3"})(["font-size:1.25em;font-weight:normal;margin-block-start:0;margin-block-end:0;"]),me=(0,g.ZP)(V.Z).withConfig({displayName:"Experience__ExperienceTitle",componentId:"sc-1rlw6ig-4"})([""]),ge=function(e){(0,l.Z)(n,e);var t=ue(n);function n(e){var r;(0,i.Z)(this,n);var o=(r=t.call(this,e)).props.experiences;return r.state={experiences:o},r}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.state.experiences;return(0,j.jsx)(pe,{children:(0,j.jsxs)("div",{className:"experience-page",children:[(0,j.jsx)(me,{noMargin:!0,children:"Mes exp\xe9riences"}),(0,j.jsx)(de,{layout:"1-column",visible:!0,children:e.map((function(e,t){return(0,j.jsxs)(ce.VerticalTimelineElement,{className:"vertical-timeline-element ".concat(0===t?"element-content-first":""),date:(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:e.date}),e.projectUrl?" | ":"",e.projectUrl&&(0,j.jsx)(w.rU,{href:e.projectUrl,children:"VOIR LE PROJET"})]}),iconStyle:{background:"#331c5d",color:"#fff"},icon:(0,j.jsx)(v.Z,{src:"/images-webp/experiences/".concat(e.logo),alt:e.title}),children:[(0,j.jsx)(fe,{children:e.title}),(0,j.jsx)(he,{children:e.subtitle}),(0,j.jsx)(b.Z,{text:e.text})]},e.title)}))})]})})}}]),n}(c.Component),xe=g.ZP.button.withConfig({displayName:"BasicButton",componentId:"sc-qu46kl-0"})(["cursor:pointer !important;border:0 !important;background-color:",' !important;box-shadow:0 2px 2px 0 rgb(0 0 0 / 14%),0 3px 1px -2px rgb(0 0 0 / 12%),0 1px 5px 0 rgb(0 0 0 / 20%) !important;padding:8px 16px !important;a{text-transform:uppercase !important;font-family:"Oswald",sans-serif !important;font-size:32px !important;color:white !important;}'],(function(e){return e.theme.secondaryColor}));function ve(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var ye=g.ZP.footer.withConfig({displayName:"Footer__Container",componentId:"sc-1dzp19e-0"})(["background-color:",";display:flex;color:white;padding-top:32px;padding-bottom:32px;align-items:flex-end;"],(function(e){return e.theme.mainColor})),be=g.ZP.div.withConfig({displayName:"Footer__ButtonContainer",componentId:"sc-1dzp19e-1"})(["flex-grow:1;display:flex;flex-direction:column;align-items:center;","{max-width:80vw;:hover{background-color:"," !important;}}}"],xe,(function(e){return e.theme.mainColor})),we=g.ZP.p.withConfig({displayName:"Footer__Copyright",componentId:"sc-1dzp19e-2"})(["padding-top:32px;"]),ke=g.ZP.div.withConfig({displayName:"Footer__MediasContainer",componentId:"sc-1dzp19e-3"})(["float:right;"]),je=g.ZP.a.withConfig({displayName:"Footer__ButtonText",componentId:"sc-1dzp19e-4"})(["color:white !important;text-decoration:none;"]),Ce=function(e){(0,l.Z)(n,e);var t=ve(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,j.jsxs)(ye,{children:[(0,j.jsxs)(be,{children:[(0,j.jsx)(xe,{type:"submit",onClick:n.onProjectClick,children:(0,j.jsx)(je,{"aria-label":"Envie de me proposer un projet ?",href:"mailto:contact@meddou.com",children:"Me proposer un projet ?"})}),(0,j.jsx)(we,{children:"Copyright @ Mehdi Meddour"})]}),(0,j.jsx)("div",{className:"bp-large",children:(0,j.jsx)(ke,{children:(0,j.jsx)(y.Z,{})})})]})}}],[{key:"onProjectClick",value:function(){window.gtag("event","contact",{event_category:"contact"})}}]),n}(c.Component),_e=g.ZP.div.withConfig({displayName:"Scroller__Section",componentId:"sc-1bfxsx3-0"})(["z-index:2;"]),Ze=g.ZP.div.withConfig({displayName:"Scroller__LandingBackground",componentId:"sc-1bfxsx3-1"})(["position:absolute;top:-50vh;height:200vh;left:-130vh;background-image:linear-gradient(to right bottom,",");width:250vh;transform:rotate(-35deg);"],(function(e){return e.theme.gradiantColors})),Pe=g.ZP.div.withConfig({displayName:"Scroller__SkillBackground",componentId:"sc-1bfxsx3-2"})(["position:absolute;height:100vh;left:-35vh;top:270vh;background-image:linear-gradient(to right,",");width:100vh;-webkit-transform:rotate(-35deg);transform:rotate(-35deg);z-index:-1;"],(function(e){return e.theme.gradiantColors})),Ne=g.ZP.div.withConfig({displayName:"Scroller__ProjectBackground",componentId:"sc-1bfxsx3-3"})(["position:absolute;bottom:-130vh;height:100%;right:-160vh;background-image:linear-gradient(to left top,",");width:100vh;-webkit-transform:rotate(-35deg);transform:rotate(-35deg);z-index:-1;"],(function(e){return e.theme.gradiantColors}));function Se(e){var t=e.defaultIndex,n=void 0===t?0:t,i=e.fullpageApi,r=e.projects,o=e.filterableSkills,l=e.skills,a=e.experiences,s=e.descriptions,u=m(c.useState({old:void 0,current:void 0}),2),d=u[0],f=u[1];return(0,c.useEffect)((function(){i&&f({old:d.current,current:n+1})}),[i,n]),(0,c.useEffect)((function(){i&&i[void 0===d.old?"silentMoveTo":"moveTo"](d.current)}),[d]),(0,j.jsxs)(p().Wrapper,{children:[(0,j.jsx)(_e,{id:"scroll-home-container",className:"section",children:(0,j.jsx)(R,{descriptions:s})}),(0,j.jsx)(Ze,{}),(0,j.jsx)(_e,{id:"scroll-work-container",className:"section",children:(0,j.jsx)($,{projects:r,filterableSkills:o})}),(0,j.jsx)(Ne,{}),(0,j.jsx)(_e,{id:"scroll-skills-container",className:"section",children:(0,j.jsx)(se,{skills:l})}),(0,j.jsx)(Pe,{}),(0,j.jsx)(_e,{id:"scroll-experiences-container",className:"section",children:(0,j.jsxs)("div",{children:[(0,j.jsx)(ge,{experiences:a}),(0,j.jsx)(Ce,{})]})})]})}function Ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var Oe=function(e){(0,l.Z)(n,e);var t=Ie(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this)).pageIds=f.Z.links.map((function(e){return e.link})),e.onScroll=e.onScroll.bind((0,o.Z)(e)),e}return(0,r.Z)(n,[{key:"onScroll",value:function(e,t){var n=this.props.router;this.pageIds.indexOf(f.Z.pathname())!==t.index&&n.push("/".concat(this.pageIds[t.index]),void 0,{shallow:!0})}},{key:"render",value:function(){var e=this,t=this.props,n=t.projects,i=t.filterableSkills,r=t.skills,o=t.experiences,l=t.descriptions;return(0,j.jsx)(p(),{licenseKey:"M7XuRiM%g5",scrollOverflow:!0,scrollbars:!1,onLeave:this.onScroll,render:function(t){var a=t.fullpageApi;return(0,j.jsx)(Se,{defaultIndex:e.pageIds.indexOf(f.Z.pathname()),fullpageApi:a,projects:n,filterableSkills:i,skills:r,experiences:o,descriptions:l})}})}}]),n}(c.PureComponent),Te=(0,u.withRouter)(Oe),Ee=!0},9369:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...section]]",function(){return n(2425)}])},4107:function(){},2703:function(e,t,n){"use strict";var i=n(414);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,l){if(l!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},131:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return m},default:function(){return m},defaultFallbackInView:function(){return u},observe:function(){return p},useInView:function(){return g}});var i=n(7294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new Map,a=new WeakMap,s=0,c=void 0;function u(e){c=e}function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(s+=1,a.set(n,s.toString())),a.get(n)):"0":e[t]);var n})).toString()}function p(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i=c),"undefined"===typeof window.IntersectionObserver&&void 0!==i){var r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var o=function(e){var t=d(e),n=l.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n),a=o.id,s=o.observer,u=o.elements,p=u.get(e)||[];return u.has(e)||u.set(e,p),p.push(t),s.observe(e),function(){p.splice(p.indexOf(t),1),0===p.length&&(u.delete(e),s.unobserve(e)),0===u.size&&(s.disconnect(),l.delete(a))}}var f=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(e){return"function"!==typeof e.children}var m=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),h(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var a=l.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,r=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=p(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:r,delay:o},l)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!h(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=o.tag,c=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,f);return i.createElement(a||s||"div",r({ref:this.handleNode},c),l)},l}(i.Component);function g(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,d=t.fallbackInView,f=i.useRef(),h=i.useState({inView:!!u}),m=h[0],g=h[1],x=i.useCallback((function(e){void 0!==f.current&&(f.current(),f.current=void 0),c||e&&(f.current=p(e,(function(e,t){g({inView:e,entry:t}),t.isIntersecting&&s&&f.current&&(f.current(),f.current=void 0)}),{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:r},d))}),[Array.isArray(n)?n.toString():n,a,l,s,c,o,d,r]);(0,i.useEffect)((function(){f.current||!m.entry||s||c||g({inView:!!u})}));var v=[x,m.inView,m.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}m.displayName="InView",m.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},8940:function(e,t,n){"use strict";t.Z=void 0;var i=l(n(7294)),r=l(n(5697)),o=l(n(4184));function l(e){return e&&e.__esModule?e:{default:e}}const a=({animate:e,className:t,layout:n,lineColor:r,children:l})=>("object"===typeof window&&document.documentElement.style.setProperty("--line-color",r),i.default.createElement("div",{className:(0,o.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===n,"vertical-timeline--one-column-left":"1-column"===n||"1-column-left"===n,"vertical-timeline--one-column-right":"1-column-right"===n})},l));a.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:r.default.string},a.defaultProps={animate:!0,className:"",layout:"2-columns",lineColor:"#FFF"};var s=a;t.Z=s},7509:function(e,t,n){"use strict";t.Z=void 0;var i=a(n(7294)),r=a(n(5697)),o=a(n(4184)),l=n(131);function a(e){return e&&e.__esModule?e:{default:e}}const s=({children:e,className:t,contentArrowStyle:n,contentStyle:r,date:a,dateClassName:s,icon:c,iconClassName:u,iconOnClick:d,onTimelineElementClick:p,iconStyle:f,id:h,position:m,style:g,textClassName:x,intersectionObserverProps:v,visible:y})=>i.default.createElement(l.InView,v,(({inView:l,ref:v})=>i.default.createElement("div",{ref:v,id:h,className:(0,o.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===m,"vertical-timeline-element--right":"right"===m,"vertical-timeline-element--no-children":""===e}),style:g},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:f,onClick:d,className:(0,o.default)(u,"vertical-timeline-element-icon",{"bounce-in":l||y,"is-hidden":!(l||y)})},c),i.default.createElement("div",{style:r,onClick:p,className:(0,o.default)(x,"vertical-timeline-element-content",{"bounce-in":l||y,"is-hidden":!(l||y)})},i.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,i.default.createElement("span",{className:(0,o.default)(s,"vertical-timeline-element-date")},a))))));s.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px",triggerOnce:!0}};var c=s;t.Z=c},4313:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(8940).Z,VerticalTimelineElement:n(7509).Z}}},function(e){e.O(0,[396,451,774,888,179],(function(){return t=9369,e(e.s=t);var t}));var t=e.O();_N_E=t}]);