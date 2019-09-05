
<template>
  <div class="page-hero" v-if="model">
    <div class="topbar d-flex bg-black py-3 px-3 ai-center text-white fs-xxs">
      <img :src="img" alt="logo图标" height="30" />
      <div class="px-2">王者荣耀</div>
      <div class="px-1 flex-1">攻略站</div>
      <div class="px-3 py-1">更多英雄&nbsp;&gt;</div>
    </div>
    <div class="container">
      <div class="hero-info" :style="{'background-image':`url(${model.banner})`}">
        <div class="d-flex text-white p-3 flex-column h_100 jc-end info">
          <div>{{model.title}}</div>
          <h2 class="my-2">{{model.name}}</h2>
          <div>{{model.categories.map(v=>v.name).join('/')}}</div>
          <div class="d-flex jc-between ai-center pt-3">
            <div class="scores d-flex ai-center" v-if="model.scores">
              <span>难度</span>
              <span class="badge bg-primary">{{model.scores.difficult}}</span>
              <span>技能</span>
              <span class="badge bg-blue-1">{{model.scores.skills}}</span>
              <span>攻击</span>
              <span class="badge bg-danger">{{model.scores.attack}}</span>
              <span>生存</span>
              <span class="badge bg-dark-1">{{model.scores.survive}}</span>
            </div>
            <router-link to="/" tag="span" class="text-grey fs-sm">皮肤: 2&gt;</router-link>
          </div>
        </div>
      </div>
      <div class="end">
        <div class>
          <div class="pt-3 fs-lg px-3 bg-white">
            <div class="d-flex jc-around border-b pb-2">
              <router-link to tag="div" class="active pb-2">英雄初识</router-link>
              <router-link to tag="div" class="pb-2">进阶攻略</router-link>
            </div>
          </div>
          <swiper>
            <swiper-slide>
              <div class>
                <div class="p-3 bg-white">
                  <div class="d-flex jc-around pt-1 pb-3">
                    <router-link to tag="button" class="d-flex ai-center jc-center btn flex-1">
                      <i class="iconfont icon-menu text-primary mr-2"></i>
                      <span class="fs-lg">英雄介绍视频</span>
                    </router-link>
                    <router-link to tag="button" class="d-flex ai-center jc-center btn flex-1 ml-2">
                      <i class="iconfont icon-menu text-primary mr-2"></i>
                      <span class="fs-lg">一图识英雄</span>
                    </router-link>
                  </div>
                </div>
                <div class="bg-white px-3 pt-3 skills border-b">
                  <div class="d-flex jc-around">
                    <img
                      v-for="(skill,index) in model.skills"
                      @click="currentSkillIndex = index"
                      :class="{'skill-active': currentSkillIndex === index}"
                      :key="index"
                      :src="skill.icon"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div class="d-flex mt-4 mb-3">
                    <h3 class="m-0 fs-xl">{{currentSkill.name}}</h3>
                    <span
                      class="ml-3 text-white-1"
                    >(冷却值: {{currentSkill.delay}} 消耗:{{currentSkill.cost}})</span>
                  </div>
                  <p class="border-b pb-3">{{currentSkill.description}}</p>
                  <p class="tips text-white-1 pb-3">小提示: {{currentSkill.tips}}</p>
                </div>
                <m-card icon="menu1" title="出装推荐" :detailHero="false" class="px-3">
                  <h2 class="fs-xl mt-2">顺风出装</h2>
                  <div class="d-flex jc-around text-center border-b pb-3">
                    <div v-for="item in model.items1" :key="item._id">
                      <img :src="item.icon" alt width="45" height="45" />
                      <div class="text-white-1 fs-xs">{{item.name}}</div>
                    </div>
                  </div>
                  <h2 class="fs-xl my-3">逆风出装</h2>
                  <div class="d-flex jc-around text-center">
                    <div v-for="item in model.items2" :key="item._id">
                      <img :src="item.icon" alt width="45" height="45" />
                      <div class="text-white-1 fs-xs">{{item.name}}</div>
                    </div>
                  </div>
                </m-card>
                 <m-card icon="menu1" title="铭文推荐" :detailHero="false" class="px-3">
                  <div class="d-flex">
                    <div v-for='(item,i) in model.inscriptionChoice' :key='i' class='d-flex ai-center'>
                      <img :src='item.inscription.icon' width='30' height='30'>
                      <div class='fs-xs'>
                        <p class='fs-md m-0'>{{item.inscription.name}}</p>
                        <p class='m-0'>{{item.inscription.description}}</p>
                      </div>
                    </div>
                  </div>
                </m-card>
                <m-card icon="menu1" title="使用技巧" :detailHero="false" class="px-3">
                  <p class="m-0">{{model.usageTips}}</p>
                </m-card>

                <m-card icon="menu" title="对抗技巧" :detailHero="false" class="px-3">
                  <p class="m-0">{{model.battleTips}}</p>
                </m-card>
                <m-card icon="menu" title="团战思路" :detailHero="false" class="px-3">
                  <p class="m-0">{{model.teamTips}}</p>
                </m-card>
                <m-card icon="menu" title="英雄关系" :detailHero="false" class="px-3">
                  <div class="border-b">
                    <div class='text-black-1 fs-xl'>最佳搭档</div>
                    <div
                      class="d-flex py-3 ai-start partners"
                      v-for="item in model.partners"
                      :key="item._id"
                    >
                      <img :src="item.hero.avator" width="50" height="50" />
                      <p class="ml-2 flex-1 m-0">{{item.description}}</p>
                    </div>
                  </div>
                  <div class="border-b mt-3">
                    <div class='text-black-1 fs-xl'>被谁克制</div>
                    <div
                      class="d-flex py-3 ai-start partners"
                      v-for="item in model.restraint"
                      :key="item._id"
                    >
                      <img :src="item.hero.avator" width="50" height="50" />
                      <p class="ml-2 flex-1 m-0">{{item.description}}</p>
                    </div>
                  </div>
                  <div class="border-b mt-3">
                    <div class='text-black-1 fs-xl'>克制谁</div>
                    <div
                      class="d-flex py-3 ai-start partners"
                      v-for="item in model.continent"
                      :key="item._id"
                    >
                      <img :src="item.hero.avator" width="50" height="50" />
                      <p class="ml-2 flex-1 m-0">{{item.description}}</p>
                    </div>
                  </div>
                </m-card>
              </div>
            </swiper-slide>
            <swiper-slide></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      model: null,
      img: require("../assets//logo.png"),
      currentSkillIndex: 0
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex] || {}
    },
  },
  methods: {
    async fetch() {
      const result = await this.$http.get(`/heroes/${this.id}`);
      this.model = result.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style lang="scss" scope>
@import "../assets/scss/variable";
.page-hero {
  .topbar {
    position: sticky;
    z-index: 10;
    top: 0;
  }
  .container {
    .hero-info {
      height: 50vw;
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
    .info {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
    .badge {
      display: inline-block;
      margin: 0.153846rem 0.25rem;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.6rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transform: scale(0.86);
    }
  }
  .end {
    .btn {
      background-color: #fcfcfc;
      border: 1px solid #eceef0;
      border-radius: 0.384615rem;
      padding: 0.923077rem;
    }
    .active {
      color: map-get($colors, "primary");
      border-bottom: 2px solid map-get($colors, "primary");
    }
  }
  .skills {
    img {
      border: 3px solid transparent;
      border-radius: 50%;
      &.skill-active {
        border: 3px solid map-get($colors, "primary");
      }
    }
  }
  p {
    line-height: 1.615385rem;
  }
  img {
    border-radius: 50%;
  }
  .partners {
    img {
      border-radius: 0.384615rem;
    }
    p{
      word-break:break-all
    }
  }
}
</style>
