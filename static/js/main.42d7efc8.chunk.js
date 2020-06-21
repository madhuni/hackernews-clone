(this["webpackJsonphackernews-clone"]=this["webpackJsonphackernews-clone"]||[]).push([[0],{29:function(e,t,n){e.exports=n(48)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),l=n(21),i=n(12),s=(n(38),function(){return c.a.createElement("nav",{className:"nav-bar"},c.a.createElement("div",{className:"nav-bar__container container"},c.a.createElement("h5",{className:"t-h5"},"Hackernews Clone")))}),u=n(2),m=n(13),E=n(28),d=(n(39),function(e){var t=e.caption,n=e.value;return c.a.createElement("div",{className:"news-item"},c.a.createElement("section",{className:"news-item__caption t-caption"},t),c.a.createElement("section",{className:"news-item__value t-body-2"},n))}),f=(n(40),function(e){var t=e.title,n=e.url,a=e.author,r=e.createdAt,o=n?"(".concat(function(e){if(e){var t=e.split("/").filter((function(e){return""!==e})),n=Object(m.a)(t,2),a=n[0],c=n[1];return"".concat(a,"//").concat(c)}return""}(n),")"):"";return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,t),c.a.createElement("a",{className:"t-caption color-light",href:n}," ",o),c.a.createElement("span",null,c.a.createElement("span",{className:"t-caption color-light"}," by")," ",a),c.a.createElement("span",null,c.a.createElement("span",{className:"t-caption color-light"}," on")," ",function(e){var t=new Date(e);return"".concat(t.getDate(),"th ").concat({1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sept",10:"Oct",11:"Nov",12:"Dec"}[t.getMonth()+1],", ").concat(t.getFullYear())}(r)))});f.defaultProps={title:"",url:"",author:"",createdAt:""};var v=f,p=(n(41),n(42),function(e){var t=e.children,n=e.clickHandler,a=e.disabled;return c.a.createElement("button",{className:"button t-button",type:"button",disabled:a,onClick:a?function(){return null}:n},t)});p.defaultProps={disabled:!1};var h=p,b=function(e){var t=e.news,n=t.author,a=t.created_at,r=t.num_comments,o=t.objectID,l=t.points,i=t.title,s=t.url,u=e.upvoteHandler,m=e.hideNewsHandler;return c.a.createElement("div",{className:"news-card"},c.a.createElement("section",{className:"news-card__details"},c.a.createElement("div",{className:"news-card__details__container1"},c.a.createElement(d,{caption:"Comments",value:r||0}),c.a.createElement(d,{caption:"Vote Counts",value:l||0})),c.a.createElement("div",{className:"news-card__details__container2"},c.a.createElement(d,{caption:"News Details",value:c.a.createElement(v,{title:i,url:s,author:n,createdAt:a})}))),c.a.createElement("section",{className:"news-card__actions"},c.a.createElement(E.a,{className:"upvote-icon",size:"24",onClick:function(){return u(o)}}),c.a.createElement(h,{clickHandler:function(){return m(o)}},"Hide")))},w=n(17),N=n(8),I=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){}},_=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)}catch(n){return}},O=function(e){var t=_("MODIFIED_ENTRIES"),n=Object(N.a)(Object(N.a)({},t),{},Object(w.a)({},e.objectID,e));I("MODIFIED_ENTRIES",n)};n(43);function j(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),l=Object(m.a)(o,2),s=l[0],u=l[1],E=Object(i.c)((function(e){return e.news})),d=Object(i.b)();Object(a.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="https://hn.algolia.com/api/v1/search?page=".concat(e),n=_("MODIFIED_ENTRIES");return fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.hits.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{hide:!1})})).map((function(e){return void 0!==n[e.objectID]?n[e.objectID]:e})).filter((function(e){return!e.hide}));return Promise.resolve(t)}))})().then((function(e){r(!1),d({type:"GET_NEWS_RESPONSE",response:e})})).catch((function(){r(!1)}))}),[]),Object(a.useEffect)((function(){E.length||n?u(!1):u(!0)}),[E,n]);var f=function(e){return d(function(e){return{type:"HIDE_NEWS_ITEM",newsItemId:e}}(e))};return c.a.createElement("div",{className:"news container"},n&&c.a.createElement("div",{className:"loading"},"Loading News..."),s&&c.a.createElement("div",{className:"no-content"},"No news found!"),!s&&E.map((function(e){return c.a.createElement(b,{key:e.objectID,news:e,upvoteHandler:function(){return t=e.objectID,d(function(e){return{type:"UPVOTE_NEWS_ITEM",newsItemId:e}}(t));var t},hideNewsHandler:f})})))}function g(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",component:j}))}n(45);var D=function(e){var t=e.store;return c.a.createElement(l.a,null,c.a.createElement(i.a,{store:t},c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(18),y=n(25),M=(n(46),{news:[]}),T={news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS_RESPONSE":return{news:Object(S.a)(t.response)};case"HIDE_NEWS_ITEM":return{news:e.news.map((function(e){if(e.objectID===t.newsItemId){var n=Object(N.a)(Object(N.a)({},e),{},{hide:!0});return O(n),n}return e})).filter((function(e){return!e.hide}))};case"UPVOTE_NEWS_ITEM":return{news:e.news.map((function(e){if(e.objectID===t.newsItemId){var n=Object(N.a)(Object(N.a)({},e),{},{points:e.points+1});return O(n),n}return e}))};default:return e}}};n(47);null===_("MODIFIED_ENTRIES")&&I("MODIFIED_ENTRIES",{});var k=function(e){var t=Object(S.a)(Object(y.b)());return Object(y.a)({reducer:T.news,middleware:t,preloadedState:e})}();o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,{store:k})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.42d7efc8.chunk.js.map