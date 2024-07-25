(()=>{var e={};e.id=390,e.ids=[390,888,660],e.modules={1055:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>f,getStaticPaths:()=>h,getStaticProps:()=>j,reportWebVitals:()=>b,routeModule:()=>Z,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>N,unstable_getStaticProps:()=>v});var l={};s.r(l),s.d(l,{default:()=>m});var a=s(7093),o=s(5244),i=s(1323),r=s(1682),n=s.n(r),c=s(4163),x=s(997);let d=e=>{let{label:t,value:s,onChange:l,prefix:a,sufix:o}=e;return x.jsx("div",{className:"flex flex-col",children:(0,x.jsxs)("label",{className:"text-field-label",children:[t,(0,x.jsxs)("div",{className:"text-field-container",children:[a?x.jsx("div",{className:"text-field-prefix",children:a}):null,x.jsx("input",{value:s,onChange:l,className:`
                            text-field-secondary
                            ${e.className??""}
                            `}),o?x.jsx("div",{className:"text-field-sufix",children:o}):null]}),x.jsx("span",{className:"text-field-helper",children:"0/100"})]})})};var u=s(6552);let m=()=>x.jsx(u.Z,{titulo:"Campo de Texto",subtitulo:"Cap\xedtulo Estado",children:x.jsx(d,{label:"Nome",placeholder:"Digite o nome",onChange:e=>console.log(e)})}),p=(0,i.l)(l,"default"),j=(0,i.l)(l,"getStaticProps"),h=(0,i.l)(l,"getStaticPaths"),f=(0,i.l)(l,"getServerSideProps"),g=(0,i.l)(l,"config"),b=(0,i.l)(l,"reportWebVitals"),v=(0,i.l)(l,"unstable_getStaticProps"),N=(0,i.l)(l,"unstable_getStaticPaths"),S=(0,i.l)(l,"unstable_getStaticParams"),P=(0,i.l)(l,"unstable_getServerProps"),C=(0,i.l)(l,"unstable_getServerSideProps"),Z=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/estado/campotexto",pathname:"/estado/campotexto",bundlePath:"",filename:""},components:{App:c.default,Document:n()},userland:l})},6552:(e,t,s)=>{"use strict";s.d(t,{Z:()=>C});var l=s(997),a=s(3209),o=s(1664),i=s.n(o);let r=e=>(0,l.jsxs)(i(),{href:"/",className:`
            ${e.componentName??"Logo"}
            text-white
            bg-purple-700
            flex items-center justify-center
            flex-1
            h-16
            px-5
            gap-2.5
        `,children:[l.jsx(a.Z,{size:30,stroke:1}),l.jsx("span",{className:"text-2xl font-bold",children:"React"})]}),n=e=>(0,l.jsxs)(i(),{href:e.url,className:`
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
        `,children:l.jsx("div",{children:e.texto})}),b=()=>l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:`
            flex justify-start w-52 flex-col p-2 gap-2
        `,children:[l.jsx(g,{texto:"Estado"}),l.jsx(n,{texto:"Componente com Estado",title:"Componente com Estado",url:"/estado/com",icone:l.jsx(c.Z,{})}),l.jsx(n,{texto:"Componente sem Estado",title:"Componente sem Estado",url:"/estado/sem",icone:l.jsx(c.Z,{})}),l.jsx(n,{texto:"Campo de Texto",title:"Campo de Texto",url:"/estado/campotexto",icone:l.jsx(x.Z,{})}),l.jsx(g,{texto:"Fundamentos"}),l.jsx(n,{texto:"JSX com JS",url:"/fundamentos/soma",icone:l.jsx(d.Z,{}),title:"JSX com JS"}),l.jsx(n,{texto:"JSX: Chamando Fun\xe7\xf5es",title:"JSX: Chamando Fun\xe7\xf5es",url:"/fundamentos/funcoes",icone:l.jsx(u.Z,{})}),l.jsx(n,{texto:"P\xe1gina #1",url:"/fundamentos/pagina",icone:l.jsx(m.Z,{})}),l.jsx(n,{texto:"P\xe1gina #2",url:"/pagina1",icone:l.jsx(p.Z,{})}),l.jsx(g,{texto:"Componentes"}),l.jsx(n,{texto:"B\xe1sico",url:"/componente/basico",icone:l.jsx(j.Z,{})}),l.jsx(n,{texto:"T\xedtulo",url:"/componente/titulo",icone:l.jsx(h.Z,{})}),l.jsx(n,{texto:"Trecho",url:"/componente/trecho",icone:l.jsx(f.Z,{})})]})}),v=e=>(0,l.jsxs)("div",{className:`
            ${e.componentName??"AreaLateral"}
            bg-zinc-900
        `,children:[l.jsx("div",{className:`
            h-16
            flex items-center justify-center
            container-logo
        `,children:l.jsx(r,{})}),l.jsx(b,{})]}),N=e=>(0,l.jsxs)("div",{className:`
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
        `,children:[l.jsx("div",{children:e.textoEsquerda}),l.jsx("div",{children:e.textoDireita})]}),C=e=>l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex h-screen",children:[l.jsx(v,{}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[l.jsx(N,{titulo:e.titulo??"T\xedtulo",subtitulo:e.subtitulo??"Estou na pasta pages",className:"h-16 bg-gradient-to-r bg-zinc-700 shadow-sm",id:"cabecalho"}),l.jsx(S,{children:e.children}),l.jsx(P,{textoEsquerda:"Feito com ❤️ por Eudes",textoDireita:`Desenvolvido em ${new Date().getFullYear()}`})]})]})})},4163:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var l=s(997);s(4542);let a=({Component:e,pageProps:t})=>l.jsx(e,{...t})},4542:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[682,595],()=>s(1055));module.exports=l})();