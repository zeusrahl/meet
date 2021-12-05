(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),s=n.n(o),i=(n(40),n(3)),c=n(7),u=n(5),l=n(4),d=n(65),h=n(66),f=n(67),p=(n(41),n(42),n(68)),v=n(0),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleShowDetailsClick=function(){e.setState({collapsed:!1})},e.handleHideDetailsClick=function(){e.setState({collapsed:!0})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(v.jsxs)("div",{className:"event",children:[Object(v.jsx)("h2",{className:"summary",children:e.summary}),Object(v.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(v.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),Object(v.jsx)(p.a,{variant:"primary",className:"show-details-btn ".concat(this.state.collapsed?"show":"hide"),onClick:this.handleShowDetailsClick,children:"Show Details"}),Object(v.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(v.jsx)("h4",{children:"About the event:"}),Object(v.jsx)("a",{href:e.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"}),Object(v.jsx)("p",{className:"event-description",children:e.description}),Object(v.jsx)(p.a,{variant:"primary",className:"hide-details-btn",onClick:this.handleHideDetailsClick,children:"Hide Details"})]})]})}}]),n}(a.Component),b=m,j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(v.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(b,{event:e})},e.id)}))})}}]),n}(a.Component),g=j,w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Alert",children:Object(v.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(w),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(w),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"CitySearch",children:[Object(v.jsx)(O,{text:this.state.infoText}),Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Choose your nearest City"})})}),Object(v.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(v.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(v.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),k=y,S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleNumberChanged=function(t){var n=t.target.value;n<=0||n>32?e.setState({numberOfEvents:n,infoText:"Please pick a number that is greater than 0 but less than 33"}):e.setState({numberOfEvents:n,infoText:""}),e.props.updateEventCount(t.target.value)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(v.jsxs)("div",{className:"NumberOfEvents mt-40",children:[Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"Number of Events:"})}),Object(v.jsx)("input",{type:"number",className:"eventsNumber",value:t,onChange:function(t){return e.handleNumberChanged(t)}}),Object(v.jsx)(x,{text:this.state.infoText})]})}}]),n}(a.Component),C=S,T=n(10),E=n.n(T),N=n(14),Z=n(34),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(21),I=n.n(A),D=n(15),L=n.n(D),q=function(e){var t=e.map((function(e){return e.location}));return Object(Z.a)(new Set(t))},M=function(){var e=Object(N.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(N.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://xgkkjps60h.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},U=function(){var e=Object(N.a)(E.a.mark((function e(){var t,n,a,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),L.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,R();case 11:if(!(n=e.sent)){e.next=21;break}return B(),a="https://xgkkjps60h.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,I.a.get(a);case 17:return(r=e.sent).data&&(o=q(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),L.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(N.a)(E.a.mark((function e(){var t,n,a,r,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,I.a.get("https://xgkkjps60h.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=(n(62),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.updateEvents=function(t){U().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,U().then((function(t){if(e.mounted){var n=t.slice(0,e.state.numberOfEvents);e.setState({events:n,locations:q(t)})}}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events,a=e.numberOfEvents;return Object(v.jsxs)(d.a,{className:"App",children:[Object(v.jsxs)(h.a,{children:[Object(v.jsx)(f.a,{className:"CitySearchWrapper",md:6,children:Object(v.jsx)(k,{locations:t,updateEvents:this.updateEvents})}),Object(v.jsx)(f.a,{className:"NumberOfEventsWrapper",md:6,children:Object(v.jsx)(C,{numberOfEvents:a,updateEventCount:this.updateEventCount})})]}),Object(v.jsx)(h.a,{children:Object(v.jsx)(f.a,{md:12,children:Object(v.jsx)(g,{events:n})})})]})}}]),n}(a.Component)),H=F,z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(33).config("14cbe4604fe0441882edc71e0b94900f").install(),s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),P()}},[[64,1,2]]]);
//# sourceMappingURL=main.8f971363.chunk.js.map