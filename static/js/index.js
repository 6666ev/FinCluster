option = {
    // backgroundColor:'white',
    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(19, 173, 255, 1)"],
    "tooltip": {
        "show": true,
        "trigger": "item"
    },

    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(200,200,200,1)"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(200,200,200,1)"//
            }
        },
        "indicator": [{
            "name": "企业规模",
            "max": 100
        }, {
            "name": "司法风险",
            "max": 100
        }, {
            "name": "经营能力",
            "max": 100
        }, {
            "name": "经营风险",
            "max": 100
        }, {
            "name": "信用状况",
            "max": 100
        }, {
            "name": "技术水平",
            "max": 100
        },
        ]
    },
    "series": [{
        "name": "数据2",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color: 'rgba(19, 173, 255, 1)',
                "borderColor": "rgba(19, 173, 255, 0.6)",
                "borderWidth": 10
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 1)",
                "width": 2,
                "type": "dashed"
            }
        },
        "data": [
            [60, 60, 65, 62, 80, 80]
        ]
    }]
};

function randomRgbColor() { //随机生成RGB颜色
    var r = Math.floor(Math.random() * 156 + 100); //随机生成256以内r值
    var g = Math.floor(Math.random() * 156 + 100); //随机生成256以内g值
    var b = Math.floor(Math.random() * 156 + 100); //随机生成256以内b值
    return `rgba(${r},${g},${b},0.6)`; //返回rgb(r,g,b)格式颜色
}

var data = {
    "1": [0, 93, 20, 64, 20, 14,],
    "2": [19, 91, 24, 73, 21, 28,],
    "3": [13, 88, 26, 81, 20, 25,],
    "4": [13, 89, 21, 69, 20, 17,],
    "5": [78, 100, 76, 89, 42, 94,],
    "6": [26, 91, 28, 53, 21, 42,],
    "7": [28, 79, 25, 69, 22, 26,],
    "8": [16, 94, 27, 35, 20, 28,],
    "9": [28, 79, 25, 69, 20, 26,],
    "10": [31, 93, 26, 61, 20, 56,],
}