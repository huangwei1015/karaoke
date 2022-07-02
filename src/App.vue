<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  padding: 0;
  margin: 0;
}
/* 解决上传无边框问题 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
}
</style>
