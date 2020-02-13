<template>
  <div class="header">
    <el-image class="himg" fit="cover" :src="src" style="width:100%;height:200px;"></el-image>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        src: 'https://www.sise.edu.cn/Public/images/sisejie.png'
      }
    }
  }
</script>
<style lang="">
  .header{
    width: 100%;
    height: 200px;
  }
</style>