<template>
    <div id="analysis">
        <v-chart class="chart" :option="option"></v-chart>
    </div>
</template>

<script>
export default {
    name: "Analysis",
    data() {
        return {
            option: {
                title: {
                    text: "不同年龄段肥胖患者占比图",
                    left: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: [
                        "0~5岁",
                        "6~12岁",
                        "13~18岁",
                        "19~24岁",
                        "25岁以上"
                    ]
                },
                series: [
                    {
                        name: "不同年龄段肥胖患者占比图",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: [
                            {value: 335, name: "0~5岁"},
                            {value: 310, name: "6~12岁"},
                            {value: 234, name: "13~18岁"},
                            {value: 135, name: "19~24岁"},
                            {value: 1548, name: "25岁以上"}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.chart {
    height: 400px;
}
</style>
