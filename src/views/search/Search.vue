<template>
<div id="search">
    <div style="margin-top: 15px;">
        <span>患者姓名：</span>
        <el-input placeholder="请输入姓名" v-model="searchKey" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <div class="has-list" v-if="hasList">

    </div>
</div>
</template>

<script>
export default {
    name: "Search",
    data(){
        return {
            searchKey:'',
            hasList:false
        }
    }
}
</script>

<style scoped>
.el-input {
    width: 20rem;
}

.input-with-select {
    background-color: #fff;
}
</style>
