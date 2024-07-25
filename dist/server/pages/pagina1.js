(()=>{var e={};e.id=12,e.ids=[12,888,660],e.modules={4604:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>h,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>j,getStaticProps:()=>m,reportWebVitals:()=>f,routeModule:()=>Z,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>N,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>b});var a={};s.r(a),s.d(a,{default:()=>u});var o=s(7093),l=s(5244),r=s(1323),i=s(1682),n=s.n(i),c=s(4163),x=s(997);s(4542);var d=s(6552);let u=()=>{let e=new Date().getFullYear();return(0,x.jsxs)(d.Z,{titulo:"Minha P\xe1gina",subtitulo:"Estou na pasta pages",children:[x.jsx("h1",{children:"P\xe1gina 1"}),x.jsx("p",{children:"Estou na pasta pages"}),(0,x.jsxs)("p",{children:["Desenvolvido em ",e]})]})},p=(0,r.l)(a,"default"),m=(0,r.l)(a,"getStaticProps"),j=(0,r.l)(a,"getStaticPaths"),g=(0,r.l)(a,"getServerSideProps"),h=(0,r.l)(a,"config"),f=(0,r.l)(a,"reportWebVitals"),b=(0,r.l)(a,"unstable_getStaticProps"),v=(0,r.l)(a,"unstable_getStaticPaths"),S=(0,r.l)(a,"unstable_getStaticParams"),P=(0,r.l)(a,"unstable_getServerProps"),N=(0,r.l)(a,"unstable_getServerSideProps"),Z=new o.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/pagina1",pathname:"/pagina1",bundlePath:"",filename:""},components:{App:c.default,Document:n()},userland:a})},6552:(e,t,s)=>{"use strict";s.d(t,{Z:()=>Z});var a=s(997),o=s(3209),l=s(1664),r=s.n(l);let i=e=>(0,a.jsxs)(r(),{href:"/",className:`
            ${e.componentName??"Logo"}
            text-white
            bg-purple-700
            flex items-center justify-center
            flex-1
            h-16
            px-5
            gap-2.5
        `,children:[a.jsx(o.Z,{size:30,stroke:1}),a.jsx("span",{className:"text-2xl font-bold",children:"React"})]}),n=e=>(0,a.jsxs)(r(),{href:e.url,className:`
                flex gap-2 items-center
                bg-purple-700 
                w-full px-2 py-2 rounded-lg 
                cursor-pointer
                transition duration-1000
                hover:bg-purple-600
                active:bg-purple-900
                text-xs
            `,...e??{},children:[e.icone,e.texto]});var c=s(3591),x=s(4333),d=s(6429),u=s(2969),p=s(6595),m=s(3764),j=s(3524),g=s(4184),h=s(8860);let f=e=>a.jsx("div",{className:`
            text-sm text-zinc-500 pl-3 pt-4
            ${e.className??""}
        `,children:a.jsx("div",{children:e.texto})}),b=()=>a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:`
            flex justify-start w-52 flex-col p-2 gap-2
        `,children:[a.jsx(f,{texto:"Estado"}),a.jsx(n,{texto:"Componente com Estado",title:"Componente com Estado",url:"/estado/com",icone:a.jsx(c.Z,{})}),a.jsx(n,{texto:"Componente sem Estado",title:"Componente sem Estado",url:"/estado/sem",icone:a.jsx(c.Z,{})}),a.jsx(n,{texto:"Campo de Texto",title:"Campo de Texto",url:"/estado/campotexto",icone:a.jsx(x.Z,{})}),a.jsx(f,{texto:"Fundamentos"}),a.jsx(n,{texto:"JSX com JS",url:"/fundamentos/soma",icone:a.jsx(d.Z,{}),title:"JSX com JS"}),a.jsx(n,{texto:"JSX: Chamando Fun\xe7\xf5es",title:"JSX: Chamando Fun\xe7\xf5es",url:"/fundamentos/funcoes",icone:a.jsx(u.Z,{})}),a.jsx(n,{texto:"P\xe1gina #1",url:"/fundamentos/pagina",icone:a.jsx(p.Z,{})}),a.jsx(n,{texto:"P\xe1gina #2",url:"/pagina1",icone:a.jsx(m.Z,{})}),a.jsx(f,{texto:"Componentes"}),a.jsx(n,{texto:"B\xe1sico",url:"/componente/basico",icone:a.jsx(j.Z,{})}),a.jsx(n,{texto:"T\xedtulo",url:"/componente/titulo",icone:a.jsx(g.Z,{})}),a.jsx(n,{texto:"Trecho",url:"/componente/trecho",icone:a.jsx(h.Z,{})})]})}),v=e=>(0,a.jsxs)("div",{className:`
            ${e.componentName??"AreaLateral"}
            bg-zinc-900
        `,children:[a.jsx("div",{className:`
            h-16
            flex items-center justify-center
            container-logo
        `,children:a.jsx(i,{})}),a.jsx(b,{})]}),S=e=>(0,a.jsxs)("div",{className:`
                flex flex-col
                justify-center
                p-2
                ${e.className??""}
            `,children:[a.jsx("div",{className:`
                flex-col 
                text-2xl
                font-bold
            `,children:e.titulo}),a.jsx("div",{className:`
                text-sm
                font-thin
                text-zinc-300
            `,children:e.subtitulo})]}),P=e=>a.jsx("div",{className:`
            flex justify-start items-start flex-1 flex-col p-2
            bg-zinc-800
            text-base
            ${e.className??""}
        `,children:e.children}),N=e=>(0,a.jsxs)("div",{className:`
            flex flex-row justify-between items-center
            h-20
            bg-zinc-800
            border-t border-zinc-700
            text-base
            text-zinc-500
            p-4
            ${e.className??""}
        `,children:[a.jsx("div",{children:e.textoEsquerda}),a.jsx("div",{children:e.textoDireita})]}),Z=e=>a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex h-screen",children:[a.jsx(v,{}),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[a.jsx(S,{titulo:e.titulo??"T\xedtulo",subtitulo:e.subtitulo??"Estou na pasta pages",className:"h-16 bg-gradient-to-r bg-zinc-700 shadow-sm",id:"cabecalho"}),a.jsx(P,{children:e.children}),a.jsx(N,{textoEsquerda:"Feito com ❤️ por Eudes",textoDireita:`Desenvolvido em ${new Date().getFullYear()}`})]})]})})},4163:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(997);s(4542);let o=({Component:e,pageProps:t})=>a.jsx(e,{...t})},4542:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[682,595],()=>s(4604));module.exports=a})();