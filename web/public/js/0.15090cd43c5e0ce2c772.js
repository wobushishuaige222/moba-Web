webpackJsonp([0],{UfZ0:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Xxa5"),a=i.n(e),l=i("exGp"),r=i.n(l),c={props:{id:{type:String,required:!0}},data:function(){return{model:null,img:i("7Otq"),currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;return r()(a.a.mark(function s(){var i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("/heroes/"+t.id);case 2:i=s.sent,t.model=i.data;case 4:case"end":return s.stop()}},s,t)}))()}},created:function(){this.fetch()}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.model?i("div",{staticClass:"page-hero"},[i("div",{staticClass:"topbar d-flex bg-black py-3 px-3 ai-center text-white fs-xxs"},[i("img",{attrs:{src:t.img,alt:"logo图标",height:"30"}}),t._v(" "),i("div",{staticClass:"px-2"},[t._v("王者荣耀")]),t._v(" "),i("div",{staticClass:"px-1 flex-1"},[t._v("攻略站")]),t._v(" "),i("div",{staticClass:"px-3 py-1"},[t._v("更多英雄 >")])]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"hero-info",style:{"background-image":"url("+t.model.banner+")"}},[i("div",{staticClass:"d-flex text-white p-3 flex-column h_100 jc-end info"},[i("div",[t._v(t._s(t.model.title))]),t._v(" "),i("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),t._v(" "),i("div",[t._v(t._s(t.model.categories.map(function(t){return t.name}).join("/")))]),t._v(" "),i("div",{staticClass:"d-flex jc-between ai-center pt-3"},[t.model.scores?i("div",{staticClass:"scores d-flex ai-center"},[i("span",[t._v("难度")]),t._v(" "),i("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),t._v(" "),i("span",[t._v("技能")]),t._v(" "),i("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),t._v(" "),i("span",[t._v("攻击")]),t._v(" "),i("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),t._v(" "),i("span",[t._v("生存")]),t._v(" "),i("span",{staticClass:"badge bg-dark-1"},[t._v(t._s(t.model.scores.survive))])]):t._e(),t._v(" "),i("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v("皮肤: 2>")])],1)])]),t._v(" "),i("div",{staticClass:"end"},[i("div",{},[i("div",{staticClass:"pt-3 fs-lg px-3 bg-white"},[i("div",{staticClass:"d-flex jc-around border-b pb-2"},[i("router-link",{staticClass:"active pb-2",attrs:{to:"",tag:"div"}},[t._v("英雄初识")]),t._v(" "),i("router-link",{staticClass:"pb-2",attrs:{to:"",tag:"div"}},[t._v("进阶攻略")])],1)]),t._v(" "),i("swiper",[i("swiper-slide",[i("div",{},[i("div",{staticClass:"p-3 bg-white"},[i("div",{staticClass:"d-flex jc-around pt-1 pb-3"},[i("router-link",{staticClass:"d-flex ai-center jc-center btn flex-1",attrs:{to:"",tag:"button"}},[i("i",{staticClass:"iconfont icon-menu text-primary mr-2"}),t._v(" "),i("span",{staticClass:"fs-lg"},[t._v("英雄介绍视频")])]),t._v(" "),i("router-link",{staticClass:"d-flex ai-center jc-center btn flex-1 ml-2",attrs:{to:"",tag:"button"}},[i("i",{staticClass:"iconfont icon-menu text-primary mr-2"}),t._v(" "),i("span",{staticClass:"fs-lg"},[t._v("一图识英雄")])])],1)]),t._v(" "),i("div",{staticClass:"bg-white px-3 pt-3 skills border-b"},[i("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,function(s,e){return i("img",{key:e,class:{"skill-active":t.currentSkillIndex===e},attrs:{src:s.icon,width:"60",height:"60"},on:{click:function(s){t.currentSkillIndex=e}}})}),0),t._v(" "),i("div",{staticClass:"d-flex mt-4 mb-3"},[i("h3",{staticClass:"m-0 fs-xl"},[t._v(t._s(t.currentSkill.name))]),t._v(" "),i("span",{staticClass:"ml-3 text-white-1"},[t._v("(冷却值: "+t._s(t.currentSkill.delay)+" 消耗:"+t._s(t.currentSkill.cost)+")")])]),t._v(" "),i("p",{staticClass:"border-b pb-3"},[t._v(t._s(t.currentSkill.description))]),t._v(" "),i("p",{staticClass:"tips text-white-1 pb-3"},[t._v("小提示: "+t._s(t.currentSkill.tips))])]),t._v(" "),i("m-card",{staticClass:"px-3",attrs:{icon:"menu1",title:"出装推荐",detailHero:!1}},[i("h2",{staticClass:"fs-xl mt-2"},[t._v("顺风出装")]),t._v(" "),i("div",{staticClass:"d-flex jc-around text-center border-b pb-3"},t._l(t.model.items1,function(s){return i("div",{key:s._id},[i("img",{attrs:{src:s.icon,alt:"",width:"45",height:"45"}}),t._v(" "),i("div",{staticClass:"text-white-1 fs-xs"},[t._v(t._s(s.name))])])}),0),t._v(" "),i("h2",{staticClass:"fs-xl my-3"},[t._v("逆风出装")]),t._v(" "),i("div",{staticClass:"d-flex jc-around text-center"},t._l(t.model.items2,function(s){return i("div",{key:s._id},[i("img",{attrs:{src:s.icon,alt:"",width:"45",height:"45"}}),t._v(" "),i("div",{staticClass:"text-white-1 fs-xs"},[t._v(t._s(s.name))])])}),0)]),t._v(" "),i("m-card",{staticClass:"px-3",attrs:{icon:"menu1",title:"铭文推荐",detailHero:!1}},[i("div",{staticClass:"d-flex"},t._l(t.model.inscriptionChoice,function(s,e){return i("div",{key:e,staticClass:"d-flex ai-center"},[i("img",{attrs:{src:s.inscription.icon,width:"30",height:"30"}}),t._v(" "),i("div",{staticClass:"fs-xs"},[i("p",{staticClass:"fs-md m-0"},[t._v(t._s(s.inscription.name))]),t._v(" "),i("p",{staticClass:"m-0"},[t._v(t._s(s.inscription.description))])])])}),0)]),t._v(" "),i("m-card",{staticClass:"px-3",attrs:{icon:"menu1",title:"使用技巧",detailHero:!1}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),t._v(" "),i("m-card",{staticClass:"px-3",attrs:{icon:"menu",title:"对抗技巧",detailHero:!1}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),t._v(" "),i("m-card",{staticClass:"px-3",attrs:{icon:"menu",title:"团战思路",detailHero:!1}},[i("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),t._v(" "),i("m-card",{staticClass:"px-3",attrs:{icon:"menu",title:"英雄关系",detailHero:!1}},[i("div",{staticClass:"border-b"},[i("div",{staticClass:"text-black-1 fs-xl"},[t._v("最佳搭档")]),t._v(" "),t._l(t.model.partners,function(s){return i("div",{key:s._id,staticClass:"d-flex py-3 ai-start partners"},[i("img",{attrs:{src:s.hero.avator,width:"50",height:"50"}}),t._v(" "),i("p",{staticClass:"ml-2 flex-1 m-0"},[t._v(t._s(s.description))])])})],2),t._v(" "),i("div",{staticClass:"border-b mt-3"},[i("div",{staticClass:"text-black-1 fs-xl"},[t._v("被谁克制")]),t._v(" "),t._l(t.model.restraint,function(s){return i("div",{key:s._id,staticClass:"d-flex py-3 ai-start partners"},[i("img",{attrs:{src:s.hero.avator,width:"50",height:"50"}}),t._v(" "),i("p",{staticClass:"ml-2 flex-1 m-0"},[t._v(t._s(s.description))])])})],2),t._v(" "),i("div",{staticClass:"border-b mt-3"},[i("div",{staticClass:"text-black-1 fs-xl"},[t._v("克制谁")]),t._v(" "),t._l(t.model.continent,function(s){return i("div",{key:s._id,staticClass:"d-flex py-3 ai-start partners"},[i("img",{attrs:{src:s.hero.avator,width:"50",height:"50"}}),t._v(" "),i("p",{staticClass:"ml-2 flex-1 m-0"},[t._v(t._s(s.description))])])})],2)])],1)]),t._v(" "),i("swiper-slide")],1)],1)])])]):t._e()},staticRenderFns:[]};var d=i("VU/8")(c,n,!1,function(t){i("tXGO")},null,null);s.default=d.exports},tXGO:function(t,s){}});
//# sourceMappingURL=0.15090cd43c5e0ce2c772.js.map