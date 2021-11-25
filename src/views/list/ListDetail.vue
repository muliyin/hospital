<template>
    <div>
        <el-page-header @back="goBack" content="患者详情">
        </el-page-header>

        <el-descriptions class="des-container" title="基础信息" :column="4"  border>
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

        <el-descriptions class="des-container" title="历史病例" :column="3"  border>
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

        <el-descriptions class="des-container" title="历史饮食计划" :column="3"  border>
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

        <div style="margin-top: 3rem">
            <el-divider content-position="left">开处方</el-divider>
        </div>

        <el-form ref="form" :model="form" label-width="80px" class="form-style">
            <div class="form-title">制定饮食计划</div>
            <el-form-item label="早餐">
                <el-input v-model="form.breakfast"></el-input>
            </el-form-item>
            <el-form-item label="午餐">
                <el-input v-model="form.lunch"></el-input>
            </el-form-item>
            <el-form-item label="晚餐">
                <el-input v-model="form.dinner"></el-input>
            </el-form-item>

            <div class="form-title">制定训练计划</div>
            <el-form-item label="力量训练">
                <el-input v-model="form.power"></el-input>
            </el-form-item>
            <el-form-item label="有氧训练">
                <el-input v-model="form.oxygen"></el-input>
            </el-form-item>
        </el-form>

        <div class="conf-buttons">
            <el-button type="primary">确定修改</el-button>
            <el-button style="margin-left: 3rem">取消修改</el-button>
        </div>


    </div>
</template>

<script>
import router from "@/router";

export default {
    name: "ConfirmDetail",
    data(){
        return {
            form:{
                breakfast:"",
                lunch:"",
                dinner:"",
                power:"",
                oxygen:""
            }
        }
    },
    methods:{
        goBack(){
            router.go(-1)
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

.form-title {
    text-align: center;
    margin: 3rem 0;
}

.form-style {
    margin: 0 15rem;
}
</style>
