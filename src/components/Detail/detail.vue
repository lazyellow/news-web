<template>
    <div class="detail">
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <div class="newsCategory">{{newsContent.Category.category_name}}</div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <div class="news-title">
                    {{newsContent.news_title}}
                </div>
                <div class="news-message">
                    <span>新闻记者：{{newsContent.news_reporter}}</span>
                    <span>编辑人员：{{newsContent.news_editor}}</span>
                    <span>审核人员：{{newsContent.news_reviewer}}</span>
                    <span>发布时间：{{newsContent.news_time}}</span>
                    <span>修改时间：{{newsContent.news_update}}</span>
                    <span>阅读量：{{newsContent.read_amount}}</span>
                </div>
                <div class="news-content" v-html="newsContent.news_content">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newsContent:[]
        }
    },
    created:function(){
        let news_id = this.$route.params.news_id;
        let url = 'http://47.101.150.127:3030/news/getNewsDetail?nid='+news_id;
        this.$http.get(url)
        .then(res => {
            if(res.data.code == 200){
                this.newsContent = res.data.data;
                // 记录新闻阅读量，给阅读量+1
                this.$http.get('http://47.101.150.127:3030/news/addNewCount?id='+news_id);
            }else if(res.data.code ==400){
                this.newsContent = [];
            }
        }).catch(function(error){
            console.log(error)
        });
    }
}
</script>
<style scoped>
    .detail{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .newsCategory{
        font-size: 28px;
        color: #409eff;
        line-height: 28px;
        border-left: 3px solid #409eff;
        padding-left: 10px;
        margin-bottom: 100px;
    }
    .news-title{
        font-size: 25px;
        text-align: center;
        margin-bottom: 50px;
    }
    .news-message{
        width: 100%;
        border: 0.5px solid #cccccc;
        padding: 20px;
        color: #999999;
    }
    .news-message span{
        margin-left: 50px;
    }
    .news-content{
        margin-bottom: 40px;
        font-size: 20px;
        line-height: 50px;
        text-indent:2em;
    }
    /* .news-content img{
        display:block;
    } */
</style>