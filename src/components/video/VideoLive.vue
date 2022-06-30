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
      <el-button type="danger" round @click="dialogVisible = true"
        class="brgin-live-button">发起直播</el-button
      >
      <!--       <Button type="error" shape="circle" >
        <Icon custom="i-icon i-icon-shop_fill" size="24" />
        发起直播</Button
      > -->
    </div>

    <!-- 直播模板 -->
    <div id="video-live" v-for="(item, index) in liveInfo" :key="item.id">
      <div id="video-live-img" :class="bgImg[index]">
        <div class="left">
          <img src="@/assets/images/live/hot.svg" alt="" class="left-img" />
          显示
        </div>
        <div class="right">右边</div>
      </div>
      <div class="title">
        {{ item.title }}
      </div>
    </div>

    <!-- 泡泡弹出 -->

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="70%"
      :center="true"
      :show-close="false"
      :limit="1"
    >
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <!-- 编辑直播  -->
      <el-button plain icon="el-icon-edit" type="info" class="edit-live"
        >编辑直播标题</el-button
      >
      <el-button type="danger" round class="begin-live">发起直播</el-button>
    </el-dialog>

    <Modal v-model="modal1" title="">
      <Upload
        ref="upload"
        :show-upload-list="false"
        :format="['jpg', 'jpeg', 'png']"
        multiple
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block; width: 58px"
      >
        <div style="width: 58px; height: 58px; line-height: 58px">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      modal1: false,
      imageUrl: "",
      liveInfo: [
        {
          id: 1,
          title: "nihaonihaonihaonihaonihaonihaonihaonihao",
          img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091103%2F3q1o1hb545c3q1o1hb545c.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659106568&t=b7d8d03780ca2f11426af5d390be6010",
        },
        {
          id: 2,
          title: "nihao",
          img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-090914%2Fjenayqdgf5qjenayqdgf5q.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659106578&t=2a7ada6cce28b4e535afa38a76a12837",
        },
        {
          id: 3,
          title: "nihao",
          img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-090915%2Fmu505pvrlwtmu505pvrlwt.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659104408&t=8a679dc24db6ed602b6ef9c4e69a0fd1",
        },
      ],
      bgImg: ["bg1", "bg2", "bg3"],
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
  },
};
</script>

<style scoped>
.bg1 {
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-090915%2Fmu505pvrlwtmu505pvrlwt.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659104408&t=8a679dc24db6ed602b6ef9c4e69a0fd1);
}
.bg2 {
  background-image: url(https://img0.baidu.com/it/u=4114954710,4054661963&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800);
}
.bg3 {
  background-image: url(https://img0.baidu.com/it/u=751215928,1020074019&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500);
}
#top {
  height: 1rem;
  width: 100%;
}
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2;
  padding: 0 2%;
}
.header-back {
  float: left;
  height: 1rem;
  text-align: center;
}
.live {
  float: left;
  text-align: center;
  margin: auto;
}
.brgin-live-button {
   padding: 6px 12px;
}
#video-live {
  float: left;
  width: 46%;
  height: 20vh;
  margin: 2%;
  border-radius: 5% 5% 0 0;
}
#video-live-img {
  width: 100%;
  height: 80%;
  border-radius: 5% 5% 0 0;
}
.left {
  float: left;
  width: 50%;
  height: 1.5em;
  background-color: rgb(215, 46, 53);
  border-radius: 5% 0 0 0;
  text-align: center;
  vertical-align: middle;
}
.right {
  float: right;
  width: 50%;
  line-height: 1.5em;
  border-radius: 0 5% 0 0;
  background-color: rgb(0, 1, 38);
  text-align: calc();
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5%;
}
.left-img {
  width: 0.7em;
}

/* 上传海报 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
.el-dialog--center .el-dialog__body{
  text-align: center;
}
.edit-live{
  margin: 2em 0;
  width: 70%;
}
.begin-live{
  width: 70%;
}

.i-icon {
  display: inline-block;
  font-family: "custom-font" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
</style>