
// 2.构建 option 配置对象
export const renderChart = (props, mChart) => {
    const options = {
        // X轴展示数据
        xAxis: {
            type: "category",
            data: props.data.servers.map(item => item.name),
            axisLabel: { color: "#9eb1c8" },
        },
        // Y轴展示数据
        yAxis: {
            show: false, //不显示X
            type: "value", //表示X轴作为数据展示
            max: function (value) {
                return parseInt(value.max * 1.2);
            },

        },
        // 图标绘制的位置 对应上下左右
        grid: {
            top: 16,
            right: 0,
            bottom: 26,
            left: -26,
            containLabel: true, //计算时包含标签
        },
        // 核心配置
        series: [
            {
                type: "bar",
                data: props.data.servers.map(item => ({
                    name: item.name,
                    value: item.value
                })),
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
                itemStyle: {
                    color: '#5D98CE',
                    barBorderRadius: 5,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowBlur: 5
                },
                barWidth: 12,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    },
                    formatter: '{c}%'

                }
            },
        ],
    };
    // 3.通过实例.setOptions(option)
    mChart.setOption(options);
};