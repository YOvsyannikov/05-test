"use strict";(self.webpackChunk_05_test=self.webpackChunk_05_test||[]).push([[135],{135:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var s=t(861),i=t(885),a=t(757),o=t.n(a),r=t(673),c=t(791),l={movieContainer:"MovieDetails_movieContainer__ilr3m",movieImg:"MovieDetails_movieImg__5UJtY",link:"MovieDetails_link__U+v+7",button:"MovieDetails_button__uXZxd"},v=t(87),h=t(739),d=t(997),u=t(184);function m(){var e=(0,c.useState)(null),n=(0,i.Z)(e,2),t=n[0],a=n[1],m=(0,h.UO)().movieId,x=(0,h.s0)(),j=(0,h.TH)(),p=(0,h.bS)("/movies/:movieId/*").pathname.match(/^(\/movies\/\d+)/)[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.TP)(m);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,u.jsxs)(u.Fragment,{children:[t?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{type:"button",onClick:function(){x(-1)},className:l.button,children:"Go back"}),(0,u.jsxs)("div",{className:l.movieContainer,children:[(0,u.jsx)("div",{className:l.movieImg,children:(0,u.jsx)("img",{src:t.poster_path?d.yA+t.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.title,widht:"",height:""})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:t.title}),(0,u.jsxs)("p",{children:["User Score: ","".concat((10*t.vote_average).toFixed(1)),"%"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:"".concat(t.overview)}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:"".concat(t.genres.map((function(e){return e.name})).join(" / "))})]})]})]}):(0,u.jsx)("div",{className:l.notFound,children:"Movie is not found"}),(0,u.jsx)("hr",{}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("nav",{children:[(0,u.jsx)(v.OL,{to:{pathname:"".concat(p,"/cast")},className:l.link,state:{location:j},replace:!0,children:"Cast"}),(0,u.jsx)(v.OL,{to:{pathname:"".concat(p,"/reviews")},className:l.link,state:{location:j},replace:!0,children:"Reviews"})]}),(0,u.jsxs)(c.Suspense,{fallback:(0,u.jsx)(r.Z,{}),children:[(0,u.jsx)(v.rU,{to:"/movies/cast"}),(0,u.jsx)(v.rU,{to:"/movies/reviews"}),(0,u.jsx)(h.j3,{})]})]})}}}]);
//# sourceMappingURL=135.475a738d.chunk.js.map