import{s as k,a as m,e as b,c as h,i as o,C as v,d as c,o as H,f as u,g as _,z as d,L as W,j as p,H as w,D as B}from"./scheduler.22f6464b.js";import{S as L,i as y}from"./index.6399d545.js";import{n as T}from"./helpers.8944f855.js";function C(a){let i,r=a[0].useBIB+"",n,l,s="<br/>";return{c(){i=new w(!1),n=m(),l=u("p"),l.innerHTML=s,this.h()},l(e){i=B(e,!1),n=h(e),l=_(e,"P",{"data-svelte-h":!0}),d(l)!=="svelte-pntvnr"&&(l.innerHTML=s),this.h()},h(){i.a=n},m(e,t){i.m(r,e,t),o(e,n,t),o(e,l,t)},p(e,t){t&1&&r!==(r=e[0].useBIB+"")&&i.p(r)},d(e){e&&(i.d(),c(n),c(l))}}}function D(a){let i,r=a[0].useBW+"",n,l,s="<br/>";return{c(){i=new w(!1),n=m(),l=u("p"),l.innerHTML=s,this.h()},l(e){i=B(e,!1),n=h(e),l=_(e,"P",{"data-svelte-h":!0}),d(l)!=="svelte-pntvnr"&&(l.innerHTML=s),this.h()},h(){i.a=n},m(e,t){i.m(r,e,t),o(e,n,t),o(e,l,t)},p(e,t){t&1&&r!==(r=e[0].useBW+"")&&i.p(r)},d(e){e&&(i.d(),c(n),c(l))}}}function M(a){let i,r,n,l,s="<br/>";return{c(){i=u("embed"),n=m(),l=u("p"),l.innerHTML=s,this.h()},l(e){i=_(e,"EMBED",{src:!0,width:!0,height:!0}),n=h(e),l=_(e,"P",{"data-svelte-h":!0}),d(l)!=="svelte-pntvnr"&&(l.innerHTML=s),this.h()},h(){W(i.src,r="https://freedomlog.de")||p(i,"src",r),p(i,"width","100%"),p(i,"height","810")},m(e,t){o(e,i,t),o(e,n,t),o(e,l,t)},d(e){e&&(c(i),c(n),c(l))}}}function I(a){let i,r;function n(t,f){if(!t[3]&&!t[1])return D;if(!t[3]&&t[1])return C}let l=n(a),s=l&&l(a),e=a[2]&&M();return{c(){s&&s.c(),i=m(),e&&e.c(),r=b()},l(t){s&&s.l(t),i=h(t),e&&e.l(t),r=b()},m(t,f){s&&s.m(t,f),o(t,i,f),e&&e.m(t,f),o(t,r,f)},p(t,[f]){l===(l=n(t))&&s?s.p(t,f):(s&&s.d(1),s=l&&l(t),s&&(s.c(),s.m(i.parentNode,i))),t[2]?e||(e=M(),e.c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null)},i:v,o:v,d(t){t&&(c(i),c(r)),s&&s.d(t),e&&e.d(t)}}}function P(a,i,r){let{texts:n}=i,{visitorWithMobile:l}=i,s="",e=!1,t=!1;return H(async()=>{if(typeof window.ethereum>"u")r(3,t=!1);else{if(r(3,t=!0),s===""){const f=await T();f.provider,f.contract,s=f.publicWalletAddressOfVisitor}r(2,e=!0)}}),a.$$set=f=>{"texts"in f&&r(0,n=f.texts),"visitorWithMobile"in f&&r(1,l=f.visitorWithMobile)},[n,l,e,t]}class A extends L{constructor(i){super(),y(this,i,P,I,k,{texts:0,visitorWithMobile:1})}}export{A as L};
