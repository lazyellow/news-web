<template>
  <div class='nav'>
    <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect">
        <el-menu-item index="/First">首页</el-menu-item>
        <el-menu-item index="/School">学院简介</el-menu-item>
        <el-menu-item index="/News">综合新闻</el-menu-item>
        <el-menu-item index="4">公告通知</el-menu-item>
        <el-menu-item index="5">缤纷校园</el-menu-item>
        <el-submenu index="6">
            <template slot="title">学术研究</template>
            <el-menu-item index="6-1">学术成果</el-menu-item>
            <el-menu-item index="6-2">学术动态</el-menu-item>
            <el-menu-item index="6-3">学术竞赛</el-menu-item>
        </el-submenu>
        <el-menu-item index="7">学院人物</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
    .el-menu-item{
        font-size: 1.2rem;
    }
    .el-submenu__title{
        font-size: 1.2rem;
    }
    .el-menu{
        padding: 0 10rem;
    }
</style>