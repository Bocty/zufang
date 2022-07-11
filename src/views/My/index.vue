<template>
  <div>
    <!-- 登录 -->
    <div v-if="user && user.token" class="isloginheader">
      <van-image :src="baseurl + userinfo.avatar" class="topimg" />
      <div class="details">
        <van-image round :src="baseurl + userinfo.avatar" />
        <div class="youke">{{ userinfo.nickname }}</div>
        <van-button
          round
          type="info"
          class="gologout"
          @click="logout"
          color="#21b97a"
          >退出</van-button
        >
        <p class="xiangqing">编辑个人资料<van-icon name="arrow" /></p>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="header">
      <van-image
        src="http://liufusong.top:8080/img/profile/bg.png"
        class="topimg"
      />
      <div class="details">
        <van-image round :src="baseurl + userinfo.avatar" />
        <div class="youke">游客</div>
        <van-button
          round
          type="info"
          class="gologin"
          @click="$router.push('/login')"
          color="#21b97a"
          >去登陆</van-button
        >
      </div>
    </div>

    <!-- <div class="headportrait"></div> -->
    <!-- <van-grid :column-num="3" class="jump">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
      <van-grid :border="false" :column-num="3"> </van-grid>
    </van-grid> -->
    <van-grid :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="underway-o" text="看房记录" />
      <van-grid-item icon="coupon-o" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <van-image
      width="345px"
      height="85px"
      class="endimg"
      src="http://liufusong.top:8080/img/profile/join.png"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/my'
export default {
  async created () {
    if (this.user && this.user.token) {
      try {
        const res1 = await getUserInfo()
        console.log('res1', res1)
        this.userinfo = res1.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return { userinfo: [] }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗？' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: { ...mapState(['user', 'baseurl']) },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  width: 375px;
  height: 310px;
  .topimg {
    width: 375px;
    height: 191px;
    position: absolute;
  }
  .details {
    top: 138px;
    .van-image {
      width: 70px;
      height: 70px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .youke {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top: 55px;
    }
    .gologin {
      width: 72px;
      height: 20px;
      top: 90px;
      line-height: 1.15;
      left: 50%;
      transform: translate(-50%, 0);
      position: absolute;
      font-size: 13px;
    }
  }
}
.details {
  width: 320px;
  height: 165px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  position: absolute;
  justify-content: center;
  // top: 130px;
  left: 50%;
  transform: translate(-50%);
  font-size: 13px;
}
.isloginheader {
  .topimg {
    width: 375px;
    height: 375px;
  }
  .details {
    width: 320px;
    height: 210px;
    top: 170px;
    text-align: center;
    .van-image {
      align-items: center;
      left: 50%;
      position: absolute;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      transform: translate(-50%, -50%);
    }
    .gologout {
      width: 60px;
      height: 20px;
      line-height: 1.15;
      text-align: center;
      font-size: 13px;
    }
    .youke {
      margin-top: 55px;
    }
    .xiangqing {
      margin-top: 20px;
      color: #999;
    }
  }
}
.endimg {
  left: 15px;
  height: 15px;
}
</style>
