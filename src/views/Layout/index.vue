<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/homepage" icon="home-o">
        首页
        <template #icon>
          <i class="toutiao toutiao-shouye"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/find" icon="search"
        >找房<template #icon> <i class="toutiao toutiao-sousuo"></i> </template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/info" icon="search"
        >资讯<template #icon> <i class="toutiao toutiao-yuedu"></i> </template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search"
        >我的<template #icon> <i class="toutiao toutiao-wode"></i> </template
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.toutiao {
  font-size: 20px;
}

/deep/.van-tabbar-item__text {
  font-size: 10px !important;
}
.van-tabbar {
  z-index: 0;
}
</style>
