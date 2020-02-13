<template>
    <div class="people">
        <div class="title">
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <div class="title-text">
                        学院人物
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-row type="flex" justify="center">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <ul>
                    <li v-for="item in peopleList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id">
                        <div class="people-item">
                            <div class="item-image">
                                <el-image fit="cover" :src="item.imgUrl"></el-image>
                            </div>
                            <div class="item-title">{{item.title}}</div>
                        </div>
                    </li>
                </ul>
            </el-col>
        </el-row>

        <div class="page">
            <el-row type="flex" justify="center">
                <el-col :span="2">
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pagesize"
                        layout="prev, pager, next, jumper"
                        :total="peopleList.length"
                        >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
   props:['peopleList'],
   data(){
       return{
           // 每页显示的条数
            pagesize:9,
            // 默认初始页面
            currentPage:1
       }
   },
   methods:{
       //点击第几页
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
        }
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
    li{
        float: left;
        display: list-item;
        list-style: none outside none;
        margin-right: 100px;
    }
    .item-image .el-image{
        width: 350px;
        height: 200px;
    }
    .people-item{
        width: 350px;
        height: 300px;
        margin-bottom: 50px;
        border-bottom: 0.05px solid #e4e4e4;
    }
    .people-item:hover{
        color: #409eff;
    }
    .item-image{
        margin-bottom: 20px;
    }
    .item-title{
        font-size:20px;
    }
    .page{
        margin: 30px 0;
    }
</style>