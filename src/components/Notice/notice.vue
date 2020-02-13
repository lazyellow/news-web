<template>
    <div class="news">
        <div class="title">
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <div class="title-text">
                        公告通知
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="notice-list">
            <el-row type="flex" justify="center" v-for="item in noticeList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id">
                <el-col :span="16" class="notice-hover">
                    <div class="notice-item">
                        <div class="notice-date">
                            <div class="date-day">{{item.day}}</div>
                            <div class="date-year">{{item.year}}</div>
                        </div>
                        <div class="notice-text">
                            <div class="notice-title">
                                {{item.title}}
                            </div>
                            <div class="notice-content">
                                {{item.content}}
                            </div>
                        </div>
                    </div>
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
                        :total="noticeList.length"
                        >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:['noticeList'],
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
        console.log(this.noticeList);
    }
}
</script>
<style>
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
    .notice-item{
        height: 120px;
        position: relative;
        margin: 20px 0px;
        border: #dcdfe6 0.5px solid;
    }
    .notice-item:hover{
        background: #409eff0a;
        border:#409eff0a 0.5px solid;
    }
    .notice-date{
        width: 80px;
        height: 80px;
        position: absolute;
        top: 20px;
        left: 20px;
        background: #409eff;
    }
    .notice-date .date-day{
        margin-top: 6px;
        color: white;
        font-size: 30px;
        text-align: center;
    }
    .notice-date .date-year{
        color: white;
        font-size: 15px;
        text-align: center;
    }
    .notice-text{
        position: absolute;
        height: 80px;
        left: 150px;
        top: 20px;
        right: 10px;
    }
    .notice-title{
        margin-bottom: 10px;
        font-size: 18px;
    }
    .notice-content{
        /* 文字溢出处理 */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;/*显示几行*/
        overflow: hidden;
    }
    .page{
        margin: 30px 0;
    }
</style>