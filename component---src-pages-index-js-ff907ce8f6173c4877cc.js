"use strict";(self.webpackChunkwilliam_cougan=self.webpackChunkwilliam_cougan||[]).push([[678,773],{8678:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){let{children:t}=e;return a.createElement(a.Fragment,null,t)}},9357:function(e,t,n){n.d(t,{H:function(){return o}});var a=n(7294),i=n(1883);const o=e=>{let{title:t,description:n,pathname:o,children:r}=e;const{title:l,description:c,image:p,siteUrl:m}=(0,i.useStaticQuery)("1946181227").site.siteMetadata,d={title:t||l,description:n||c,image:""+m+p,url:""+m+(o||"")};return a.createElement(a.Fragment,null,a.createElement("title",null,d.title),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{name:"image",content:d.image}),a.createElement("meta",{property:"og:title",content:d.title}),a.createElement("meta",{property:"og:description",content:d.description}),a.createElement("meta",{property:"og:image",content:d.image}),a.createElement("meta",{property:"og:url",content:d.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:url",content:d.url}),a.createElement("meta",{name:"twitter:description",content:d.description}),a.createElement("meta",{name:"twitter:image",content:d.image}),r)}},1808:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(7294),i=n(2788),o=n.p+"static/coin-sound-103c4acc75640ed10900e9d9322d5181.mp3";const r=i.default.div.withConfig({displayName:"Marquee__SpeedControlContainer",componentId:"sc-9kg8ns-0"})(["position:relative;top:60px;margin-bottom:-18px;"]),l=i.default.input.withConfig({displayName:"Marquee__RangeInput",componentId:"sc-9kg8ns-1"})(["direction:rtl;-webkit-appearance:none;appearance:none;background-color:white;&::-webkit-slider-runnable-track{height:1px;}&::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#7085ff;border:1px solid white;border-radius:50%;width:15px;height:15px;margin-top:-8px;cursor:pointer;}"]),c=i.default.label.withConfig({displayName:"Marquee__RangeLabel",componentId:"sc-9kg8ns-2"})(["color:white;position:relative;top:6px;right:5px;font-size:0.75em;"]),p=e=>{let{speed:t,setSpeed:n}=e;return a.createElement(r,null,a.createElement(c,null,"SPEED"),a.createElement(l,{type:"range",min:"0",max:"10",value:t,onChange:e=>{let{target:t}=e;return n(t.value)}}))};var m=()=>{const{0:e,1:t}=(0,a.useState)("undefined"!=typeof window?window.innerWidth:0),{0:n,1:i}=(0,a.useState)("Welcome! Below you'll find a directory of my profiles and live projects."),{0:o,1:r}=(0,a.useState)(5);return(0,a.useEffect)((()=>{}),[]),(0,a.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e-1;return t<1.75*-n.length*10?window.innerWidth:t}))}),o);return()=>clearInterval(e)}),[o]),a.createElement("div",null,a.createElement("div",{style:{position:"absolute",whiteSpace:"nowrap",left:e,color:"white",marginTop:"32px"}},n),a.createElement(p,{speed:o,setSpeed:r}))},d=n(1883);const s=i.default.div.withConfig({displayName:"StartScreen__Container",componentId:"sc-1eihpen-0"})(["height:100vh;font-family:'Press Start 2P',cursive;"]),u="100px",h="#ffc4b7",g=i.default.div.withConfig({displayName:"StartScreen__Sky",componentId:"sc-1eihpen-1"})(["height:",";background:#7085ff;display:flex;flex-direction:column;align-items:center;padding:0 5px;"],"calc(100vh - 100px)"),f=i.default.div.withConfig({displayName:"StartScreen__Ground",componentId:"sc-1eihpen-2"})(["height:",";background:#e45e10;border-top:"," dashed ",";position:relative;"],u,"5px",h),E=i.default.div.withConfig({displayName:"StartScreen__Hill",componentId:"sc-1eihpen-3"})(["width:200px;height:150px;background-color:#1c8415;border-top-left-radius:110px;border-top-right-radius:110px;border:2px dashed black;border-bottom:0;position:absolute;inset:",";"],"auto auto calc(100px + 5px) 30px"),x=(0,i.default)(E).withConfig({displayName:"StartScreen__Bush",componentId:"sc-1eihpen-4"})(["width:150px;height:50px;background-color:#a7be00;inset:",";"],(e=>{let{position:t}=e;return t})),w=()=>["auto 130px calc(100px + 5px) auto","auto 30px calc(100px + 5px) auto","auto 230px calc(100px + 5px) auto"].map((e=>a.createElement(x,{key:e,position:e}))),b=i.default.div.withConfig({displayName:"StartScreen__TitleBox",componentId:"sc-1eihpen-5"})(["max-width:800px;aspect-ratio:2.69;z-index:690;background:#e45e10;box-shadow:5px 5px 0px black;margin-top:",";margin-right:2px;text-align:center;display:flex;position:relative;align-items:center;border-top:5px solid ",";border-left:5px solid ",";@media only screen and (max-height:550px){margin-top:0;}"],u,h,h),y=i.default.div.withConfig({displayName:"StartScreen__TitleBoxContent",componentId:"sc-1eihpen-6"})(["color:",";font-size:calc(100vw / 8);line-height:1.25em;text-shadow:calc(1em / 10) calc(1em / 10) 0px black;@media only screen and (min-width:800px){font-size:110px;}"],h),S=i.default.div.withConfig({displayName:"StartScreen__Copyright",componentId:"sc-1eihpen-7"})(["position:absolute;bottom:-1.5em;right:0;font-size:1rem;text-shadow:none;font-weight:bold;color:",";line-height:1em;@media only screen and (max-width:400px){font-size:1rem;}"],h),_=i.default.div.withConfig({displayName:"StartScreen__OptionContainer",componentId:"sc-1eihpen-8"})(["margin-top:2rem;z-index:690;"]),k="\n\tcolor: white;\n\tdisplay: block;\n\ttext-decoration: none;\n\tmargin-top: 1rem;\n\tcursor: pointer;\n",C=(0,i.default)(d.Link).withConfig({displayName:"StartScreen__InternalOption",componentId:"sc-1eihpen-9"})(["",""],k),I=i.default.a.withConfig({displayName:"StartScreen__ExternalOption",componentId:"sc-1eihpen-10"})(["",""],k),v=i.default.button.withConfig({displayName:"StartScreen__ButtonOption",componentId:"sc-1eihpen-11"})(["all:unset;",";"],k),N=i.default.span.withConfig({displayName:"StartScreen__Nail",componentId:"sc-1eihpen-12"})(["width:10px;height:10px;position:absolute;background-color:",";box-shadow:3px 3px 0px black;inset:",";"],h,(e=>{let{position:t}=e;return t})),T=()=>["10px auto auto 10px","10px 10px auto auto","auto 10px 10px auto","auto auto 10px 10px"].map((e=>a.createElement(N,{key:e,position:e}))),A=function(e){let{setOptions:t}=void 0===e?{}:e;return a.createElement(a.Fragment,null,a.createElement(I,{href:"https://www.linkedin.com/in/williamcougan/",target:"_blank"},"1 LINKEDIN"),a.createElement(I,{href:"https://github.com/billycougz",target:"_blank"},"2 GITHUB"),a.createElement(I,{href:"https://twitter.com/will_cougar",target:"_blank"},"3 TWITTER"),a.createElement(v,{onClick:()=>t((()=>O))},"4 CONCEPTS"),a.createElement(v,{onClick:()=>t((()=>L))},"5 APPS"))},O=e=>{let{setOptions:t}=e;return a.createElement(a.Fragment,null,a.createElement(C,{to:"/concept/Flappy-Tanooki"},"1 FLAPPY TANOOKI"),a.createElement(C,{to:"/concept/Day-And-Nite"},"2 DAY AND NITE"),a.createElement(v,{onClick:()=>t((()=>A))},"← MAIN MENU"))},L=e=>{let{setOptions:t}=e;return a.createElement(a.Fragment,null,a.createElement(I,{href:"https://tastebuddy.williamcougan.com/",target:"_blank"},"1 TASTEBUDDY"),a.createElement(I,{href:"https://perfectionlists.billycougan.com/",target:"_blank"},"2 PERFECTIONLISTS"),a.createElement(I,{href:"https://squares.billycougan.com/",target:"_blank"},"3 SQUARES"),a.createElement(I,{href:"https://billseye.billycougan.com/",target:"_blank"},"4 BILLSEYE"),a.createElement(I,{href:"https://sheets.billycougan.com/",target:"_blank"},"5 BILLSEYE SHEETS"),a.createElement(v,{onClick:()=>t((()=>A))},"← MAIN MENU"))};var M=()=>{const[e,t]=a.useState((()=>A)),n=a.useRef(null);return a.createElement(s,null,a.createElement(g,null,a.createElement(m,null),a.createElement(b,null,a.createElement(T,null),a.createElement(y,null,"WILLIAM COUGAN"),a.createElement(S,null,"© 2023 WILLIAM COUGAN")),a.createElement(_,{onClick:()=>{n.current.volume=.02,n.current.play()}},a.createElement(e,{setOptions:t}),a.createElement("audio",{ref:n,src:o}))),a.createElement(f,null,a.createElement(E,null),a.createElement(w,null)))}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l}});var a=n(7294),i=n(1808),o=n(8678),r=n(9357);t.default=()=>a.createElement(o.Z,null,a.createElement(i.default,null));const l=()=>a.createElement(r.H,{title:"Home / William Cougan"})}}]);
//# sourceMappingURL=component---src-pages-index-js-ff907ce8f6173c4877cc.js.map