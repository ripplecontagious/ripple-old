webpackJsonp([3],{1518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),l=n(38),c=n(28),i=n(788),o=n(1618),m=n(1549),p=n(83),d=function(e){var t=e.date,n=t.start,a=t.end;return r.a.createElement(l.c,{query:p.d},function(e){var t=e.data.filtered,l=t.results,p=t.username;return r.a.createElement(m.b,null,r.a.createElement(c.s,{basic:!0},r.a.createElement(i.c,null,r.a.createElement(m.a,null),r.a.createElement(o.a,{filtered:l,start:n,end:a,username:p}))))})};t.default=d},1548:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a=function(e){return new Date(e).toLocaleString("en-us",{month:"long"})},r=function(e){return new Date(e).getFullYear()}},1549:function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"b",function(){return g}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"a",function(){return C});var r=n(47),l=a(["\n  height: 100%;\n  width: 100%;\n  -webkit-print-color-adjust: exact;\n"],["\n  height: 100%;\n  width: 100%;\n  -webkit-print-color-adjust: exact;\n"]),c=a(["\n  padding-bottom: 30px;\n"],["\n  padding-bottom: 30px;\n"]),i=a(["\n  width: 100%;\n  -webkit-print-color-adjust: exact;\n"],["\n  width: 100%;\n  -webkit-print-color-adjust: exact;\n"]),o=a(["\n  margin-bottom: 29px;\n  filter: drop-shadow(0 0 0.3rem darkgrey);\n  @media print {\n    filter: none;\n  }\n"],["\n  margin-bottom: 29px;\n  filter: drop-shadow(0 0 0.3rem darkgrey);\n  @media print {\n    filter: none;\n  }\n"]),m=a(["\n  margin: 20px;\n  padding: 10px;\n  min-width: 400px;\n  max-width: 60%;\n  background-color: lightgrey;\n  color: blue;\n  border-radius: 10px;\n"],["\n  margin: 20px;\n  padding: 10px;\n  min-width: 400px;\n  max-width: 60%;\n  background-color: lightgrey;\n  color: blue;\n  border-radius: 10px;\n"]),p=a(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"],["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]),d=a(["\n  color: black;\n  font-weight: 800;\n  font-size: 24px;\n"],["\n  color: black;\n  font-weight: 800;\n  font-size: 24px;\n"]),g=r.b.div(l),E=r.b.div(c),s=r.b.div(i),u=r.b.div(o),C=(r.b.div(m),r.b.div(p));r.b.h1(d)},1618:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=n(0),l=n.n(r),c=n(1619),i=n(1548),o=n(1549),m=function(e){var t=e.start,n=e.end,r=e.filtered,m=e.username,p=r.filter(function(e){return Number(e.date)>t&&Number(e.date)<n}),d=p.reduce(function(e,t){return"participant"!==t.surveyName&&"management"!==t.surveyName?e:("management"===t.surveyName?e.mentors=[].concat(a(e.mentors),[t]):e.participants=[].concat(a(e.participants),[t]),e)},{mentors:[],participants:[]}),g=function(e){return d.mentors?d.mentors.length<1?1:d.mentors.reduce(function(t,n){return t+=n["p"+e]-1},0)/d.mentors.length+1:1},E=function(e){return d.participants?d.participants.length<1?1:d.participants.reduce(function(t,n){return t+=n["p"+e]-1},0)/d.participants.length+1:1};return l.a.createElement(o.c,null,l.a.createElement(c.a,{heading:Object(i.a)(n)!==Object(i.a)(t)?"DASHBOARD \u2013 "+Object(i.a)(t)+" to "+Object(i.a)(n)+" for "+m.toUpperCase():"DASHBOARD \u2013 "+(Object(i.a)(t)||"SELECT DATE")+" - for - "+(m||"PARTICIPANT"),mentor1:g(1),mentor2:g(2),mentor3:g(3),mentor4:g(4),mentor5:g(5),mentor6:g(6),participant1:E(1),participant2:E(2),participant3:E(3),participant4:E(4),participant5:E(5),participant6:E(6)}))};t.a=m},1619:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(28),c=n(1549),i=n(1620),o=(n.n(i),function(e){return e>=4}),m=function(e,t){var n=+(e-1).toFixed(2),a=o(e)?"green":"red";return r.a.createElement(l.m,null,r.a.createElement(l.m.Item,null,r.a.createElement(l.l,{circular:!0,color:a,key:a},n)),r.a.createElement(l.m.Item,null,t))},p=function(e){var t=e-1;if(0===t||5===t)return 100;if(t<3){return(3-t)/3*100}if(t>=3){return(t-3)/3*100+33.33}},d=function(e){return r.a.createElement(c.d,null,r.a.createElement(l.d,{horizontal:!0,inverted:!0},r.a.createElement(l.h,{as:"h3",content:e.heading})),r.a.createElement(l.d,{horizontal:!0},"Values"),r.a.createElement(c.e,null,r.a.createElement(l.t,{celled:!0},r.a.createElement(l.t.Header,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"center",colSpan:"7"},"Communication")),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"0"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"1"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"2"),r.a.createElement(l.t.HeaderCell,null),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"3"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"4"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"5"))),r.a.createElement(l.t.Body,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.mentor1)?100:p(e.mentor1),color:o(e.mentor1)?"grey":"red",disabled:o(e.mentor1)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.mentor1,"Mentor")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.mentor1)?p(e.mentor1):100,color:o(e.mentor1)?"green":"grey",disabled:!o(e.mentor1)}))),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.participant1)?100:p(e.participant1),color:o(e.participant1)?"grey":"red",disabled:o(e.participant1)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.participant1,"Participant")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.participant1)?p(e.participant1):100,color:o(e.participant1)?"green":"grey",disabled:!o(e.participant1)})))))),r.a.createElement(c.e,null,r.a.createElement(l.t,{celled:!0},r.a.createElement(l.t.Header,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"center",colSpan:"7"},"Respect")),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"0"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"1"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"2"),r.a.createElement(l.t.HeaderCell,null),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"3"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"4"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"5"))),r.a.createElement(l.t.Body,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.mentor2)?100:p(e.mentor2),color:o(e.mentor2)?"grey":"red",disabled:o(e.mentor2)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.mentor2,"Mentor")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.mentor2)?p(e.mentor2):100,color:o(e.mentor2)?"green":"grey",disabled:!o(e.mentor2)}))),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.participant2)?100:p(e.participant2),color:o(e.participant2)?"grey":"red",disabled:o(e.participant2)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.participant2,"Participant")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.participant2)?p(e.participant2):100,color:o(e.participant2)?"green":"grey",disabled:!o(e.participant2)})))))),r.a.createElement(c.e,null,r.a.createElement(l.t,{celled:!0},r.a.createElement(l.t.Header,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"center",colSpan:"7"},"Integrity")),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"0"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"1"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"2"),r.a.createElement(l.t.HeaderCell,null),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"3"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"4"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"5"))),r.a.createElement(l.t.Body,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.mentor3)?100:p(e.mentor3),color:o(e.mentor3)?"grey":"red",disabled:o(e.mentor3)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.mentor3,"Mentor")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.mentor3)?p(e.mentor3):100,color:o(e.mentor3)?"green":"grey",disabled:!o(e.mentor3)}))),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.participant3)?100:p(e.participant3),color:o(e.participant3)?"grey":"red",disabled:o(e.participant3)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.participant3,"Participant")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.participant3)?p(e.participant3):100,color:o(e.participant3)?"green":"grey",disabled:!o(e.participant3)})))))),r.a.createElement(c.e,null,r.a.createElement(l.t,{celled:!0},r.a.createElement(l.t.Header,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"center",colSpan:"7"},"Creativity")),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"0"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"1"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"2"),r.a.createElement(l.t.HeaderCell,null),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"3"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"4"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"5"))),r.a.createElement(l.t.Body,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.mentor4)?100:p(e.mentor4),color:o(e.mentor4)?"grey":"red",disabled:o(e.mentor4)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.mentor4,"Mentor")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.mentor4)?p(e.mentor4):100,color:o(e.mentor4)?"green":"grey",disabled:!o(e.mentor4)}))),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.participant4)?100:p(e.participant4),color:o(e.participant4)?"grey":"red",disabled:o(e.participant4)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.participant4,"Participant")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.participant4)?p(e.participant4):100,color:o(e.participant4)?"green":"grey",disabled:!o(e.participant4)})))))),r.a.createElement(c.e,null,r.a.createElement(l.t,{celled:!0},r.a.createElement(l.t.Header,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"center",colSpan:"7"},"Knowledge")),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"0"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"1"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"2"),r.a.createElement(l.t.HeaderCell,null),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"3"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"4"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"5"))),r.a.createElement(l.t.Body,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.mentor5)?100:p(e.mentor5),color:o(e.mentor5)?"grey":"red",disabled:o(e.mentor5)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.mentor5,"Mentor")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.mentor5)?p(e.mentor5):100,color:o(e.mentor5)?"green":"grey",disabled:!o(e.mentor5)}))),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.participant5)?100:p(e.participant5),color:o(e.participant5)?"grey":"red",disabled:o(e.participant5)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.participant5,"Participant")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.participant5)?p(e.participant5):100,color:o(e.participant5)?"green":"grey",disabled:!o(e.participant5)})))))),r.a.createElement(c.e,null,r.a.createElement(l.t,{celled:!0},r.a.createElement(l.t.Header,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"center",colSpan:"7"},"Teamwork")),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"0"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"1"),r.a.createElement(l.t.HeaderCell,{textAlign:"left"},"2"),r.a.createElement(l.t.HeaderCell,null),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"3"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"4"),r.a.createElement(l.t.HeaderCell,{textAlign:"right"},"5"))),r.a.createElement(l.t.Body,null,r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.mentor6)?100:p(e.mentor6),color:o(e.mentor6)?"grey":"red",disabled:o(e.mentor6)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.mentor6,"Mentor")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.mentor6)?p(e.mentor6):100,color:o(e.mentor6)?"green":"grey",disabled:!o(e.mentor6)}))),r.a.createElement(l.t.Row,null,r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{className:"negativeProgress",percent:o(e.participant6)?100:p(e.participant6),color:o(e.participant6)?"grey":"red",disabled:o(e.participant6)})),r.a.createElement(l.t.Cell,{colSpan:"1",width:"2",textAlign:"center"},m(e.participant6,"Participant")),r.a.createElement(l.t.Cell,{colSpan:"3"},r.a.createElement(l.q,{percent:o(e.participant6)?p(e.participant6):100,color:o(e.participant6)?"green":"grey",disabled:!o(e.participant6)})))))))};t.a=d},1620:function(e,t,n){var a=n(1621);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(1516)(a,r);a.locals&&(e.exports=a.locals)},1621:function(e,t,n){t=e.exports=n(1515)(!0),t.push([e.i,".negativeProgress{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}","",{version:3,sources:["/Users/macbookpro/Desktop/workspace/ripple-old/client/src/app/results/components/table/negative.css"],names:[],mappings:"AAAA,kBACC,iCAAkC,AAClC,6BAA8B,AAC9B,wBAA0B,CAC1B",file:"negative.css",sourcesContent:[".negativeProgress{\n\t-webkit-transform: rotate(180deg);\n\t-ms-transform: rotate(180deg);\n\ttransform: rotate(180deg);\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=3.3394288c.chunk.js.map