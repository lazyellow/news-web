<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <el-image :src="src"></el-image>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>
<style lang="">
.demo-image__placeholder{
    width: 100%;
    height: 10rem;
}
.demo-image__placeholder .block{
    width: 100%;
    height: 100%;
}
.demo-image__placeholder .block img{
    width: 100%;
    height: 10rem;
}
</style>