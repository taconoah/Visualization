<template>
  <div v-if="data"
    class="bg-[url('assets/images/bg.png')] bg-cover bg-center h-screen text-white p-t flex overflow-hidden">
    <!-- 左 -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar :data="data.regionData" class="h-1/3 box-border pb-4" />
      <!-- 雷达图 -->
      <RadarBar :data="data.riskData" class="h-1/3 box-border pb-4" />
      <!-- 关系图 -->
      <Relation :data="data.relationData" class="h-1/3" />
    </div>
    <!-- 中 -->
    <div class="w-1/2 mr-5 flex flex-col">
      <!-- 数据总览图 -->
      <TotalData :data="data.TotalData" class="bg-opacity-50 bg-slate-800 p-3 flex-1" />
      <!-- 地图可视化 -->
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" />
    </div>
    <!-- 右 -->
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 纵向柱状图 -->
      <VerticalBar :data="data.serverData" class="h-1/3 box-border pb-4" />
      <!-- 环形图 -->
      <RingBar :data="data.abnormalData" class="h-1/3 box-border pb-4" />
      <!-- 环形柱状图 -->
      <WordCloud :data="data.wordCloudData" class="h-1/3 box-border pb-4" />

    </div>
  </div>
</template>

<script setup>
import HorizontalBar from "@/components/HorizontalBar.vue";
import RadarBar from "@/components/RadarBar.vue";
import Relation from "@/components/Relation.vue";
import TotalData from "@/components/TotalData.vue";
import MapChart from "@/components/MapChart.vue";
import VerticalBar from "@/components/VerticalBar.vue";
import RingBar from "@/components/RingBar.vue";
import WordCloud from "@/components/WordCloud.vue";

import { ref } from 'vue';
import { getVisualization } from './api/visualization.js';
const data = ref(null);
const loadData = async () => {
  data.value = await getVisualization();
};
loadData();

setInterval(() => {
  loadData();
}, 3000);
</script>