(()=>{var e={};e.id=416,e.ids=[416,888,660],e.modules={1747:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>P,default:()=>v,getServerSideProps:()=>S,getStaticPaths:()=>N,getStaticProps:()=>b,reportWebVitals:()=>w,routeModule:()=>$,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>k,unstable_getStaticParams:()=>z,unstable_getStaticPaths:()=>Z,unstable_getStaticProps:()=>C});var l={};s.r(l),s.d(l,{default:()=>g});var a=s(7093),o=s(5244),i=s(1323),n=s(1682),r=s.n(n),c=s(4163),x=s(997),d=(0,s(2263).Z)("outline","minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]),u=s(5425),m=s(6552),p=s(6689);let j={0:"shadow-none",1:"shadow-sm",2:"shadow-md",3:"shadow-lg",4:"shadow-xl",5:"shadow-2xl"},h={outlined:"btn-outline-",filled:"btn-",text:"btn-text-"},f=e=>{let{text:t,onClick:s,color:l,elevation:a,variant:o,children:i}=e;return x.jsx("button",{...e,style:{boxSizing:"border-box"},onClick:(s?e=>{s(e)}:void 0)??void 0,className:`
                overflow-hidden
                ${h[o??"filled"]}${l??"primary"}
                ${j[a??0]}
                p-2
                text-base
                rounded-full
                ${e.className??""}
            `,children:i??t??""})},g=()=>{let[e,t]=(0,p.useState)(0),[s,l]=(0,p.useState)(1);return x.jsx(m.Z,{titulo:"Com estado",subtitulo:"Cap\xedtulo estado",children:(0,x.jsxs)("div",{className:`
                flex justify-center items-center
                h-full
                w-full
                flex-col
                text-9xl font-bold
                gap-5
            `,children:[(0,x.jsxs)("div",{className:`
                    text-zinc-500
                    text-9xl
                    flex justify-center items-center flex-col
                `,children:[x.jsx("span",{className:"text-xs",children:"Contador"}),e]}),(0,x.jsxs)("div",{className:`
                    flex gap-2    
                `,children:[x.jsx(f,{variant:"filled",onClick:()=>{t(e-s<0?0:e-s)},disabled:0===e,children:x.jsx(d,{size:30})}),x.jsx(f,{variant:"filled",onClick:()=>{t(e+s)},children:x.jsx(u.Z,{size:30})})]}),(0,x.jsxs)("div",{className:"flex gap-5 flex-row items-center",children:[x.jsx(f,{color:"warning",variant:"outlined",onClick:()=>{l(s-1)},disabled:1===s,children:x.jsx(d,{size:20})}),(0,x.jsxs)("span",{className:"text-xs",children:["Incrementar em: ",x.jsx("span",{className:"text-purple-500",children:s})]}),x.jsx(f,{color:"warning",variant:"outlined",onClick:()=>{l(s+1)},children:x.jsx(u.Z,{size:20})})]})]})})},v=(0,i.l)(l,"default"),b=(0,i.l)(l,"getStaticProps"),N=(0,i.l)(l,"getStaticPaths"),S=(0,i.l)(l,"getServerSideProps"),P=(0,i.l)(l,"config"),w=(0,i.l)(l,"reportWebVitals"),C=(0,i.l)(l,"unstable_getStaticProps"),Z=(0,i.l)(l,"unstable_getStaticPaths"),z=(0,i.l)(l,"unstable_getStaticParams"),y=(0,i.l)(l,"unstable_getServerProps"),k=(0,i.l)(l,"unstable_getServerSideProps"),$=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/estado/com",pathname:"/estado/com",bundlePath:"",filename:""},components:{App:c.default,Document:r()},userland:l})},6552:(e,t,s)=>{"use strict";s.d(t,{Z:()=>w});var l=s(997),a=s(3209),o=s(1664),i=s.n(o);let n=e=>(0,l.jsxs)(i(),{href:"/",className:`
            ${e.componentName??"Logo"}
            text-white
            bg-purple-700
            flex items-center justify-center
            flex-1
            h-16
            px-5
            gap-2.5
        `,children:[l.jsx(a.Z,{size:30,stroke:1}),l.jsx("span",{className:"text-2xl font-bold",children:"React"})]}),r=e=>(0,l.jsxs)(i(),{href:e.url,className:`
                flex gap-2 items-center
                bg-purple-700 
                w-full px-2 py-2 rounded-lg 
                cursor-pointer
                transition duration-1000
                hover:bg-purple-600
                active:bg-purple-900
                text-xs
            `,...e??{},children:[e.icone,e.texto]});var c=s(3591),x=s(4333),d=s(6429),u=s(2969),m=s(6595),p=s(3764),j=s(3524),h=s(4184),f=s(8860);let g=e=>l.jsx("div",{className:`
            text-sm text-zinc-500 pl-3 pt-4
            ${e.className??""}
        `,children:l.jsx("div",{children:e.texto})}),v=()=>l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:`
            flex justify-start w-52 flex-col p-2 gap-2
        `,children:[l.jsx(g,{texto:"Estado"}),l.jsx(r,{texto:"Componente com Estado",title:"Componente com Estado",url:"/estado/com",icone:l.jsx(c.Z,{})}),l.jsx(r,{texto:"Componente sem Estado",title:"Componente sem Estado",url:"/estado/sem",icone:l.jsx(c.Z,{})}),l.jsx(r,{texto:"Campo de Texto",title:"Campo de Texto",url:"/estado/campotexto",icone:l.jsx(x.Z,{})}),l.jsx(g,{texto:"Fundamentos"}),l.jsx(r,{texto:"JSX com JS",url:"/fundamentos/soma",icone:l.jsx(d.Z,{}),title:"JSX com JS"}),l.jsx(r,{texto:"JSX: Chamando Fun\xe7\xf5es",title:"JSX: Chamando Fun\xe7\xf5es",url:"/fundamentos/funcoes",icone:l.jsx(u.Z,{})}),l.jsx(r,{texto:"P\xe1gina #1",url:"/fundamentos/pagina",icone:l.jsx(m.Z,{})}),l.jsx(r,{texto:"P\xe1gina #2",url:"/pagina1",icone:l.jsx(p.Z,{})}),l.jsx(g,{texto:"Componentes"}),l.jsx(r,{texto:"B\xe1sico",url:"/componente/basico",icone:l.jsx(j.Z,{})}),l.jsx(r,{texto:"T\xedtulo",url:"/componente/titulo",icone:l.jsx(h.Z,{})}),l.jsx(r,{texto:"Trecho",url:"/componente/trecho",icone:l.jsx(f.Z,{})})]})}),b=e=>(0,l.jsxs)("div",{className:`
            ${e.componentName??"AreaLateral"}
            bg-zinc-900
        `,children:[l.jsx("div",{className:`
            h-16
            flex items-center justify-center
            container-logo
        `,children:l.jsx(n,{})}),l.jsx(v,{})]}),N=e=>(0,l.jsxs)("div",{className:`
                flex flex-col
                justify-center
                p-2
                ${e.className??""}
            `,children:[l.jsx("div",{className:`
                flex-col 
                text-2xl
                font-bold
            `,children:e.titulo}),l.jsx("div",{className:`
                text-sm
                font-thin
                text-zinc-300
            `,children:e.subtitulo})]}),S=e=>l.jsx("div",{className:`
            flex justify-start items-start flex-1 flex-col p-2
            bg-zinc-800
            text-base
            ${e.className??""}
        `,children:e.children}),P=e=>(0,l.jsxs)("div",{className:`
            flex flex-row justify-between items-center
            h-20
            bg-zinc-800
            border-t border-zinc-700
            text-base
            text-zinc-500
            p-4
            ${e.className??""}
        `,children:[l.jsx("div",{children:e.textoEsquerda}),l.jsx("div",{children:e.textoDireita})]}),w=e=>l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex h-screen",children:[l.jsx(b,{}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[l.jsx(N,{titulo:e.titulo??"T\xedtulo",subtitulo:e.subtitulo??"Estou na pasta pages",className:"h-16 bg-gradient-to-r bg-zinc-700 shadow-sm",id:"cabecalho"}),l.jsx(S,{children:e.children}),l.jsx(P,{textoEsquerda:"Feito com ❤️ por Eudes",textoDireita:`Desenvolvido em ${new Date().getFullYear()}`})]})]})})},4163:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var l=s(997);s(4542);let a=({Component:e,pageProps:t})=>l.jsx(e,{...t})},4542:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")},5425:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var l=(0,s(2263).Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[682,595],()=>s(1747));module.exports=l})();