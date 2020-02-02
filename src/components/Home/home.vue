<template>
    <el-container>
        <el-header height="10rem">
            <home-header></home-header>
        </el-header>
        <el-main>
            <home-nav></home-nav>
            <router-view :newsList='newsList'></router-view>
        </el-main>
        <el-footer height="2rem">这里是footer</el-footer>
    </el-container>
</template>
<script>
import HomeHeader from './pages/header'
import HomeNav from './pages/nav'

export default {
    components:{
        HomeHeader,
        HomeNav
    },
    data(){
        return{
            newsList:[]
        }
    },
    methods:{
        getHttp(){
            this.$http.get("/api/newsList.json")
            .then((res)=>{
                console.log(res.data.data[0].newsList)
                this.newsList = res.data.data[0].newsList;
            })
        }
    },
    mounted(){
        this.getHttp()
    }
}
</script>
<style lang="">
    .el-container{
        width: 100%;
    }
    .el-header{
        width: 100%;
        padding:0;
    }
    .el-main{
        width: 100%;
        padding:0;
    }
    .el-footer{
        width: 100%;
        background-color: gray;
    }
</style>