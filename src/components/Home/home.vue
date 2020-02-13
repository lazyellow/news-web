<template>
    <el-container>
        <el-header height="150px">
            <home-header></home-header>
        </el-header>
        <el-main>
            <home-nav></home-nav>
            <router-view 
                :hotList='hotList' :newsList='newsList' :campusList='campusList' :peopleList='peopleList'
                :achievementList='achievementList' 
                :dynamicList='dynamicList' 
                :competitionList='competitionList'
                :noticeList='noticeList'>
            </router-view>
        </el-main>
        <el-footer>
            <home-footer></home-footer>
        </el-footer>
    </el-container>
</template>
<script>
import HomeHeader from './pages/header'
import HomeNav from './pages/nav'
import HomeFooter from './pages/footer'

export default {
    components:{
        HomeHeader,
        HomeNav,
        HomeFooter
    },
    data(){
        return{
            hotList:[],
            newsList:[],
            noticeList:[],
            campusList:[],
            peopleList:[],
            achievementList:[],
            dynamicList:[],
            competitionList:[]
        }
    },
    methods:{
        getHttp(){
            this.$http.get("/api/newsList.json")
            .then((res)=>{
                console.log(res)
                this.hotList = res.data.data[0].hotList;
                this.newsList = res.data.data[1].newsList;
                this.noticeList = res.data.data[2].noticeList;
                this.campusList = res.data.data[3].campusList;
                this.peopleList = res.data.data[4].peopleList;
                this.achievementList = res.data.data[5].achievementList;
                this.dynamicList = res.data.data[6].dynamicList;
                this.competitionList = res.data.data[7].competitionList;
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
        padding:0;
    }
    .el-header{
        width: 100%;
        padding:0;
    }
    .el-main{
        width: 100%;
        padding:0;
        /* margin-top: -50px; */
    }
    .el-footer{
        width: 100%;
        padding: 0;
    }
</style>