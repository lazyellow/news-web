<template>
    <el-container>
        <el-header height="150px">
            <home-header></home-header>
        </el-header>
        <el-main>
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
    components:{
        HomeHeader,
        HomeNav,
        HomeFooter
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