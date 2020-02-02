<template>
    <div>
        <div class="swiper">
            <el-carousel height="30rem">
                <el-carousel-item v-for="item in swiperList" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="hot">
            <el-row type="flex" justify="center">
                <el-col :span="15">
                    <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix hot-title">
                        <span>热点新闻</span>
                        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        <div class="hot-item">
                            <div class="hot-item-img">
                                <el-image fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></el-image>
                            </div>
                            <div class="hot-item-text">
                                <div class="hot-item-title">
                                    <el-tag effect="plain">
                                        新闻类型1
                                    </el-tag>
                                    <span>这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题</span>
                                </div>
                            </div>
                            <div class="hot-item-detail">
                                <span class="time">发布时间：2020/2/2</span>
                            </div>
                        </div>
                        <el-divider></el-divider>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                    <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix hot-title">
                        <span>公告通知</span>
                        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                    </div>
                    <div v-for="o in 5" :key="o" class="text item">
                        【2020-02-02】关于做好 2020 年接收优秀应届本科毕业生免试攻读研究生工作的通知
                        <el-divider></el-divider>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="news">
            <el-row type="flex" justify="center">
            <el-col :span="10">
               <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix hot-title">
                    <span>综合新闻</span>
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    <div class="news-item">
                        <div class="news-item-img">
                            <el-image fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></el-image>
                        </div>
                        <div class="news-item-text">
                            <div class="news-item-title">
                                <el-tag effect="plain">
                                    新闻类型1
                                </el-tag>
                                <span>这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题</span>
                            </div>
                        </div>
                        <div class="news-item-detail">
                            <span class="time">发布时间：2020/2/2</span>
                        </div>
                    </div>
                    <el-divider></el-divider>
                </div>
                </el-card>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="10">
               <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix hot-title">
                    <span>学术研究</span>
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    <div class="news-item">
                        <div class="news-item-img">
                            <el-image fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></el-image>
                        </div>
                        <div class="news-item-text">
                            <div class="news-item-title">
                                <el-tag effect="plain">
                                    新闻类型1
                                </el-tag>
                                <span>这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题这是新闻标题</span>
                            </div>
                        </div>
                        <div class="news-item-detail">
                            <span class="time">发布时间：2020/2/2</span>
                        </div>
                    </div>
                    <el-divider></el-divider>
                </div>
                </el-card>
            </el-col>
            
            </el-row>
        </div>

        <div class="school">
            <el-row class="school-title" type="flex" justify="center">
                <el-col :span="21" :justify="center">缤纷校园</el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="3" v-for="o in 6" :key="o" class="card-item">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 14px;" class="card-item-text">
                            <span>这是一条很长的新闻标题这是一条很长的新闻标题这是一条很长的新闻标题</span>
                            <div class="bottom clearfix"></div>
                            <el-button type="text" class="button">查看</el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
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
                }
            ]
        }
    }
}
</script>
<style lang="">
    .el-row{
        margin-top: 50px;
    }
    .el-image{
        width: 150px;
        height: 150px;
    }
    .hot{
        width:100%;
        padding: 10px 0px 50px 0px;
        background:#fff;
    }
    .hot-title{
        font-size: 20px;
        color: #409eff;
    }
    .hot-item{
        position: relative;
    }
    .hot-item-img img{
        position: absolute;
        
    }
    .hot-item-text{
        position: absolute;
        top: 0;
        left: 200px;
    }
    .hot-item-detail{
        position: absolute;
        left: 200px;
        bottom: 0;
    }
    .news-item{
        position: relative;
    }
    .news-item-img img{
        position: absolute;
        
    }
    .news-item-text{
        position: absolute;
        top: 0;
        left: 200px;
    }
    .news-item-detail{
        position: absolute;
        left: 200px;
        bottom: 0;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .school-title{
        font-size: 20px;
        color: #409eff;
    }
    .card-item{
        margin-right:50px;
        margin-bottom: 100px;
    }
    .card-item-text{
        margin-bottom: 30px;
    }
</style>