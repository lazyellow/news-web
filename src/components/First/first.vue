<template>
    <div>
        <div class="f-swiper">
            <el-carousel height="400px">
                <el-carousel-item   v-for="item in SwiperList" :key="item.news_id">
                    <img @click='getNewsDetail(item.news_id)' :src="item.img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="f-hot">
            <el-row type="flex" justify="center">
                <el-col :span="15">
                    <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix f-hot-title">
                        <span>热点新闻</span>
                        <el-button style="float: right; padding: 3px 0" type="text"
                            @click="getMore('hot')">
                            更多
                        </el-button>
                    </div>
                    <div v-for="item in HotList.slice(0,5)" :key="item.news_id" class="text item">
                        <div class="f-hot-item" @click="getNewsDetail(item.news_id)">
                            <div class="f-hot-item-img">
                                <el-image fit="cover" :src="item.news_source"></el-image>
                            </div>
                            <div class="f-hot-item-text">
                                <div class="f-hot-item-title">
                                    <el-tag effect="plain">
                                        {{item.Category.category_name}}
                                    </el-tag>
                                    <span>{{item.news_title}}</span>
                                </div>
                            </div>
                            <div class="f-hot-item-detail">
                                <span class="time">发布时间：{{item.news_time}}</span>
                                <span class="time">阅读量：{{item.read_amount}}</span>
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
                        <el-button style="float: right; padding: 3px 0" type="text"
                            @click="getMore(NoticeList[0].Category.category_id)">
                            更多
                        </el-button>
                    </div>
                    <div class="text-item"
                         v-for="item in NoticeList.slice(0,8)" :key="item.news_id"
                         @click="getNewsDetail(item.news_id)">
                        【{{item.news_time}}】{{item.news_title}}
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
                    <el-button style="float: right; padding: 3px 0" type="text"
                        @click="getMore(NewsList[0].Category.category_id)">
                        更多
                    </el-button>
                </div>
                <div class="text item" 
                    v-for="item in NewsList.slice(0,5)" :key="item.news_id" 
                    @click="getNewsDetail(item.news_id)">
                    <div class="f-news-item">
                        <div class="f-news-item-img">
                            <el-image fit="cover" :src="item.news_source"></el-image>
                        </div>
                        <div class="f-news-item-text">
                            <div class="f-news-item-title">
                                {{item.news_title}}
                            </div>
                        </div>
                        <div class="f-news-item-detail">
                            <span class="time">发布时间：{{item.news_time}}</span>
                            <span class="time">阅读量：{{item.read_amount}}</span>
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
                    <span>学术动态</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                        @click="getMore(AcademicList[0].Category.category_id)">
                        更多
                    </el-button>
                </div>
                <div v-for="item in AcademicList.slice(0,5)" :key="item.news_id" class="text item"
                     @click="getNewsDetail(item.news_id)">
                    <div class="f-news-item">
                        <div class="f-news-item-img">
                            <el-image fit="cover" :src="item.news_source" alt=""></el-image>
                        </div>
                        <div class="f-news-item-text">
                            <div class="f-news-item-title">
                                {{item.news_title}}
                            </div>
                        </div>
                        <div class="f-news-item-detail">
                            <span class="time">发布时间：{{item.news_time}}</span>
                            <span class="time">阅读量：{{item.read_amount}}</span>
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
                <el-col :span="21" justify="center">
                    校园人物
                    <el-button style="float: right; padding: 3px 0" type="text"
                            @click="getMore(PeopleList[0].Category.category_id)">
                            更多
                    </el-button>
                </el-col>
            </el-row>
            
            <el-row type="flex" justify="center">
                <el-col :span="24">
                    <ul>
                        <li v-for="item in PeopleList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.news_id"
                            @click="getNewsDetail(item.news_id)">
                            <div class="school-item">
                                <div class="item-image">
                                    <el-image fit="cover" :src="item.news_source"></el-image>
                                </div>
                                <div class="item-title">{{item.news_title}}</div>
                            </div>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            SwiperList:[],
            HotList:[],
            NoticeList:[],
            NewsList:[],
            AcademicList:[],
            PeopleList:[],
            // 每页显示的条数
            pagesize:8,
            // 默认初始页面
            currentPage:1
        }
    },
    created: function(){
        // swiper请求
        this.$http.get('http://47.101.150.127:3030/slider/getSwiperLists')
        .then(res => {
            if(res.data.code == 200){
                this.SwiperList = res.data.data;
            }else if(res.data.code == 400){
                this.SwiperList = [];
            }
        }).catch(function(error){
            console.log(error)
        });

        // 热点新闻请求
        this.$http.get('http://47.101.150.127:3030/news/getHotNews')
        .then(res => {
            if(res.data.code == 200){
                this.HotList = res.data.data;
            }else if(res.data.code == 400){
                this.HotList = [];
            }
        }).catch(function(error){
            console.log(error)
        });

        //公告通知请求
        this.$http.get(`http://47.101.150.127:3030/news/getNewsByType?category_id=${1}`)
        .then(res => {
            if(res.data.code == 200){
                this.NoticeList = res.data.data;
            }else if(res.data.code == 400){
                this.NoticeList = [];
            }
        }).catch(function(error){
            console.log(error)
        });

        //综合新闻请求
        this.$http.get(`http://47.101.150.127:3030/news/getNewsByType?category_id=${0}`)
        .then(res => {
            if(res.data.code == 200){
                this.NewsList = res.data.data;
            }else if(res.data.code == 400){
                this.NewsList = [];
            }
        }).catch(function(error){
            console.log(error)
        });

        //学术动态请求
        this.$http.get(`http://47.101.150.127:3030/news/getNewsByType?category_id=${3}`)
        .then(res => {
            if(res.data.code == 200){
                this.AcademicList = res.data.data;
            }else if(res.data.code == 400){
                this.AcademicList = [];
            }
        }).catch(function(error){
            console.log(error)
        });

        //校园人物请求
        this.$http.get(`http://47.101.150.127:3030/news/getNewsByType?category_id=${4}`)
        .then(res => {
            if(res.data.code == 200){
                this.PeopleList = res.data.data;
            }else if(res.data.code == 400){
                this.PeopleList = [];
            }
        }).catch(function(error){
            console.log(error)
        });
    },
    methods:{
        //跳转分类新闻列表页
        getMore:function(cid){
            console.log(cid);
            if(cid == 0){
                this.$router.push({
                    path:'/News'
                })
            }else if(cid == 1){
                this.$router.push({
                    path:'/Notice'
                })
            }else if(cid == 2){
                this.$router.push({
                    path:'/Campus'
                })
            }else if(cid == 3){
                this.$router.push({
                    path:'/Dynamic'
                })
            }else if(cid == 4){
                this.$router.push({
                    path:'/People'
                })
            }else if(cid == 'hot'){
                this.$router.push({
                    path:'/Hotnews'
                })
            }
        },
        //跳转新闻详情页
        getNewsDetail:function(nid){
            this.$router.push({
                name:'Detail',params: {news_id:nid}
            })
        }
    }
}
</script>
<style scoped>
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
    .f-hot-item{
        position: relative;
    }
    .f-hot-item:hover{
        color: #409effcc;
    }
    .f-hot-item-img img{
        position: absolute;
    }
    .f-hot-item-img .el-image{
        width:80px;
        height:80px;
    }
    .f-hot-item-text{
        position: absolute;
        top: 0;
        left: 110px;
    }
    .f-hot-item-detail{
        position: absolute;
        left: 110px;
        bottom: 0;
    }
    .f-news-title{
        font-size: 20px;
        color: #409eff;
    }
    .f-news-item{
        position: relative;
    }
    .f-news-item:hover{
        color: #409effcc;
    }
    .f-news-item-img img{
        position: absolute;
        
    }
    .f-news-item-title{
        font-size: 18px;
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
    .text-item:hover{
        color: #409effcc;
    }
</style>