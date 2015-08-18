angular.module("phoneApp",["ionic","DelegateEvents"]).config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("forum",{"abstract":!0,url:"/forum"}).state("forum.home",{url:"/index.htm",templateUrl:"home/tp/index.html",controller:"tDefault"}).state("forum.start",{url:"/start.htm",templateUrl:"home/tp/start.html",controller:"tStart"}).state("forum.entry",{url:"/entry.htm",templateUrl:"entry/tp/entry.html",controller:"tEntry"}).state("forum.login",{url:"/login.htm",templateUrl:"entry/tp/login.html",controller:"tLogin"}).state("forum.login-forget",{url:"/login/forget.htm",templateUrl:"entry/tp/forget.html",controller:"tLoginForget"}).state("forum.reg-create",{url:"/reg/create.htm",templateUrl:"entry/tp/reg_create.html",controller:"tRegCreate"}).state("forum.reg-account",{url:"/reg/account.htm",templateUrl:"entry/tp/reg_account.html",controller:"tRegAccount"}).state("forum.reg-vcode",{url:"/reg/vcode/:phone",templateUrl:"entry/tp/reg_vcode.html",controller:"tRegVcode"}).state("forum.reg-done",{url:"/reg/done.htm",templateUrl:"entry/tp/reg_done.html",controller:"tRegDone"}).state("forum.reg-column",{url:"/reg/column.htm",templateUrl:"entry/tp/reg_take_column.html",controller:"tRegColumn"}).state("forum.reg-people",{url:"/reg/people.htm",templateUrl:"entry/tp/reg_focus_people.html",controller:"tRegPeople"}).state("forum.find",{url:"/find.htm",templateUrl:"forum/tp/find.html",controller:"tFindIndex"}).state("forum.like",{url:"/like.htm",templateUrl:"forum/tp/like.html",controller:"tFindLike"}).state("forum.photo-edit",{url:"/photo/edit.htm",templateUrl:"forum/tp/photo.html",controller:"tPhotoEdit"}).state("forum.photo-title",{url:"/photo/title.htm?type",templateUrl:"forum/tp/photo_title.html",controller:"tPhotoTitle"}).state("forum.photo-cate",{url:"/photo/cate.htm?id",templateUrl:"forum/tp/photo_cate.html",controller:"tPhotoCate"}).state("forum.club-hot",{url:"/club/hot.htm",templateUrl:"forum/tp/club_hot.html",controller:"tClubHot"}).state("forum.club-list",{url:"/club/list.htm",templateUrl:"forum/tp/club_list.html",controller:"tClubList"}).state("forum.club-detail",{url:"/club/detail-{id}.htm",templateUrl:"forum/tp/club_detail.html",controller:"tClubDetail"}).state("forum.club-ranking",{url:"/club/ranking-{id}.htm",templateUrl:"forum/tp/club_ranking.html",controller:"tClubRanking"}).state("forum.activity-list",{url:"/activity/list.htm",templateUrl:"forum/tp/activity_list.html",controller:"tActivityList"}).state("forum.activity-detail",{url:"/activity/detail-{type}-{id}.htm",templateUrl:"forum/tp/activity_detail.html",controller:"tActivityDetail"}).state("forum.subject-list",{url:"/subject/list.htm",templateUrl:"forum/tp/subject_list.html",controller:"tSubjectList"}).state("forum.subject-detail",{url:"/subject/detail-{id}.htm",templateUrl:"forum/tp/subject_detail.html",controller:"tSubjectDetail"}).state("forum.cate",{url:"/cate/list-{id}.htm",templateUrl:"forum/tp/cate_list.html",controller:"tCateList"}).state("forum.detail",{url:"/thread-{id}.htm",templateUrl:"forum/tp/article_detail.html",controller:"tArticleDetail"}).state("forum.report",{url:"/report-{id}.htm?title",templateUrl:"forum/tp/report.html",controller:"tReport"}).state("forum.edit",{url:"/edit-{id}.htm",templateUrl:"forum/tp/article_edit.html",controller:"tEdite"}).state("forum.comment-list",{url:"/comment/list-{id}.htm",templateUrl:"forum/tp/comment_list.html",controller:"tCommentList"}).state("forum.search",{url:"/search/index",templateUrl:"forum/tp/search.html",controller:"tSearchIndex"}).state("forum.search-result",{url:"/search/result?keyword",templateUrl:"forum/tp/search-result.html",controller:"tSearchResult"}).state("forum.chat",{url:"/chat-{uid}.htm?{uname}",templateUrl:"forum/tp/chat.html",controller:"tMsgChat"}).state("forum.msg-index",{url:"/msg/index.htm",templateUrl:"msg/tp/index.html",controller:"tMsgIndex"}).state("forum.msg-notice",{url:"/msg/notice.htm",templateUrl:"msg/tp/notice.html",controller:"tMsgNotice"}).state("forum.msg-comment",{url:"/msg/comment.htm",templateUrl:"msg/tp/comment.html",controller:"tMsgComment"}).state("forum.msg-praise",{url:"/msg/praise.htm",templateUrl:"msg/tp/praise.html",controller:"tMsgPraise"}).state("forum.msg-search",{url:"/msg/search.htm",templateUrl:"msg/tp/search.html",controller:"tMsgSearch"}).state("forum.msg-talk",{url:"/msg/talk.htm",templateUrl:"msg/tp/talk.html",controller:"tMsgTalk"}).state("forum.user-index",{url:"/user/index.htm",templateUrl:"user/tp/index.html",controller:"tUserIndex"}).state("forum.user-other-index",{url:"/user/index-{uid}.htm",templateUrl:"user/tp/user_index.html",controller:"tUserOtherIndex"}).state("forum.user-about",{url:"/user/about.htm",templateUrl:"user/tp/about.html",controller:"tUserAbout"}).state("forum.user-feedback",{url:"/user/feedback.htm",templateUrl:"user/tp/feedback.html",controller:"tUserFeedback"}).state("forum.user-level",{url:"/user/level.htm",templateUrl:"user/tp/level.html",controller:"tUserLevel"}).state("forum.user-cate",{url:"/user/cate.htm",templateUrl:"user/tp/cate-{uid}.html",controller:"tUserCate"}).state("forum.user-article",{url:"/user/article-{uid}.htm",templateUrl:"user/tp/article.html",controller:"tUserArticle"}).state("forum.user-fans",{url:"/user/fans-{uid}.htm",templateUrl:"user/tp/fans.html",controller:"tUserFans"}).state("forum.user-attention",{url:"/user/attention-{uid}.htm",templateUrl:"user/tp/attention.html",controller:"tUserAttention"}).state("forum.user-club",{url:"/user/club-{uid}.htm",templateUrl:"user/tp/club.html",controller:"tUserClub"}).state("forum.userData",{url:"/user/{id}-data.htm",templateUrl:"user/tp/personal_data.html",controller:"userDataCtrl"}).state("forum.user-set",{url:"/user/set.htm",templateUrl:"user/tp/set.html",controller:"tUserSet"}).state("forum.user-set-password",{url:"/user/set/password.htm",templateUrl:"user/tp/set_password.html",controller:"tUserSetPassword"}).state("forum.user-set-bind",{url:"/user/set/bind.htm",templateUrl:"user/tp/set_bind.html",controller:"tUserSetBind"});var o=localStorage.getItem("PHONEAPP_START");t.otherwise("/forum/start.htm")}]),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/footer_bar.html",'<ion-footer-bar>\n    <footer class="mod_footer">\n        <a ng-class="{current : footerTab == 1}" page-jump="none" data-router="forum.home">\n            首页\n        </a>\n        <a ng-class="{current : footerTab == 2}" page-jump="none" data-router="forum.find">\n            发现\n        </a>\n        <p add-photo ng-class="{current : footerTab == 3}"></p>\n        <a ng-class="{current : footerTab==4, new : isMessage}" page-jump="none" data-router="forum.msg-index">\n            消息\n        </a>\n        <a ng-class="{current : footerTab == 5}" page-jump="none" data-router="forum.user-index">\n            我\n        </a>\n    </footer>\n</ion-footer-bar>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/header_bar.html",'<ion-header-bar class="mod_header" ng-class="{transparent:isTransparent}" ng-style="HeaderBg" align-title="center" no-tap-scroll="false">\n	<div class="buttons">\n		<button page-back class="back_button"></button>\n	</div>\n	\n    <h1 class="title" ng-bind-html="Page.Title"></h1>\n\n	<div class="buttons buttons-right" ng-if="Page.RightText">\n		<button class="right_button" ng-click="Page.RightFun()">{{Page.RightText}}</button>\n	</div>\n\n    <!-- <div class="buttons buttons-right" ng-if="Page.Next">\n        <button class="right_button" page-jump data-router="{{Page.SiteUrl.router}}" data-options="{{Page.SiteUrl.options}}">{{Page.Next}}</button>\n    </div> -->\n</ion-header-bar>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/header_opacity.html",'<header class="js_op_header mod_header_opacity">\n    <ul>\n        <li></li>\n        <li>{{Page.Title}}</li>\n        <li></li>\n    </ul>\n    <ul class="js_op_change this_op">\n        <li page-back></li>\n        <li>{{Page.Title}}</li>\n        <li></li>\n    </ul>\n</header>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/job_popup.html",'<div class="choose_job" ngd-click="chooseJob($event)" selector="li">\n	<ul>\n		<li ng-repeat="(k, v) in DataList.JobList track by $index" data-id="{{v.Id}}" data-name="{{v.Name}}" ng-class="{ current : tmpJob == {{v.Id}} }">\n			{{v.Name}}\n		</li>\n	</ul>\n</div>\n\n<!-- <div class="choose_post" ngd-click="chooseJob($event)" selector="li">\n	<ul>\n		<li>\n			<input ng-checked="tmpJob == \'园长\'" name="job" type="radio">\n			<label>园长</label>\n		</li>\n		<li>\n			<input ng-checked="tmpJob == \'保教主任\'" name="job" type="radio">\n			<label>保教主任</label>\n		</li>\n		<li>\n			<input ng-checked="tmpJob == \'教师\'" name="job" type="radio">\n			<label>教师</label>\n		</li>\n		<li>\n			<input ng-checked="tmpJob == \'其他\'" name="job" type="radio">\n			<label>其他</label>\n		</li>\n	</ul>\n</div> -->')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/location_popup.html",'<div class="choose_location" ngd-click="chooseLocation($event)" selector="li">\n	<ion-scroll class="select_box">\n		<ul>\n			<li ng-repeat="(k, v) in CityList track by $index" ng-class="{current: k == tmpCity }" data-mid="{{k}}">\n				{{v.name}}\n			</li>\n		</ul>\n	</ion-scroll>\n	<ion-scroll class="select_box">\n		<ul>\n			<li ng-repeat="(k, v) in CitySubList track by $index" ng-class="{current: k == tmpSubCity }" data-sid="{{k}}">\n				{{v.name}}\n			</li>\n		</ul>\n	</ion-scroll>\n</div>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/mod_loading.html",'<ion-spinner icon="ios"></ion-spinner>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/no_network.html",'<div ng-if="noNetwork" class="no-network"> <i class="icon-no-network"></i>\n	网络不给力，刷新页面重试\n	<button ng-click="refreshPage();" class="button button-block button-positive">刷新页面</button>\n</div>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/no_results.html",'<div ng-if="noResults" class="no-results">\n    <i ng-if="hasGlass" class="icon-search"></i>\n    {{noResultsText}}\n</div>\n')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/page_sheet.html",'<section class="mod_sheet" ng-click="hideSheet()">\n    <div>\n        <ul ngd-click="toSheet($event)" selector="li">\n            <li data-type="camera">拍照</li>\n            <li data-type="photo">照片图库</li>\n            <li data-type="close">取消</li>\n        </ul>\n    </div>\n</section>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/search_header.html",'<header class="mod_header_search">\n    <div>\n        <input ng-model="keyword" type="text" value="" placeholder="搜索内容/标签/圈子/用户" />\n        <button ng-click="toSearch()"></button>\n    </div>\n</header>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/user_login.html",'<div class="user_login_pop">\n    <div class="this_cancel" ng-click="closeLogin()">取消</div>\n\n    <dl>\n        <dt></dt>\n        <dd>\n            <ul>\n                <li><input ng-model="tInput.phone" type="number" type="number" placeholder="输入手机号" /></li>\n                <li><input ng-model="tInput.password" type="password" placeholder="输入密码" /></li>\n                <li class="this_login" ng-click="toLogin()">登录</li>\n                <li class="this_link">\n                    <div page-jump data-router="forum.login-forget">找回密码</div>\n                    <p></p>\n                    <div page-jump data-router="forum.reg-create">注册账号</div>\n                </li>\n            </ul>\n        </dd>\n    </dl>\n</div>')}])}(),function(e){try{e=angular.module("phoneApp")}catch(t){e=angular.module("phoneApp",[])}e.run(["$templateCache",function(e){e.put("common/directives/user_login_page.html",'<div class="user_login_page">\n    <div class="this_cancel" page-back>取消</div>\n\n    <dl>\n        <dt></dt>\n        <dd>\n            <ul>\n                <li><input ng-model="tInput.phone" type="number" type="number" placeholder="输入手机号" /></li>\n                <li><input ng-model="tInput.password" type="password" placeholder="输入密码" /></li>\n                <li class="this_login" ng-click="toLogin()">登录</li>\n                <li class="this_link">\n                    <div page-jump data-router="forum.login-forget">找回密码</div>\n                    <p></p>\n                    <div page-jump data-router="forum.reg-create">注册账号</div>\n                </li>\n            </ul>\n        </dd>\n    </dl>\n</div>')}])}(),angular.module("phoneApp").factory("cachePool",function(){var e=function(e){if(!e)return null;var t,o=localStorage.getItem("phoneApp_"+e);try{t=JSON.parse(o)}catch(n){}return t?t:null},t=864e5,o={push:function(o,n,r){if(o&&n){var i=e(o)||{};i.value=n||void 0,i.expired=r?Date.now()+t*r:void 0,localStorage.setItem("phoneApp_"+o,JSON.stringify(i))}},pull:function(t){var o,n=e(t);return!n||n.expired&&n.expired<=Date.now()?null:o=n.value},remove:function(t,o){if(t){var n=e(t);return n?void(o&&n[o]?(n[o]=void 0,localStorage.setItem("phoneApp_"+t,JSON.stringify(n))):localStorage.removeItem("phoneApp_"+t)):void localStorage.removeItem("phoneApp_"+t)}},modify:function(t,o){if(t){var n,r=e(t);if(!r)return void localStorage.removeItem("phoneApp_"+t);if(o){for(n in r.value)o[n]&&(r.value[n]=o[n]);localStorage.setItem("phoneApp_"+t,JSON.stringify(r))}}}};return o}),angular.module("phoneApp").factory("ENV",["$location",function(e){var t=navigator.userAgent.toLowerCase(),o={apiSocket:"http://m.tjoys.net/api/",isHybrid:!1,isWeixin:!1,isApple:!1,isAndroid:!1,appVersion:"1.0.1"};return window.isHybridCreatePhoneApp&&(o.isHybrid=!0),o.isHybrid&&/android/.test(t)&&(o.isAndroid=!0),o.isHybrid&&/iphone|ipad|ipod/.test(t)&&(o.isApple=!0,document.getElementById("js_view").className="is_ios"),/micromessenger/.test(t)&&(o.isWeixin=!0),o}]),angular.module("phoneApp").filter("ellipsis",function(){return function(e,t){return e&&t>0&&e.length>t?e.substring(0,t-2)+"…":e}}),angular.module("phoneApp").filter("specDate",["$filter",function(e){return function(t){var o=Date.now()-t,n="刚刚",r=36e5;return o>24*r?n=e("date")(t,"yyyy/MM/dd"):o>r&&(n=Math.floor(o/r)+"小时前"),n}}]),angular.module("phoneApp").filter("formatScore",function(){return function(e){return 10*Math.floor(e/.5)}}),angular.module("phoneApp").config(["$provide","$httpProvider",function(e,t){e.factory("httpInterceptor",["$q","ENV",function(e,t){var o={request:function(t){t.url;return t||e.when(t)},requestError:function(t){return e.reject(t)},response:function(t){return t||e.when(t)},responseError:function(t){return e.reject(t)}};return o}]),t.interceptors.push("httpInterceptor")}]),angular.module("phoneApp").factory("widget",["$http","$cacheFactory","$rootScope","$compile","$timeout","$location","$ionicLoading","$ionicBackdrop","$ionicHistory","$ionicScrollDelegate","cachePool","ENV",function(e,t,o,n,r,i,a,l,c,s,u,p){o.isHybrid=p.isHybrid?!0:!1;var m=null,d=t("dataPool"),h={msgToast:function(e,t){var i=angular.element(document.querySelector(".notifier"));if(!i.length){var a=n('<div class="notifier" ng-click="notification=null" ng-show="notification"><span>{{notification}}</span></div>');angular.element(document.getElementsByTagName("body")[0]).append(a(o))}r(function(){o.notification=e},0),r.cancel(m),m=r(function(){o.notification=""},t||2e3)},cacheData:function(e,t){if(!angular.isString(e))return!1;var o=d.get(e);return t?void d.put(e,t):o?o:!1},safeApply:function(e,t){e&&t&&(e.$$phase||e.$root&&e.$root.$$phase?t():e.$apply(t))},stickyTopScroll:function(e,t,o,n){if(e&&o&&o.length&&n&&n.getScrollPosition()){var r,i,a,l,c=n.getScrollPosition().top;if(void 0===e.stickyContent){var s=t('<h2 class="sticker" ng-show="stickyContent != null">{{stickyContent}}</h2>');l=s(e),l.css({position:"absolute",width:"100%"}),angular.element(n.getScrollView().__container).append(l),n.__sticker=l}else l=n.__sticker;for(var u=0,p=o.length;p>u;u++){if(r=o[u],0===u&&(i=r.clientHeight),!(c>=r.offsetTop)){l.hasClass("ng-hide")||(c>=r.offsetTop-i?l.css("top",r.offsetTop-i-c+"px"):l.css("top",0));break}a=r}a&&e.stickyContent!==a.innerHTML?(l.css("top",0),safeApply(e,function(){e.stickyContent=a.innerHTML})):a||safeApply(e,function(){e.stickyContent=null})}},ajaxRequest:function(t){var o=this;if(t){var n=t.scope||"",r=t.data||{},i={Header:{UserId:"",Auth:""}},l=u.pull("UserInfo");if(l&&(i.Header.UserId=l.UserId,i.Header.Auth=l.Auth),r=angular.extend({},r,i),t.showPage){if(n.Deploy.isLoading)return;n.Deploy.isLoading=!0,n.Deploy.pageIndex++,angular.extend(r,{PageIndex:n.Deploy.pageIndex,PageSize:n.Deploy.pageSize})}var c={success:function(){},error:function(){},showPage:!1,showLoading:!0,isLogin:!1},s={method:"POST",url:p.apiSocket+t.url||"",data:r,timeout:15e3},m=function(){c.showLoading&&a.hide()};for(var d in t)c[d]=t[d];c.showLoading&&(!c.showPage||c.showPage&&n.Deploy.pageIndex<2)&&a.show({templateUrl:"common/directives/mod_loading.html"}),e(s).success(function(e){e.Response&&"Success"==e.Response.Ack?(n&&(n.Deploy||(n.Deploy={}),e.Response.State||(n.Deploy.isLogin=!1,n.Deploy.uId=0,u.remove("UserInfo"))),"function"==typeof c.success&&c.success(e),t.showPage&&(n.Deploy.isLoading=!1,n.Deploy.pageTotal=e.Total||0,!n.Deploy.pageTotal||n.Deploy.pageTotal&&n.Deploy.pageIndex*n.Deploy.pageSize>=n.Deploy.pageTotal?(n.Deploy.isLoading=!0,n.Deploy.isMore=!1):n.$broadcast("scroll.infiniteScrollComplete"))):o.msgToast("数据请求错误！"),m()}).error(function(e){"function"==typeof c.error?c.error(e):o.msgToast("请检查你的网络！"),c.showPage&&(n.Deploy.isLoading=!1),m()})}},showStatusBar:function(){function e(){StatusBar.show()}p.isHybrid&&document.addEventListener("deviceready",e,!1)},clearHistory:function(){c.clearHistory()},changeOpacity:function(){var e=s.$getByHandle("mainScroll").getScrollPosition().top,t=0;t=e>30?((e-30)/100).toFixed(1):0,t>1&&(t=1),angular.element(document.querySelector(".js_op_header .js_op_change")).css({opacity:t})},setUserInfo:function(){u.push("UserInfo",{Phone:data.Phone,UserName:data.Nickname,Sex:data.Sex,City:data.City,CityName:data.CityName,Job:data.Job,JobName:data.JobName,Auth:data.Auth,UserId:data.UserId},30)},initUser:function(e){var t=u.pull("UserInfo");e.Deploy||(e.Deploy={}),t&&t.UserId?(e.UserInfo=angular.extend({},t),e.Deploy.uId=t.UserId,e.Deploy.isLogin=!0):(e.UserInfo={},e.Deploy.isLogin=!1,e.Deploy.uId=0)},cleanLogin:function(e){e.Deploy.uId=0,e.Deploy.isLogin=!1,u.remove("UserInfo")},modifyLogin:function(e){},checkPhone:function(e){var t=this,o=!1;return e||(t.msgToast("请输入手机号码"),o=!0),/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(e)||(t.msgToast("手机号码格式不合法"),o=!0),o}},g=null;o.$on("$locationChangeStart",function(){angular.element(document.getElementById("shareBtnCtrl")).css("display","none"),g&&(g.close(),g=null)});return h}]),angular.module("phoneApp").directive("appFilereader",["$q","$parse","widget",function(e,t,o){var n=Array.prototype.slice;return{restrict:"A",require:"?ngModel",link:function(t,r,i,a){a&&(a.$render=function(){},r.bind("change",function(r){function i(t){var o=e.defer(),n=new FileReader;return n.onload=function(e){o.resolve(e.target.result)},n.onerror=function(e){o.reject(e)},n.readAsDataURL(t),o.promise}function l(e){var t=angular.element(document.querySelector("#tmp"))[0],o=t.getContext("2d"),n=new Image;n.onload=function(){EXIF.getData(n,function(){var e=EXIF.pretty(this),r=e?e.Orientation:1;o.drawImage(n,0,0);var i=new MegaPixImage(n);i.render(t,{maxWidth:640,orientation:r},function(){var e=t.toDataURL("image/jpeg");a.$setViewValue(e)})})},n.src=e}var c=r.target;e.all(n.call(c.files,0).map(i)).then(function(e){e&&0!=e.length&&(c.multiple?angular.forEach(e,function(e,t){l(e)}):l(e[0]),o.cacheData("CameraImages",t.CameraImages))})}))}}}]).directive("addPhoto",["$state","$parse","$timeout","$compile","$ionicViewSwitcher","widget","ENV",function(e,t,o,n,r,i,a){return{restrict:"A",link:function(t,o,l){o.on("click",function(){if(i.initUser(t),!t.Deploy.isLogin)return void t.showLogin();if(a.isHybrid){var o=n('<section class="js_mod_camera" ngd-click="hideCamera($event)" selector="div"><div class="mod_camera"><ul><li ng-photo>相册</li><li ng-camera>拍照</li></ul></div><section>'),l=document.querySelector(".js_mod_camera");l?l.style.display="block":angular.element(document.querySelector(".pane")).after(o(t)),t.noScroll={"overflow-y":"hidden"}}else r.nextDirection("forward"),e.go("forum.photo-title")}),t.hideCamera=function(e){var o=angular.element(e.delegationTarget);o.parent().css("display","none"),t.noScroll={"overflow-y":"auto"}}}}}]).directive("addImage",["$state","$parse","$timeout","$compile","$ionicActionSheet","$ionicViewSwitcher","widget","ENV",function(e,t,o,n,r,i,a,l){return{restrict:"A",link:function(e,t,o){t.on("click",function(){function t(t){var o=angular.element(document.querySelector("#tmp"))[0],n=o.getContext("2d"),r=new Image;r.onload=function(){EXIF.getData(r,function(){var t=EXIF.pretty(this),i=t?t.Orientation:1;n.drawImage(r,0,0);var a=new MegaPixImage(r);a.render(o,{maxWidth:640,orientation:i},function(){var t=o.toDataURL("image/jpeg");e.Deploy.currentImage=t})})},r.src=t}function o(e){console.log("获取图片失败！")}return a.initUser(e),e.Deploy.isLogin?void r.show({buttons:[{text:"拍照"},{text:"照片图库"}],cancelText:"<b>取消</b>",cancel:function(){},buttonClicked:function(e){function n(){switch(e){case 0:window.navigator.camera.getPicture(t,o,{quality:100,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.CAMERA});break;case 1:window.navigator.camera.getPicture(t,o,{quality:100,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.PHOTOLIBRARY})}}return document.addEventListener("deviceready",n,!1),!0}}):void e.showLogin()})}}}]).directive("ngPhoto",["$state","$parse","$timeout","$ionicLoading","$ionicViewSwitcher","widget",function(e,t,o,n,r,i){return{restrict:"A",link:function(t,o,n){function i(t){sessionStorage.setItem("imageData",encodeURIComponent(t)),r.nextDirection("forward"),e.go("forum.photo-title",{type:"other"})}function a(e){console.log("获取图片失败！")}o.on("click",function(){function e(){window.navigator.camera.getPicture(i,a,{quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.PHOTOLIBRARY})}document.addEventListener("deviceready",e,!1)})}}}]).directive("ngCamera",["$state","$parse","$timeout","$ionicLoading","$ionicViewSwitcher","widget",function(e,t,o,n,r,i){return{restrict:"A",link:function(t,o,n){function a(t){sessionStorage.setItem("imageData",encodeURIComponent(t)),r.nextDirection("forward"),e.go("forum.photo-title",{type:"other"})}function l(e){console.log("获取图片失败！")}o.on("click",function(){function e(){navigator.camera.getPicture(a,l,{quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.CAMERA})}return i.initUser(t),t.Deploy.isLogin?void document.addEventListener("deviceready",e,!1):void t.showLogin()})}}}]),angular.module("phoneApp").directive("checkUser",["$state","$rootScope","cachePool","widget",function(e,t,o,n){return{controller:function(){t.$on("$stateChangeStart",function(e,t,n,r,i){var a=0,l=o.pull("UserInfo")||"";return l&&(a=l.UserId),console.log(a),t.resolve&&t.resolve.isCheck()&&!a?(console.log(1231231),void(window.location.href="/#/entry/login.htm")):void 0})}}}]),angular.module("phoneApp").directive("collectionCtrl",["$timeout","Util","DataCachePool",function(e,t,o){return{restrict:"A",link:function(t,n,r){var i=JSON.parse(r.item?r.item:!1);if(i){var a=o.pull("COLLECTION_GOODS")||[],l=-1,c=function(e){return void 0===e?r.index?t.isCollect[r.index]:t.isCollect:void(r.index?t.isCollect[r.index]=e:t.isCollect=e)};e(function(){for(var e=0;e<a.length;e++)if(a[e].InnerId===i.InnerId){l=e,c(!0);break}},0),n.on("click",function(t){if(c())e(function(){c(!1)},100),a.splice(l,1),o.push("COLLECTION_GOODS",a);else{e(function(){c(!0)},100);var n={Id:i.ProductID,InnerId:i.InnerId,Title:i.Name,ImgUrl:i.Picture};a.unshift(n),o.push("COLLECTION_GOODS",a)}})}}}}]),angular.module("phoneApp").directive("contenteditable",function(){return{require:"?ngModel",link:function(e,t,o,n){n&&(t.on("focus",function(e){var t=angular.element(e.target);"备注要求"===t.text()&&t.text("")}),t.on("blur",function(e){var t=angular.element(e.target);""===t.text()&&t.text("备注要求")}),t.on("input",function(){var o=t.html();o=o.replace(/<div>/g,"").replace(/<br>/g,"").replace(/<\/div>/g,""),e.$apply(function(){n.$setViewValue(o),n.$render()})}),t.on("keyup",function(t){return 13===t.keyCode?(console.log(e.remark),!1):void 0}),n.$render=function(){t.html(n.$viewValue)},n.$render())}}}),function(){var e=document.documentElement,t=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector,o=function(e,o){return t?t.call(e,o):e.tagName.toLowerCase()===o},n=function(t,n,r){for(r||(r=e);t&&t!=r&&r.contains(t);){if(o(t,n))return t;t=t.parentNode}return null},r={};e.contains||(Node.prototype.contains=function(e){return!!(16&this.compareDocumentPosition(e))});var i=/^\s*?{.+}\s*?$/;angular.forEach("Event Click Dblclick Mousedown Mouseup Mouseover Mouseout Mousemove Mouseenter Mouseleave".split(" "),function(e){var t="ngd"+e;r[t]=["$parse",function(o){return function(r,a,l){function c(e,t){var i=o(e);a.on(t,function(e){var o,l=e.target;(o=n(l,"string"==typeof s?s:s[t],a[0]))&&(e.delegationTarget=o,i(angular.element(o).scope(),{$event:e,$params:[].slice.call(arguments,1)}),r.$$phase||r.$apply())})}var s=l.selector,u="Event"==e?l.eventName||"click":e.toLowerCase(),p=l[t];s.match(i)&&(s=r.$eval(s)),p.match(i)?(p=r.$eval(p),angular.forEach(p,c)):c(p,u)}}]}),angular.module("DelegateEvents",[]).directive(r)}(),angular.module("phoneApp").directive("falls",["$q","$timeout","$rootScope",function(e,t,o){return{restrict:"E",replace:!0,transclude:!0,template:'<ul class="mod_list_falls ng-transclude"></ul>',controller:["$scope","$element","$attrs",function(n,r,i){o.setFalls=function(o){var n=e.defer(),i=n.promise;t(function(){var e=r;if(o&&(e=angular.element(document.getElementById(o))),0==e.find("li").length)return void n.reject();var t={x:10,y:10},i=(document.body.clientWidth-10)/400;angular.forEach(e.find("li"),function(e,o){angular.element(e).find("img").eq(0).css({height:e.dataset.y*i+"px"});var n=e.offsetHeight;t.x<=t.y?(e.style.cssText="left:0;top:"+t.x+"px",t.x=t.x+10+n):(e.style.cssText="right:0;top:"+t.y+"px",t.y=t.y+10+n)}),t.x<=t.y?e.css("height",t.y+"px"):e.css("height",t.x+"px"),n.resolve(e)},0),i.then(function(e){e.find("li").addClass("active")},function(e){},function(e){})}}]}}]),angular.module("phoneApp").directive("footerBar",["$state","cachePool","ENV",function(e,t,o){var n=0,r=t.pull("UserInfo")||"";return r&&(n=r.UserId),{restrict:"E",replace:!0,templateUrl:"common/directives/footer_bar.html",controller:["$scope","$element","$rootScope","$compile","$timeout","widget",function(e,t,o,n,r,i){i.ajaxRequest({scope:e,url:"getMsgNews",data:{},success:function(t){t.Response&&"Success"==t.Response.Ack&&(e.msgStatus={isPraise:t.isPraise,isComment:t.isComment,isNotice:t.isNotice,isTalk:t.isTalk},(t.isPraise||t.isComment||t.isNotice||t.isTalk)&&(e.isMessage=!0))}})}]}}]),angular.module("phoneApp").directive("headerBar",["$window",function(e){return{restrict:"E",replace:!0,templateUrl:"common/directives/header_bar.html",link:function(e,t,o){e.Page||(e.Page={}),e.Page.Title=e.Page.Title||o.title||"",e.Page.RightText=e.Page.RightText||(o.right?o.right.split("|")[0]:""),e.Page.RightFun=e.Page.RightFun||(o.right?e.$eval(o.right.split("|")[1]):"")}}}]).directive("headerOpacity",["$state","$ionicViewSwitcher","$window","cachePool","ENV",function(e,t,o,n,r){return{restrict:"E",replace:!0,templateUrl:"common/directives/header_opacity.html",controller:["$scope","$element","$rootScope","$compile","$timeout","widget",function(e,t,o,n,r,i){}]}}]),angular.module("phoneApp").directive("jobPopup",["$ionicPopup","widget","cachePool",function(e,t,o){return{restrict:"A",link:function(n,r,i){o.pull("JobData");n.tmpJob=n.cInput.Job,n.chooseJob=function(e){var t=angular.element(e.delegationTarget);t.length>0?(n.tmpJob=t.attr("data-id"),n.tmpJobName=t.attr("data-name")):(n.cInput.Job=n.tmpJob,n.cInput.JobName=n.tmpJobName)},r.bind("click",function(){t.ajaxRequest({url:"getJobList",data:{},success:function(o){o.Response&&"Success"==o.Response.Ack?(n.DataList||(n.DataList={}),n.DataList.JobList=o.JobList,e.confirm({title:"选择岗位",cancelText:"取消",cancelType:"cancel",okText:"确定",okType:"confirm",scope:n,templateUrl:"common/directives/job_popup.html"}).then(function(e){e&&(n.chooseJob(!1),n.Page||(n.Page={}),n.Page.isModify=!0)})):t.msgToast("获取岗位失败,请重试！")}})})}}}]),angular.module("phoneApp").directive("locationPopup",["$ionicPopup","$http","widget","cachePool",function(e,t,o,n){return{restrict:"A",link:function(n,r,i){n.tmpCity=0,n.tmpSubCity=0,n.chooseLocation=function(e){var t=angular.element(e.delegationTarget),o=t.attr("data-mid"),r=t.attr("data-sid");t.parent("ul").find("li").removeClass("current"),t.addClass("current"),o&&(n.CitySubList=n.CityList[o].sub,n.tmpCity=o),r&&(n.tmpSubCity=r)},r.bind("click",function(){t({method:"GET",url:"api/CityList.json",timeout:15e3}).success(function(t){n.CityList=t,n.CitySubList=n.CityList[0].sub,e.confirm({title:"选择位置",cancelText:"取消",cancelType:"cancel",okText:"确定",okType:"confirm",scope:n,templateUrl:"common/directives/location_popup.html"}).then(function(e){e&&(n.cInput.City=n.tmpCity,n.cInput.CityName=n.CityList[n.tmpCity].name+" "+n.CitySubList[n.tmpSubCity].name,n.Page||(n.Page={}),n.Page.isModify=!0)})}).error(function(e){o.msgToast("请检查你的网络！")})})}}}]),angular.module("phoneApp").directive("noNetwork",["$state","$stateParams",function(e,t){return{restrict:"E",templateUrl:"scripts/phoneApp/components/no-network/no-network.html",controller:["$scope",function(o){o.refreshPage=function(){var o=e.current,n=angular.copy(t);e.transitionTo(o,n,{reload:!0,inherit:!0,notify:!0})}}]}}]),angular.module("phoneApp").directive("noResults",["$state","$stateParams",function(e,t){return{restrict:"AE",templateUrl:"scripts/phoneApp/components/no-results/no-results.html",link:function(e,t,o){e.noResultsText=o.text?o.text:"抱歉，查询无结果",o.glass&&(e.hasGlass=!0)}}}]),angular.module("phoneApp").directive("pageSheet",["$state","$window","$timeout","$ionicLoading","$ionicBackdrop","$ionicViewSwitcher","cachePool","widget","ENV",function(e,t,o,n,r,i,a,l,c){return{restrict:"E",replace:!0,templateUrl:"common/directives/page_sheet.html",controller:["$scope","$element","$rootScope","$compile",function(e,t,n,r){function i(t){var o=angular.element(document.querySelector("#tmp"))[0],n=o.getContext("2d"),r=new Image;r.onload=function(){EXIF.getData(r,function(){var t=EXIF.pretty(this),i=t?t.Orientation:1;n.drawImage(r,0,0);var a=new MegaPixImage(r);a.render(o,{maxWidth:640,orientation:i},function(){var t=o.toDataURL("image/jpeg");e.Deploy.currentImage=t,e.hideSheet()})})},r.src=t}function a(e){l.msgToast("获取图片失败！")}e.hideSheet=function(){t.addClass("this_hide"),o(function(){t.removeClass("this_show"),t.removeClass("this_hide"),t.css("display","none");

},210)},e.showSheet=function(){t.css("display","block"),o(function(){t.addClass("this_show")},50)},e.toSheet=function(t){var o=angular.element(t.delegationTarget),n=o.attr("data-type");switch(n){case"photo":window.navigator.camera.getPicture(i,a,{quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.PHOTOLIBRARY});break;case"camera":window.navigator.camera.getPicture(i,a,{quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.CAMERA});break;default:e.hideSheet()}}}]}}]),angular.module("phoneApp").directive("pageBack",["$window","$state","$rootScope","$stateParams","$ionicHistory","$ionicViewSwitcher",function(e,t,o,n,r,i){return{restrict:"A",link:function(t,o,n){o.on("click",function(){i.nextDirection("back"),e.history.back()})}}}]).directive("pageJump",["$window","$state","$rootScope","$stateParams","$ionicHistory","$ionicViewSwitcher",function(e,t,o,n,r,i){return{restrict:"A",link:function(e,o,n){o.on("click",function(o){var a="forward";"none"==n.pageJump&&(a="none",e.loadMore={},r.clearCache(),r.clearHistory());var l=n.router,c=n.options?e.$eval(n.options):{};i.nextDirection(a),t.go(l,c,{inherit:!1})})}}}]),angular.module("phoneApp").directive("searchHeader",["$state","$ionicViewSwitcher","widget","cachePool",function(e,t,o,n){return{restrict:"E",replace:!0,templateUrl:"common/directives/search_header.html",link:function(r,i,a){r.keyword="",r.toSearch=function(){if(r.keyword){var i=n.pull("Keyword")||[];angular.forEach(i,function(e,t){r.keyword==e&&i.splice(t,1)}),i.splice(0,0,r.keyword),n.push("Keyword",i),t.nextDirection("forward"),e.go("forum.search-result",{keyword:encodeURIComponent(r.keyword)})}else e.is("forum.search")?o.msgToast("请输入关键字！"):(t.nextDirection("forward"),e.go("forum.search"))}}}}]),angular.module("phoneApp").directive("shareCtrl",function(){return{restrict:"A",link:function(e,t){t.on("focus blur",function(e){var t=angular.element(e.path[1]);"focus"===e.type?t.addClass("focus"):t.removeClass("focus")})}}}),angular.module("phoneApp").directive("touchMove",["$parse",function(e){return{restrict:"A",compile:function(t,o){var n=e(o.touchMove);return function(e,t){t.on("touchstart",function(t){e.$apply(function(){n(e,{$event:t,$target:t.target})})}),t.on("touchmove",function(t){var o=t.touches[0],r=document.elementFromPoint(o.clientX,o.clientY);e.$apply(function(){n(e,{$event:t,$target:r})}),t.preventDefault()})}}}}]),angular.module("phoneApp").directive("userLogin",["$state","$ionicViewSwitcher","$window","cachePool","widget","ENV",function(e,t,o,n,r,i){return{restrict:"E",replace:!0,templateUrl:"common/directives/user_login.html",controller:["$scope","$element","$rootScope","$compile","$timeout","widget",function(e,t,o,r,i,a){e.tInput={},e.closeLogin=function(){t.removeClass("this_show")},e.showLogin=function(){t.css("display","block");i(function(){t.addClass("this_show")},50)},e.toLogin=function(){return e.tInput.phone?/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(e.tInput.phone)?e.tInput.password?e.tInput.password.length<=5?void a.msgToast("新密码必须大于或等于6位"):void a.ajaxRequest({url:"getLogin",data:{Phone:e.tInput.phone,Password:md5(e.tInput.Password)},success:function(o){o.Response&&o.Response.State?(n.push("UserInfo",{Auth:o.Auth,UserId:o.UserId},2/24),e.Deploy.isLogin=!0):e.Deploy.isLogin=!1,e.closeLogin(),i(function(){t.css("display","none")},300)},error:function(e){}}):void a.msgToast("请输入密码"):void a.msgToast("手机号格式不合法"):void a.msgToast("请输入手机号")}}]}}]).directive("pageLogin",["$state","$ionicViewSwitcher","$window","cachePool","widget","ENV",function(e,t,o,n,r,i){return{restrict:"E",replace:!0,templateUrl:"common/directives/user_login_page.html",controller:["$scope","$element","$rootScope","$compile","$timeout","widget",function(e,t,o,r,i,a){e.tInput={},e.closeLogin=function(){t.removeClass("this_show")},e.showLogin=function(){t.css("display","block");i(function(){t.addClass("this_show")},50)},e.toLogin=function(){return e.tInput.phone?/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(e.tInput.phone)?e.tInput.password?e.tInput.password.length<=5?void a.msgToast("新密码必须大于或等于6位"):void a.ajaxRequest({url:"getLogin",data:{Phone:e.tInput.phone,Password:md5(e.tInput.Password)},success:function(o){o.Response&&o.Response.State?(n.push("UserInfo",{Auth:o.Auth,UserId:o.UserId},2/24),e.Deploy.isLogin=!0):e.Deploy.isLogin=!1,e.closeLogin(),i(function(){t.css("display","none")},300)},error:function(e){}}):void a.msgToast("请输入密码"):void a.msgToast("手机号格式不合法"):void a.msgToast("请输入手机号")}}]}}]),angular.module("phoneApp").directive("getVcode",["$rootScope","$timeout","widget",function(e,t,o){return{restrict:"A",link:function(n,r,i){function a(){e.vEnable=!0,e.vTimer=t(function(){return e.vColdDown--,e.vColdDown<=0?(e.vEnable=!1,void(e.vBtnText="重新发送验证码")):(e.vBtnText="重新发送("+e.vColdDown+")",void a())},1e3)}e.vEnable?(t.cancel(e.vTimer),a()):(e.vColdDown=0,e.vBtnText="发送验证码"),r.bind("click",function(t){var r=o.checkPhone(n.cInput.phone);r||0===e.vColdDown&&(e.vColdDown=60,e.vBtnText="重新发送("+e.vColdDown+")",a(),o.ajaxRequest({url:"setSendPhone",data:{Phone:n.cInput.phone},success:function(e){o.msgToast("验证码已发送到"+n.cInput.phone+"手机上")}}))})}}}]);