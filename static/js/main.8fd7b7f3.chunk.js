(this.webpackJsonprhk=this.webpackJsonprhk||[]).push([[0],{29:function(e,t,r){},31:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),l=r.n(c),a=r(19),i=r.n(a),s=(r(29),r(9)),o=r.n(s),d=r(20),j=r(7),b=(r(31),r(21)),h=r.n(b),u=r(22),x=r(23),O=r(10),p=r(52),g=r.p+"static/media/rhk.8399ddda.png",f=r.p+"static/media/members.82f99f31.gif",y=r.p+"static/media/sere0.24a037fa.png";var m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),r=t[0],l=t[1],a=Object(c.useState)(y),i=Object(j.a)(a,2),s=(i[0],i[1],Object(c.useState)(0)),b=Object(j.a)(s,2);b[0],b[1],Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://aq2rhk.herokuapp.com");case 2:t=e.sent,l(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(e){var t=e.split("-");return t[0]===t[1]?"yellow":t[0]>t[1]?"green":"red"};return Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{fluid:!0,style:{backgroundColor:"black"},children:Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(O.a,{style:{marginLeft:100,textAlign:"center"},children:[Object(n.jsx)("p",{className:"html-rainbow-text",children:Object(n.jsxs)("h1",{className:"rainbow",children:["clanwars: ",r.length]})}),Object(n.jsxs)("p",{style:{color:"white"},children:["total rounds ",Object(n.jsx)("span",{style:{color:"green"},children:function(e){var t=0;return r.forEach((function(e){var r=e.tilanne.split("-");t+=parseInt(r[0])})),t}()})," - ",Object(n.jsx)("span",{style:{color:"red"},children:function(e){var t=0;return r.forEach((function(e){var r=e.tilanne.split("-");t+=parseInt(r[1])})),t}()})]}),Object(n.jsx)("h3",{style:{color:"green",textAlign:"center"},colSpan:1,children:Object(n.jsxs)("b",{children:["win %: \xa0",function(e){var t=0;e.forEach((function(e){var r=e.tilanne.split("-");r[0]>r[1]&&t++}));var r=(t/e.length*100).toFixed(3);return"".concat(r)}(r)," "]})}),Object(n.jsxs)(p.a,{className:"matsitTable",style:{textAlign:"center"},children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{style:{color:"white"},children:[Object(n.jsx)("th",{style:{borderTop:0,borderColor:"black"},children:"#"}),Object(n.jsx)("th",{style:{borderTop:0,borderColor:"black"},children:"style"}),Object(n.jsx)("th",{style:{borderTop:0,borderColor:"black"},children:"tag"}),Object(n.jsx)("th",{style:{borderTop:0,borderColor:"black"},children:"score"}),Object(n.jsx)("th",{style:{borderTop:0,borderColor:"black"},children:"date"})]})}),Object(n.jsx)("tbody",{children:r.sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()})).map((function(e,t){return Object(n.jsxs)("tr",{style:{color:"white"},children:[Object(n.jsx)("td",{style:{borderColor:"black"},children:r.length-t}),Object(n.jsx)("td",{style:{borderColor:"black"},children:e.style}),Object(n.jsx)("td",{style:{borderColor:"black"},children:e.opponent}),Object(n.jsx)("td",{style:{borderColor:"black",color:m(e.tilanne)},children:e.tilanne}),Object(n.jsx)("td",{style:{borderColor:"black"},children:"".concat(new Date(e.date).getDate(),".").concat(new Date(e.date).getMonth()+1,".").concat(new Date(e.date).getFullYear())})]},t)}))})]})]}),Object(n.jsxs)(O.a,{style:{textAlign:"center"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:g})}),Object(n.jsxs)("div",{id:"picturediv",children:[Object(n.jsx)("div",{className:"image-container",style:{marginTop:30},children:Object(n.jsx)("img",{src:f})}),Object(n.jsx)("table",{id:"pelaajattable",style:{width:"100%",marginTop:30,color:"white"},children:Object(n.jsx)("tbody",{style:{width:"100%"},children:["penaa","mazze","raksuu","nykzi","kallu","tuomasK (trilu)"].map((function(e,t){return Object(n.jsx)("tr",{style:{textAlign:"center",verticalAlign:"middle",width:"100%",marginTop:"10px"},children:Object(n.jsx)("td",{style:{textAlign:"center",verticalAlign:"middle",width:"100%"},children:e})},t)}))})})]}),Object(n.jsx)("div",{id:"stage",style:{marginTop:60},children:Object(n.jsx)("img",{id:"spinner",src:y})})]})]})})})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,53)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),l(e),a(e)}))};i.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.8fd7b7f3.chunk.js.map