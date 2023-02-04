"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{559:function(n,e,t){t.d(e,{x:function(){return i}});var r,a=t(168),i=t(6444).ZP.p(r||(r=(0,a.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n"])))},3176:function(n,e,t){t.d(e,{Dx:function(){return l},Fg:function(){return f},Ul:function(){return d},yv:function(){return p}});var r,a,i,u,c=t(168),o=t(1087),s=t(6444),p=s.ZP.div(r||(r=(0,c.Z)(["\n  max-width: 1800px;\n  margin: 0;\n  padding: 15px;\n  margin: 0 auto;\n"]))),f=(0,s.ZP)(o.rU)(a||(a=(0,c.Z)(["\n  color: blue;\n  font-size: 25px;\n\n  &.active {\n    color: red;\n  }\n"]))),l=s.ZP.h1(i||(i=(0,c.Z)(["\n  color: black;\n  font-size: 40px;\n  margin-left: 40px;\n"]))),d=s.ZP.ul(u||(u=(0,c.Z)(["\n  color: black;\n  margin: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])))},6748:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a,i=t(9439),u=t(1087),c=t(7689),o=t(8565),s=t(2791),p=t(3176),f=t(168),l=t(6444),d=l.ZP.input(r||(r=(0,f.Z)(["\n  font-size: 30px;\n  padding: 10px 40px;\n  border-radius: 10px;\n  border: 3px solid black;\n"]))),x=l.ZP.button(a||(a=(0,f.Z)(["\n  font-size: 30px;\n  margin-left: 20px;\n  padding: 10px 40px;\n  border-radius: 10px;\n  background-color: black;\n  color: white;\n"]))),m=t(559),h=t(184),v=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,u.lr)(),f=(0,i.Z)(a,2),l=f[0],v=f[1],Z=(0,s.useState)(!1),b=(0,i.Z)(Z,2),g=b[0],y=b[1],k=l.get("movieName"),w=(0,c.TH)();(0,s.useEffect)((function(){""!==k&&null!==k&&(0,o.E3)(k).then((function(n){r(n)}))}),[k]);var j=function(){y(!g)};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("main",{children:(0,h.jsxs)(p.yv,{children:[(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target;v({movieName:e.elements.movieName.value}),e.reset(),j()},children:[(0,h.jsx)(d,{type:"text",name:"movieName",onChange:j}),(0,h.jsx)(x,{type:"submit",disabled:!g,children:"Search"})]}),t.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Ul,{children:t.map((function(n){var e=n.title,t=n.id;return(0,h.jsx)("li",{children:(0,h.jsx)(p.Fg,{to:"/movies/".concat(t),state:{from:w},children:e})},t)}))}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading subpage..."}),children:(0,h.jsx)(c.j3,{})})]}),0===t.length&&null!==k&&(0,h.jsx)(m.x,{children:"Sorry no movie"})]})})})}},8565:function(n,e,t){t.d(e,{E3:function(){return l},Hx:function(){return h},Mc:function(){return p},uV:function(){return x},vw:function(){return o}});var r=t(5861),a=t(7757),i=t.n(a),u=t(3263),c="737f44acb671945f08fdde769a8111c9";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("trending/movie/day",{params:{api_key:c,size:20}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(e),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("search/movie",{params:{api_key:c,size:20,query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(e,"/reviews"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=748.3468cff4.chunk.js.map