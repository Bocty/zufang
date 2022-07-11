<template>
  <div>
    <van-nav-bar
      title="发布房源"
      left-arrow
      @click-left="$router.back('/homepage')"
    />
    <div class="maintop">
      <div class="information">房源信息</div>
      <hr />
      <div class="roomname">
        <span class="left">小区名称</span
        ><span class="right">请输入小区名称<van-icon name="arrow" /></span>
      </div>
      <hr />
      <div class="price">
        <span>租金</span>
        <input type="text" placeholder="请输入" />
        <span>￥/月</span>
      </div>
      <hr />
      <div class="measure">
        <span>建筑面积</span>
        <input type="text" placeholder="请输入" />
        <span>m²</span>
      </div>
      <hr />
      <div class="housetype">
        <van-cell-group @click="showPopup1">
          <van-cell title="户型" value="内容"
            >请选择<van-icon name="arrow"
          /></van-cell>
        </van-cell-group>
        <van-popup v-model="show1" position="bottom"
          ><van-picker show-toolbar :columns="columns1"
        /></van-popup>
      </div>
      <div class="housefloor">
        <van-cell-group @click="showPopup2">
          <van-cell title="所在楼层" value="内容"
            >请选择<van-icon name="arrow"
          /></van-cell>
        </van-cell-group>
        <van-popup v-model="show2" position="bottom"
          ><van-picker show-toolbar :columns="columns2"
        /></van-popup>
      </div>
      <div class="housedirection">
        <van-cell-group @click="showPopup3">
          <van-cell title="朝向" value="内容"
            >请选择<van-icon name="arrow"
          /></van-cell>
        </van-cell-group>
        <van-popup v-model="show3" position="bottom"
          ><van-picker show-toolbar :columns="columns3"
        /></van-popup>
      </div>

      <div class="housetitle">
        <p>房屋标题</p>
        <input
          type="text"
          placeholder="请输入标题(例如:整租 小区名 2室 5000元)"
        />
      </div>

      <hr />
      <div class="houseimg">
        <p>房屋图像</p>
        <van-uploader :after-read="afterRead" />
      </div>
      <div class="houseconfigure">
        <p>房屋配置</p>
        <van-grid :column-num="5"  :gutter="0">
          <van-grid-item icon="location-o" text="文字" />
          <van-grid-item icon="like-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </div>
    </div>
    <div class="white1"></div>
    <div class="mainbottom">
      <div class="describe">
        <p>房屋描述</p>
        <van-field
          v-model="message"
          rows="2"
          autosize
          type="textarea"
          placeholder="请输入留言"
          show-word-limit
          style="height: 100px"
        />
      </div>
    </div>
    <div class="white2"></div>

    <div class="bottom">
      <div class="left">取消</div>
      <div class="right">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      columns1: ['一室', '二室', '三室', '四室', '四室+'],
      columns2: ['高楼层', '中楼层', '低楼层'],
      columns3: ['东', '南', '西', '北', '东南', '东北', '西北', '西南']
    }
  },
  methods: {
    showPopup1 () {
      this.show1 = true
    },
    showPopup2 () {
      this.show2 = true
    },
    showPopup3 () {
      this.show3 = true
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.maintop {
  padding: 10px;
  // background-color: pink;
}
.mainbottom {
  padding: 10px;
  // background-color: pink;
}
.information {
  font-size: 16px;
  margin: 5px 15px 9px 15px;
  color: #61b9a5;
}
.roomname {
  font-size: 14px;
  margin: 5px 15px 5px 15px;
  .right {
    position: absolute;
    right: 10px;
  }
}
.price {
  margin: 5px 5px 5px 5px;
  span {
    font-size: 14px;
    width: 60px;
    display: inline-block;
    text-align: center;
  }
  input {
    width: 210px;
    margin-left: 10px;
  }
}
.measure {
  margin: 5px 5px 5px 5px;
  span {
    width: 60px;
    display: inline-block;
    font-size: 14px;
    text-align: center;
  }
  input {
    width: 210px;
    margin-left: 10px;
  }
}
.housetitle {
  margin: 5px 5px 15px 5px;
}
.houseimg {
  margin: 5px 5px 15px 5px;
}
.white1 {
  width: 100vw;
  height: 20px;
  background-color: #f6f5f6;
  padding: none !important;
}
.white2 {
  width: 100vw;
  height: 20px;
  background-color: #f6f5f6;
  padding: none !important;
  margin-bottom: 50px;
}
/deep/.van-grid-item__content::after{
  border: none !important;
}
input::-webkit-input-placeholder {
  /* placeholder字体大小  */
  font-size: 14px;
}
.bottom {
  width: 100vw;
  height: 50px;
  background-color: pink;
  position: fixed;
  bottom: 0;
  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    line-height: 50px;
    background-color: #fff;
    text-align: center;
    color: #21b97a;
    font-size: 15px;
  }
  .right {
    text-align: center;
    line-height: 50px;
    position: absolute;
    right: 0;
    width: 50%;
    font-size: 15px;

    height: 100%;
    color: #fff;
    background-color: #21b97a;
  }
}
</style>
