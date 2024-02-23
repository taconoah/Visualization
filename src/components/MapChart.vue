<template>
    <div>
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";
import { renderChart } from "@/api/MapChart.js";
import mapJson from "../assets/json/china.json";
// 定义接收父组件传来的值
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
// 1.初始化
let [target, mChart] = [ref(null), null];
onMounted(() => {
    // 注册地图
    echarts.registerMap("china", mapJson);
    mChart = echarts.init(target.value);
    renderChart(props, mChart);
});
watch(() => props.data, () => renderChart(props, mChart));

</script>
  
<style lang="scss" scoped></style>
  