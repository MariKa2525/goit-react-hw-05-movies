"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{176:function(n,e,t){t.d(e,{D:function(){return p},F:function(){return o},Ul:function(){return f}});var r,a,u,i=t(168),c=t(87),s=t(444),o=(0,s.ZP)(c.rU)(r||(r=(0,i.Z)(["\ncolor: blue;\nfont-size: 20px;\nmargin-bottom: 10px;\n\n&.active {\n    color: red;\n}\n"]))),p=s.ZP.h1(a||(a=(0,i.Z)(["\ncolor: black;\nfont-size: 40px;\nmargin-left: 40px;\n"]))),f=s.ZP.ul(u||(u=(0,i.Z)(["\ncolor: black;\nmargin: 40px;\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 10px\n"])))},748:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a,u=t(439),i=t(87),c=t(689),s=t(565),o=t(791),p=t(176),f=t(168),l=t(444),m=l.ZP.input(r||(r=(0,f.Z)(["\nfont-size: 25px;\n"]))),d=l.ZP.button(a||(a=(0,f.Z)(["\nfont-size: 25px;\n"]))),h=t(184),v=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,i.lr)(),f=(0,u.Z)(a,2),l=f[0],v=f[1],x=(0,o.useState)(!1),Z=(0,u.Z)(x,2),y=Z[0],b=Z[1],k=l.get("movieName"),g=(0,c.TH)();(0,o.useEffect)((function(){""!==k&&null!==k&&(0,s.E3)(k).then((function(n){r(n)}))}),[k]);var w=function(){b(!y)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target;v({movieName:e.elements.movieName.value}),e.reset(),w()},children:[(0,h.jsx)(m,{type:"text",name:"movieName",onChange:w}),(0,h.jsx)(d,{type:"submit",disabled:!y,children:"Search"})]}),t.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{children:t.map((function(n){var e=n.title,t=n.id;return(0,h.jsx)("li",{children:(0,h.jsx)(p.F,{to:"/movies/".concat(t),state:{from:g},children:e})},t)}))}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading subpage..."}),children:(0,h.jsx)(c.j3,{})})]}),0===t.length&&null!==k&&(0,h.jsx)("p",{children:"Sorry no movie"})]})}},565:function(n,e,t){t.d(e,{E3:function(){return l},Hx:function(){return v},Mc:function(){return p},uV:function(){return d},vw:function(){return s}});var r=t(861),a=t(757),u=t.n(a),i=t(263),c="737f44acb671945f08fdde769a8111c9";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:c,size:20}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(e),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("search/movie",{params:{api_key:c,size:20,query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(e,"/reviews"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=748.bf57d955.chunk.js.map