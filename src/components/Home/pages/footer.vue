<template>
    <div class="footerpage">
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <img src="https://www.sise.edu.cn/Public/images/logo.png">
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
                <div class="detail">
                    <span>
                        主办：广州大学华软软件学院党群工作部
                    </span>
                    <span>
                        新闻热线：87818006
                    </span>
                    <div>
                        联系地址：学院党群工作部（图书馆303室）
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .footerpage{
        padding: 5px 5px 10px 5px;
        background-color: #242424;
    }
    .footerpage img{
        width: 100%;
        display: block;
    }
    .detail span{
        color: white;
        margin-right: 50px;
    }
    .detail div{
        margin-top: 10px;
        color: white;
    }
</style>