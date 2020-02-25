<template>
    <el-container class="content-area">
        <el-backtop :right="100" :bottom="100" :visibility-height="200" style="background:#f5f7fa;">
        </el-backtop>
        <el-header height="150px">
            <home-header></home-header>
        </el-header>
        <el-main v-bind:style="{minHeight: Height+'px'}">
            <home-nav></home-nav>
            <router-view>
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
    data(){
        return{
            Height: 0
        }
    },
    components:{
        HomeHeader,
        HomeNav,
        HomeFooter
    },
    mounted(){
        //动态设置内容高度 让footer始终居底   header+footer的高度是100
        this.Height = document.documentElement.clientHeight - 217;  
    　　//监听浏览器窗口变化　
        window.onresize = ()=> {this.Height = document.documentElement.clientHeight -217}
    }
}
</script>
<style scoped>
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