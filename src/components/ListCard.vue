<template>
    <m-card :title='title' :icon='icon'>
     <div class="nav" >
          <div class="nav-item" :class="{active: active == i}" v-for='(item,i) in categories' :key='i'>
            <div class="nav-link" @click='$refs.list.swiper.slideTo(i)'>{{item.name}}</div>
          </div>  
        </div>
        <div class="pt-3" >
          <swiper ref='list' @slide-change='() => active = $refs.list.swiper.realIndex'>
            <swiper-slide  v-for='(n,i) in categories' :key='i'>
              <!-- 具名插槽 -->
              <!-- <slot name='items' :category='n'></slot> -->
              <!-- 作用域插槽 -->
               <slot :category='n'></slot>
            </swiper-slide>
          </swiper>
        </div>
    </m-card>
</template>
<script>
export default {
    name:'list-card',
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      categories: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        active: 0
      }
    }
}
</script>