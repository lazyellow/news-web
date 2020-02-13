<template>
    <div>
        <div class="f-swiper">
            <el-carousel height="400px">
                <el-carousel-item v-for="item in swiperList" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="f-hot">
            <el-row type="flex" justify="center">
                <el-col :span="15">
                    <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix f-hot-title">
                        <span>热点新闻</span>
                        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                    </div>
                    <div v-for="item in hotList.slice(0,4)" :key="item.id" class="text item">
                        <div class="f-hot-item">
                            <div class="f-hot-item-img">
                                <el-image fit="cover" :src="item.imgUrl"></el-image>
                            </div>
                            <div class="f-hot-item-text">
                                <div class="f-hot-item-title">
                                    <el-tag effect="plain">
                                        {{item.category}}
                                    </el-tag>
                                    <span>{{item.title}}</span>
                                </div>
                            </div>
                            <div class="f-hot-item-detail">
                                <span class="time">发布时间：{{item.time}}</span>
                            </div>
                        </div>
                        <el-divider></el-divider>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                    <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix f-hot-title">
                        <span>公告通知</span>
                        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                    </div>
                    <div v-for="item in noticeList.slice(0,8)" :key="item.id" class="text-item">
                        【{{item.year}}-{{item.day}}】{{item.title}}
                        <el-divider></el-divider>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="f-news">
            <el-row type="flex" justify="center">
            <el-col :span="10">
               <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix f-news-title">
                    <span>综合新闻</span>
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div v-for="item in newsList.slice(0,4)" :key="item.id" class="text item">
                    <div class="f-news-item">
                        <div class="f-news-item-img">
                            <el-image fit="cover" :src="item.imgUrl"></el-image>
                        </div>
                        <div class="f-news-item-text">
                            <div class="f-news-item-title">
                                {{item.title}}
                            </div>
                        </div>
                        <div class="f-news-item-detail">
                            <span class="time">发布时间：{{item.time}}</span>
                        </div>
                    </div>
                    <el-divider></el-divider>
                </div>
                </el-card>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="10">
               <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix f-news-title">
                    <span>学术研究</span>
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div v-for="item in dynamicList.slice(0,4)" :key="item.id" class="text item">
                    <div class="f-news-item">
                        <div class="f-news-item-img">
                            <el-image fit="cover" :src="item.imgUrl" alt=""></el-image>
                        </div>
                        <div class="f-news-item-text">
                            <div class="f-news-item-title">
                                {{item.title}}
                            </div>
                        </div>
                        <div class="f-news-item-detail">
                            <span class="time">发布时间：{{item.time}}</span>
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
                <el-col :span="21" justify="center">校园人物</el-col>
            </el-row>
            
            <el-row type="flex" justify="center">
                <el-col :span="24">
                    <ul>
                        <li v-for="item in peopleList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id">
                            <div class="school-item">
                                <div class="item-image">
                                    <el-image fit="cover" :src="item.imgUrl"></el-image>
                                </div>
                                <div class="item-title">{{item.title}}</div>
                            </div>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:['hotList','newsList','dynamicList','peopleList','noticeList'],
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
            ],
            // 每页显示的条数
            pagesize:8,
            // 默认初始页面
            currentPage:1
        }
    }
}
</script>
<style lang="">
    .f-swiper{
        background-color: gray;
    }
    .f-swiper img{
        width: 100%;
        display: block;
    }
    .el-row{
        margin-top: 50px;
    }
    .el-image{
        width: 150px;
        height: 150px;
    }
    .f-hot{
        width:100%;
        padding: 10px 0px 50px 0px;
        background:#fff;
    }
    .f-hot-title{
        font-size: 20px;
        color: #409eff;
    }
    .f-hot-item-title{
        font-size: 18px;
    }
    .f-hot-item-title:hover{
        color: #409effcc;
    }
    .f-hot-item{
        position: relative;
    }
    .f-hot-item-img img{
        position: absolute;
        
    }
    .f-hot-item-text{
        position: absolute;
        top: 0;
        left: 200px;
    }
    .f-hot-item-detail{
        position: absolute;
        left: 200px;
        bottom: 0;
    }

    .text-item:hover{
        color: #409effcc;
    }
    .f-news-title{
        font-size: 20px;
        color: #409eff;
    }
    .f-news-item{
        position: relative;
    }
    .f-news-item-img img{
        position: absolute;
        
    }
    .f-news-item-title{
        font-size: 18px;
    }
    .f-news-item-title:hover{
        color: #409effcc;
    }
    .f-news-item-text{
        position: absolute;
        top: 0;
        left: 200px;
    }
    .f-news-item-detail{
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

    .school-title{
        font-size: 20px;
        color: #409eff;
    }

    ul{
        margin-left: 120px;
    }
    li{
        float: left;
        display: list-item;
        list-style: none outside none;
        margin-right: 120px;
    }
    .school .el-image{
        width: 320px;
        height: 200px;
    }
    .school-item{
        width: 320px;
        height: 300px;
        margin-bottom: 50px;
        border-bottom: 0.05px solid #e4e4e4;
    }
    .school-item:hover{
        color: #409effcc;
    }
    .item-image{
        margin-bottom: 20px;
    }
    .item-title{
        font-size:18px;
    }
</style>