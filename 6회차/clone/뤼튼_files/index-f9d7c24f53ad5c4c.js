(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{77837:function(n,t,e){var o=e(93702),r=e(80231),i=e(29153),c=Math.max,a=Math.min;n.exports=function(n,t,e){var u,s,d,l,f,g,h=0,p=!1,w=!1,m=!0;if("function"!=typeof n)throw TypeError("Expected a function");function _(t){var e=u,o=s;return u=s=void 0,h=t,l=n.apply(o,e)}function x(n){var e=n-g,o=n-h;return void 0===g||e>=t||e<0||w&&o>=d}function v(){var n,e,o,i=r();if(x(i))return b(i);f=setTimeout(v,(n=i-g,e=i-h,o=t-n,w?a(o,d-e):o))}function b(n){return(f=void 0,m&&u)?_(n):(u=s=void 0,l)}function j(){var n,e=r(),o=x(e);if(u=arguments,s=this,g=e,o){if(void 0===f)return h=n=g,f=setTimeout(v,t),p?_(n):l;if(w)return clearTimeout(f),f=setTimeout(v,t),_(g)}return void 0===f&&(f=setTimeout(v,t)),l}return t=i(t)||0,o(e)&&(p=!!e.leading,d=(w="maxWait"in e)?c(i(e.maxWait)||0,t):d,m="trailing"in e?!!e.trailing:m),j.cancel=function(){void 0!==f&&clearTimeout(f),h=0,u=g=s=f=void 0},j.flush=function(){return void 0===f?l:b(r())},j}},80231:function(n,t,e){var o=e(83250);n.exports=function(){return o.Date.now()}},8287:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(62673)}])},62673:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSP:function(){return V},default:function(){return W}});var o=e(43727),r=e(97458),i=e(52983),c=e(27860),a=e.n(c),u=e(33919),s=e.n(u),d=e(8996),l=e(89360),f=e.n(l),g=e(24009),h=e(93935),p=e(87511),w=e(49069),m=e(32292);function _(n){let{children:t}=n,e=(0,w.kY)();return(0,r.jsxs)(m.KS,{swrConfig:e,children:[t," "]})}var x=e(60264),v=e(96516),b=e(84749),j=e(59335),C=e(76001),S=e(66105),I=e(37080);function y(){let n=(0,o._)(["\n  min-height: 16px;\n"]);return y=function(){return n},n}function E(){let n=(0,o._)(["\n  gap: 13px;\n\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]);return E=function(){return n},n}function A(){let n=(0,o._)(["\n  width: 55px;\n  height: 55px;\n  border-radius: 100%;\n  cursor: pointer;\n"]);return A=function(){return n},n}function L(){let n=(0,o._)(["\n  ",";\n"]);return L=function(){return n},n}function O(){let n=(0,o._)(["\n  padding-top: 40px;\n  gap: 10.5px;\n  align-items: center;\n"]);return O=function(){return n},n}function P(){let n=(0,o._)(["\n  ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return P=function(){return n},n}function R(){let n=(0,o._)(["\n  display: flex;\n  width: 1px;\n  height: 14px;\n  background-color: ",";\n"]);return R=function(){return n},n}function k(){let n=(0,o._)(["\n            gap: 8px;\n          "]);return k=function(){return n},n}function T(){let n=(0,o._)(["\n                ",";\n              "]);return T=function(){return n},n}function D(){let n=(0,o._)(["\n                ",";\n              "]);return D=function(){return n},n}function F(){let n=(0,o._)(["\n              ",";\n            "]);return F=function(){return n},n}let G=n=>{let{position:t="modal"}=n,{handleCloseLoginDialog:e}=(0,h.tF5)(),{handleGoogleLoginSuccess:o,handleKakaoLoginSuccess:i,handleNaverLoginSuccess:c,handleAppleLoginSuccess:a,handleGoogleLoginFailure:u,handleNaverLoginFailure:s,handleKakaoLoginFailure:d,handleAppleLoginFailure:l}=(0,S.ob)({position:t}),{collectEvent:f}=(0,h.zX9)(),g=(0,b.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(N,{children:["SNS 또는 ","이메일로 로그인/회원가입"]}),(0,r.jsx)(z,{}),(0,r.jsxs)(Y,{children:[(0,r.jsx)(K,{style:{transform:"scale(1.375) translate(6px, 7px)"},children:(0,r.jsx)(I.Z.Google,{size:"large",type:"icon",shape:"circle",onSuccess:o,onError:u,width:"300px"})}),(0,r.jsx)(K,{children:(0,r.jsx)(I.Z.NaverRound,{onSuccess:c,onFailure:s,callbackUrl:"https://wrtn.ai/app/login/"})}),(0,r.jsx)(K,{children:(0,r.jsx)(I.Z.KakaoRound,{onSuccess:i,onFail:d})}),(0,r.jsx)(K,{children:(0,r.jsx)(I.Z.Apple,{isDefaultStyle:!1,onSuccess:a,onFail:l})}),(0,r.jsx)(K,{onClick:()=>{f("click_start_platform_btn",{platform:"wrtn",position:t}),e(),g.push({pathname:C.Hb.login.local.index(),query:g.query})},children:(0,r.jsx)(p.snH,{})})]}),!1,(0,r.jsxs)(q,{row:!0,children:[(0,r.jsx)(U,{href:"https://wrtn.ai/terms",children:"이용약관"}),(0,r.jsx)(M,{}),(0,r.jsx)(U,{href:"https://wrtn.ai/privacy",children:"개인정보처리방침"})]})]})},z=f().div.withConfig({componentId:"sc-7037ebd-0"})(y()),Y=f()(p.A09).withConfig({componentId:"sc-7037ebd-1"})(E()),K=f().div.withConfig({componentId:"sc-7037ebd-2"})(A()),N=f().div.withConfig({componentId:"sc-7037ebd-3"})(L(),(0,p.f3b)({weight:500,size:"12px",height:"100%",color:p.O9T.GRAY_500})),q=f()(p.A09).withConfig({componentId:"sc-7037ebd-4"})(O()),U=f().a.withConfig({componentId:"sc-7037ebd-5"})(P(),(0,p.f3b)({weight:500,size:"14px",height:"100%",color:p.O9T.GRAY_500})),M=f().div.withConfig({componentId:"sc-7037ebd-6"})(R(),p.O9T.GRAY_100);f()(j.xu).withConfig({componentId:"sc-7037ebd-7"})(k()),f()(j.Dr).withConfig({componentId:"sc-7037ebd-8"})(T(),(0,p.bVO)("160-12-bold")),f()(j.Dr).withConfig({componentId:"sc-7037ebd-9"})(D(),(0,p.bVO)("160-12-bold")),f()(j.Dr).withConfig({componentId:"sc-7037ebd-10"})(F(),(0,p.bVO)("160-12-reg"));var Z=e(49258);let B=()=>Z.ApiInstance.BE.post("/anonymous"),Q=n=>{let t=a()(n),e=a()();return t.year()===e.year()&&t.month()+1===e.month()};function X(){let n=(0,o._)(["\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n"]);return X=function(){return n},n}function $(){let n=(0,o._)(["\n  width: 100%;\n  height: 100%;\n"]);return $=function(){return n},n}e(13483);let H=()=>{let{data:n}=(0,h.pgb)(),{refreshChatListMutation:t}=(0,g.hY)({LoadingIndicator:{show:()=>{},hide:()=>{}}}),e=(0,d.useSetRecoilState)(h.Ms9),{collectEvent:o}=(0,h.zX9)();return i.useEffect(()=>{window.sessionStorage.removeItem("cafe24_code"),window.sessionStorage.removeItem("nhn_code"),window.sessionStorage.removeItem("login_app"),window.sessionStorage.removeItem("redirect_url");let n=new URLSearchParams(window.location.search),t=n.get("code"),e=n.get("funnel"),o=n.get("inviter");"nhn_commerce"!==e&&t&&window.sessionStorage.setItem("cafe24_code",t),"nhn_commerce"===e&&t&&window.sessionStorage.setItem("nhn_code",t);let r=n.get("utm_campaign"),i=n.get("utm_source");r&&window.sessionStorage.setItem("utm_campaign",r),i&&window.sessionStorage.setItem("utm_source",i),o&&window.sessionStorage.setItem("plugin_invite",o),window.sessionStorage.removeItem("pluginPath")},[]),i.useEffect(()=>{o("view_main_page",{model_name:"gpt4v"})},[]),i.useEffect(()=>{(0,h.tv0)("non_login_generation")&&n&&((0,h.ujr)("non_login_generation"),(async()=>{await B(),t()})())},[n]),i.useEffect(()=>{let t;if(!n)return;let o=Q(new Date(n.createdAt));if(o){switch(a()().date()){case 1:t="EventDialog";break;case 2:case 3:t="EventBanner";break;default:t=null}e(t)}},[n]),(0,r.jsx)(J,{children:(0,r.jsx)(nn,{children:(0,r.jsx)(m.en,{renderAuth:()=>(0,r.jsx)(G,{position:"main"})})})})};H.getLayout=n=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("meta",{property:"og:title",content:"wrtn"}),(0,r.jsx)("meta",{property:"og:site_name",content:"뤼튼"}),(0,r.jsx)("meta",{property:"og:url",content:"https://wrtn.ai"}),(0,r.jsx)("meta",{property:"og:description",content:"모두를 위한 AI 포털 뤼튼.  AI 채팅부터 이미지 생성, 나만의 AI 제작까지, 언제 어디서나 생성형 AI와 함께하세요."}),(0,r.jsx)("meta",{property:"og:type",content:""}),(0,r.jsx)("meta",{property:"og:image",content:"https://ifh.cc/g/wJ0DMC.png"})]}),(0,r.jsx)(v.Z,{...n.props,children:(0,r.jsx)(_,{...n.props,children:(0,r.jsx)(x.sm,{children:n})})})]});var V=!0,W=H;let J=f()(p.A09).withConfig({componentId:"sc-6b8ec3e1-0"})(X()),nn=f().div.withConfig({componentId:"sc-6b8ec3e1-1"})($())},96516:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var o=e(97458),r=e(70903),i=e(27827),c=e(72124),a=e(20616);function u(n){let{children:t,...e}=n;return(0,o.jsx)(r.X,{...n,children:(0,o.jsx)(c.r,{children:(0,o.jsx)(i.i,{children:(0,o.jsx)(a.B,{...e,children:t})})})})}},59335:function(n,t,e){"use strict";e.d(t,{xu:function(){return s},zx:function(){return w},Dr:function(){return b}});var o=e(43727),r=e(89360),i=e.n(r),c=e(13729);function a(){let n=(0,o._)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return a=function(){return n},n}let u=i().div.withConfig({componentId:"sc-db685e96-0"})(a(),c.Dh,c.bK,c.$_,c.AF,c.Cg,c.cp,c.FK,c.GQ,c.Oq,n=>{let{css:t}=n;return t});var s=u,d=e(97458),l=e(87511);function f(){let n=(0,o._)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  transition: .35s;\n  cursor: pointer;\n  ","\n"]);return f=function(){return n},n}function g(){let n=(0,o._)(["\n  outline: 1px solid ",";\n  color: ",";\n  /* :hover {\n    background: white radial-gradient(circle, transparent 1%, white 1%)\n      center/15000%;\n  }\n\n  :active {\n    background-color: ",";\n    background-size: 100%;\n    transition: background 0s;\n  } */\n"]);return g=function(){return n},n}function h(){let n=(0,o._)(["\n  color: ",";\n  background: ",";\n\n  :hover {\n    cursor: pointer;\n    background: linear-gradient(\n        0deg,\n        rgba(255, 255, 255, 0.2),\n        rgba(255, 255, 255, 0.2)\n      ),\n      #6446ff;\n    box-shadow: 4px 4px 15px rgba(79, 68, 195, 0.15);\n  }\n\n  :disabled {\n    background: ",";\n  }\n"]);return h=function(){return n},n}let p=i().button.withConfig({componentId:"sc-9693c0a2-0"})(f(),c.Dh,c.bK,c.$_,c.AF,c.Cg,c.cp,c.FK,c.GQ,c.Oq,n=>{let{css:t}=n;return t});function w(n){let{...t}=n;return(0,d.jsx)(p,{background:"none",...t})}function m(){let n=(0,o._)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  width: 100%;\n  appearance: none;\n  border: none;\n\n  &:focus {\n    border: 1px solid #3784f6;\n  }\n  &::placeholder {\n    color: ",";\n  }\n"]);return m=function(){return n},n}function _(){let n=(0,o._)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n ","\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return _=function(){return n},n}function x(){let n=(0,o._)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return x=function(){return n},n}i()(w).withConfig({componentId:"sc-9693c0a2-1"})(g(),l.O9T.PURPLE_500_PRIMARY,l.O9T.PURPLE_500_PRIMARY,l.O9T.GRAY_300),i()(w).withConfig({componentId:"sc-9693c0a2-2"})(h(),l.O9T.WHITE,l.O9T.PURPLE_500_PRIMARY,l.O9T.GRAY_300),i().input.withConfig({componentId:"sc-a917fdea-0"})(m(),c.Dh,c.bK,c.$_,c.AF,c.Cg,c.cp,c.GQ,c.Oq,n=>{let{css:t}=n;return t},l.O9T.GRAY_300),i().li.withConfig({componentId:"sc-3729738-0"})(_(),c.Dh,c.bK,c.$_,c.AF,c.Cg,c.cp,c.FK,c.GQ,c.Oq,n=>{let{css:t}=n;return t},l.O9T.BLUE_300_BG);let v=i().span.withConfig({componentId:"sc-a225e0b4-0"})(x(),c.Dh,c.bK,c.$_,c.AF,c.Cg,c.cp,c.GQ,c.Oq,n=>{let{css:t}=n;return t});var b=v},82435:function(n,t,e){"use strict";n.exports=new Promise(function(n,t){var o,r,i=new URL("https://services.wow.wrtn.ai/app/chat/remoteEntry.js");i.searchParams.set("t",Date.now());var c=Error();return(window.remoteLoading||(window.remoteLoading={}),window.remoteLoading.toolChat)?n(window.remoteLoading.toolChat):(window.remoteLoading.toolChat=new Promise(function(n,t){o=n,r=t}),void 0!==window.toolChat)?(o(window.toolChat),n(window.toolChat)):void e.l(i.href,function(e){if(void 0!==window.toolChat)return o(window.toolChat),n(window.toolChat);var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading script failed.\n("+i+": "+a+")",c.name="ScriptExternalLoadError",c.type=i,c.request=a,r(c),t(c)},"toolChat")}).then(function(){let n={get:toolChat.get,init:function(n,t){try{toolChat.init(new Proxy(n,{get:(n,t)=>(n[t]&&Object.values(n[t]).forEach(function(n){"_N_E"===n.from&&(n.loaded=1)}),n[t]),set:(n,t,e,o)=>n[t]?n[t]:(n[t]=e,!0)}),t)}catch(n){}toolChat.__initialized=!0}};return toolChat.__initialized||n.init(e.S.default),n})},1360:function(n,t,e){"use strict";n.exports=new Promise(function(n,t){var o,r,i=new URL("https://services.wow.wrtn.ai/app/tool/remoteEntry.js");i.searchParams.set("t",Date.now());var c=Error();return(window.remoteLoading||(window.remoteLoading={}),window.remoteLoading.toolSingle)?n(window.remoteLoading.toolSingle):(window.remoteLoading.toolSingle=new Promise(function(n,t){o=n,r=t}),void 0!==window.toolSingle)?(o(window.toolSingle),n(window.toolSingle)):void e.l(i.href,function(e){if(void 0!==window.toolSingle)return o(window.toolSingle),n(window.toolSingle);var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading script failed.\n("+i+": "+a+")",c.name="ScriptExternalLoadError",c.type=i,c.request=a,r(c),t(c)},"toolSingle")}).then(function(){let n={get:toolSingle.get,init:function(n,t){try{toolSingle.init(new Proxy(n,{get:(n,t)=>(n[t]&&Object.values(n[t]).forEach(function(n){"_N_E"===n.from&&(n.loaded=1)}),n[t]),set:(n,t,e,o)=>n[t]?n[t]:(n[t]=e,!0)}),t)}catch(n){}toolSingle.__initialized=!0}};return toolSingle.__initialized||n.init(e.S.default),n})}},function(n){n.O(0,[9452,741,473,5736,1278,2081,7511,3350,6522,898,3154,7827,1506,9774,2888,179],function(){return n(n.s=8287)}),_N_E=n.O()}]);