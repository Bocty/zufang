<template>
  <div>
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit" class="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <p class="zhuce">还没有账号，去注册~</p>
    </van-form>
  </div>
</template>

<script>
import { Login } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'Login',
  created () { },
  data () {
    return {
      username: 'bocty1',
      password: '330681qwer',
      time: 5 * 1000
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    async onSubmit (values) {
      try {
        const res = await Login(values)
        console.log(res)
        console.log(res.data.status)
        if (res.data.status === 200) {
          this.$store.commit('setUser', res.data.body)
          this.$router.push({ name: 'my' })
        } else {
          Toast.fail('账号或密码错误')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.zhuce {
  color: #666;
  font-size: 14px;
  text-align: center;
}
</style>
