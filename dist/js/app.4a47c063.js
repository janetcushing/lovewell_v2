(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2a394d52","chunk-320d46d5":"5e6f26ad","chunk-51d86f90":"59b56836","chunk-55d7255a":"8c2e76c9","chunk-80c4ac10":"5c230bcb"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,"chunk-320d46d5":1,"chunk-51d86f90":1,"chunk-55d7255a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"4bb1d732","chunk-320d46d5":"76d9c879","chunk-51d86f90":"d17b5d8d","chunk-55d7255a":"9d9d4485","chunk-80c4ac10":"31d6cfe0"}[e]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],b.parentNode.removeChild(b),n(i)},b.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var b=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"156d":function(e,t,n){},"343c":function(e,t,n){e.exports=n.p+"img/snow_winter_icon.574f906c.png"},"429f":function(e,t,n){},"451e":function(e,t,n){"use strict";n("8738")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("div"),t("router-view"),t("Footer")],1)},r=[],i=n("96c7"),s=n("9ef1"),l={Header:i["a"],Footer:s["a"]},c=l,u=(n("cf60"),n("2877")),d=Object(u["a"])(c,o,r,!1,null,null,null),b=d.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("Header"),t("br"),t("b-container",{staticClass:"blurb-container"},[t("b-row",[t("b-col",{attrs:{md:"1"}}),t("b-col",{attrs:{md:"10"}},[t("b-row",[t("h2",{staticClass:"assoc"},[e._v("The Lovewell Pond Association")]),e._l(e.Associations,(function(n){return t("div",{key:n.id},[t("table",[t("tr",{staticClass:"table-row"},[e._v(e._s(n.detail))]),t("tr",{staticClass:"table-row"})])])}))],2),t("b-row",[t("b-button",{staticStyle:{color:"white"},attrs:{variant:"success",href:"https://www.surveymonkey.com/r/WK6KSPW",target:"_blank"}},[e._v("Lake Survey")])],1),t("br"),e._v(" "),t("br"),t("b-row",[t("h2",{staticClass:"events"},[e._v("Upcoming Events")]),e._l(e.Events,(function(n){return t("div",{key:n.id},[t("table",[t("th",{staticClass:"table-heading"},[e._v(e._s(n.sub_heading))]),t("tr",{staticClass:"table-row"},[e._v(e._s(n.detail))]),t("tr",{staticClass:"table-row"})])])}))],2),t("br"),t("b-row",[t("h2",{staticClass:"news"},[e._v("News & Announcements")]),e._l(e.News,(function(n){return t("div",{key:n.id},[t("table",[t("th",{staticClass:"table-heading"},[e._v(e._s(n.sub_heading))]),t("tr",{staticClass:"table-row"},[e._v(e._s(n.detail))]),t("tr",{staticClass:"table-row"})])])})),t("p",[t("b-button",{staticStyle:{color:"white"},attrs:{variant:"success",href:"https://www.maine.gov/ifw/programs-resources/recreational-opportunities/fryeburg-environmental-assessment.html",target:"“_blank”"}},[e._v("Fryeburg Shooting Facility Environmental Assessment")])],1)],2)],1),t("b-col",{attrs:{md:"1"}})],1)],1),t("hr"),t("Footer")],1)},v=[],p={name:"Home",components:{Header:i["a"],Footer:s["a"]},data:function(){return{Associations:[{id:1,title:"The Lovewell Pond Association",sub_heading:null,detail:"The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations."},{id:3,title:"The Lovewell Pond Association",sub_heading:null,detail:"Please take our 5 question survey on Lovewell Pond"}],Events:[{id:5,title:"Upcoming Events",sub_heading:"Wood Fired Pizza at the Saco River Brewery, Wednesday, July 27th, 4:30 PM",detail:"It’s Pizza night at the Saco River Brewery! Wood fired pizza and wings will be available from Blaze Brewing in Biddeford.  Come meet your neighbors and enjoy some drinks and pizza! Look for the sign that says 'Lovewell Pond Association' and come join us! Saco River Brewery is located just off Route 302 at 10 Jockey Cap Ln, Fryeburg."},{id:4,title:"Upcoming Events",sub_heading:"Second Annual Boat Parade, Saturday, August 20th, 4:00 PM to Sundown",detail:"The property owners of the Lovewell Pond Association are sponsoring our second Sunset Boat Regatta!  We will meet Saturday, August 20th at Indian Point Beach at 4:00 pm.  ( Rain Date Sunday August 21st, 4 PM)  Bring chairs, blankets, wine, beer, drinks and snacks. We will leave Indian Point, circle the lake, arrive back at the beach and together watch the sun go down.  Part of the fun will be decorating our boats, so go wild and be creative! Anything goes - from holiday themes to pirate boats.  Above all have fun!"},{id:3,title:"Upcoming Events",sub_heading:"Community Pot Luck Dinner, Saturday, August 27th",detail:"Come join your Lovewell Pond friends and neighbors for a community pot luck dinner, which will be held on Saturday, August 27th.  Stay tuned for details to come!"},{id:2,title:"Upcoming Events",sub_heading:"2023 Annual Meeting, Saturday, June 25th",detail:"The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its next Annual meeting on Saturday, June 25, 2023.  The meeting will go from 10:00 AM until noon, and be held at the Rapputak Community Lodge.  Please bring your good ideas and Lake info to share - we look forward to seeing everyone!"}],News:[{id:6,title:"News and Announcements",sub_heading:"Provide your feedback on the proposed changes to the gun range by Friday, August 15th",detail:"An environmental study on the proposed changes to the shooting range has been done by the Maine Department of Inland Fisheries and Wildlife and U.S. Fish and Wildlife Service.  A link to the study is below, along with a place to submit your comments.  They are asking for comments to be sent by August 15. "}]}}},g=p,m=(n("d4ab"),Object(u["a"])(g,f,v,!1,null,"f6685ec6",null)),w=m.exports,y=n("f9bc"),_=n("8c60"),k=n("331b");a["default"].use(h["a"]),a["default"].use(y["a"]),a["default"].use(_["a"]),a["default"].use(k["a"]);var P=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/association",name:"Association",component:function(){return n.e("chunk-51d86f90").then(n.bind(null,"829b"))}},{path:"/resources",name:"Resources",component:function(){return n.e("chunk-55d7255a").then(n.bind(null,"93b9"))}},{path:"/gallery",name:"Gallery",component:function(){return n.e("chunk-80c4ac10").then(n.bind(null,"0d77"))}},{path:"/lostandfound",name:"Lost and Found",component:function(){return n.e("chunk-320d46d5").then(n.bind(null,"a2c2"))}}],A=new h["a"]({routes:P}),S=A,L=n("5f5b");n("f9e3"),n("2dd8");a["default"].use(L["a"]),a["default"].config.productionTip=!1,new a["default"]({router:S,render:function(e){return e(b)}}).$mount("#app")},"7af4":function(e,t,n){},8738:function(e,t,n){},"96c7":function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("div",[t("h1",{attrs:{id:"title"}},[e._v("The Lovewell Pond Association")])])])],1),t("b-row",[t("b-col",{attrs:{md:"12"}},[t("Nav")],1)],1)],1)},o=[],r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"nav"}},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-brand",{attrs:{href:"#"}},[e._v("Hello!")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticStyle:{background:"#cce5ff"}},[t("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),t("b-nav-item",{attrs:{to:"/about"}},[e._v("Lovewell Pond")]),t("b-nav-item",{attrs:{to:"/association"}},[e._v("The Association")]),t("b-nav-item",{attrs:{to:"/resources"}},[e._v("Resources")]),t("b-nav-item",{attrs:{to:"/lostandfound"}},[e._v("Lost and Found")])],1),t("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)],1)},i=[],s={name:"Nav"},l=s,c=(n("9e22"),n("2877")),u=Object(c["a"])(l,r,i,!1,null,"1a5f38f2",null),d=u.exports,b={name:"Header",components:{Nav:d}},h=b,f=(n("d3bc"),Object(c["a"])(h,a,o,!1,null,"e3db19a4",null));t["a"]=f.exports},"9e22":function(e,t,n){"use strict";n("156d")},"9ef1":function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("b-row",[t("b-col",{attrs:{md:"1"}}),t("b-col",{attrs:{md:"1"}},[t("b-button",{staticStyle:{color:"white"},attrs:{variant:"outline-warning",href:"TheLovewellPondAssociationPrivacyPolicy.pdf",target:"_blank"}},[e._v("Privacy Policy")])],1),t("b-col",{attrs:{md:"8"}},[t("p",[e._v("©Lovewell Pond Association - All rights reserved.")]),t("p",[e._v("Property Owners of Lovewell Pond Association")]),t("p",[e._v("P.O. Box 617, Fryeburg, ME 04037")]),t("p",[t("a",{attrs:{href:"mailto:lpa-eboard@googlegroups.com",target:"_blank"}},[e._v("Contact Us")])]),t("br"),t("p",[e._v("Website designed by "),t("a",{attrs:{href:"mailto:lpa-eboard@googlegroups.com",target:"_blank"}},[e._v("Dawn Sirois")]),e._v(", Portsmouth, NH")])]),t("b-col",{attrs:{md:"1"}},[t("p",[t("a",{attrs:{href:"https://www.wunderground.com/?cm_ven=cgi",target:"_blank"}},[e._v("Fryeburg Weather "),t("img",{staticStyle:{"border-style":"solid"},attrs:{src:n("343c"),alt:"Click for Fryeburg, Maine Forecast",height:"108",width:"144"}})])])]),t("b-col",{attrs:{md:"1"}})],1)],1)},o=[],r={name:"Footer"},i=r,s=(n("451e"),n("2877")),l=Object(s["a"])(i,a,o,!1,null,"c8407474",null);t["a"]=l.exports},cf60:function(e,t,n){"use strict";n("d3c2")},d3bc:function(e,t,n){"use strict";n("7af4")},d3c2:function(e,t,n){},d4ab:function(e,t,n){"use strict";n("429f")}});
//# sourceMappingURL=app.4a47c063.js.map