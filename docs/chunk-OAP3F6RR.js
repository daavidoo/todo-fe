import{a as P,b as j,c as E,d as $,e as B}from"./chunk-QITCLMQ6.js";import{D as c,j as w,k as O,l as b,m as A,w as F,y as M}from"./chunk-3WX7CA32.js";import{$ as u,Ac as a,Bc as l,Da as C,E as g,Hb as k,Ib as S,Ob as x,Sa as d,Sb as D,Tb as L,ia as n,ma as y,mb as T,qb as h,rb as _,sb as o,tb as s,ub as r,xc as I,yb as v,yc as m}from"./chunk-5WYCACJR.js";var Q=(t,p)=>p.id;function R(t,p){if(t&1&&r(0,"app-todo-list",2),t&2){let e=p.$implicit;T("todo",e)("@listAnimation",void 0)}}var J=(()=>{class t{todos=M(E.list);store=n(A);dialog=n(F);destroy=n(C);ngOnInit(){this.store.dispatch(new c.List)}onAddClick(){this.dialog.open(j).closed.pipe(g(e=>!!e),u(e=>this.store.dispatch(new c.Create(e))),b(this.destroy)).subscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=y({type:t,selectors:[["app-list-of-todo"]],standalone:!0,features:[x],decls:11,vars:3,consts:[[1,"page"],[1,"flex","flex-wrap","gap-2","p-2"],[3,"todo"],[1,"add-todo-placeholder",3,"click"],["iconClass","add"],[1,"text-link"]],template:function(i,f){i&1&&(o(0,"main",0)(1,"section"),r(2,"app-todo-filter"),s(),o(3,"section",1),h(4,R,1,2,"app-todo-list",2,Q),o(6,"div",3),v("click",function(){return f.onAddClick()}),r(7,"app-icon",4),o(8,"span",5),k(9),D(10,"translate"),s()()()()),i&2&&(d(4),_(f.todos()),d(5),S(L(10,1,"todo.addList")))},dependencies:[B,O,w,$,P],styles:[".add-todo-placeholder[_ngcontent-%COMP%]{display:flex;height:min-content;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity));padding:.5rem;font-weight:700}"],data:{animation:[I("listAnimation",[l(":enter",[a({opacity:0}),m("300ms",a({opacity:1}))]),l(":leave",[m("300ms",a({opacity:0}))])])]},changeDetection:0})}return t})();var st=[{path:"",component:J}];export{st as routes};
