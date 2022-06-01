// 1. create the chart options
let options = {
    'chart': {
        'type':'bar',
        'height':'100%'
    },
    'series':[
        // number of male residents
        {
            "data":[175000,188000,190000,185000,190760],
            "name":"Number of male residents"
        },
        {
            "data":[180000,190000,210000,200000,210000],
            "name":"Number of female residents"
        }
    ],
    'xaxis':{
        'categories':[1999, '2000', '2001', '2002', '2003']
    }
}
// 2. create the chart object
let chart = new ApexCharts(
    document.querySelector('#chart'),
    options
)
// 3. render the chart
chart.render();