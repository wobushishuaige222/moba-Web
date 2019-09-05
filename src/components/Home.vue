<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" class="w_100" alt="3" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg" class="w_100" alt="2" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg" class="w_100" alt="1" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pb-3">
      <div class="d-flex f-wrap">
        <div class="nav-item mt-3" v-for="(n, index) in navFonts" :key="index">
          <i
            class="sprite sprite-news"
            :style="{'background-position': n.position,'width':index==6?'2.307692rem':'1.769231rem'}"
          ></i>
          <div
            :class="{'text-dark-1': n.fontType === 1}"
            class="py-2"
            :style="{'opacity': n.fontType === 1? .6:.8}"
          >{{n.font}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center ai-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span class="text-dark">收起</span>
      </div>
    </div>
    <list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <!-- 具名插槽 -->
      <!-- <template #items='{category}'>
         <div class="py-2 d-flex" v-for="(item,index) in category.newsList" :key="index">
            <span class='text-grey'>[{{item.categoryName}}]</span>
            <span class='mx-2'>|</span>
            <span class='flex-grow-1'>{{item.title}}</span>
            <span class='text-grey'>{{item.date}}</span>
          </div>
      </template>-->
      <!-- 作用域插槽  -->
      <template v-slot="scope">
        <router-link tag='div' :to="`/article/${item._id}`"  class="py-2 d-flex fs-lg" v-for="(item,index) in scope.category.newsList" :key="index">
          <span class="text-grey">[{{item.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-ellipsis">{{item.title}}</span>
          <span class="text-grey fs-sm">{{item.createdAt|date}}</span>
        </router-link>
      </template>
    </list-card>

    <list-card icon="card-hero" title="英雄列表" :categories="heroesCats">
      <template v-slot="scope">
        <div  class="d-flex f-wrap" style='margin: 0 -0.5rem'>
          <router-link tag='div' :to="`/hero/${item._id}`" class="p-2 text-center" style='width: 20%' v-for="(item,index) in scope.category.heroList" :key="index">
            <img :src="item.avator" class='w_100'/>
            <div>{{item.name}}</div>
          </router-link>
        </div>
      </template>
    </list-card>
    <m-card title="精彩视频" icon="menu"></m-card>
    <m-card title="图文攻略" icon="menu"></m-card>
    <m-card title="皮肤特卖" icon="menu"></m-card>
    <m-card title="VIP会员升级" icon="menu"></m-card>
  </div>
</template>

<script>
const dayjs = require("dayjs");
export default {
  filters: {
    date: function(value) {
      return dayjs(value).format("MM/DD");
    }
  },
  name: "home",
  mounted() {
    this.fetchNewsCats();
    this.fetchHeroesCats();
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      navFonts: [
        {
          font: "爆料站",
          fontType: 1,
          position: "63.546% 15.517%"
        },
        {
          font: "故事站",
          fontType: 1,
          position: "90.483% 15.614%"
        },
        {
          font: "周边商城",
          fontType: 1,
          position: "36.746% 0.924%"
        },
        {
          font: "体验服",
          fontType: 1,
          position: "10.408% 15.517%"
        },
        {
          font: "新人专区",
          fontType: 2,
          position: "89.733% 1.266%"
        },
        {
          font: "荣耀-传承",
          fontType: 2,
          position: "36.467% 15.287%"
        },
        {
          font: "同人社区",
          fontType: 2,
          position: "9.728% 1.266%"
        },
        {
          font: "王者营地",
          fontType: 1,
          position: "63.3% 0.927%"
        },
        {
          font: "公众号",
          fontType: 2,
          position: "0 96.207%"
        },
        {
          font: "版本介绍",
          fontType: 2,
          position: "90.057% 41.387%"
        }
      ],
      newsCats: [],
      heroesCats: []
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/List");
      this.newsCats = res.data;
    },
    async fetchHeroesCats() {
      const res = await this.$http.get("/heroes/list");
      this.heroesCats = res.data;
    }
  }
};
</script>
<style lang='scss'>
@import "../assets/scss/variable";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.153846rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}

.more {
  background: url("../assets/images/menu.png") no-repeat no-repeat center
    center/100% 100%;
  display: inline-block;
  width: 16px;
  height: 16px;
}
</style>