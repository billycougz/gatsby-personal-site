"use strict";(self.webpackChunkwilliam_cougan=self.webpackChunkwilliam_cougan||[]).push([[767,67,50,773],{8678:function(A,e,t){t.d(e,{Z:function(){return o}});var n=t(7294);function o(A){let{children:e}=A;return n.createElement(n.Fragment,null,e)}},9357:function(A,e,t){t.d(e,{H:function(){return a}});var n=t(7294),o=t(1883);const a=A=>{let{title:e,description:t,pathname:a,children:i}=A;const{title:r,description:l,image:g,siteUrl:c}=(0,o.useStaticQuery)("1946181227").site.siteMetadata,d={title:e||r,description:t||l,image:""+c+g,url:""+c+(a||"")};return n.createElement(n.Fragment,null,n.createElement("title",null,d.title),n.createElement("meta",{name:"description",content:d.description}),n.createElement("meta",{name:"image",content:d.image}),n.createElement("meta",{property:"og:title",content:d.title}),n.createElement("meta",{property:"og:description",content:d.description}),n.createElement("meta",{property:"og:image",content:d.image}),n.createElement("meta",{property:"og:url",content:d.url}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:d.title}),n.createElement("meta",{name:"twitter:url",content:d.url}),n.createElement("meta",{name:"twitter:description",content:d.description}),n.createElement("meta",{name:"twitter:image",content:d.image}),i)}},6169:function(A,e,t){t.r(e),t.d(e,{default:function(){return m}});var n=t(7294),o=t(8678),a=t(2788),i=t.p+"static/icon-197cb3f9ee6105ab5eb6846c240fdee1.png";const r=a.default.div.withConfig({displayName:"Menu__MenuContainer",componentId:"sc-1bsvzsp-0"})(["position:absolute;display:inline-block;z-index:999;margin:1em;"]),l=a.default.button.withConfig({displayName:"Menu__MenuButton",componentId:"sc-1bsvzsp-1"})(["background:none;border:none;cursor:pointer;padding:0.5rem;"]),g=a.default.img.withConfig({displayName:"Menu__Image",componentId:"sc-1bsvzsp-2"})(["height:50px;width:50px;"]),c=a.default.ul.withConfig({displayName:"Menu__MenuItems",componentId:"sc-1bsvzsp-3"})(["position:absolute;list-style-type:none;padding:0;margin:0;white-space:nowrap;background-color:#fff;border:1px solid #ccc;box-shadow:0 2px 5px rgba(0,0,0,0.3);z-index:1;display:",";"],(A=>{let{open:e}=A;return e?"block":"none"})),d=a.default.li.withConfig({displayName:"Menu__MenuItem",componentId:"sc-1bsvzsp-4"})(["padding:0.5rem;cursor:pointer;background-color:",";&:hover{background-color:",";}"],(A=>{let{selected:e}=A;return e?"#eaeaea":"transparent"}),(A=>{let{selected:e}=A;return e?"#eaeaea":"#f0f0f0"}));var u=A=>{let{options:e,onClick:t,selectedOption:o}=A;const{0:a,1:u}=(0,n.useState)(!1),B=A=>{p.current.contains(A.target)||u(!1)},p=n.useRef(null);return n.useEffect((()=>(document.addEventListener("click",B),()=>{document.removeEventListener("click",B)})),[]),n.createElement(r,{ref:p},n.createElement(l,{onClick:()=>{u(!a)}},n.createElement(g,{src:i})),n.createElement(c,{open:a},e.map((A=>{let{id:e,name:a}=A;return n.createElement(d,{key:e,selected:e===o,onClick:()=>t(e)},a)}))))},B=t(1883),p=t(9357),s=t(1844),f=t(321),w=[{id:"Home",name:"Home",component:t(1808).default},{id:"Flappy-Tanooki",name:"Flappy Tanooki",component:f.default},{id:"Day-And-Nite",name:"Day And Nite",component:s.default}];var m=A=>{let{pageContext:e}=A;const t=e.id,{name:a,component:i}=w.find((A=>{let{id:e}=A;return e===t}))||{};return n.createElement(o.Z,null,n.createElement(p.H,{title:a+" / Concept / William Cougan"}),"Home"!==t&&n.createElement(u,{selectedOption:t,options:w,onClick:A=>"Home"===A?(0,B.navigate)("/"):(0,B.navigate)("/concept/"+A,{replace:!0})}),i?n.createElement(i,null):null)}},1844:function(A,e,t){t.r(e);var n=t(7294),o=t(2788);const a=o.default.div.withConfig({displayName:"DayAndNite__Container",componentId:"sc-lyojj5-0"})(["width:100vw;height:100vh;overflow:hidden;"]),i=o.default.div.withConfig({displayName:"DayAndNite__Landscape",componentId:"sc-lyojj5-1"})(["width:100%;height:100%;position:relative;"]),r=o.default.div.attrs((A=>({style:{backgroundColor:(()=>{const e=A.hour/12,t=Math.round(0*e),n=Math.round(160*e),o=Math.round(255*e);if(A.hour>12){const e=(23-A.hour)/11;return"rgb("+Math.round(0*e)+", "+Math.round(160*e)+", "+Math.round(255*e)+")"}return"rgb("+t+", "+n+", "+o+")"})()}}))).withConfig({displayName:"DayAndNite__Sky",componentId:"sc-lyojj5-2"})(["width:100%;height:100%;position:relative;transition:background-color 0.5s ease-in-out;"]),l=o.default.div.attrs((A=>({style:{top:A.top+"%",left:A.left+"%",opacity:A.opacity}}))).withConfig({displayName:"DayAndNite__Star",componentId:"sc-lyojj5-3"})(["width:3px;height:3px;border-radius:50%;background-color:#f5f5f5;position:absolute;z-index:1;"]),g=o.default.div.attrs((A=>({style:{bottom:function(A,e){const t="undefined"!=typeof window?window.innerHeight:0,n=t/2+450,o=t/2+300,a=(21-("sun"===e?(A+12)%24:A))*Math.PI/12,i=n+o*Math.sin(a);return t-i+"px"}(A.hour,A.type),left:function(A,e){const t="undefined"!=typeof window?window.innerWidth:0,n=t/2-75,o=t/2+150,a=(("sun"===e?(A+12)%24:A)+15)*Math.PI/12;return n+o*Math.cos(a)+"px"}(A.hour,A.type),background:"linear-gradient(to bottom, #f5f5f5, "+("sun"===A.type?"#ffdb58":"#f5f5f5")+")"}}))).withConfig({displayName:"DayAndNite__CelestialBody",componentId:"sc-lyojj5-4"})(["width:150px;height:150px;border-radius:50%;position:absolute;z-index:2;box-shadow:0px 0px 50px 20px #f5f5f5;"]);const c=A=>{let{hour:e}=A;const{0:t,1:o}=(0,n.useState)(1);(0,n.useEffect)((()=>{o(e>=0&&e<12?1-e/12:(e-12)/11)}),[e]);return[{top:15,left:10},{top:25,left:20},{top:10,left:40},{top:30,left:60},{top:20,left:70},{top:5,left:90},{top:35,left:95},{top:25,left:55},{top:15,left:80},{top:10,left:30},{top:20,left:50},{top:5,left:65}].map(((A,e)=>n.createElement(l,{key:e,top:A.top,left:A.left,opacity:t})))};e.default=()=>{const A=function(A){void 0===A&&(A=0);const{0:e,1:t}=(0,n.useState)(A);return(0,n.useEffect)((()=>{const A=setInterval((()=>{t((A=>(A+.1)%24))}),100);return()=>clearInterval(A)}),[]),e}();return n.createElement(a,null,n.createElement(i,null,n.createElement(r,{hour:A},n.createElement(g,{type:"sun",hour:A}),n.createElement(g,{type:"moon",hour:A}),n.createElement(c,{hour:A}))))}},321:function(A,e,t){t.r(e),t.d(e,{default:function(){return g}});var n=t(7294),o=t(1883),a=t(2788);const i=a.default.div.withConfig({displayName:"FlappyTanooki__Container",componentId:"sc-a1hp7f-0"})(["background:url(",");font-family:'Press Start 2P',cursive;height:100vh;width:100vw;position:absolute;"],"data:image/png;base64,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v+3bt2/fvn37v+8nlgGAfyDAACDAACDAAIAAA8Adlahxh2tv3759+/btb993AQPAAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBoAZ9b3MHS6/ffv27du3f2/fBQwAAwQYAAQYAAQYABBgALijclXv2KPt27dv37797fsuYAAYIMAAIMAAIMAAgAADwB3Pu8OJb2Pat2/fvn379l3AADBMgAFAgAFAgAEAAQaAOypR4w7X3r59+/bt29++7wIGgAECDAACDAACDAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAMyrX4fQXL+3bt2/fvv29+y5gABggwAAgwAAgwACAAAPAHZWocYdrb9++ffv27W/fdwEDwAABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQaAGfW9zB0uv3379u3bt39v3wUMAAMEGAAEGAAEGAAQYAC4o3JV79ij7du3b9++/e37LmAAGCDAACDAACDAAIAAA8Adz7vDiW9j2rdv3759+/ZdwAAwTIABQIABQIABAAEGgDsqUeMO196+ffv27dvfvu8CBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADMq1+H0Fy/t27dv3779vfsuYAAYIMAAIMAAIMAAgAADwB2VqHGHa2/fvn379u1v33cBA8AAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGgBn1vcwdLr99+/bt27d/b98FDAADBBgABBgABBgAEGAAuKNyVe/Yo+3bt2/fvv3t+y5gABggwAAgwAAgwACAAAPAHc+7w4lvY9q3b9++ffv2XcAAMEyAAUCAAUCAAQABBoA7KlHjDtfevn379u3b377vAgaAAQIMAAIMAAIMAAgwAAgwACDAACDAAIAAA4AAAwACDAAzKtfh9Bcv7du3b9++/b37LmAAGCDAACDAACDAAIAAA8Adlahxh2tv3759+/btb993AQPAAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBoAZ9b3MHS6/ffv27du3f2/fBQwAAwQYAAQYAAQYABBgALijclXv2KPt27dv37797fsuYAAYIMAAIMAAIMAAgAADwB3Pu8OJb2Pat2/fvn379l3AADBMgAFAgAFAgAEAAQaAOypR4w7X3r59+/bt29++7wIGgAECDAACDAACDAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAMyrX4fQXL+3bt2/fvv29+y5gABggwAAgwAAgwACAAAPAHZWocYdrb9++ffv27W/fdwEDwAABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQaAGfW9zB0uv3379u3bt39v3wUMAAMEGAAEGAAEGAAQYAC4o3JV79ij7du3b9++/e37LmAAGCDAACDAACDAAIAAA8Adz7vDiW9j2rdv3759+/ZdwAAwTIABQIABQIABAAEGgDsqUeMO196+ffv27dvfvu8CBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADMq1+H0Fy/t27dv3779vfsuYAAYIMAAIMAAIMAAgAADwB2VqHGHa2/fvn379u1v33cBA8AAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGgBn1vcwdLr99+/bt27d/b98FDAADBBgABBgABBgAEGAAuKNyVe/Yo+3bt2/fvv3t+y5gABggwAAgwAAgwACAAAPAHc+7w4lvY9q3b9++ffv2XcAAMEyAAUCAAUCAAQABBoA7KlHjDtfevn379u3b377vAgaAAQIMAAIMAAIMAAgwAAgwACDAACDAAIAAA4AAAwACDAAzKtfh9Bcv7du3b9++/b37LmAAGCDAACDAACDAAIAAA8Adlahxh2tv3759+/btb993AQPAAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBoAZ9b3MHS6/ffv27du3f2/fBQwAAwQYAAQYAAQYABBgALijclXv2KPt27dv37797fsuYAAYIMAAIMAAIMAAgAADwB3Pu8OJb2Pat2/fvn379l3AADBMgAFAgAFAgAEAAQaAOypR4w7X3r59+/bt29++7wIGgAECDAACDAACDAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAMyrX4fQXL+3bt2/fvv29+y5gABggwAAgwAAgwACAAAPAHZWocYdrb9++ffv27W/fdwEDwAABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQaAGfW9zB0uv3379u3bt39v3wUMAAMEGAAEGAAEGAAQYAC4o3JV79ij7du3b9++/e37LmAAGCDAACDAACDAAIAAA8Adz7vDiW9j2rdv3759+/ZdwAAwTIABQIABQIABAAEGgDsqUeMO196+ffv27dvfvu8CBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADMq1+H0Fy/t27dv3779vfsuYAAYIMAAIMAAIMAAgAADwB2VqHGHa2/fvn379u1v33cBA8AAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGgBn1vcwdLr99+/bt27d/b98FDAADBBgABBgABBgAEGAAuKNyVe/Yo+3bt2/fvv3t+y5gABggwAAgwAAgwACAAAPAHc+7w4lvY9q3b9++ffv2XcAAMEyAAUCAAUCAAQABBoA7KlHjDtfevn379u3b377vAgaAAQIMAAIMAAIMAAgwAAgwACDAACDAAIAAA4AAAwACDAAzKtfh9Bcv7du3b9++/b37LmAAGCDAACDAACDAAIAAA8Adlahxh2tv3759+/btb993AQPAAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBoAZ9b3MHS6/ffv27du3f2/fBQwAAwQYAAQYAAQYABBgALijclXv2KPt27dv37797fsuYAAYIMAAIMAAIMAAgAADwB3Pu8OJb2Pat2/fvn379l3AADBMgAFAgAFAgAEAAQaAOypR4w7X3r59+/bt29++7wIGgAECDAACDAACDAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAMyrX4fQXL+3bt2/fvv29+y5gABggwAAgwAAgwACAAAPAHZWocYdrb9++ffv27W/fdwEDwAABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQaAGfW9zB0uv3379u3bt39v3wUMAAMEGAAEGAAEGAAQYAC4o3JV79ij7du3b9++/e37LmAAGCDAACDAACDAAIAAA8Adz7vDiW9j2rdv3759+/ZdwAAwTIABQIABQIABAAEGgDsqUeMO196+ffv27dvfvu8CBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADMq1+H0Fy/t27dv3779vfsuYAAYIMAAIMAAIMAAgAADwB2VqHGHa2/fvn379u1v33cBA8AAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGgBn1vcwdLr99+/bt27d/b98FDAADBBgABBgABBgAEGAAuKNyVe/Yo+3bt2/fvv3t+y5gABggwAAgwAAgwACAAAPAHc+7w4lvY9q3b9++ffv2XcAAMEyAAUCAAUCAAQABBoA7KlHjDtfevn379u3b377vAgaAAQIMAAIMAAIMAAgwAAgwACDAACDAAIAAA4AAAwACDAAzKtfh9Bcv7du3b9++/b37LmAAGCDAACDAACDAAIAAA8Adlahxh2tv3759+/btb993AQPAAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBoAZ9b3MHS6/ffv27du3f2/fBQwAAwQYAAQYAAQYABBgALijclXv2KPt27dv37797fsuYAAYIMAAIMAAIMAAgAADwB3Pu8OJb2Pat2/fvn379l3AADBMgAFAgAFAgAEAAQaAOypR4w7X3r59+/bt29++7wIGgAECDAACDAACDAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAMyrX4fQXL+3bt2/fvv29+y5gABggwAAgwAAgwACAAAPAHZWocYdrb9++ffv27W/fdwEDwAABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQaAGfW9zB0uv3379u3bt39v3wUMAAMEGAAEGAAEGAAQYAC4o3JV79ij7du3b9++/e37LmAAGCDAACDAACDAAIAAA8Adz7vDiW9j2rdv3759+/ZdwAAwTIABQIABQIABAAEGgDsqUeMO196+ffv27dvfvu8CBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADMq1+H0Fy/t27dv3779vfsuYAAYIMAAIMAAIMAAgAADwB2VqHGHa2/fvn379u1v33cBA8AAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGgBn1vcwdLr99+/bt27d/b98FDAADBBgABBgABBgAEGAAuKNyVe/Yo+3bt2/fvv3t+y5gABggwAAgwAAgwACAAAPAHc+7w4lvY9q3b9++ffv2XcAAMEyAAUCAAUCAAQABBoA7KlHjDtfevn379u3b377vAgaAAQIMAAIMAAIMAAgwAAgwACDAACDAAIAAA4AAAwACDAAzKtfh9Bcv7du3b9++/b37LmAAGCDAACDAACDAAIAAA8Adlahxh2tv3759+/btb993AQPAAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBoAZ9b3MHS6/ffv27du3f2/fBQwAAwQYAAQYAAQYABBgALijclXv2KPt27dv37797fsuYAAYIMAAIMAAIMAAgAADwB3Pu8OJb2Pat2/fvn379l3AADBMgAFAgAFAgAEAAQaAOypR4w7X3r59+/bt29++7wIGgAECDAACDAACDAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAMyrX4fQXL+3bt2/fvv29+y5gABggwAAgwAAgwACAAAPAHZWocYdrb9++ffv27W/fdwEDwAABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQaAGfW9zB0uv3379u3bt39v3wUMAAMEGAAEGAAEGAAQYAC4o3JV79ij7du3b9++/e37LmAAGCDAACDAACDAAIAAA8Adz7vDiW9j2rdv3759+/ZdwAAwTIABQIABQIABAAEGgDsqUeMO196+ffv27dvfvu8CBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADPqe5k7XH779u3bt2//3r4LGAAGCDAACDAACDAAIMAAcEflqt6xR9u3b9++ffvb913AADBAgAFAgAFAgAEAAQaAO553hxPfxrRv3759+/btu4ABYJgAA4AAA4AAAwACDAB3VKLGHa69ffv27du3v33fBQwAAwQYAAQYAAQYABBgABBgAECAAUCAAQABBgABBgAEGABm1Pcyd7j89u3bt2/f/r19FzAADBBgABBgABBgAECAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4N+q8jsAgD/uL78CABBgABBgAECAAUCAAQAAAAAAAAAAAAAAgP+L2v4Dfnm/93u/93u/9y98v78DBoABAgwAAgwAAgwACDAACDAAIMAAIMAAgAADgAADAAIMADPKtzq93/u93/u93/v//PtdwAAwQIABQIABQIABAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAUCAAQABBgABBgAEGAAEGAAQYAAQYABAgAFAgAFAgAEAAQaAa2r7D/jl/d7v/d7v/d6/8P0uYAAYIMAAIMAAIMAAgAADgAADAAIMAAIMAAgwAAgwACDAACDAACDAAIAAA4AAAwACDAACDAAIMAAIMAAgwAAgwAAgwACAAAOAAAMAAgwAAgwACDAACDAAIMAAIMAAIMAAgAADgAADAAIMAAIMAAgwAAgwACDAACDAACDAAIAAA8BNVeEf8Cv9H/B+7/d+7/d+71/4fhcwAAwQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC++nsAsXeNCrFwx6EAAAAASUVORK5CYII="),r=a.default.div.withConfig({displayName:"FlappyTanooki__ControlContainer",componentId:"sc-a1hp7f-1"})(["position:absolute;top:3em;left:50%;transform:translateX(-50%);text-align:center;color:white;padding:1em;h1{margin-bottom:0;}"]),l=a.default.button.withConfig({displayName:"FlappyTanooki__Button",componentId:"sc-a1hp7f-2"})(["all:unset;color:white;background-color:#336699;padding:10px 20px;border-radius:4px;cursor:pointer;"]);var g=()=>{(0,n.useEffect)((()=>{if("undefined"!=typeof window){const A=document.createElement("script");return A.src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.55.2/phaser.min.js",A.async=!0,A.onload=()=>{d(window.Phaser)},document.body.appendChild(A),()=>{document.body.removeChild(A)}}}),[]);const A=(0,n.useRef)(null),{0:e,1:t}=(0,n.useState)(null),{0:a,1:g}=(0,n.useState)(0),{0:c,1:d}=(0,n.useState)(null),u=()=>{if(e){const A=document.querySelector("canvas");A.parentNode.removeChild(A),e.destroy(),t(null),g(0)}const n=new c.Game({type:c.AUTO,transparent:!0,parent:A.current,scale:{mode:c.Scale.FIT,autoCenter:c.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{gravity:{y:800},debug:!1}}});let a,i,r=0;function l(A){const e=c.Math.Between(-200,-100),t=e+800,n=i.create(800,e,"pipe"),o=i.create(800,t,"pipe");n.body.velocity.x=-200,o.body.velocity.x=-200,n.body.allowGravity=!1,o.body.allowGravity=!1,n.body.immovable=!0,o.body.immovable=!0}function d(){a.setVelocityY(-300)}function u(){this.physics.pause(),n.destroy(),alert("Game Over!")}n.scene.add("flappyBirdScene",{preload:function(){this.load.image("background",(0,o.withPrefix)("/background.png")),this.load.image("bird",(0,o.withPrefix)("/bird.png")),this.load.image("pipe",(0,o.withPrefix)("/pipe.png"))},create:function(){const{width:A,height:e}=n.scale;this.add.image(.5*A,.5*e,"background").setDisplaySize(A,e),i=this.physics.add.group(),a=this.physics.add.sprite(100,300,"bird").setScale(.1),a.setCollideWorldBounds(!0),a.setGravityY(-300),this.physics.add.collider(a,i,u,null,this),l(this),this.time.addEvent({delay:2500,callback:l,args:[this],loop:!0}),this.input.keyboard.on("keydown-SPACE",d,this),this.input.on("pointerdown",d,this)},update:function(){(a.y<0||a.y>600)&&u.call(this);const A=i.getChildren()[1+2*r];A&&A.getBounds().right<a.getBounds().left&&(r+=1,g(r))}}),n.scene.start("flappyBirdScene"),t(n)};return n.createElement(i,null,n.createElement(r,null,n.createElement(l,{onClick:A=>{u(),A.currentTarget.blur()}},e?"Restart":"Start"),e&&n.createElement("h1",null,a)),n.createElement("div",{ref:A}))}},1808:function(A,e,t){t.r(e),t.d(e,{default:function(){return G}});var n=t(7294),o=t(2788),a=t.p+"static/coin-sound-103c4acc75640ed10900e9d9322d5181.mp3";var i=()=>{const{0:A,1:e}=(0,n.useState)("undefined"!=typeof window?window.innerWidth:0),t="Visit my Twitter to take my AI-generated Mario quiz! Every day at 9:00 AM EDT my Mario Quiz Bot asks OpenAI (ChatGPT) to generate a quiz, then the bot posts the quiz as a Twitter poll and ultimately posts the answer at 5:00 PM EDT. Try it out and turn on notifications from my profile for a daily reminder!";return(0,n.useEffect)((()=>{const A=setInterval((()=>{e((A=>{const e=A-1;return e<1.75*-t.length*10?window.innerWidth:e}))}),5);return()=>clearInterval(A)}),[t]),n.createElement("div",{style:{position:"absolute",whiteSpace:"nowrap",left:A,color:" white",marginTop:"32px"}},t)},r=t(1883);const l=o.default.div.withConfig({displayName:"StartScreen__Container",componentId:"sc-1eihpen-0"})(["height:100vh;font-family:'Press Start 2P',cursive;"]),g="100px",c="#ffc4b7",d=o.default.div.withConfig({displayName:"StartScreen__Sky",componentId:"sc-1eihpen-1"})(["height:",";background:#7085ff;display:flex;flex-direction:column;align-items:center;padding:0 5px;"],"calc(100vh - 100px)"),u=o.default.div.withConfig({displayName:"StartScreen__Ground",componentId:"sc-1eihpen-2"})(["height:",";background:#e45e10;border-top:"," dashed ",";position:relative;"],g,"5px",c),B=o.default.div.withConfig({displayName:"StartScreen__Hill",componentId:"sc-1eihpen-3"})(["width:200px;height:150px;background-color:#1c8415;border-top-left-radius:110px;border-top-right-radius:110px;border:2px dashed black;border-bottom:0;position:absolute;inset:",";"],"auto auto calc(100px + 5px) 30px"),p=(0,o.default)(B).withConfig({displayName:"StartScreen__Bush",componentId:"sc-1eihpen-4"})(["width:150px;height:50px;background-color:#a7be00;inset:",";"],(A=>{let{position:e}=A;return e})),s=()=>["auto 130px calc(100px + 5px) auto","auto 30px calc(100px + 5px) auto","auto 230px calc(100px + 5px) auto"].map((A=>n.createElement(p,{key:A,position:A}))),f=o.default.div.withConfig({displayName:"StartScreen__TitleBox",componentId:"sc-1eihpen-5"})(["max-width:800px;aspect-ratio:2.69;z-index:690;background:#e45e10;box-shadow:5px 5px 0px black;margin-top:",";margin-right:2px;text-align:center;display:flex;position:relative;align-items:center;border-top:5px solid ",";border-left:5px solid ",";@media only screen and (max-height:550px){margin-top:0;}"],g,c,c),w=o.default.div.withConfig({displayName:"StartScreen__TitleBoxContent",componentId:"sc-1eihpen-6"})(["color:",";font-size:calc(100vw / 8);line-height:1.25em;text-shadow:calc(1em / 10) calc(1em / 10) 0px black;@media only screen and (min-width:800px){font-size:110px;}"],c),m=o.default.div.withConfig({displayName:"StartScreen__Copyright",componentId:"sc-1eihpen-7"})(["position:absolute;bottom:-1.5em;right:0;font-size:1rem;text-shadow:none;font-weight:bold;color:",";line-height:1em;@media only screen and (max-width:400px){font-size:1rem;}"],c),E=o.default.div.withConfig({displayName:"StartScreen__OptionContainer",componentId:"sc-1eihpen-8"})(["margin-top:2rem;z-index:690;"]),v="\n\tcolor: white;\n\tdisplay: block;\n\ttext-decoration: none;\n\tmargin-top: 1rem;\n\tcursor: pointer;\n",C=(0,o.default)(r.Link).withConfig({displayName:"StartScreen__InternalOption",componentId:"sc-1eihpen-9"})(["",""],v),h=o.default.a.withConfig({displayName:"StartScreen__ExternalOption",componentId:"sc-1eihpen-10"})(["",""],v),I=o.default.button.withConfig({displayName:"StartScreen__ButtonOption",componentId:"sc-1eihpen-11"})(["all:unset;",";"],v),b=o.default.span.withConfig({displayName:"StartScreen__Nail",componentId:"sc-1eihpen-12"})(["width:10px;height:10px;position:absolute;background-color:",";box-shadow:3px 3px 0px black;inset:",";"],c,(A=>{let{position:e}=A;return e})),D=()=>["10px auto auto 10px","10px 10px auto auto","auto 10px 10px auto","auto auto 10px 10px"].map((A=>n.createElement(b,{key:A,position:A}))),Q=function(A){let{setOptions:e}=void 0===A?{}:A;return n.createElement(n.Fragment,null,n.createElement(h,{href:"https://www.linkedin.com/in/williamcougan/",target:"_blank"},"1 LINKEDIN"),n.createElement(h,{href:"https://github.com/billycougz",target:"_blank"},"2 GITHUB"),n.createElement(h,{href:"https://twitter.com/will_cougar",target:"_blank"},"3 TWITTER"),n.createElement(I,{onClick:()=>e((()=>y))},"4 CONCEPTS"),n.createElement(I,{onClick:()=>e((()=>M))},"5 APPS"))},y=A=>{let{setOptions:e}=A;return n.createElement(n.Fragment,null,n.createElement(C,{to:"/concept/Flappy-Tanooki"},"1 FLAPPY TANOOKI"),n.createElement(C,{to:"/concept/Day-And-Nite"},"2 DAY AND NITE"),n.createElement(I,{onClick:()=>e((()=>Q))},"← MAIN MENU"))},M=A=>{let{setOptions:e}=A;return n.createElement(n.Fragment,null,n.createElement(h,{href:"https://perfectionlists.billycougan.com/",target:"_blank"},"1 PERFECTIONLISTS"),n.createElement(h,{href:"https://squares.billycougan.com/",target:"_blank"},"2 SQUARES"),n.createElement(h,{href:"https://sheets.billycougan.com/",target:"_blank"},"3 BILLSEYE"),n.createElement(I,{onClick:()=>e((()=>Q))},"← MAIN MENU"))};var G=()=>{const[A,e]=n.useState((()=>Q)),t=n.useRef(null);return n.createElement(l,null,n.createElement(d,null,n.createElement(i,null),n.createElement(f,null,n.createElement(D,null),n.createElement(w,null,"WILLIAM COUGAN"),n.createElement(m,null,"© 2023 WILLIAM COUGAN")),n.createElement(E,{onClick:()=>{t.current.volume=.02,t.current.play()}},n.createElement(A,{setOptions:e}),n.createElement("audio",{ref:t,src:a}))),n.createElement(u,null,n.createElement(B,null),n.createElement(s,null)))}}}]);
//# sourceMappingURL=component---src-pages-concept-template-js-4cb1c057eb26d7050fe8.js.map