<template>
  <div id="app">
    <!--   顶部 -->
    <div id="top"></div>
    <!--头部返回等-->
    <div id="header">
      <img
        src="../../assets/images/live/back.svg"
        alt=""
        class="header-back"
        @click="goBack()"
      />
      <div class="live">直播专区</div>
      <el-button type="danger" round icon="el-icon-data-board" @click="live()"
        >发起直播</el-button
      >
    </div>
    <!-- 直播模板 -->
    <!--     <div id="component-live" v-for="item in liveInfo" :key="item.id">
      <div id="video-live" @click="lookLive()">
        <img
          src="https://img0.baidu.com/it/u=711328619,1513537385&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
          alt=""
          class="video-live-img"
        />
         <div style="float:right;">能成功吗</div>
        <div class="title">
          {{ item.title }}
        </div>
      </div>
    </div> -->


  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      liveInfo: [
        {
          id: 1,
          title: "nihaonihaonihaonihaonihaonihaonihaonihao",
        },
        {
          id: 2,
          title: "nihao",
        },
        {
          id: 3,
          title: "nihao",
        },
      ],
    };
  },
  methods: {
    goBack() {
      console.log("能返回嘛？");
    },
    live() {
      console.log("我再点击直播");
    },
    lookLive() {
      console.log("看直播了");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style scoped>
#top {
  height: 1rem;
  width: 100%;
}
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2;
}
.header-back {
  float: left;
  height: 1rem;
  text-align: center;
  margin-left: 2%;
}
.live {
  float: left;
  text-align: center;
  margin: auto;
}
.el-button {
  float: right;
  margin-right: 2%;
  padding: 3px 12px;
}
#video-live {
  float: left;
  width: 45%;
  margin: 6% 3% 0 2%;
}
.video-live-img {
  width: 100%;
  height: 75%;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5%;
}

</style>