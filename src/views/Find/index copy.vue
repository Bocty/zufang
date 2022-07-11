<template>
  <div>
    <div class="head">
      <van-icon name="arrow-left" class="leftback" /><Header
        class="header"
      ></Header>
    </div>

    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="linevalue">
            <van-image
              width="106px"
              height="80px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="details">
              <h3 class="HouseItem_title">汤臣一品</h3>
              <div class="place">五室三厅</div>
              <van-tag type="primary" color="#e1f5f8">标签</van-tag>
              <div class="price">
                <i class="number">22</i><span class="company">元/月</span>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh> -->
    <div class="topup" v-if="active !== 3">
      <van-tabs v-model="active" @click="isshowPopup = true">
        <van-tab title="标签 1"></van-tab>
        <van-tab title="标签 2"></van-tab>
        <van-tab title="标签 3"></van-tab>
        <van-tab title="标签 4"></van-tab>
      </van-tabs>
      <van-popup v-model="isshowPopup" class="top">
        <van-tabs v-model="active" @click="isshowPopup = true">
          <van-tab title="标签 1"></van-tab>
          <van-tab title="标签 2"></van-tab>
          <van-tab title="标签 3"></van-tab>
          <van-tab title="标签 4"></van-tab>
          <div class="box">123</div>
        </van-tabs>
      </van-popup>
    </div>
    <van-popup
      v-model="isshowPopup"
      position="right"
      :style="{ width: '80%', height: '100%' }"
      v-else-if="active === 3"
      class="right"
    ></van-popup>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
    <div>223</div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import { Toast } from 'vant'
export default {
  created () { },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      isshowPopup: false,
      show: false,
      active: 0
    }
  },

  methods: {
    onLoad () { }
    // showPopup () {
    //   this.show = true
    // }

  },

  computed: {},
  watch: {},
  filters: {},
  components: { Header }
}
</script>

<style scoped lang='less'>
.head {
  background: #21b97a;
  .leftback {
    top: 3px;
  }
  .header {
    display: inline-block;
  }
}
.van-tabs {
  position: sticky;
  top: 0;
  z-index: 200;
}
/deep/.van-tabs__wrap {
  position: sticky;
  top: 0;
}
.topup {
  position: sticky !important;
  width: 100%;
  top: 0px;
}
/deep/.top van-popup van-popup--center {
  height: 300px;
  width: 375px;
  display: none;
  position: sticky !important;
}
.van-popup--center {
  transform: none;
  // top: none;
  left: 0;
}
.van-popup {
  top: 0px;
  width: 375px;
  height: 300px;
  max-height: none;
  position: absolute !important;
}
.list {
  margin: 10px;
  // display: flex;
  // height: calc(100vh - 158px);
  // position: relative;
  .linevalue {
    position: relative;
    height: 120px;
    .van-image {
      position: absolute;
      left: 0;
    }
    .details {
      top: -5px;
      position: absolute;
      left: 120px;
      h3 {
        font-size: 15px;
      }
      .place {
        font-size: 12px;
        color: #afb2b3;
      }
      .van-tag {
        top: -12px;
        color: #39becd;
      }
      .price {
        margin-top: -20px;
        .number {
          font-size: 16px;
          font-weight: bolder;
        }
        .company {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
