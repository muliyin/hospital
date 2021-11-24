<template>
  <div class="home">
      <el-container>
          <el-header>医生端管理系统</el-header>
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
  </div>
</template>

<script>
export default {
  name: 'Home',

}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #eee;
    color: #333;
    text-align: center;
    line-height: 6rem;
    height: 10vh;
}

.el-aside {
    height: 90vh;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
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
</style>
