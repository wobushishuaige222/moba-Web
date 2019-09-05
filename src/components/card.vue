<template>
  <div class="card bg-white mt-3" :class="{'p-3':detailHero,'py-3': !detailHero}">
    <div class="card-header d-flex ai-center pb-3" :class="{'border-b': detailHero}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <h2 class="fs-xl flex-1 px-2 m-0">{{title}}</h2>
      <i class="more" v-show='detailHero'></i>
    </div>
    <div class="card-body pt-3">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props:{
    title: {
        required: true,
        type: String
    },
    icon: {
        type: String,
        required: true
    },
    detailHero: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      active:0
    };
  }
};
</script>
<style lang="scss">
@import '../assets/scss/variable';
    .card {
        border-bottom: 1px solid #dcdcdc;
    }
</style>