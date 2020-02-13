<template>
    <div class="detail">
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <div class="newsCategory">综合新闻</div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <div class="news-title">
                    这里放新闻标题 
                </div>
                <div class="news-message">
                    <span>新闻记者：xxx</span>
                    <span>编辑人员：xxx</span>
                    <span>审核人员：xxx</span>
                    <span>发布时间：2020/02/13</span>
                    <span>修改时间：2020/03/13</span>
                    <span>阅读量：200</span>
                </div>
                <div class="news-content">
                    2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。
                    2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。
                    2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。
                    2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。
                    2019年12月28日，重庆大学经济与工商管理学院校友会暨重庆分会2020年工作交流会在重庆大学A区经管学院601会议室顺利召开，会议由经管学院校友会重庆分会承办，学院党委书记、经管学院校友会会长严太华、党委副书记张燕、国内合作与交流办公室主任邓碧会等28人参加会议，会议由经管学院校友会重庆分会秘书长阿木布打主持。
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props:["newsList"],
    mounted(){
        console.log("测试"+this.newsList)
    }
}
</script>
<style>
    .detail{
        margin-bottom: 50px;
    }
    .newsCategory{
        font-size: 28px;
        color: #409eff;
        line-height: 28px;
        border-left: 3px solid #409eff;
        padding-left: 10px;
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
        margin-top: 40px;
        font-size: 20px;
        line-height: 50px;
        text-indent:2em;
    }
</style>