(this["webpackJsonpantonio-rosa"]=this["webpackJsonpantonio-rosa"]||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(1),c=t(5),s=t.n(c),r=t(2),o=t.n(r),l=function(){return Object(n.jsx)("section",{className:"about__section",id:"about",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(o.a,{animateIn:"animate__animated animate__fadeInLeft",animateOnce:!0,children:Object(n.jsx)("h2",{children:"Acerca de"})}),Object(n.jsx)(o.a,{animateIn:"animate__animated animate__fadeIn",duration:"1.5",animateOnce:!0,children:Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, minus! Hic deleniti harum corporis? Expedita adipisci totam ipsum dignissimos ad, sapiente tempore odit alias aut asperiores consequuntur porro suscipit fugit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, minus! Hic deleniti harum corporis? Expedita adipisci totam ipsum dignissimos ad, sapiente tempore odit alias aut asperiores consequuntur porro suscipit fugit."})})]})})},d=function(e){var a=e.post,t=e.position,i=a.title,c=a.content,s=a.published,r=a.url;return Object(n.jsx)("div",{className:"blog__post-container col-lg-4 animate__animated animate__fadeIn",children:Object(n.jsxs)("div",{className:"blog__post-card ".concat(1===t&&"blog__middle-card"),children:[Object(n.jsx)("p",{className:"blog__post-date",children:s.split("T",1)}),Object(n.jsx)("h3",{children:i}),Object(n.jsx)("div",{className:"blog__content",dangerouslySetInnerHTML:{__html:c}}),Object(n.jsx)("a",{href:r,className:"btn",target:"_blank",rel:"noreferrer",children:"Seguir Leyendo"})]})})},j=t(3),m=function(){var e=function(e){var a=Object(i.useRef)(!0),t=Object(i.useState)({data:null,loading:!0,error:null}),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){return function(){a.current=!1}}),[]),Object(i.useEffect)((function(){s({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){a.current?s({loading:!1,error:null,data:e}):console.log("setState no se llam\xf3")}))}),[e]),c}("https://www.googleapis.com/blogger/v3/blogs/4886578494024518036/posts?key=AIzaSyCCjbKQtcFuD6s50ILmjhwlnudsvwFX9_Y"),a=e.data,t=e.loading,c=null===a||void 0===a?void 0:a.items.slice(0,3);return Object(n.jsxs)("section",{className:"blog__section",id:"blog",children:[Object(n.jsx)(o.a,{animateIn:"animate__animated animate__fadeInLeft",animateOnce:!0,children:Object(n.jsx)("h2",{children:"Blog"})}),Object(n.jsx)("div",{className:"row",children:t?Object(n.jsx)("p",{className:"animate__animated animate__pulse animate__infinite",children:"Cargando entradas del blog..."}):c.map((function(e,a){return Object(n.jsx)(d,{post:e,position:a},e.id)}))})]})},b=function(){return Object(n.jsxs)("section",{className:"contact__section",id:"contact",children:[Object(n.jsx)("h2",{children:"Contacto"}),Object(n.jsx)("p",{children:"+54 1155057883"}),Object(n.jsx)("p",{children:"antonio@gmail.com"})]})},u=function(){return Object(n.jsx)("section",{className:"home__container",id:"home",children:Object(n.jsxs)(o.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,children:[Object(n.jsx)("img",{src:"/images/hammer.jpg",alt:"background"}),Object(n.jsxs)("div",{className:"home__main-title",children:[Object(n.jsx)("h1",{className:"display-4",children:"Titulo"}),Object(n.jsx)("a",{className:"btn btn-lg btn-outline-light",href:"#about",children:"Empezar"})]})]})})},h=function(){return Object(n.jsx)("div",{className:"servicios__card-container col-md-6",children:Object(n.jsx)(o.a,{animateIn:"animate__animated animate__fadeInUp",animateOnce:!0,children:Object(n.jsxs)("div",{className:"servicios__card",children:[Object(n.jsx)("span",{className:"fas fa-laptop servicios__icon"}),Object(n.jsx)("h3",{children:"Servicio"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, eius doloremque? Commodi assumenda optio repudiandae. Earum consectetur ut fugiat cupiditate amet cum sequi modi obcaecati quis sunt veniam, eaque alias!"})]})})})},O=function(){return Object(n.jsxs)("section",{className:"servicios__section",id:"servicios",children:[Object(n.jsx)(o.a,{animateIn:"animate__animated animate__fadeInLeft",animateOnce:!0,children:Object(n.jsx)("h2",{children:"Servicios que ofrecemos"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(h,{}),Object(n.jsx)(h,{}),Object(n.jsx)(h,{}),Object(n.jsx)(h,{})]})]})},p=function(){var e=Object(i.useState)(!0),a=Object(j.a)(e,2),t=a[0],c=a[1];return window.onscroll=function(){0!==window.pageYOffset?c(!1):c(!0)},Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark ".concat(t?"nav-top":"nav-full"),children:[Object(n.jsx)("a",{className:"navbar-brand",href:"#home",children:"Logo"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#home",children:"Inicio"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#about",children:"Acerca de"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#servicios",children:"Servicios"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#blog",children:"Blog"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#contact",children:"Contacto"})})]})})]})})};var x=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{}),Object(n.jsx)(u,{}),Object(n.jsx)(l,{}),Object(n.jsx)(O,{}),Object(n.jsx)(m,{}),Object(n.jsx)(b,{})]})};t(16);s.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f7b8243a.chunk.js.map