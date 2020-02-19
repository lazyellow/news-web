<template>
    <div class="search">
        <div class="title">
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <div class="title-text">
                        搜索结果
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="search-list"    @click="getNewsDetail(item.news_id)"
            v-for="item in searchList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id">
            <el-row type="flex" justify="center">
                <el-col :span="18" class="search-hover">
                   <div class="search-item">
                        <div>
                            <el-image class="search-item-img" fit="cover" :src="item.news_source"></el-image>
                        </div>
                        <div class="search-item-text">
                            <div class="search-item-title">
                                {{item.news_title}}
                            </div>
                            <div class="search-item-content">
                                {{item.news_subtitle}}
                            </div>
                        </div>
                        <div class="search-item-detail">
                            <span class="time">发布时间：{{item.news_time}}</span>
                            <span class="time">阅读量：{{item.read_amount}}</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <el-divider></el-divider>
                </el-col>
            </el-row>
        </div>
        
        <div class="page">
            <el-row type="flex" justify="center">
                <el-col :span="2">
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pagesize"
                        layout="prev, pager, next, jumper"
                        :total="searchList.length"
                        >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchList:[],
            // 每页显示的条数
            pagesize:6,
            // 默认初始页面
            currentPage:1,
            SearchList:[
                {
                    "id":"01",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题1",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"02",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题2",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"03",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题3",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"04",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题4",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"05",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题5",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"06",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题6",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"07",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题7",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"08",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题8",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"09",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题9",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"10",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题10",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                },
                {
                    "id":"11",
                    "imgUrl":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    "title":"新闻标题11",
                    "content":"2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。",
                    "time":"2020/2/2"
                }
            ]
        }
    },
    created:function(){
        let cid = this.$route.params.cid;
        let keyWord = this.$route.params.keyWord;
        let url = 'http://47.101.150.127:3030/news/searchNews?id='+cid+'&value='+keyWord;
        this.getData(url);
    },
    watch:{
        '$route' (newUrl, oldUrl) {
            this.cid = newUrl.params.cid;
            this.keyWord = newUrl.params.keyWord;
            this.url = 'http://47.101.150.127:3030/news/searchNews?id='+this.cid+'&value='+this.keyWord;
            console.log(this.url)
            this.getData(this.url);
        }
    },
    methods:{
        //点击第几页
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
        },
        //跳转新闻详情页
        getNewsDetail:function(nid){
            this.$router.push({
                name:'Detail',params: {news_id:nid}
            })
        },
        // 请求接口
        getData:function(url){
            this.$http.get(url)
                .then(res => {
                    if(res.data.code == 200){
                        this.searchList = res.data.data;
                    }else if(res.data.code == 400){
                        this.searchList = [];
                    }
                }).catch(function(error){
                    console.log(error)
                });
        }
    }
}
</script>
<style scoped>
    .title{
        width: 100%;
        margin: 50px 0px;
    }
    .title-text{
        padding: 20px;
        width: 150px;
        border: 1px solid #409eff;
        font-size:30px;
        text-align: center;
        color:#409eff;
    }
    .search-item{
        position: relative;
    }
    .search-hover:hover{
        background: #409eff0a;
    }
    .search-item-img{
        width: 400px;
        height: 250px;
    }
    .search-item-text{
        position: absolute;
        top: 0px;
        left: 450px;
    }
    .search-item-title{
        margin-bottom: 20px;
        font-size: 25px;
        overflow: hidden;
    }
    .search-item-content{
        width: 100%;
        height: 80px;
        font-size: 20px;
        /* 文字溢出处理 */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;/*显示几行*/
        overflow: hidden;
    }
    .search-item-detail{
        position: absolute;
        left: 450px;
        bottom: 50px;
    }
    .page{
        margin: 30px 0;
    }
</style>