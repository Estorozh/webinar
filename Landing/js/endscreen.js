(function(g){var window=this;var Z4=function(a,b,c){var d=b.wa();g.M(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.qc(c?c:"mqdefault.jpg");var f=b instanceof g.wC&&b.lengthSeconds?g.kN(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.wE(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.wC?b.ua:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.vj||g.YN("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c $TITLE",
{TITLE:b.title}),duration:f,url:b.ji(),is_live:l,is_list:k,is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.yE&&(d.playlist_length=b.getLength());a.update(d)},$4=function(a,b){g.S.call(this,{F:"div",
Y:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},a5=function(a){g.S.call(this,{F:"div",
Y:["ytp-upnext","ytp-player-content"],O:{"aria-label":"{{aria_label}}"},L:[{F:"div",I:"ytp-cued-thumbnail-overlay-image",O:{style:"{{background}}"}},{F:"span",I:"ytp-upnext-top",L:[{F:"span",I:"ytp-upnext-header",X:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},{F:"span",I:"ytp-upnext-title",X:"{{title}}"},{F:"span",I:"ytp-upnext-author",X:"{{author}}"}]},{F:"a",I:"ytp-upnext-autoplay-icon",O:{role:"button",href:"{{url}}","aria-label":"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e"},
L:[{F:"svg",O:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},L:[{F:"circle",I:"ytp-svg-autoplay-circle",O:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",I:"ytp-svg-autoplay-ring",O:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",I:"ytp-svg-fill",O:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",I:"ytp-upnext-bottom",
L:[{F:"span",I:"ytp-upnext-cancel"},{F:"span",I:"ytp-upnext-paused",X:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e."}]}]});this.D=null;var b=this.u["ytp-upnext-cancel"];this.D=new g.S({F:"button",Y:["ytp-upnext-cancel-button","ytp-button"],O:{tabindex:"0","aria-label":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},
X:"\u041e\u0442\u043c\u0435\u043d\u0430"});g.B(this,this.D);this.D.ga("click",this.mJ,this);this.D.o(b);this.w=a;this.N=this.u["ytp-svg-autoplay-ring"];this.H=this.G=this.B=this.C=null;this.J=new g.J(this.fm,5E3,this);g.B(this,this.J);this.K=0;this.M(this.u["ytp-upnext-autoplay-icon"],"click",this.WK);this.Vy();this.M(a,"autonavvisibility",this.Vy);this.M(a,"mdxnowautoplaying",this.oK);this.M(a,"mdxautoplaycanceled",this.pK);this.M(a,"mdxautoplayupnext",this.oB);3==this.w.getPresentingPlayerType()&&
(a=(a=g.oL(g.hL(this.w)))?a.KD():null)&&this.oB(a);g.M(this.element,"ytp-upnext-mobile",this.w.P().o)},b5=function(a,b){if(!a.B){g.Co("a11y-announce","\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 "+a.C.title);
a.K=(0,g.Sq)();a.B=new g.J((0,g.x)(a.kp,a,b),25);a.kp(b);var c=b||g.U(a.w.P().experiments,"autoplay_time")||1E4;a.w.ma("onAutonavCoundownStarted",c)}g.hn(a.element,"ytp-upnext-autoplay-paused")},d5=function(a){c5(a);
a.K=(0,g.Sq)();a.kp();g.L(a.element,"ytp-upnext-autoplay-paused")},c5=function(a){a.B&&(a.B.dispose(),a.B=null)},e5=function(a,b){b=void 0===b?!1:b;
if(g.T(a.w.P().experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.C.wa(),a.fm(),a.G=new Notification("\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",{body:c.title,icon:c.qc()}),a.H=a.M(a.G,"click",a.NK),a.J.start())}c5(a);a.w.nextVideo(!1,b)},Qpa=function(a){$4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.w=new g.S({F:"div",I:"ytp-subscribe-card",L:[{F:"img",I:"ytp-author-image",O:{src:b.Cd}},{F:"div",I:"ytp-subscribe-card-right",L:[{F:"div",I:"ytp-author-name",X:b.author},{F:"div",I:"html5-subscribe-button-container"}]}]});g.B(this,this.w);this.w.o(this.element);this.B=new g.IR("\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",null,"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443",null,!0,!1,b.Zf,b.subscribed,
"trailer-endscreen",null,null,a);g.B(this,this.B);this.B.o(this.w.u["html5-subscribe-button-container"]);this.hide()},f5=function(a){var b=a.P(),c=g.Qs||g.nh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.S.call(this,{F:"a",Y:e,O:{href:"{{url}}",target:d?b.w:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},L:[{F:"div",I:"ytp-videowall-still-image",O:{style:"{{background}}"}},{F:"span",I:"ytp-videowall-still-info",L:[{F:"span",I:"ytp-videowall-still-info-bg",L:[{F:"span",I:"ytp-videowall-still-info-content",O:c,L:[{F:"span",I:"ytp-videowall-still-info-title",X:"{{title}}"},{F:"span",I:"ytp-videowall-still-info-author",
X:"{{author_and_views}}"},{F:"span",I:"ytp-videowall-still-info-live",X:"\u0412 \u044d\u0444\u0438\u0440\u0435"},{F:"span",I:"ytp-videowall-still-info-duration",X:"{{duration}}"}]}]}]},{F:"span",Y:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],L:[{F:"span",I:"ytp-videowall-still-listlabel-icon"},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",{F:"span",I:"ytp-videowall-still-listlabel-length",L:[" (",{F:"span",X:"{{playlist_length}}"},")"]}]},{F:"span",Y:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],L:[{F:"span",I:"ytp-videowall-still-listlabel-mix-icon"},"\u041c\u0438\u043a\u0441",{F:"span",I:"ytp-videowall-still-listlabel-length",X:" (50+)"}]}]});this.D=d;this.w=a;this.B=null;this.C=new g.P(this);g.B(this,this.C);this.ga("click",this.H);this.ga("keypress",this.J);this.C.M(a,"videodatachange",this.G);g.IL(a,this.element,this);this.G()},Rpa=function(a){var b=a.B.wa().videoId,c=a.B.getPlaylistId();
(g.UU(a.w.app,b,a.B.Gb,c,void 0,void 0)||a.w.fa("web_player_endscreen_double_log_fix_killswitch"))&&g.KL(a.w,a.element)},g5=function(a){$4.call(this,a,"videowall-endscreen");
this.H=a;this.G=0;this.B=[];this.J=this.T=this.D=null;this.K=this.W=!1;this.V=null;this.C=new g.P(this);g.B(this,this.C);this.N=new g.J(g.Oa(g.L,this.element,"ytp-show-tiles"),0);g.B(this,this.N);var b=new g.S({F:"button",Y:["ytp-button","ytp-endscreen-previous"],O:{"aria-label":"\u041d\u0430\u0437\u0430\u0434"},L:[g.sN()]});g.B(this,b);b.o(this.element);b.ga("click",this.uG,this);this.S=new g.vu({F:"div",I:"ytp-endscreen-content"});g.B(this,this.S);this.S.o(this.element);b=new g.S({F:"button",Y:["ytp-button",
"ytp-endscreen-next"],O:{"aria-label":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},L:[g.tN()]});g.B(this,b);b.o(this.element);b.ga("click",this.tG,this);this.w=new a5(a);g.B(this,this.w);g.FL(this.player,this.w.element,4);this.hide()},h5=function(a){return g.GL(a.player)&&a.Nu()&&!a.J},Spa=function(a,b){return(0,g.G)(b.suggestions,function(c){c=g.ZN(a.H.P(),c);
g.B(a,c);return c})},i5=function(a){var b=a.Ar();
b!=a.W&&(a.W=b,a.player.R("autonavvisibility"))},j5=function(a){g.cR.call(this,a);
this.o=null;this.u=new g.P(this);g.B(this,this.u);this.A=a.P();Tpa(a)?this.o=new g5(this.player):this.A.Ja?this.o=new Qpa(this.player):this.o=new $4(this.player);g.B(this,this.o);g.FL(this.player,this.o.element,4);this.oA();this.u.M(a,"videodatachange",this.oA,this);this.u.M(a,g.vE("endscreen"),this.zF,this);this.u.M(a,"crx_endscreen",this.AF,this)},Tpa=function(a){a=a.P();
return a.oa&&!a.Ja};
g.r($4,g.S);$4.prototype.create=function(){this.created=!0};
$4.prototype.destroy=function(){this.created=!1};
$4.prototype.Nu=function(){return!1};
$4.prototype.Ar=function(){return!1};g.r(a5,g.S);g.h=a5.prototype;g.h.fm=function(){this.G&&(this.J.stop(),this.Ua(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.Vy=function(){g.Au(this,g.iL(this.w))};
g.h.NK=function(){window.focus();this.fm()};
g.h.hide=function(){g.S.prototype.hide.call(this)};
g.h.kp=function(a){a=a||g.U(this.w.P().experiments,"autoplay_time")||1E4;var b=Math.min((0,g.Sq)()-this.K,a);a=Math.min(b/a,1);this.N.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.w.getPresentingPlayerType()?e5(this,!0):this.B&&this.B.start()};
g.h.WK=function(a){!g.Ud(this.D.element,g.ir(a))&&g.fO(a,this.w)&&e5(this)};
g.h.mJ=function(){g.kL(this.w,!0)};
g.h.oK=function(a){this.w.getPresentingPlayerType();this.show();b5(this,a)};
g.h.oB=function(a){this.w.getPresentingPlayerType();this.C&&this.C.wa().videoId==a.wa().videoId||(this.C=a,Z4(this,a,"hqdefault.jpg"))};
g.h.pK=function(){this.w.getPresentingPlayerType();c5(this);this.hide()};
g.h.Z=function(){c5(this);this.fm();g.S.prototype.Z.call(this)};g.r(Qpa,$4);g.r(f5,g.S);f5.prototype.H=function(a){g.fO(a,this.w,this.D,this.B.Gb||void 0)&&Rpa(this)};
f5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.nr(a)||(Rpa(this),g.mr(a))}};
f5.prototype.G=function(){var a=this.w.getVideoData(),b=this.w.P();this.D=a.gc?!1:b.u};g.r(g5,$4);g.h=g5.prototype;g.h.create=function(){$4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.D=Spa(this,a),this.T=a);this.Vf();this.C.M(this.player,"appresize",this.Vf);this.C.M(this.player,"onVideoAreaChange",this.Vf);this.C.M(this.player,"videodatachange",this.vG);this.C.M(this.player,"autonavchange",this.Br);this.C.M(this.player,"autonavcancel",this.sG);a=this.T.autonavState;a!=this.V&&this.Br(a);this.C.M(this.element,"transitionend",this.nM)};
g.h.destroy=function(){g.Ys(this.C);g.ee(this.B);this.B=[];this.D=null;$4.prototype.destroy.call(this);g.hn(this.element,"ytp-show-tiles");this.N.stop();this.V=this.T.autonavState};
g.h.Nu=function(){return 1!=this.T.autonavState};
g.h.show=function(){$4.prototype.show.call(this);g.hn(this.element,"ytp-show-tiles");this.player.P().o?g.Ym(this.N):this.N.start();(this.K||this.J&&this.J!=this.T.clientPlaybackNonce)&&g.kL(this.player,!1);h5(this)?(i5(this),2==this.T.autonavState?g.T(this.player.P().experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?e5(this.w,!0):b5(this.w):3==this.T.autonavState&&d5(this.w)):(g.kL(this.player,!0),i5(this))};
g.h.hide=function(){$4.prototype.hide.call(this);d5(this.w);i5(this)};
g.h.nM=function(a){g.ir(a)==this.element&&this.Vf()};
g.h.Vf=function(){if(this.D&&this.D.length){g.L(this.element,"ytp-endscreen-paginate");var a=g.wL(this.H,!0,this.H.isFullscreen()),b=g.wD(this.H);b&&(b=b.Xb()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.D.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,u=b<=f-2&&n>=t*m,z=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&z)n-=q*m,e+=2;else if(u)n-=t*m,b+=2;else if(z)n-=
q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.kd(a.width/m||1,1,1.21);n*=g.kd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.S.element;g.Dh(a,m,n);g.kh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.w;f=this.D[0];c.C=f;Z4(c,f,"hqdefault.jpg");g.M(this.element,"ytp-endscreen-takeover",h5(this));i5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=
c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),q=g.ld(q+this.G,l),0!=t){u=this.B[c];u||(u=new f5(this.player),this.B[c]=u,a.appendChild(u.element));z=Math.floor(n*k/e);var C=Math.floor(m*f/b),D=Math.floor(n*(k+t)/e)-z-4,H=Math.floor(m*(f+t)/b)-C-4;g.sh(u.element,C,z);g.Dh(u.element,H,D);g.kh(u.element,"transitionDelay",(k+f)/20+"s");g.M(u.element,"ytp-videowall-still-mini",1==t);g.M(u.element,"ytp-videowall-still-large",2<t);t=u;q=this.D[q];t.B!=q&&(t.B=q,Z4(t,q,g.fn(t.element,
"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg"),(q=(q=q.Gb)&&q.itct)&&g.JL(t.w,t.element,q));c++}g.M(this.element,"ytp-endscreen-paginate",c<l);for(b=this.B.length-1;b>=c;b--)e=this.B[b],g.Qd(e.element),g.de(e);this.B.length=c}};
g.h.vG=function(){var a=this.player.getVideoData();this.T!=a&&(this.G=0,this.D=Spa(this,a),this.T=a,this.Vf())};
g.h.tG=function(){this.G+=this.B.length;this.Vf()};
g.h.uG=function(){this.G-=this.B.length;this.Vf()};
g.h.QE=function(){return!!this.w.B};
g.h.Br=function(a){1==a?(this.K=!1,this.J=this.T.clientPlaybackNonce,c5(this.w),this.Ha()&&this.Vf()):(this.K=!0,this.Ha()&&h5(this)&&(2==a?b5(this.w):3==a&&d5(this.w)))};
g.h.sG=function(a){if(a){for(a=0;a<this.B.length;a++)g.LL(this.H,this.B[a].element,!0);this.Br(1)}else this.J=null,this.K=!1;this.Vf()};
g.h.Ar=function(){return this.Ha()&&h5(this)};g.r(j5,g.cR);g.h=j5.prototype;g.h.xx=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!Tpa(this.player)||b;var c=a.Vh||g.uy(a.La),d=g.oU(this.player.app);a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.wx=function(){return this.o.Ar()};
g.h.IE=function(){return this.wx()?this.o.QE():!1};
g.h.Z=function(){g.xS(this.player.app,"endscreen",void 0);g.cR.prototype.Z.call(this)};
g.h.load=function(){g.cR.prototype.load.call(this);this.o.show()};
g.h.unload=function(){g.cR.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.zF=function(a){this.xx()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.AF=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.oA=function(){g.xS(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.sE(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});g.B(this,a);var b=new g.sE(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.B(this,b);g.BL(this.player,[a,b])};g.sR.endscreen=j5;})(_yt_player);