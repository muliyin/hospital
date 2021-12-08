<template>
<div id="search">
    <div style="margin-top: 15px;">
        <span>患者姓名：</span>
        <el-input placeholder="请输入姓名" v-model="searchKey" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <div class="has-list" v-if="hasList">
        <el-table
            :data="tableData"
            border
            height="900"
            max-height="75vh"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="primary"
                        plain
                        @click="toDetail(scope.$index, scope.row)">患者详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>

export default {
    name: "Search",
    data(){
        return {
            searchKey:'',
            hasList:true,
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                },
            ]
        }
    },
    methods:{
        toDetail(index,row){
            console.log(index,row)
            this.$router.push({name:'confirmdetail',query:{type:'search'}})
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

.has-list {
    margin-top: 3rem;
}
</style>
