(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/app"];var r=o.n(n);const s=flarum.core.compat["forum/components/LogInButtons"];var a=o.n(s);const i=flarum.core.compat["forum/components/LogInButton"];var c=o.n(i);const u=flarum.core.compat["forum/components/HeaderSecondary"];var p=o.n(u);const m=flarum.core.compat["common/components/EditUserModal"];var l=o.n(m);const d=flarum.core.compat["forum/components/IndexPage"];var f=o.n(d);const v=flarum.core.compat["forum/components/DiscussionComposer"];var y=o.n(v);const g=flarum.core.compat["forum/components/SignUpModal"];var h=o.n(g);const b=flarum.core.compat["common/utils/Stream"];var k=o.n(b);const S=flarum.core.compat["forum/components/LogInModal"];var B=o.n(S);r().initializers.add("vkarchevskyi-fof-passport",(function(){(0,e.extend)(a().prototype,"items",(function(o){o.add("vkarchevskyi-fof-passport",c().component({className:"Button LogInButton--passport",icon:r().forum.attribute("vkarchevskyi-fof-passport.loginIcon"),path:"/auth/passport"},r().forum.attribute("vkarchevskyi-fof-passport.loginTitle")))})),(0,e.override)(p().prototype,"items",(function(o){var t=o();return t.has("logIn")&&t.setContent("logIn",c().component({className:"LinksButton Button Button--link LogInButton--passport",path:"/auth/passport"},"Log In")),t.has("signUp")&&t.setContent("signUp",c().component({className:"LinksButton Button Button--link SignUpButton--passport",path:"/auth/passport?to_registration=1"},"Sign Up")),t})),(0,e.override)(l().prototype,"fields",(function(o){var t=o();return r().session.user.isAdmin()||t.remove("username"),t})),(0,e.override)(f().prototype,"newDiscussionAction",(function(){return new Promise((function(o,t){return r().session.user?(r().composer.load(y(),{user:r().session.user}),r().composer.show(),o(r().composer)):(document.querySelector(".LogInButton--passport").click(),t())}))})),(0,e.override)(h().prototype,"oninit",(function(o,t){o(t),"nickname"===r().forum.attribute("displayNameDriver")&&(this.originalNickname=k()(this.attrs.nickname||""))})),(0,e.extend)(h().prototype,"oncreate",(function(){document.querySelector('.SignUpModal form button[type="submit"]').click()})),(0,e.override)(h().prototype,"onsubmit",(function(o,t){t.preventDefault(),this.loading=!0;var e=this.submitData();e.nickname=this.originalNickname(),r().request({url:r().forum.attribute("baseUrl")+"/register",method:"POST",body:e,errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))})),(0,e.override)(B().prototype,"oninit",(function(){document.querySelector(".Button.LogInButton--passport").click(),document.querySelector("body").style.display="block",document.querySelector("#modal").remove()}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map