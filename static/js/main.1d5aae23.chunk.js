(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),i=n(16),c=n(15),o=n(2),s=n(5),d=n(3),b=n(0),u=n(27),l=n(17),m=n(6),g=n(21),j=n.n(g),p=n(28);function f(e){var t=[];return null!==e?e.filter((function(e){return function(e){return-1===t.indexOf(e.id)&&(t.push(e.id),!0)}(e)})):e}var h,O,v,x,k="GET_DATA_REQUESTED",y="GET_DATA_SUCCEDED",w="GET_DATA_FAILED",I="ADD_PHOTO",E="REMOVE_PHOTO",D="SET_SEARCHFIELD",C=function(e){return e.data.bookmarkedImages},_=function(e){return e.data.recievedImages.photo},A=function(e){return e.data.searchfield},T=function(e){return e.data.recievedImages.total},N=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:k}),e.prev=1,e.abrupt("return",fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a041a8baa24763cc5c4265e521b8e34&text=".concat(n,"&per_page=18&page=").concat(r,"&format=json&nojsoncallback=1")).then((function(e){return e.json()})).then((function(e){return t((n=e.photos,{type:y,payload:n}));var n})));case 5:e.prev=5,e.t0=e.catch(1),t((a=e.t0.message,{type:w,payload:a}));case 8:case 9:case"end":return e.stop()}var a}),e,null,[[1,5]])})));return function(t,n,r){return e.apply(this,arguments)}}(),S={recievedImages:{photo:[],total:"20"},bookmarkedImages:[],isFetching:!1,searchfield:"",error:null},P="CHANGE_PAGE",R=function(e){return e.pagination.pageNumber},F=function(e){return e.pagination.offset},L=function(e){return e.pagination.pageLimit},G={pageNumber:1,offset:0,pageLimit:9},H=function(){return Object(i.b)()},z=i.c,B=d.b.div(h||(h=Object(o.a)(["\n    height: 85vh;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 100px 1fr;\n"]))),J=d.b.div(O||(O=Object(o.a)(["\n   padding: 4rem;\n"]))),M=d.b.form(v||(v=Object(o.a)(["\n    margin-bottom: 2rem;\n    width: 20rem;\n    height: 2rem;\n    input {\n        width: 100%;\n        height: 100%;\n        font-size: 1.5rem;\n    }\n"]))),U=d.b.div(x||(x=Object(o.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    grid-row-gap: 2rem;\n"]))),W=n(1);var Q,V,q,K=function(){var e=H(),t=z(_),n=z(A),r=z(R),a=z(T),i=z(L),c=z(F),o=z(C),s=Object(b.useRef)(null),d=function(t){var n;t.preventDefault(),s.current&&""!==s.current.value&&(e((n=s.current.value,{type:D,searchfield:n})),N(e,s.current.value,r))};return Object(W.jsxs)(B,{children:[Object(W.jsx)(re,{}),Object(W.jsxs)(J,{children:[Object(W.jsxs)(M,{onSubmit:d,children:[Object(W.jsx)("input",{ref:s,onChange:Object(u.debounce)(d,1500)}),Object(W.jsx)("button",{type:"submit",children:"Search"})]}),t[0]&&Object(W.jsx)(Re,{pageLimit:i,searchfield:n,currentPageNumber:r,totalItemsCount:+a}),t[0]?Object(W.jsx)(U,{children:t.slice(c,c+i).map((function(e,t){return Object(W.jsx)(je,{title:e.title,farm:e.farm,server:e.server,id:e.id,secret:e.secret,bookmarkedImages:o},t)}))}):Object(W.jsx)("p",{children:"No images here. Would you try to search for anything else?"})]})]})},X=n.p+"static/media/cloud.041dd8a4.svg",Y=n.p+"static/media/bookmark.f386a8c0.svg",Z=d.b.div(Q||(Q=Object(o.a)(["\n    border-right: 4px solid grey;\n    background: white;\n    width: 100px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    div {\n        margin-top: 2rem;\n    }\n"]))),$=d.b.div(V||(V=Object(o.a)(["\n    width: 2.5rem;\n    height: 2.5rem;\n    background: url(",") center/cover;\n    cursor: pointer;\n    &:active {\n        transform: scale(0.95);\n    }\n"])),X),ee=d.b.div(q||(q=Object(o.a)(["\n    width: 2.5rem;\n    height: 2.5rem;\n    background: url(",") center/cover;\n    cursor: pointer;\n    &:active {\n        transform: scale(0.95);\n    }\n"])),Y);var te,ne,re=function(){return Object(W.jsxs)(Z,{children:[Object(W.jsx)(c.b,{to:"/",children:Object(W.jsx)($,{})}),Object(W.jsx)(c.b,{to:"/bookmarks",children:Object(W.jsx)(ee,{})})]})},ae=d.b.div(te||(te=Object(o.a)(["\n    height: 120vh;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 100px 1fr;\n"]))),ie=d.b.div(ne||(ne=Object(o.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    grid-row-gap: 2rem;\n"])));var ce,oe,se,de=function(){var e=z(C);return Object(W.jsxs)(ae,{children:[Object(W.jsx)(re,{}),e[0]&&Object(W.jsx)(ie,{children:e.map((function(t,n){return Object(W.jsx)(je,{title:t.title,farm:t.farm,server:t.server,id:t.id,secret:t.secret,bookmarkedImages:e},n)}))})]})},be=d.b.div(ce||(ce=Object(o.a)(["\n    border: 1px solid gray;\n    padding: 1rem;\n    border-radius: 5px;\n    background: linear-gradient(42deg, rgba(236,235,247,1) 0%, rgba(165,230,237,1) 45%, rgba(0,212,255,1) 100%);\n    max-height: 20rem;\n    text-align: center;\n"]))),ue=d.b.div(oe||(oe=Object(o.a)(["\n    width: 250px;\n    height: 250px;\n    background: url(",") center/cover;\n    transition: 1s transform;\n    border-radius: 5px;\n    cursor: pointer;\n    &:hover{\n        transform: scale(1.1);\n    }\n    margin-bottom: 1rem;\n"])),(function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})),le=d.b.button(se||(se=Object(o.a)(["\n    cursor: pointer;\n    height: 2rem;\n    width: 10rem;\n"])));var me,ge,je=function(e){var t=e.farm,n=e.server,r=e.id,a=e.secret,i=e.title,c=e.bookmarkedImages,o=H(),s=c.findIndex((function(e){return e.id===r}));return Object(W.jsxs)(be,{children:[Object(W.jsx)(ue,{farm:t,server:n,id:r,secret:a,title:i}),-1===s?Object(W.jsx)(le,{onClick:function(e){if(e.preventDefault(),null!==e.target){var t=e.target.previousSibling;o(function(e){return{type:I,payload:e}}(t.id))}},children:"Bookmark it"}):Object(W.jsx)(le,{onClick:function(e){if(e.preventDefault(),null!==e.target){var t=e.target.previousSibling;o(function(e){return{type:E,payload:e}}(t.id))}},children:"Remove it"})]})},pe=d.b.footer(me||(me=Object(o.a)(["\n    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 60%, rgba(0,212,255,1) 100%);\n    width: 100%;\n    height: 4rem;\n    position: fixed;\n    bottom: 0px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));\n    align-items: center;\n"]))),fe=d.b.h2(ge||(ge=Object(o.a)(["\n    color: white;\n    justify-self: center;\n"])));var he,Oe,ve,xe=function(){return Object(W.jsx)(pe,{children:Object(W.jsx)(fe,{children:"Copyrights"})})},ke=n.p+"static/media/profileicon.1832bba4.svg",ye=d.b.header(he||(he=Object(o.a)(["\n    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 33%, rgba(0,212,255,1) 100%);\n    color: white;\n    height: 4rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));\n    align-items: center;\n"]))),we=d.b.h1(Oe||(Oe=Object(o.a)(["\n    justify-self: center;\n"]))),Ie=d.b.div(ve||(ve=Object(o.a)(["\n  \n  width: 2.5rem;\n    height: 2.5rem;    border: 1px solid white;\n    border-radius: 50%;\n    background: url(",") center/cover;\n    justify-self: end;\n    cursor: pointer;\n"])),ke);var Ee,De,Ce=function(){return Object(W.jsxs)(ye,{children:[Object(W.jsx)(we,{children:"Image Finder"}),Object(W.jsx)(Ie,{})]})},_e=n(32),Ae=n.n(_e),Te=Object(d.c)(Ee||(Ee=Object(o.a)(["\n    from {\n        transform: scale(1);\n    }\n    to {\n        transform: scale(1.7);\n    }\n"]))),Ne=d.b.div(De||(De=Object(o.a)(["\n    position: absolute;\n    top: 20%;\n    right: 25%;\n    transform: translate(50%);\n    .pagination {\n        display: flex;\n        flex-direction: row;\n        transition: all 1s;\n    }\n    .active, .active > a, .active > li {\n        transform: scale(1.7);\n        color: black;\n        animation: 0.5s "," linear;\n    }\n    li {\n        list-style: none;\n        padding: 0.1rem 0.5rem;\n        margin: 0.5rem;\n        cursor: pointer;\n        border: 1px solid black;\n        &: last-child, &: first-child {\n            display:none;\n        }\n        &: hover {\n            a {\n                color: black;\n            }  \n        }\n    }\n    a {\n        text-decoration: none;\n        color: grey;\n        font-weight: bold;\n    }\n"])),Te);var Se,Pe,Re=function(e){var t=H(),n=e.currentPageNumber,r=e.totalItemsCount,a=e.pageLimit,i=e.searchfield;return Object(W.jsx)(Ne,{children:Object(W.jsx)(Ae.a,{activePage:n,itemsCountPerPage:a,totalItemsCount:r,pageRangeDisplayed:3,onChange:function(e){var r;e!==n&&(t({type:P,pageNumber:r=e,offset:9*(r-1)}),N(t,i,n))}})})},Fe=Object(d.a)(Se||(Se=Object(o.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n"]))),Le=d.b.div(Pe||(Pe=Object(o.a)(["\n  height: 100%;\n"])));var Ge=function(){return Object(W.jsxs)(Le,{children:[Object(W.jsx)(Fe,{}),Object(W.jsx)(Ce,{}),Object(W.jsxs)(s.c,{children:[Object(W.jsx)(s.a,{exact:!0,path:"/",component:K}),Object(W.jsx)(s.a,{exact:!0,path:"/bookmarks",component:de})]}),Object(W.jsx)(xe,{})]})},He=n(14),ze=n(33),Be=n(34),Je=Object(He.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0});case y:return Object(m.a)(Object(m.a)({},e),{},{recievedImages:Object(m.a)(Object(m.a)(Object(m.a)({},e.recievedImages),t.payload),{},{photo:f([].concat(Object(l.a)(e.recievedImages.photo),Object(l.a)(t.payload.photo)))}),isFetching:!1,error:null});case w:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload});case D:return Object(m.a)(Object(m.a)({},e),{},{searchfield:t.searchfield,recievedImages:S.recievedImages});case I:return Object(m.a)(Object(m.a)({},e),{},{bookmarkedImages:[].concat(Object(l.a)(e.bookmarkedImages),[e.recievedImages.photo[e.recievedImages.photo.findIndex((function(e){return e.id===t.payload}))]])});case E:return Object(m.a)(Object(m.a)({},e),{},{bookmarkedImages:Object(l.a)(e.bookmarkedImages.filter((function(e){return e.id!==t.payload})))});default:return Object(m.a)({},e)}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(m.a)(Object(m.a)({},e),{},{pageNumber:t.pageNumber,offset:t.offset});case D:return G;default:return Object(m.a)({},e)}}}),Me=[Object(He.applyMiddleware)(Be.a)],Ue=ze.composeWithDevTools.apply(void 0,Me),We=Object(He.createStore)(Je,Ue);a.a.render(Object(W.jsx)(i.a,{store:We,children:Object(W.jsx)(c.a,{basename:"/imagefinder",children:Object(W.jsx)(Ge,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1d5aae23.chunk.js.map