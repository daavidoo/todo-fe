import{f as Ce,g as h,h as k,m as xe,n as E,p as be,u as we}from"./chunk-SK2NWSPH.js";import{A as _e,D as Me,a as se,b as de,c as R,d as pe,e as le,f as ce,g as me,h as ue,i as he,j as fe,k as c,m as j,o as ge,p as T,q as W,r as ve,s as ye,t as u,x as K}from"./chunk-N456DF27.js";import{$a as b,$b as re,Hb as N,Ib as oe,Jb as $,Na as m,Ob as I,Pb as S,Sa as s,Sb as D,Tb as O,Ua as ee,Wa as te,Xb as ne,Ya as C,_a as x,aa as Q,ac as ie,ca as v,ha as y,ia as l,kb as V,kc as P,ma as _,mb as w,nc as ae,ob as U,qa as G,ra as q,sb as d,tb as p,u as J,ub as M,xa as L,xb as z,ya as H,yb as B,zb as A}from"./chunk-5WYCACJR.js";var f=function(o){return o.Todo="todo",o.User="user",o}(f||{});var Y=o=>["/",o];function Te(o,e){if(o&1&&(d(0,"section",5),N(1),D(2,"translate"),p()),o&2){let t=A();w("routerLink",S(4,Y,t.Navigation.User)),s(),$(" ",O(2,2,"navigation."+t.Navigation.User)," ")}}function ke(o,e){if(o&1){let t=z();d(0,"app-button",9),B("clicked",function(){L(t);let r=A();return H(r.onLogOutClick())}),p()}}function Ee(o,e){if(o&1){let t=z();d(0,"app-button",10),B("clicked",function(){L(t);let r=A();return H(r.onLogInClick())}),p()}}var Ae=(()=>{class o{isLogged=K(u.isLogged);userInfo=K(u.userInfo);Navigation=f;store=l(j);onLogInClick(){this.store.dispatch(new W.Login)}onLogOutClick(){this.store.dispatch(new W.Logout)}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=_({type:o,selectors:[["app-header"]],standalone:!0,features:[I],decls:14,vars:14,consts:[[1,"header"],[1,"header__content"],[1,"header__content__logo",3,"routerLink"],["height","35px","src","assets/images/logo.svg","width","35px"],[1,"font-bold"],["routerLinkActive","active",1,"header__content__item",3,"routerLink"],[1,"header__content__buttons"],["label","btn.logOut","type","secondary"],["label","btn.logIn","type","secondary"],["label","btn.logOut","type","secondary",3,"clicked"],["label","btn.logIn","type","secondary",3,"clicked"]],template:function(n,r){n&1&&(d(0,"header",0)(1,"div",1)(2,"section",2),M(3,"img",3),d(4,"span",4),N(5),D(6,"translate"),p()(),d(7,"section",5),N(8),D(9,"translate"),p(),V(10,Te,3,6,"section",5),d(11,"section",6),V(12,ke,1,0,"app-button",7)(13,Ee,1,0,"app-button",8),p()()()),n&2&&(s(2),w("routerLink",S(10,Y,r.Navigation.Todo)),s(3),oe(O(6,6,"navigation."+r.Navigation.Todo)),s(2),w("routerLink",S(12,Y,r.Navigation.Todo)),s(),$(" ",O(9,8,"navigation."+r.Navigation.Todo)," "),s(2),U(r.isLogged()?10:-1),s(2),U(r.isLogged()?12:13))},dependencies:[ce,c,fe,_e],styles:[".header[_ngcontent-%COMP%]{display:flex;height:3rem;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(94 86 90 / var(--tw-bg-opacity));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.header__content[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.header__content[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.header__content[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.header__content[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.header__content[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.header__content[_ngcontent-%COMP%]{max-width:1536px}}.header__content[_ngcontent-%COMP%]{display:flex;flex-grow:1;align-content:flex-end}.header__content__logo[_ngcontent-%COMP%]{display:flex;flex-grow:1;align-items:center;gap:.5rem;font-size:1.5rem;line-height:.75rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.header__content__item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.header__content__item[_ngcontent-%COMP%]:hover:not(.active){cursor:pointer}.header__content__item.active[_ngcontent-%COMP%]{border-bottom-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.header__content__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 .5rem;gap:.5rem}"],changeDetection:0})}return o})();var Ne=(()=>{class o{title="todo-fe";static \u0275fac=function(n){return new(n||o)};static \u0275cmp=_({type:o,selectors:[["app-root"]],standalone:!0,features:[I],decls:2,vars:0,template:function(n,r){n&1&&M(0,"app-header")(1,"router-outlet")},dependencies:[le,c,Ae]})}return o})();function Fe(o){let e=o,t=Math.floor(Math.abs(o)),n=o.toString().replace(/^[^.]*\.?/,"").length;return t===1&&n===0?1:t===Math.floor(t)&&t>=2&&t<=4&&n===0?3:n!==0?4:5}var Ie=["sk",[["AM","PM"],void 0,void 0],void 0,[["n","p","u","s","\u0161","p","s"],["ne","po","ut","st","\u0161t","pi","so"],["nede\u013Ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],["ne","po","ut","st","\u0161t","pi","so"]],void 0,[["j","f","m","a","m","j","j","a","s","o","n","d"],["jan","feb","mar","apr","m\xE1j","j\xFAn","j\xFAl","aug","sep","okt","nov","dec"],["janu\xE1ra","febru\xE1ra","marca","apr\xEDla","m\xE1ja","j\xFAna","j\xFAla","augusta","septembra","okt\xF3bra","novembra","decembra"]],[["j","f","m","a","m","j","j","a","s","o","n","d"],["jan","feb","mar","apr","m\xE1j","j\xFAn","j\xFAl","aug","sep","okt","nov","dec"],["janu\xE1r","febru\xE1r","marec","apr\xEDl","m\xE1j","j\xFAn","j\xFAl","august","september","okt\xF3ber","november","december"]],[["pred Kr.","po Kr."],void 0,["pred Kristom","po Kristovi"]],1,[6,0],["d. M. y",void 0,"d. MMMM y","EEEE d. MMMM y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss zzzz"],["{1} {0}","{1}, {0}",void 0,void 0],[",","\xA0",";","%","+","-","e","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:["NIS","\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RUR:[void 0,"\u0440."],TWD:[void 0,"NT$"],USD:[void 0,"$"],VND:[void 0,"\u20AB"],XXX:[]},"ltr",Fe];var Le=(()=>{let e=class e extends E{constructor(n,r,i){super(n,r,i)}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(y(P),y(h),y(k))},e.\u0275prov=v({token:e,factory:e.\u0275fac});let o=e;return o})();function He(){return new xe}function Ve(o,e,t){return new we(o,e,t)}var Se=[{provide:k,useFactory:He},{provide:E,useClass:Le},{provide:C,useFactory:Ve,deps:[R,E,b]}],Ue=[{provide:h,useFactory:()=>new be},{provide:m,useValue:"BrowserAnimations"},...Se],Ct=[{provide:h,useClass:Ce},{provide:m,useValue:"NoopAnimations"},...Se];function De(){return x("NgEagerAnimations"),[...Ue]}var ze="@",Be=(()=>{let e=class e{constructor(n,r,i,a,g){this.doc=n,this.delegate=r,this.zone=i,this.animationType=a,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=l(te,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-6N7NVMYK.js").then(r=>r)).catch(r=>{throw new Q(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(n,r){let i=this.delegate.createRenderer(n,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new X(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let je=g.createRenderer(n,r);a.use(je),this.scheduler?.notify(9)}).catch(g=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){ee()},e.\u0275prov=v({token:e,factory:e.\u0275fac});let o=e;return o})(),X=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ze)}};function Oe(o="animations"){return x("NgAsyncAnimations"),G([{provide:C,useFactory:(e,t,n)=>new Be(e,t,n,o),deps:[P,R,b]},{provide:m,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var F=class{http;prefix;suffix;constructor(e,t="/assets/i18n/",n=".json"){this.http=e,this.prefix=t,this.suffix=n}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}};var Pe=[{path:"",pathMatch:"full",loadChildren:()=>import("./chunk-URV3WDBG.js").then(o=>o.routes),providers:[T([Me])]},{path:f.User,loadChildren:()=>import("./chunk-PVQOIBHV.js").then(o=>o.routes),canActivate:[()=>l(j).selectSnapshot(u.isLogged)]},{path:"**",redirectTo:"",pathMatch:"full"}];ae(Ie,"sk");var Re={providers:[re({eventCoalescing:!0}),me(Pe),de(),ge(),De(),Oe(),ve(),T([ye]),q(c.forRoot({loader:{provide:ue,useFactory:o=>new F(o,"assets/i18n/",".json"),deps:[se]},defaultLanguage:"sk"})),{provide:ne,useFactory:o=>()=>J(o.use("sk")),deps:[he],multi:!0},{provide:ie,useValue:"sk"}]};pe(Ne,Re).catch(o=>console.error(o));
