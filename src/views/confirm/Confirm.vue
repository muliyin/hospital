<template>
    <div class="confirm">
        <el-table
            :data="tableData"
            border
            height="1000"
            max-height="80vh"
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
                        @click="toDetail(scope.$index, scope.row)">患者详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import router from "@/router";

export default {
    name: 'Confirm',
    data(){
        return {
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
            router.push({path:'confirmdetail'})
        }
    }
}
</script>
<style scoped>
/deep/ .el-table__header {
    line-height: normal;
}

.conf-page {
    margin-top: 1.5rem;
}

</style>
