// 构建option 配置对象
export const renderChart = (props, mChart) => {
    const options = {
        // X轴展示数据
        xAxis: {
            show: false,
            taype: 'value',
            max: value => {
                return parseInt(value.max * 1.2)
            }
        },
        // Y轴展示数据
        yAxis: {
            type: 'category',
            data: props.data.regions.map(item => item.name),
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "#9eb1c8"
            }
        },
        // 图表绘制的位置,对应 上下左右
        grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            containLabel: true
        },
        // 核心配置
        series: [
            {
                type: 'bar',
                data: props.data.regions.map(item => ({
                    name: item.name,
                    value: item.value
                })),
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)',
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
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
    };
    // 通过实例.setOptions(option)
    mChart.setOption(options);
};
