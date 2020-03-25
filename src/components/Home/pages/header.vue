<template>
  <div class="header">
    <el-image class="himg" fit="cover" :src="src" style="width:100%;height:100px;"></el-image>
    <!-- <el-image class="himg" fit="cover" src="" style="width:100%;height:200px;"></el-image> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        src: 'http://47.101.150.127:3030/admin/news/blobinfo-1585068703167.png'
      }
    }
  }
</script>
<style scoped>
  .header{
    width: 100%;
    height: 100px;
  }
</style>