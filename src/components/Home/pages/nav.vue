<template>
  <div class='nav'>
    <el-row type="flex" justify="center">
      <el-col :span='15'>
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
            >
            <el-menu-item index="/First">首页</el-menu-item>
            <el-menu-item index="/School">学院简介</el-menu-item>
            <el-menu-item index="/News">{{CategoryList[0].category_name}}</el-menu-item>
            <el-menu-item index="/Notice">{{CategoryList[1].category_name}}</el-menu-item>
            <el-menu-item index="/Campus">{{CategoryList[2].category_name}}</el-menu-item>
            <el-submenu index="6">
                <template slot="title">学术研究</template>
                <el-menu-item index="/Achievement">{{CategoryList[3].category_name}}</el-menu-item>
                <el-menu-item index="/Dynamic">{{CategoryList[4].category_name}}</el-menu-item>
                <el-menu-item index="/Competition">{{CategoryList[5].category_name}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="/People">{{CategoryList[6].category_name}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="search" :span='5'>
        <div>
          <el-input class="input-with-select"
            placeholder="请输入内容" v-model="searchValue">
            <el-select v-model="selectOption" slot="prepend" style="width:110px;">
              <el-option label="全部新闻" value="-1"></el-option>
              <el-option v-for="item in CategoryList" :key="item.category_id"
                :label="item.category_name" :value="item.category_id">
              </el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        CategoryList:[],
        searchList:[],
        activeIndex: '1',
        activeIndex2: '1',
        searchValue:'',
        selectOption:'-1'
      };
    },
    created:function(){
        this.$http.get('http://47.101.150.127:3030/category/getCategorys')
        .then(res => {
            this.CategoryList = res.data.data;
        }).catch(function(error){
            console.log(error)
        });
    },
    methods: {
      
      // 新闻搜索
      searchClick:function(){
        let id = this.selectOption;
        let keyWord = this.searchValue;
        this.$router.push({
          name:'Search',
          params:{
            cid:this.selectOption,
            keyWord:this.searchValue
          }
        })
      }
    }
  }
</script>
<style scoped>
    .nav{
      background-color:#ffffff;
      margin-top: 50px;
    }
    .el-menu-item{
        font-size: 1.2rem;
    }
    .el-submenu__title{
        font-size: 1.2rem;
    }
    .el-menu{
        padding: 0 10rem;
    }
    .search{
      display:flex;
      justify-content:center;
      align-items:center; 
    }
</style>