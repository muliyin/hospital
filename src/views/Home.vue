<template>
    <div class="home">
        <el-container>
            <el-header>
                <span>医生端管理系统</span>
                <div class="head-pic">
                    <el-dropdown trigger="click" placement="top" @command="handleCommand">
                        <el-avatar icon="el-icon-user-solid" :size="40" class="head-pic-icon"></el-avatar>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="signin">登录</el-dropdown-item>
                            <el-dropdown-item command="signup">注册</el-dropdown-item>
                            <el-dropdown-item command="quit">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside>
                    <el-menu
                        default-active="1"
                        router
                        class="menu-container">
                        <el-menu-item index="1" route="confirm">
                            <i class="el-icon-finished"></i>
                            <span slot="title">确认诊断</span>
                        </el-menu-item>
                        <el-menu-item index="2" route="list">
                            <i class="el-icon-tickets"></i>
                            <span slot="title">患者列表</span>
                        </el-menu-item>
                        <el-menu-item index="3" route="search">
                            <i class="el-icon-search"></i>
                            <span slot="title">查询患者</span>
                        </el-menu-item>
                        <el-menu-item index="4" route="analysis">
                            <i class="el-icon-data-analysis"></i>
                            <span slot="title">统计分析</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

        <el-dialog title="登录" :visible.sync="dialogFormVisible" class="login-dia" :close-on-click-modal="false" destroy-on-close>
            <el-form :model="form" label-width="80px" style="width: 30rem;margin: 0 auto">
                <el-form-item label="账号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="login">登录</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            dialogFormVisible:false,
            form:{}
        }
    },
    methods: {
        /**
         * 菜单点击事件
         */
        handleCommand(command) {
            this.dialogFormVisible = command === 'signin'
        },

        /**
         * 登录
         */
        login(){

        }
    }
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #afb4db;
    color: white;
    text-align: center;
    line-height: 5rem;
    height: 10vh;
    font-family: 幼圆;
    font-size: x-large;
}

.el-aside {
    height: 90vh;
    background-color: #F8F8FF;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-menu {
    background-color: #F8F8FF;
}

.el-main {
    height: 90vh;
    background-color: white;
    color: #333;
    text-align: center;
}

.menu-container {
    height: 100%;
}

.head-pic {
    display: inline-block;
    float: right;
    margin: 0.8rem 3rem 0 0;
}

.head-pic-icon {
    font-size: x-large;
    cursor: pointer;
}

.dialog-footer {
    text-align: center;
}

</style>
