"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[311],{237:function(n,e,t){t.d(e,{j:function(){return l}});var r,a=t(168),o=t(978),i=t(87),s=(0,o.ZP)(i.rU)(r||(r=(0,a.Z)(["\n  display: block;\n  width: 120px;\n  text-align: center;\n  margin: 0 auto;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #1a3652;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: #0a2138;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),c=(t(791),t(184)),l=function(){return(0,c.jsx)(s,{to:"/",children:"Back to Home"})}},854:function(n,e,t){t.d(e,{a:function(){return c}});var r,a=t(168),o=(t(791),t(137)),i=t(978),s=t(184),c=function(){return(0,s.jsx)(l,{children:(0,s.jsx)(o.iT,{visible:!0,height:"80",width:"80",color:"#4fa94d",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:""})})},l=i.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\nheight: 100vh; \n"])))},455:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r=t(861),a=t(439),o=t(687),i=t.n(o),s=t(791),c=t(294);c.Z.defaults.baseURL="https://65d9fd5fbcc50200fcdc6643.mockapi.io";var l,p,d,u,x,f,g,h,b,A,m,w=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/users");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=t(683),j=t.p+"static/media/background_image.032662a2a907475127d7.png",v=t(168),k=t(978),S=k.ZP.li(l||(l=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  width: 380px;\n  height: 460px;\n  border-radius: 20px;\n  box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);\n  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);\n"]))),E=k.ZP.img(p||(p=(0,v.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),Y=k.ZP.img(d||(d=(0,v.Z)(["\n  position: absolute;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),y=k.ZP.div(u||(u=(0,v.Z)(["\n  width: 100%;\n  height: 8px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  background: #ebd8ff;\n  box-shadow: inset 0 3px 3px 0 #fbf8ff, 0 3px 3px 0 rgba(0, 0, 0, 0.06),\n    inset 0 -2px 3px 0 #ae7be3;\n"]))),P=k.ZP.div(x||(x=(0,v.Z)(["\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: #ebd8ff;\n  box-shadow: inset 0 4px 3px 0 #fbf8ff, 0 4px 4px 0 rgba(0, 0, 0, 0.06),\n    inset 0 -2px 4px 0 #ae7be3;\n  border-radius: 50%;\n  > img {\n    border-radius: 50%;\n  }\n"]))),B=k.ZP.ul(f||(f=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  position: absolute;\n  top: 67%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  > li {\n    color: #ebd8ff;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: calc(24 / 20);\n    text-transform: uppercase;\n    text-align: center;\n  }\n"]))),C=k.ZP.button(g||(g=(0,v.Z)(["\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 14px 39px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  color: #373737;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);\n  &:hover {\n  }\n"]))),Q=t(184),N=function(n){var e=n.user,t=n.tweets,r=n.followers,o=n.avatar,i=n.id,c=(0,s.useState)(JSON.parse(localStorage.getItem("USER_".concat(i)))||!1),l=(0,a.Z)(c,2),p=l[0],d=l[1];(0,s.useEffect)((function(){localStorage.setItem("USER_".concat(i),JSON.stringify(p))}),[p,i]);var u=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return(0,Q.jsxs)(S,{children:[(0,Q.jsx)(E,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"card logo"}),(0,Q.jsx)(Y,{src:j,alt:"background card"}),(0,Q.jsx)(y,{}),(0,Q.jsx)(P,{children:(0,Q.jsx)("img",{src:o,alt:"avatar",width:"62",height:"62"})}),(0,Q.jsxs)(B,{children:[(0,Q.jsx)("li",{children:e}),(0,Q.jsxs)("li",{children:[u(999*t)," tweets"]}),(0,Q.jsxs)("li",{children:[u(p?555*r+1:555*r)," ","followers"]})]}),(0,Q.jsx)(C,{style:{backgroundColor:p?"#5CD3A8":"#ebd8ff"},onClick:function(){d(!p)},children:p?"following":"follow"})]})},R=k.ZP.div(h||(h=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n"]))),O=k.ZP.ul(b||(b=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  max-width: 1200px;\n"]))),T=k.ZP.section(A||(A=(0,v.Z)(["\n  margin: 0 auto;\n  padding: 20px 0;\n  background: linear-gradient(to bottom right, #c7daeb, #8ab9e3);\n"]))),U=k.ZP.button(m||(m=(0,v.Z)(["\n  display: block;\n  margin: 0 auto;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #ffffff;\n  background-color: #1a3652;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: #0a2138;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),q=function(n){var e=n.users,t=n.cardsOnPage;return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(R,{children:(0,Q.jsx)(O,{children:e.slice(0,t).map((function(n){return(0,Q.jsx)(N,(0,Z.Z)({},n),n.id)}))})})})},I=t(237),L=t(854),D=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],o=e[1],c=(0,s.useState)(3),l=(0,a.Z)(c,2),p=l[0],d=l[1],u=(0,s.useState)(!1),x=(0,a.Z)(u,2),f=x[0],g=x[1],h=(0,s.useState)(!1),b=(0,a.Z)(h,2),A=b[0],m=b[1];(0,s.useEffect)((function(){if(null===t||void 0===t||!t.length){var n=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,w();case 4:e=n.sent,o(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),m(!0),console.log(n.t0);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[t]);return(0,Q.jsx)(Q.Fragment,{children:A?(0,Q.jsx)("h1",{children:"Something went wrong, try again later"}):(0,Q.jsxs)(T,{children:[(0,Q.jsx)(I.j,{}),f?(0,Q.jsx)(L.a,{}):(0,Q.jsx)(q,{users:t,cardsOnPage:p}),p<t.length?(0,Q.jsx)(U,{onClick:function(){d((function(n){return n+3}))},children:"Load More"}):null]})})}}}]);
//# sourceMappingURL=311.eac13dc3.chunk.js.map