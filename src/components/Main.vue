<template>
  <div>
    <div class="topbar d-flex bg-black py-2 px-3 ai-center">
      <img src="../assets//logo.png" alt="logo图标" height="30" />
      <div class="px-2 flex-grow-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-dark-1 fs-xxs">团队成就更多</div>
      </div>
      <div>
        <button class="btn bg-primary px-3 py-1">立即下载</button>
      </div>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class='nav nav-inverse jc-around
      '>
        <div class="nav-item active">
          <router-link to tag="div" class="nav-link">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to tag="div" class="nav-link">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link to tag="div" class="nav-link">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang='scss'>
// 兼容性很差
.topbar {
  position: sticky;
  top: 0;
  z-index: 10
}
</style>
