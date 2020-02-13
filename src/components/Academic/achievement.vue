<template>
    <div class="news">
        <div class="title">
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <div class="title-text">
                        学术成果
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="news-list" v-for="item in achievementList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id">
            <el-row type="flex" justify="center">
                <el-col :span="18" class="news-hover">
                   <div class="news-item">
                        <div class="news-item-img">
                            <el-image fit="cover" :src="item.imgUrl"></el-image>
                        </div>
                        <div class="news-item-text">
                            <div class="news-item-title">
                                {{item.title}}
                            </div>
                            <div class="news-item-content">
                                {{item.content}}
                            </div>
                        </div>
                        <div class="news-item-detail">
                            <span class="time">{{item.time}}</span>
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
                        :total="achievementList.length"
                        >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:['achievementList'],
    data(){
        return{
            // 每页显示的条数
            pagesize:6,
            // 默认初始页面
            currentPage:1
        }
    },
    methods:{
        //点击第几页
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
        }
    },
      mounted(){
    console.log(this.newsList)
  }
}
</script>
<style lang="">
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
    .news-item{
        position: relative;
    }
    .news-hover:hover{
        background: #409eff0a;
    }
    .news-item-img .el-image{
        width: 400px;
        height: 250px;
    }
    .news-item-text{
        position: absolute;
        top: 0px;
        left: 450px;
    }
    .news-item-title{
        margin-bottom: 20px;
        font-size: 25px;
        overflow: hidden;
    }
    .news-item-content{
        width: 100%;
        height: 80px;
        font-size: 20px;
        /* 文字溢出处理 */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;/*显示几行*/
        overflow: hidden;
    }
    .news-item-detail{
        position: absolute;
        left: 450px;
        bottom: 50px;
    }
    .page{
        margin: 30px 0;
    }
</style>