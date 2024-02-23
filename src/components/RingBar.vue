<template>
    <div>
        【大区异常处理】
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { renderChart } from "@/api/RingBar.js";
import * as echarts from "echarts";
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// // 初始化 echarts实例
let [mChart, target] = [null, ref(null)];
onMounted(() => {
    mChart = echarts.init(target.value);
    renderChart(props, mChart);
});

watch(() => props.data, () => renderChart(props, mChart));
</script>

<script lang="scss" scoped></script>