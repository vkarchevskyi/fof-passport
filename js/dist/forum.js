(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/app"];var r=o.n(n);const a=flarum.core.compat["forum/components/LogInButtons"];var p=o.n(a);const s=flarum.core.compat["forum/components/LogInButton"];var c=o.n(s);r().initializers.add("vkarchevskyi-fof-passport",(function(){(0,e.extend)(p().prototype,"items",(function(o){o.add("vkarchevskyi-fof-passport",c().component({className:"Button LogInButton--passport",icon:r().forum.attribute("vkarchevskyi-fof-passport.loginIcon"),path:"/auth/passport"},r().forum.attribute("vkarchevskyi-fof-passport.loginTitle")))}))})),flarum.core.compat["forum/components/HeaderPrimary"];const u=flarum.core.compat["forum/components/HeaderSecondary"];var m=o.n(u);const i=flarum.core.compat["forum/components/IndexPage"];var l=o.n(i);flarum.core.compat["common/components/Link"];const f=flarum.core.compat["forum/components/DiscussionComposer"];var d=o.n(f);const y=flarum.core.compat["forum/components/SignUpModal"];var v=o.n(y);const g=flarum.core.compat["forum/components/LogInModal"];var S=o.n(g);(0,e.override)(m().prototype,"items",(function(o){var t=o();return t.has("logIn")&&t.setContent("logIn",c().component({className:"Button LogInButton--passport",path:"/auth/passport"},"Log In")),t.has("signUp")&&t.setContent("signUp",c().component({className:"Button SignUpButton--passport",path:"/auth/passport?to_registration=1"},"Sign Up")),t})),(0,e.override)(l().prototype,"newDiscussionAction",(function(){return new Promise((function(o,t){return app.session.user?(app.composer.load(d(),{user:app.session.user}),app.composer.show(),o(app.composer)):(document.querySelector(".Button.LogInButton--passport").click(),t())}))})),(0,e.extend)(v().prototype,"oncreate",(function(){document.querySelector('.SignUpModal form button[type="submit"]').click()})),(0,e.override)(S().prototype,"oninit",(function(){document.querySelector(".Button.LogInButton--passport").click(),document.querySelector("body").style.display="block",document.querySelector("#modal").remove()}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map