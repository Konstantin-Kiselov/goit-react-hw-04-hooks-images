(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"Container_container__3qZ38"}},13:function(e,t,a){e.exports={button:"Button_button__1skWU"}},15:function(e,t,a){e.exports={loader:"App_loader__2lKOU"}},20:function(e,t,a){},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__30--z",searchForm:"Searchbar_searchForm__hO3nS",searchFormButton:"Searchbar_searchFormButton__1oiLt",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__1U9Tm",searchFormInput:"Searchbar_searchFormInput__1L2dF"}},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),s=(a(20),a(11)),i=a(3),l=a(12),u=a.n(l),m=a(0);var b=function(e){var t=e.children;return Object(m.jsx)("div",{className:u.a.container,children:t})},j=a(4),d=a.n(j);function h(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(m.jsx)("header",{className:d.a.searchbar,children:Object(m.jsxs)("form",{className:d.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r.trim().toLowerCase()),o("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},children:[Object(m.jsx)("button",{type:"submit",className:d.a.searchFormButton,children:Object(m.jsx)("span",{className:d.a.searchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:d.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value)}})]})})}var g=a(13),O=a.n(g);var f=function(e){var t=e.handleClickBtn;return Object(m.jsx)("button",{className:O.a.button,onClick:t,type:"button",children:"Load more"})},_=a(9),p=a.n(_),v=document.querySelector("#modal-root");function x(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[]);var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(m.jsx)("div",{className:p.a.overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(m.jsxs)("div",{className:p.a.modal,children:[a,Object(m.jsx)("button",{className:p.a.button,type:"button",onClick:t,children:"X"})]})}),v)}var y=a(6),S=a.n(y);var I=function(e){var t=e.src,a=e.tags,n=e.dataSrc,c=e.onClick;return Object(m.jsx)("li",{className:S.a.imageGalleryItem,onClick:c,children:Object(m.jsx)("img",{src:t,"data-src":n,alt:a,className:S.a.imageGalleryItemImage})})};var F=function(e){var t=e.gallery,a=e.onClickImg;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:S.a.imageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,r=e.tags;return Object(m.jsx)(I,{src:n,dataSrc:c,tags:r,onClick:a},t)}))})})};var k={fetchImages:function(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23027480-c70d45ac3781d0e477b4a7117","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))}},w=a(14),C=a.n(w),L=(a(42),a(15)),N=a.n(L);function G(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("idle"),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),g=d[0],O=d[1],_=Object(n.useState)(1),p=Object(i.a)(_,2),v=p[0],y=p[1],S=Object(n.useState)(""),I=Object(i.a)(S,2),w=I[0],L=I[1],G=Object(n.useState)(""),B=Object(i.a)(G,2),U=B[0],E=B[1],R=Object(n.useState)(!1),M=Object(i.a)(R,2),T=M[0],q=M[1],z=Object(n.useState)(null),D=Object(i.a)(z,2),J=D[0],K=D[1];Object(n.useEffect)((function(){""!==g.trim()&&(u("pending"),k.fetchImages(g,v).then((function(e){var t=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));t.length>0?(c((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),u("resolved")):(alert("\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(g," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")),u("idle"))})).catch((function(e){K(e),u("rejected")})).finally((function(){v>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[v,g]);var W=function(e){e!==g&&(c([]),y(1),O(e))};return"idle"===l?Object(m.jsx)(b,{children:Object(m.jsx)(h,{onSubmit:W})}):"rejected"===l?Object(m.jsx)("h1",{children:J.message}):"resolved"===l||"pending"===l?Object(m.jsxs)(m.Fragment,{children:[T&&Object(m.jsx)(x,{onClose:function(){q(!T)},children:Object(m.jsx)("img",{src:w,alt:U})}),Object(m.jsxs)(b,{children:[Object(m.jsx)(h,{onSubmit:W}),a.length>0&&Object(m.jsx)(F,{onClickImg:function(e){var t=e.target.dataset.src,a=e.target.alt;L(t),E(a),q(!0)},gallery:a}),"pending"===l?Object(m.jsx)(C.a,{className:N.a.loader,type:"Circles",color:"#00BFFF",height:80,width:80}):Object(m.jsx)(f,{handleClickBtn:function(){y((function(e){return e+1})),u("pending")}})]})]}):void 0}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2F14-",imageGalleryItem:"ImageGallery_imageGalleryItem__3KzXD",imageGalleryItemImage:"ImageGallery_imageGalleryItemImage__3s_xn"}},9:function(e,t,a){e.exports={overlay:"Modal_overlay__2wWek",modal:"Modal_modal__Y4IYu",button:"Modal_button__1Rs1g"}}},[[43,1,2]]]);
//# sourceMappingURL=main.e7583300.chunk.js.map