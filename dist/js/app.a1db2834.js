(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);h&&h(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},r={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f384872a","chunk-0d7334b3":"5165abf6","chunk-474d1151":"0cc63e68","chunk-80c4ac10":"edf5e71f"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1,"chunk-0d7334b3":1,"chunk-474d1151":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"08e9aa14","chunk-0d7334b3":"9d9d4485","chunk-474d1151":"6f7a29ff","chunk-80c4ac10":"31d6cfe0"}[e]+".css",r=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===r))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===n||d===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],h.parentNode.removeChild(h),a(i)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(h);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"2c3c":function(e,t,a){"use strict";var n=a("54f4"),o=a.n(n);o.a},"343c":function(e,t,a){e.exports=a.p+"img/snow_winter_icon.574f906c.png"},"38c4":function(e,t,a){},"54f4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("div"),a("router-view"),a("Footer")],1)},r=[],i=a("96c7"),s=a("9ef1"),l={Header:i["a"],Footer:s["a"]},c=l,d=(a("034f"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,null,null),h=u.exports,f=(a("d3b7"),a("8c4f")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Header"),a("br"),a("b-container",{staticClass:"blurb-container"},[a("b-row",[a("b-col",{attrs:{md:"1"}}),a("b-col",{attrs:{md:"10"}},[a("b-row",[a("h2",{staticClass:"assoc"},[e._v("The Lovewell Pond Association")]),e._l(e.Associations,(function(t){return a("div",{key:t.id},[a("table",[a("tr",{staticClass:"table-row"},[e._v(e._s(t.detail))])])])}))],2),a("br"),a("b-row",[a("h2",{staticClass:"events"},[e._v("Upcoming Events")]),e._l(e.Events,(function(t){return a("div",{key:t.id},[a("table",[a("th",{staticClass:"table-heading"},[e._v(e._s(t.sub_heading))]),a("tr",{staticClass:"table-row"},[e._v(e._s(t.detail))]),a("tr",{staticClass:"table-row"})])])})),a("b-button",{staticStyle:{color:"white"},attrs:{variant:"success",href:"https://www.surveymonkey.com/r/WK6KSPW",target:"_blank"}},[e._v("Lake Survey")])],2),a("br"),e._v(" "),a("br"),a("b-row",[a("h2",{staticClass:"news"},[e._v("News & Announcements")]),e._l(e.News,(function(t){return a("div",{key:t.id},[a("table",[a("th",{staticClass:"table-heading"},[e._v(e._s(t.sub_heading))]),a("tr",{staticClass:"table-row"},[e._v(e._s(t.detail))]),a("tr",{staticClass:"table-row"})])])})),a("b-button",{staticStyle:{color:"white"},attrs:{variant:"success",href:"https://www.surveymonkey.com/r/WK6KSPW",target:"_blank"}},[e._v("Lake Survey")])],2)],1),a("b-col",{attrs:{md:"1"}})],1)],1),a("hr"),a("Footer")],1)},v=[],p={name:"Home",components:{Header:i["a"],Footer:s["a"]},data:function(){return{Associations:[{id:1,title:"The Lovewell Pond Association",sub_heading:null,detail:"The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations"}],Events:[{id:2,title:"Upcoming Events",sub_heading:"2021 Annual Meeting, Saturday, July 10th",detail:"The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its Annual meeting on Saturday, July 10.  The meeting will go from 10:00 AM until noon, and be held at the Rapputak Community Lodge.  Please bring your good ideas and Lake info to share - we look forward to seeing everyone!"},{id:3,title:"Upcoming Events",sub_heading:"Annual Loon Count, Saturday, July 17",detail:"Meet at the Public Boat Ramp at 7 AM, to count the loons on the lake.  Please bring binnoculars.  Last year we counted 7 loons, and unfortunately, no baby chicks.  We'd love to get kids involved!"},{id:4,title:"Upcoming Events",sub_heading:"First Annual Boat Parade, Sunday, Sept 5th, 4:30 PM",detail:"The property owners of the Lovewell Pond Association are sponsoring our first ever Sunset Boat Regatta!  We will meet Sunday, September 5th at Indian Point Beach at 4:30 pm.  Bring chairs, blankets, wine, beer, drinks and snacks. We will leave Indian Point, circle the lake, arrive back at the beach and together watch the sun go down.  Part of the fun will be decorating our boats, so go wild and be creative! Anything goes- from holiday themes to pirate boats. Above all have fun!"},{id:5,title:"Upcoming Events",sub_heading:"Plant Identification Paddle - To be Scheduled",detail:"This paddle will not be scheduled for 2021 because our biologist, Laurie Callahan, is not available.  Please email us if you are interested in participating and we will keep you in the loop when the next one is scheduled.   In the meantime, please fill out our 5 question survey to help with plant identification. "}],News:[{id:7,title:"News and Announcements",sub_heading:"Ice-Out 2020",detail:"Lovewell Pond Ice-Out was on April 6th, 2020, about 12 days earlier than in 2019."},{id:8,title:"News and Announcements",sub_heading:"Invasive Plant and Inspection Program",detail:"Peter Wilkens noted that due to the more than double inspections performed at the boat ramp in 2018, the state approved Lovewell Pond for the full $2000 Courtesy Boat Inspection grant for 2019.  Peter submitted the grant application in March 2019 and noted that Lovewell Pond inspected more than 1500 boats in 2018.  This includes required trailers, canoes and kayaks.  On one very busy day in 2018, Allison, our only inspector at the boat ramp, inspected 90 boats.  That is quite a feat.  This year’s inspections started a little slower due to the weather and the flooding situation however it is definitely picking up.  Only July 4th of this year, 67 boats were inspected.  It seems that the Lovewell Pond boat ramp gets busier every year, particularly with the Saco River access, the media press, and the livery brochures.   Lovewell Pond is definitely on the map.  This increases the risk of invasive plant hitchhikers such as variable leaf milfoil, etc. on boats that are launched in the pond after possibly coming from another infested body of water. It also makes boat, kayaks and canoes and trailer inspections critical.  The key emphasis this year is “Clean, Drain and Dry”.  Boaters are urged to clean off any mud, plants and animals from boats, jet-ski’s, trailers and other equipment.  The boat live well, engine and equipment should be drained well away from surface waters and anything that comes in contact with water should be dried between use at different lakes.  Please also remind your renters of this and that they also need a Milfoil sticker on their boat.  These can now be purchased on line.  With all of the activity at the boat ramp, we could use some help, if not this year maybe next year.  Please let us know if you can lend a hand, it will be so appreciated.  Allison continues to do an amazing job and keeps things calm in a chaotic atmosphere, not to mention keeping her keen eye out for those nasty invasives.   She’s a real pro and we are fortunate to have her as an inspector."},{id:9,title:"News and Announcements",sub_heading:"Water Quality Testing",detail:"Paul Fortin continues to perform seiki disk testing 4 times a year, testing for water clarity.  The results have been good and water has been relatively clear.  Josh Everett has coordinated the more extensive water testing.  This data is collected and then sent off for analysis.  It is also forwarded to the Saco River Corridor Commission for inclusion in their analysis from the Saco River. It’s available at www.srcc.maine.org.  Some folks have noticed that the water seems warmer this year and in some places almost hot.  They are also seeing more algae bloom and weed growth in the lower end of the pond.  A Level 3 plant inspection is slated for this year.  A Plant 3 Survey is the most comprehensive survey performed in the water by divers.  The pond and plant life are examined below the surface.  The last Level 3 Plant survey was completed in 2010.  We now have a good established baseline to compare the findings."}]}}},m=p,w=(a("5c83"),Object(d["a"])(m,b,v,!1,null,"5674d532",null)),g=w.exports,y=a("f9bc"),_=a("8c60"),k=a("331b");n["default"].use(f["a"]),n["default"].use(y["a"]),n["default"].use(_["a"]),n["default"].use(k["a"]);var P=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/association",name:"Association",component:function(){return a.e("chunk-474d1151").then(a.bind(null,"829b"))}},{path:"/resources",name:"Resources",component:function(){return a.e("chunk-0d7334b3").then(a.bind(null,"93b9"))}},{path:"/gallery",name:"Gallery",component:function(){return a.e("chunk-80c4ac10").then(a.bind(null,"0d77"))}}],A=new f["a"]({routes:P}),S=A,L=a("5f5b");a("f9e3"),a("2dd8");n["default"].use(L["a"]),n["default"].config.productionTip=!1,new n["default"]({router:S,render:function(e){return e(h)}}).$mount("#app")},"5c83":function(e,t,a){"use strict";var n=a("38c4"),o=a.n(n);o.a},"7d12":function(e,t,a){},"85ec":function(e,t,a){},"940e":function(e,t,a){"use strict";var n=a("bc09"),o=a.n(n);o.a},"96c7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("div",[a("h1",{attrs:{id:"title"}},[e._v("The Lovewell Pond Association")])])])],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("Nav")],1)],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[e._v("Hello!")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticStyle:{background:"#cce5ff"}},[a("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),a("b-nav-item",{attrs:{to:"/about"}},[e._v("Lovewell Pond")]),a("b-nav-item",{attrs:{to:"/association"}},[e._v("The Association")]),a("b-nav-item",{attrs:{to:"/resources"}},[e._v("Resources")])],1),a("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)],1)},i=[],s={name:"Nav"},l=s,c=(a("2c3c"),a("2877")),d=Object(c["a"])(l,r,i,!1,null,"45d6304d",null),u=d.exports,h={name:"Header",components:{Nav:u}},f=h,b=(a("dc9f"),Object(c["a"])(f,n,o,!1,null,"e3db19a4",null));t["a"]=b.exports},"9ef1":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("b-row",[n("b-col",{attrs:{md:"1"}}),n("b-col",{attrs:{md:"1"}},[n("b-button",{staticStyle:{color:"white"},attrs:{variant:"outline-warning",href:"TheLovewellPondAssociationPrivacyPolicy.pdf",target:"_blank"}},[e._v("Privacy Policy")])],1),n("b-col",{attrs:{md:"8"}},[n("p",[e._v("©Lovewell Pond Association - All rights reserved.")]),n("p",[e._v("Property Owners of Lovewell Pond Association")]),n("p",[e._v("P.O. Box 617, Fryeburg, ME 04037")]),n("p",[n("a",{attrs:{href:"mailto:lovewellpondassoc@gmail.com",target:"_blank"}},[e._v("Contact Us")])]),n("br"),n("p",[e._v("Website designed by "),n("a",{attrs:{href:"mailto:lovewellpondassoc@gmail.com",target:"_blank"}},[e._v("Dawn Sirois")]),e._v(", Portsmouth, NH")])]),n("b-col",{attrs:{md:"1"}},[n("p",[n("a",{attrs:{href:"https://www.wunderground.com/?cm_ven=cgi",target:"_blank"}},[n("img",{staticStyle:{"border-style":"solid"},attrs:{src:a("343c"),alt:"Click for Fryeburg, Maine Forecast",height:"108",width:"144"}})])])]),n("b-col",{attrs:{md:"1"}})],1)],1)},o=[],r={name:"Footer"},i=r,s=(a("940e"),a("2877")),l=Object(s["a"])(i,n,o,!1,null,"f4001ee0",null);t["a"]=l.exports},bc09:function(e,t,a){},dc9f:function(e,t,a){"use strict";var n=a("7d12"),o=a.n(n);o.a}});
//# sourceMappingURL=app.a1db2834.js.map