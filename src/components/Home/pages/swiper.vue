<template>
    <div class="swiper">
        <el-carousel width="100%" height="300px;">
            <el-carousel-item v-for="item in swiperList" :key="item.id">
                <el-image fit="fill" :src="item.imgUrl"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swiperList:[
                {
                    id:"01",
                    imgUrl:"https://www.sise.edu.cn/Uploads/2019-12-30/5e0961d375dc4.jpg"
                },
                {
                    id:"02",
                    imgUrl:"https://www.sise.edu.cn/Uploads/2019-12-30/5e09a503a7892.jpg"
                },
                {
                    id:"03",
                    imgUrl:"https://www.sise.edu.cn/Uploads/2019-12-30/5e09a503a7892.jpg"
                },
            ]
        }
    }
}
</script>
<style>
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .swiper{
      width:100%;
  }
</style>