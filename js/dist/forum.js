(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/app"];var r=o.n(n);const s=flarum.core.compat["forum/components/LogInButtons"];var a=o.n(s);const c=flarum.core.compat["forum/components/LogInButton"];var u=o.n(c);r().initializers.add("vkarchevskyi-fof-passport",(function(){(0,e.extend)(a().prototype,"items",(function(o){o.add("vkarchevskyi-fof-passport",u().component({className:"Button LogInButton--passport",icon:r().forum.attribute("vkarchevskyi-fof-passport.loginIcon"),path:"/auth/passport"},r().forum.attribute("vkarchevskyi-fof-passport.loginTitle")))}))}));const p=flarum.core.compat["common/components/EditUserModal"];var i=o.n(p);const m=flarum.core.compat["forum/components/HeaderSecondary"];var l=o.n(m);const f=flarum.core.compat["forum/components/IndexPage"];var d=o.n(f);const v=flarum.core.compat["forum/components/DiscussionComposer"];var y=o.n(v);const g=flarum.core.compat["forum/components/SignUpModal"];var k=o.n(g);const h=flarum.core.compat["forum/components/LogInModal"];var B=o.n(h);(0,e.override)(l().prototype,"items",(function(o){var t=o();return t.has("logIn")&&t.setContent("logIn",u().component({className:"LinksButton Button Button--link LogInButton--passport",path:"/auth/passport"},"Log In")),t.has("signUp")&&t.setContent("signUp",u().component({className:"LinksButton Button Button--link SignUpButton--passport",path:"/auth/passport?to_registration=1"},"Sign Up")),t})),(0,e.override)(i().prototype,"fields",(function(o){var t=o();return r().session.user.isAdmin()||t.remove("username"),t})),(0,e.override)(d().prototype,"newDiscussionAction",(function(){return new Promise((function(o,t){return r().session.user?(r().composer.load(y(),{user:r().session.user}),r().composer.show(),o(r().composer)):(document.querySelector(".LogInButton--passport").click(),t())}))})),(0,e.extend)(k().prototype,"oninit",(function(){"nickname"===r().forum.attribute("displayNameDriver")&&(this.nickname=Stream(this.attrs.nickname||""))})),(0,e.extend)(k().prototype,"oncreate",(function(){document.querySelector('.Button.SignUpModal form button[type="submit"]').click()})),(0,e.override)(B().prototype,"oninit",(function(){document.querySelector(".Button.LogInButton--passport").click(),document.querySelector("body").style.display="block",document.querySelector("#modal").remove()}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map