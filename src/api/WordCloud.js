
const randowRGB = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}

// 构建 option 配置对象
export const renderChart = (props, mChart) => {
    const options = {
        series: [
            {
                type: 'wordCloud',
                sizeRange: [8, 46],
                rotationRange: [0, 0],
                gridSize: 0,
                layoutAnimation: true,
                textStyle: {
                    color: randowRGB
                },
                emphasis: {
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }
                },
                data: props.data.datas
            }
        ]
    }
    // 3.通过实例.setOptions(option)
    mChart.setOption(options);
};