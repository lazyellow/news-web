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
            currentPage:1
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
        // 请求搜索结果列表接口
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