(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"0ace":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uToast:a("7179").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("nav-custom",{attrs:{back:!0}}),a("v-uni-view",{staticClass:"logo iconfont icon-canju"}),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"tel",name:"",placeholder:"请输入用户名"},model:{value:t.info.userName,callback:function(e){t.$set(t.info,"userName",e)},expression:"info.userName"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:t.info.password,callback:function(e){t.$set(t.info,"password",e)},expression:"info.password"}})],1),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.UserLogin()}}},[t._v("登陆")]),a("v-uni-view",{staticClass:"links"},[a("v-uni-view",{staticClass:"link-highlight",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoRegistration.apply(void 0,arguments)}}},[t._v("注册账号")])],1),a("u-toast",{ref:"uToast"}),a("u-toast",{ref:"uToasts"})],1)},i=[]},"0b82":function(t,e,a){var n=a("423b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("e4b98156",n,!0,{sourceMap:!1,shadowMode:!1})},"0f4b":function(t,e,a){"use strict";var n=a("0b82"),o=a.n(n);o.a},"423b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.fs-40[data-v-6bee978b]{font-size:%?40?%!important}.fs-36[data-v-6bee978b]{font-size:%?36?%!important}.fs-34[data-v-6bee978b]{font-size:%?34?%!important}.fs-30[data-v-6bee978b]{font-size:%?30?%!important}.fs-28[data-v-6bee978b]{font-size:%?28?%!important}.fs-26[data-v-6bee978b]{font-size:%?26?%!important}.fs-24[data-v-6bee978b]{font-size:%?24?%!important}.fs-22[data-v-6bee978b]{font-size:%?22?%!important}.fs-20[data-v-6bee978b]{font-size:%?20?%!important}.fs-18[data-v-6bee978b]{font-size:%?18?%!important}.fs-16[data-v-6bee978b]{font-size:%?16?%!important}.fs-14[data-v-6bee978b]{font-size:%?14?%!important}.fs-12[data-v-6bee978b]{font-size:%?12?%!important}.color-9b9b[data-v-6bee978b]{color:#9b9b9b!important}.color-8d8d[data-v-6bee978b]{color:#8d8d8d!important}.color-fff[data-v-6bee978b]{color:#fff!important}.color-yellow[data-v-6bee978b]{color:#fbbd08!important}.color-red[data-v-6bee978b]{color:red!important}.color-zise[data-v-6bee978b]{color:#b895b7!important}.bg-kaqise[data-v-6bee978b]{background-color:#e3cfbd!important}.bg-zise[data-v-6bee978b]{background-color:#b895b7!important}.bg-fff[data-v-6bee978b]{background-color:#fff!important}.my-fixed[data-v-6bee978b]{position:fixed!important;right:0;bottom:0;width:100%;box-shadow:0 0 %?8?% %?1?% grey}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-6bee978b]{padding:%?100?%}.logo[data-v-6bee978b]{text-align:center;height:%?200?%;font-size:%?100?%;margin-top:%?80?%}.uni-form-item[data-v-6bee978b]{margin-bottom:%?40?%;padding:0;border-bottom:1px solid #e3e3e3}.uni-form-item .uni-input[data-v-6bee978b]{font-size:%?30?%;padding:7px 0;height:%?100?%}uni-button[type="primary"][data-v-6bee978b]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-6bee978b]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-6bee978b]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-6bee978b]{color:#b49950}',""]),t.exports=e},"4d49":function(t,e,a){"use strict";a.r(e);var n=a("0ace"),o=a("865f");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("0f4b");var r,s=a("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"6bee978b",null,!1,n["a"],r);e["default"]=u.exports},5377:function(t,e,a){var n=a("83ab"),o=a("9bf2"),i=a("ad6d"),r=a("9f7f").UNSUPPORTED_Y;n&&("g"!=/./g.flags||r)&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},"865f":function(t,e,a){"use strict";a.r(e);var n=a("fda1"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},fda1:function(t,e,a){"use strict";var n=a("4ea4");a("5377"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("5530")),i=a("26cb"),r={data:function(){return{info:{userName:"powderBlue",password:"123"},flags:!1}},onLoad:function(){},computed:(0,o.default)({},(0,i.mapState)("user",["userInfo"])),methods:(0,o.default)((0,o.default)((0,o.default)({},(0,i.mapActions)("user",["updateUser"])),(0,i.mapMutations)("user",["updateFlag"])),{},{UserLogin:function(){var t=this;this.flags=!0,this.updateFlag(this.flags),uni.setStorage({key:"cakeToken",data:this.flags,success:function(t){console.log(t)}}),this.$refs.uToast.show({type:"loading",message:"登录中",complete:function(){t.$refs.uToast.show({type:"success",message:"登录成功,即将跳转至个人中心",complete:function(){uni.navigateTo({url:"/pages/my/my"})}})}})},gotoRegistration:function(){uni.navigateTo({url:"registration"})}})};e.default=r}}]);