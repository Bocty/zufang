<template>
  <div>
    <van-nav-bar left-arrow>
      <template #right>
        <van-button type="primary" size="mini">迷你按钮</van-button>
      </template>
    </van-nav-bar>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
    </van-popup>
    <van-card
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.houseImg"
      v-for="(item, index) in res2List"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  async created () {
    const res1 = await this.$axios.get('houses/condition?id=AREA%7C88cff55c-aaa4-e2e0')
    console.log(res1)
    res1.data.body.area.children[0].children = [{ label: '' }]
    res1.data.body.subway.children[0].children = [{ label: '' }]
    this.columns = [res1.data.body.area, res1.data.body.subway]
    this.columns1 = res1.data.body.rentType
    this.columns2 = res1.data.body.price
    const res2 = await this.$axios.get('houses?cityId=AREA%7Ca6649a11-be98-b150&stat=1&end=20')
    console.log('res2', res2)
    this.res2List = res2.data.body.list
  },
  data () {
    return {
      columns: [

      ],
      columns1: [

      ],
      columns2: [
        {
          text: '浙江'

        },
        {
          text: '福建'

        }
      ],
      flag: false,
      res2List: {},
      count: 0,
      loading: false

    }
  },
  methods: {

    onRefresh () {

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background-color: #21b97a;
}
/deep/.van-nav-bar__text {
  color: #fff;
}
/deep/ .van-nav-bar .van-icon {
  color: #fff;
}
.van-pull-refresh {
  margin-bottom: 60px;
}
.van-button {
  // position: absolute;
  right: 30px;
  width: 274px;
  height: 33px;
}
</style>
