(()=>{var e={};e.id=591,e.ids=[591,888,660],e.modules={7879:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>f,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>h,getStaticProps:()=>j,reportWebVitals:()=>b,routeModule:()=>C,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>Z,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>v});var o={};s.r(o),s.d(o,{default:()=>m});var a=s(7093),l=s(5244),r=s(1323),i=s(1682),n=s.n(i),c=s(4163),x=s(997),d=s(5425),u=s(6552);let m=()=>{let e=0;return(0,x.jsxs)(u.Z,{titulo:"Sem estado",subtitulo:"Cap\xedtulo estado",children:[(0,x.jsxs)("div",{children:[x.jsx("span",{children:"Valor: "}),x.jsx("span",{children:e})]}),(0,x.jsxs)("button",{onClick:()=>{console.log(e+=1)},className:`
                bg-purple-700 hover:bg-purple-600 
                text-white text-sm 
                flex gap-2 items-center
                font-bold py-2 px-4 rounded
            `,children:[x.jsx(d.Z,{size:20}),"Incrementar"]})]})},p=(0,r.l)(o,"default"),j=(0,r.l)(o,"getStaticProps"),h=(0,r.l)(o,"getStaticPaths"),g=(0,r.l)(o,"getServerSideProps"),f=(0,r.l)(o,"config"),b=(0,r.l)(o,"reportWebVitals"),v=(0,r.l)(o,"unstable_getStaticProps"),S=(0,r.l)(o,"unstable_getStaticPaths"),N=(0,r.l)(o,"unstable_getStaticParams"),P=(0,r.l)(o,"unstable_getServerProps"),Z=(0,r.l)(o,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/estado/sem",pathname:"/estado/sem",bundlePath:"",filename:""},components:{App:c.default,Document:n()},userland:o})},6552:(e,t,s)=>{"use strict";s.d(t,{Z:()=>Z});var o=s(997),a=s(3209),l=s(1664),r=s.n(l);let i=e=>(0,o.jsxs)(r(),{href:"/",className:`
            ${e.componentName??"Logo"}
            text-white
            bg-purple-700
            flex items-center justify-center
            flex-1
            h-16
            px-5
            gap-2.5
        `,children:[o.jsx(a.Z,{size:30,stroke:1}),o.jsx("span",{className:"text-2xl font-bold",children:"React"})]}),n=e=>(0,o.jsxs)(r(),{href:e.url,className:`
                flex gap-2 items-center
                bg-purple-700 
                w-full px-2 py-2 rounded-lg 
                cursor-pointer
                transition duration-1000
                hover:bg-purple-600
                active:bg-purple-900
                text-xs
            `,...e??{},children:[e.icone,e.texto]});var c=s(3591),x=s(4333),d=s(6429),u=s(2969),m=s(6595),p=s(3764),j=s(3524),h=s(4184),g=s(8860);let f=e=>o.jsx("div",{className:`
            text-sm text-zinc-500 pl-3 pt-4
            ${e.className??""}
        `,children:o.jsx("div",{children:e.texto})}),b=()=>o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{className:`
            flex justify-start w-52 flex-col p-2 gap-2
        `,children:[o.jsx(f,{texto:"Estado"}),o.jsx(n,{texto:"Componente com Estado",title:"Componente com Estado",url:"/estado/com",icone:o.jsx(c.Z,{})}),o.jsx(n,{texto:"Componente sem Estado",title:"Componente sem Estado",url:"/estado/sem",icone:o.jsx(c.Z,{})}),o.jsx(n,{texto:"Campo de Texto",title:"Campo de Texto",url:"/estado/campotexto",icone:o.jsx(x.Z,{})}),o.jsx(f,{texto:"Fundamentos"}),o.jsx(n,{texto:"JSX com JS",url:"/fundamentos/soma",icone:o.jsx(d.Z,{}),title:"JSX com JS"}),o.jsx(n,{texto:"JSX: Chamando Fun\xe7\xf5es",title:"JSX: Chamando Fun\xe7\xf5es",url:"/fundamentos/funcoes",icone:o.jsx(u.Z,{})}),o.jsx(n,{texto:"P\xe1gina #1",url:"/fundamentos/pagina",icone:o.jsx(m.Z,{})}),o.jsx(n,{texto:"P\xe1gina #2",url:"/pagina1",icone:o.jsx(p.Z,{})}),o.jsx(f,{texto:"Componentes"}),o.jsx(n,{texto:"B\xe1sico",url:"/componente/basico",icone:o.jsx(j.Z,{})}),o.jsx(n,{texto:"T\xedtulo",url:"/componente/titulo",icone:o.jsx(h.Z,{})}),o.jsx(n,{texto:"Trecho",url:"/componente/trecho",icone:o.jsx(g.Z,{})})]})}),v=e=>(0,o.jsxs)("div",{className:`
            ${e.componentName??"AreaLateral"}
            bg-zinc-900
        `,children:[o.jsx("div",{className:`
            h-16
            flex items-center justify-center
            container-logo
        `,children:o.jsx(i,{})}),o.jsx(b,{})]}),S=e=>(0,o.jsxs)("div",{className:`
                flex flex-col
                justify-center
                p-2
                ${e.className??""}
            `,children:[o.jsx("div",{className:`
                flex-col 
                text-2xl
                font-bold
            `,children:e.titulo}),o.jsx("div",{className:`
                text-sm
                font-thin
                text-zinc-300
            `,children:e.subtitulo})]}),N=e=>o.jsx("div",{className:`
            flex justify-start items-start flex-1 flex-col p-2
            bg-zinc-800
            text-base
            ${e.className??""}
        `,children:e.children}),P=e=>(0,o.jsxs)("div",{className:`
            flex flex-row justify-between items-center
            h-20
            bg-zinc-800
            border-t border-zinc-700
            text-base
            text-zinc-500
            p-4
            ${e.className??""}
        `,children:[o.jsx("div",{children:e.textoEsquerda}),o.jsx("div",{children:e.textoDireita})]}),Z=e=>o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex h-screen",children:[o.jsx(v,{}),(0,o.jsxs)("div",{className:"flex flex-col flex-1",children:[o.jsx(S,{titulo:e.titulo??"T\xedtulo",subtitulo:e.subtitulo??"Estou na pasta pages",className:"h-16 bg-gradient-to-r bg-zinc-700 shadow-sm",id:"cabecalho"}),o.jsx(N,{children:e.children}),o.jsx(P,{textoEsquerda:"Feito com ❤️ por Eudes",textoDireita:`Desenvolvido em ${new Date().getFullYear()}`})]})]})})},4163:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var o=s(997);s(4542);let a=({Component:e,pageProps:t})=>o.jsx(e,{...t})},4542:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")},5425:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var o=(0,s(2263).Z)("outline","plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]])}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),o=t.X(0,[682,595],()=>s(7879));module.exports=o})();