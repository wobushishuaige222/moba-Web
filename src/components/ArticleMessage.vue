<template>
  <div class="article-message" v-if="model">
    <div class="d-flex py-2 border-b">
      <div @click="back" class="text-blur pl-2 pr-1">&lt;</div>
      <strong class="flex-1 text-blur">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.updatedAt|dateFilters}}</div>
    </div>
    <div class="model-body px-3 border-b" v-html="model.body"></div>
    <div class="p-3">
      <div class="d-flex py-2">
        <i class="iconfont icon-menu"></i>
        <div class="text-blur ml-2">相关资讯</div>
      </div>
      <router-link
        :to="`/article/${i._id}`"
        tag="div"
        v-for="i in model.related"
        :key="i._id"
        class='my-1'
      >{{i.title}}</router-link>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  name: "article-message",
  props: {
    id: {
      required: true
    }
  },
  filters: {
    dateFilters: function(value) {
      return dayjs(value).format("MM/DD");
    }
  },
  watch: {
    '$route'() {
      this.fetch()
    }
  },
  data() {
    return {
      model: null,
      test: ''
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
      console.log('model', this.model)
    },
    back() {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>
<style lang="scss">
.model-body {
  img {
    max-width: 100%;
  }
}
</style>
