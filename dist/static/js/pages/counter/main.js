global.webpackJsonp([2],{"19dx":function(t,n,e){"use strict";var c=e("5nAL"),a=e.n(c),u=e("NYxO");a.a.use(u.a);var r=new u.a.Store({state:{count:0},mutations:{increment:function(t){t.count+=1},decrement:function(t){t.count-=1}}});n.a=r},BScH:function(t,n,e){"use strict";var c=e("19dx");n.a={computed:{count:function(){return c.a.state.count}},methods:{increment:function(){c.a.commit("increment")},decrement:function(){c.a.commit("decrement")}}}},HqHh:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=e("5nAL"),a=e.n(c),u=e("Wzh0");new a.a(u.a).$mount()},Wzh0:function(t,n,e){"use strict";var c=e("BScH"),a=e("sRuS");var u=function(t){e("hxNH")},r=e("ybqe")(c.a,a.a,u,null,null);n.a=r.exports},hxNH:function(t,n){},sRuS:function(t,n,e){"use strict";var c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"counter-warp"},[e("p",[t._v("Vuex counter："+t._s(t.count))]),t._v(" "),e("p",[e("button",{attrs:{eventid:"0"},on:{click:t.increment}},[t._v("+")]),t._v(" "),e("button",{attrs:{eventid:"1"},on:{click:t.decrement}},[t._v("-")])],1),t._v(" "),e("a",{staticClass:"home",attrs:{href:"/pages/index/main"}},[t._v("去往首页")])],1)},staticRenderFns:[]};n.a=c}},["HqHh"]);