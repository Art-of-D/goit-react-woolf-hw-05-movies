"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[546],{41:function(e,t,r){r.d(t,{N4:function(){return o},Zh:function(){return u},cI:function(){return p},kh:function(){return l},ts:function(){return i}});var n=r(861),a=r(757),c=r.n(a),s=r(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWZlODRhOGFiYmRkODI0MTg5MTI1Zjk4MjA3NmU0NyIsInN1YiI6IjY1ZTMyM2MxYzk5ODI2MDE3YjYxNjBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lQVgdN6GSUDLR61rhVNwJdpW6ifJhBnJqsPP1xNmZ5Y";var u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/all/day");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie",{params:{query:t}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t));case 3:return r=e.sent,e.abrupt("return",f(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,title:e.title,releaseDate:e.release_date,voteAverage:e.vote_average,overview:e.overview,genres:e.genres}}},546:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u="Cast_CastList__2oQ+0",o=r(791),i=r(689),l=r(41),p={CastElementImg:"CastElement_CastElementImg__WyQS+"},f=r(184),v=function(e){var t=e.cast;return(0,f.jsx)(f.Fragment,{children:t.map((function(e){var t=e.id,r=e.name,n=e.character,a=e.profile_path;return(0,f.jsxs)("li",{className:p.CastElement,children:[(0,f.jsx)("img",{className:p.CastElementImg,src:a?"https://image.tmdb.org/t/p/w500"+a:"/goit-react-woolf-hw-05-movies/unknown-person.jpg",alt:r}),(0,f.jsx)("p",{children:r}),(0,f.jsxs)("p",{children:["Character: ",n]})]},t)}))})},h=function(){var e=(0,i.UO)().movieId,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],p=r[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.cI)(e);case 3:r=t.sent,p(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching film:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:u,children:c.length>0&&(0,f.jsx)(v,{cast:c})})})}}}]);
//# sourceMappingURL=546.c9421323.chunk.js.map