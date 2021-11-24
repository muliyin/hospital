<template>
    <div>
        <el-page-header @back="goBack" content="患者详情">
        </el-page-header>

        <el-descriptions class="des-container" title="基础信息" :column="2"  border>
            <el-descriptions-item label="姓名" label-class-name="des-item">
                kooriookami
            </el-descriptions-item>
            <el-descriptions-item label="年龄" label-class-name="des-item">
                18100000000
            </el-descriptions-item>
            <el-descriptions-item label="身高" label-class-name="des-item">
                苏州市
            </el-descriptions-item>
            <el-descriptions-item label="体重" label-class-name="des-item">
                100
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="des-container" title="历史病例" :column="1"  border>
            <el-descriptions-item label="时间" label-class-name="des-item">
                kooriookami
            </el-descriptions-item>
            <el-descriptions-item label="病情" label-class-name="des-item">
                18100000000
            </el-descriptions-item>
            <el-descriptions-item label="就诊医院" label-class-name="des-item">
                苏州市
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="des-container" title="历史饮食计划" :column="1"  border>
            <el-descriptions-item label="早餐" label-class-name="des-item">
                kooriookami
            </el-descriptions-item>
            <el-descriptions-item label="午餐" label-class-name="des-item">
                18100000000
            </el-descriptions-item>
            <el-descriptions-item label="晚餐" label-class-name="des-item">
                苏州市
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="des-container" title="历史锻炼计划" :column="2"  border>
            <el-descriptions-item label="力量训练" label-class-name="des-item">
                kooriookami
            </el-descriptions-item>
            <el-descriptions-item label="有氧训练" label-class-name="des-item">
                18100000000
            </el-descriptions-item>
        </el-descriptions>

        <div class="conf-buttons">
            <el-button type="primary">确定就诊</el-button>
            <el-button>取消就诊</el-button>
        </div>


    </div>
</template>

<script>
import router from "@/router";

export default {
    name: "ConfirmDetail",
    data(){
        return {

        }
    },
    methods:{
        goBack(){
            router.push({path:'confirm'})
        }
    }
}
</script>

<style>
.des-container {
    margin-top: 3rem;
}

.des-item {
    width: 10rem;
}

.conf-buttons {
    margin-top: 3rem;
}
</style>
