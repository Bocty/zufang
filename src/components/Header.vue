<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #label>
        <router-link to="/city" style="color: black" class="city"
          ><span>深圳</span><van-icon name="arrow-down" class="dropdown" />
        </router-link>
      </template>

      <template #action>
        <div @click="onSearch"><van-icon name="location-o" size="30" /></div>
      </template>
    </van-search>
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
.van-search__action {
  background-color: rgba(0, 0, 0, 0);
}
.van-search {
  background-color: rgba(0, 0, 0, 0);
}
.dropdown {
  margin-left: 8px;
  font-size: 5px;
  display: inline-block;
}
.city {
  border-right: solid 1px #e6e6e6;
  padding-right: 10px;
}
</style>
