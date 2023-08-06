(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(27),a=(c(25),c(26),c(8)),r=c(2),s=c(12),j=c.n(s),i=(c(36),c(3)),l=function(){var e=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:e,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:e,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=c(4),d=c(23),h=c(0);function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(38);var x=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(){var e=Object(h.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),s=Object(b.a)(a,2),l=s[0],o=s[1],m=Object(h.useState)(!1),p=Object(b.a)(m,2),f=p[0],v=p[1],g=Object(r.r)().personSlug;Object(h.useEffect)((function(){o(!0),O().then(n).catch((function(){v(!0)})).finally((function(){return o(!1)}))}),[]);var N=Object(h.useMemo)((function(){return function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(d.a)(Object(d.a)({},t),{},{mother:c,father:n})}))}(c)}),[c]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[l&&Object(i.jsx)(x,{}),f&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!l&&!f&&0===(null===c||void 0===c?void 0:c.length)&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!f&&(null===c||void 0===c?void 0:c.length)>0&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:N.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":g===e.slug}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(u,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.mother?Object(i.jsx)(u,{person:e.mother}):e.motherName||"-"}),Object(i.jsx)("td",{children:e.father?Object(i.jsx)(u,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})]})})]})},p=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},f=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(l,{}),children:[Object(i.jsx)(r.c,{path:"/home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(o,{})}),Object(i.jsxs)(r.c,{path:"people",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(m,{})}),Object(i.jsx)(r.c,{path:":personSlug",element:Object(i.jsx)(m,{})})]}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(p,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(f,{}))}},[[39,1,2]]]);
//# sourceMappingURL=main.921c9243.chunk.js.map