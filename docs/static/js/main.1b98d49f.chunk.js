(this["webpackJsonpantonio-rosa"]=this["webpackJsonpantonio-rosa"]||[]).push([[0],{16:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var s=n(0),t=n(1),o=n(5),c=n.n(o),i=n(2),r=n.n(i),l=function(){return Object(s.jsx)("section",{className:"about__section",id:"about",children:Object(s.jsxs)("div",{children:[Object(s.jsx)(r.a,{animateIn:"animate__animated animate__fadeInLeft",animateOnce:!0,children:Object(s.jsx)("h2",{children:"Acerca de"})}),Object(s.jsxs)(r.a,{animateIn:"animate__animated animate__fadeIn",duration:1.5,animateOnce:!0,children:[Object(s.jsx)("p",{children:"Somos una consultora de la Ciudad de C\xf3rdoba, orientada a prestar servicios a empresas y emprendedores, nuestra particularidad consiste en que adem\xe1s de profesionales en derecho de los negocios y en el desarrollo de la gesti\xf3n y mejora de resultados, somos emprendedores ya que llevamos adelante nuestros proyectos."}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"La Consultora para Emprendedores nace con la finalidad de brindar apoyo a emprendedores en su etapa inicial y acompa\xf1ar su proceso de crecimiento y desarrollo hasta consolidarla como empresa, negocio o Pyme en condiciones de crecer cotidianamente. En todos y cada uno de los proyectos en que participamos sentimos el orgullo de crecer junto a ellos."}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Sabemos que interpretamos las necesidades de los emprendedores de manera diferente que el resto, sentimos y pensamos en un mismo sentido. \u201cNo existe nadie que entienda mejor las necesidades de un emprendedor, que otro emprendedor\u201d.   "})]})]})})},d=function(e){var a=e.post,n=e.position,t=a.title,o=a.content,c=a.published,i=a.url;return Object(s.jsx)("div",{className:"blog__post-container col-lg-4 animate__animated animate__fadeIn",children:Object(s.jsxs)("div",{className:"blog__post-card ".concat(1===n&&"blog__middle-card"),children:[Object(s.jsx)("p",{className:"blog__post-date",children:c.split("T",1)}),Object(s.jsx)("h3",{children:t}),Object(s.jsx)("div",{className:"blog__content",dangerouslySetInnerHTML:{__html:o}}),Object(s.jsx)("a",{href:i,className:"btn",target:"_blank",rel:"noreferrer",children:"Seguir Leyendo"})]})})},m=n(3),j=function(){var e=function(e){var a=Object(t.useRef)(!0),n=Object(t.useState)({data:null,loading:!0,error:null}),s=Object(m.a)(n,2),o=s[0],c=s[1];return Object(t.useEffect)((function(){return function(){a.current=!1}}),[]),Object(t.useEffect)((function(){c({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){a.current?c({loading:!1,error:null,data:e}):console.log("setState no se llam\xf3")}))}),[e]),o}("https://www.googleapis.com/blogger/v3/blogs/4886578494024518036/posts?key=AIzaSyCCjbKQtcFuD6s50ILmjhwlnudsvwFX9_Y"),a=e.data,n=e.loading,o=null===a||void 0===a?void 0:a.items.slice(0,2);return Object(s.jsxs)("section",{className:"blog__section",id:"blog",children:[Object(s.jsx)(r.a,{animateIn:"animate__animated animate__fadeInLeft",animateOnce:!0,children:Object(s.jsx)("h2",{children:"Blog"})}),Object(s.jsxs)("div",{className:"row",children:[n?Object(s.jsx)("p",{className:"animate__animated animate__pulse animate__infinite",children:"Cargando entradas del blog..."}):o.map((function(e,a){return Object(s.jsx)(d,{post:e,position:a},e.id)})),!n&&Object(s.jsx)("div",{className:"blog__post-container col-lg-4 animate__animated animate__fadeIn",children:Object(s.jsxs)("div",{className:"blog__post-card",children:[Object(s.jsx)("span",{className:"fab fa-twitter blog__icon"}),Object(s.jsx)("a",{href:"#",className:"btn",target:"_blank",rel:"noreferrer",children:"Ir al Twitter"})]})})]})]})},b=function(){return Object(s.jsxs)("section",{className:"contact__section",id:"contact",children:[Object(s.jsx)("img",{className:"contact__logo",src:"./images/logo.png",alt:"logo"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("span",{className:"fas fa-envelope fa-2x contact__icon"}),Object(s.jsx)("p",{children:"toniorosa@hotmail.com"})]}),Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("span",{className:"fab fa-whatsapp fa-2x contact__icon"}),Object(s.jsx)("p",{children:"+54 9 3515 39-3021"})]})]})]})},u=function(e){var a=e.text;return Object(s.jsx)("div",{className:"divider__container",children:Object(s.jsx)(r.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,children:Object(s.jsx)("p",{children:a})})})},p=function(){return Object(s.jsx)("section",{className:"home__container",id:"home",style:{backgroundImage:'url("./images/newyork.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(s.jsx)(r.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,children:Object(s.jsxs)("div",{className:"home__main-title",children:[Object(s.jsx)("h1",{className:"display-4",children:"Consultora Para Emprendedores"}),Object(s.jsx)("a",{className:"btn btn-lg btn-outline-light",href:"#about",children:"Empezar"})]})})})},O=function(e){var a=e.title,n=e.icon,t=e.content1,o=e.content2,c=e.content3;return Object(s.jsx)("div",{className:"servicios__card-container col-md-6",children:Object(s.jsx)(r.a,{animateIn:"animate__animated animate__fadeInUp",animateOnce:!0,className:"servicios__scrollContainer",children:Object(s.jsxs)("div",{className:"servicios__card",children:[Object(s.jsx)("span",{className:"".concat(n," servicios__icon")}),Object(s.jsx)("h3",{children:a}),Object(s.jsx)("p",{children:t}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:o}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"servicios__content3",children:c})]})})})},h=[{title:"DESARROLLO DE NEGOCIOS",icon:"fas fa-briefcase",content1:"El Desarrollo de Negocios consiste en el estudio de la gesti\xf3n y estrategia de una unidad de negocio con la finalidad de detectar oportunidades que resultaran pendientes en los proyectos de nuestros clientes, y que imposibilitaron el crecimiento deseado. Podemos asesorarlos desde la creaci\xf3n y durante la consolidaci\xf3n, para proponer innovaciones que abarquen nuevos productos, cambios de estrategias o ampliaci\xf3n hacia nuevos mercados.",content2:"El desarrollo de negocio consiste en la gesti\xf3n encaminada a conseguir mejoras en los resultados de la gesti\xf3n.  Se trabaja sobre los productos y servicios, creando nuevas estrategias, en materia de organizaci\xf3n interna, modelado, comunicaci\xf3n, entre muchas otras posibles acciones."},{title:"ABOGAC\xcdA DE LOS NEGOCIOS",icon:"fas fa-balance-scale",content1:"Servicio jur\xeddico de calidad. Nuestro diferencial consiste en que hacemos un buen trabajo jur\xeddico para nuestros clientes, tenemos una mirada generalista del desarrollo diario de la empresa o negocio. Nos esforzamos en aprender las particularidades de los negocios de nuestros clientes para anticipar sus necesidades, y as\xed logramos que el proyecto suceda y sea seguro jur\xeddicamente.  Somos part\xedcipes del resultado, as\xed brindamos nuestro compromiso. "},{title:"ACADEMIA",icon:"fas fa-book",content1:"Siempre supimos que la mejor forma de aprender es ense\xf1ando, nos mantiene alertas y ordenados a los nuevos conceptos. Quienes ejercemos la docencia en forma vocacional vivimos en constante instancia de aprendizaje. Nosotros somos generadores de experiencias por el ejercicio cotidiano de nuestro trabajo, eso conlleva el deseo de comunicarlo.",content2:"Tenemos una amplia oferta de cursos, capacitaciones y talleres, de distintas cargas y contenidos. En nuestro blog podr\xe1n verificar la oferta y su calendario.",content3:"CAPACITARCE NO ES UNA OPCI\xd3N ES UNA NECESIDAD."},{title:"MENTORES",icon:"fas fa-chalkboard-teacher",content1:"En la Consultora creamos un Programa Mentores donde ofrecemos a los interesados en desarrollar sus proyectos una asesor\xeda integral y planificada donde aplicamos nuestra experiencia y conocimiento en materia de Desarrollo de Negocios, Comunicaci\xf3n y Asesoramiento Jur\xeddico.",content2:"Creamos a estos fines distintos Programas subvencionados como ser el Programa especial para Proyectos de Etapa Inicial, y de Administraci\xf3n de Emprendimientos, te brindamos ayuda espec\xedfica a fin de lograr fuerte mejoras en el posicionamiento y venta de productos y servicios."}],x=function(){return Object(s.jsxs)("section",{className:"servicios__section",id:"servicios",children:[Object(s.jsx)(r.a,{animateIn:"animate__animated animate__fadeInLeft",animateOnce:!0,children:Object(s.jsx)("h2",{children:"Servicios que ofrecemos"})}),Object(s.jsx)("div",{className:"row",children:h.map((function(e,a){return Object(s.jsx)(O,{title:e.title,icon:e.icon,content1:e.content1,content2:e.content2,content3:e.content3},a)}))})]})},_=function(){var e=Object(t.useState)(!0),a=Object(m.a)(e,2),n=a[0],o=a[1];return window.onscroll=function(){0!==window.pageYOffset?o(!1):o(!0)},Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark ".concat(n?"nav-top":"nav-full"),children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#home",children:Object(s.jsx)("img",{className:"navbar__logo",src:"./images/isotipo1.png",alt:"logo"})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(s.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#home",children:"Inicio"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#about",children:"Acerca de"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#servicios",children:"Servicios"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#blog",children:"Blog"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#contact",children:"Contacto"})})]})})]})})};var g=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(_,{}),Object(s.jsx)(p,{}),Object(s.jsx)(l,{}),Object(s.jsx)(u,{text:"Si est\xe1s buscando una se\xf1al para no rendirte. Aqu\xed est\xe1, esta es."}),Object(s.jsx)(x,{}),Object(s.jsx)(u,{text:"Hazlo, y si te da miedo, hazlo con miedo."}),Object(s.jsx)(j,{}),Object(s.jsx)(b,{})]})};n(16);c.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1b98d49f.chunk.js.map