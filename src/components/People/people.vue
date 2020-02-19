<template>
    <div class="people">
        <div class="title">
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <div class="title-text">
                        {{PeopleList[0].Category.category_name}}
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-row type="flex" justify="center">
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <ul>
                    <li @click="getNewsDetail(item.news_id)"
                        v-for="item in PeopleList.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
                        :key="item.news_id">
                        <div class="people-item">
                            <div class="item-image">
                                <el-image fit="cover" :src="item.news_source"></el-image>
                            </div>
                            <div class="item-title">{{item.news_title}}</div>
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
                        :total="PeopleList.length"
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
           PeopleList:[],
           // 每页显示的条数
            pagesize:9,
            // 默认初始页面
            currentPage:1
       }
   },
   created:function(){
        this.$http.get(`http://47.101.150.127:3030/news/getNewsByType?category_id=${6}`)
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
       //点击第几页
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
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