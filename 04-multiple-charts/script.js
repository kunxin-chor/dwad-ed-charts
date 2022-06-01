// DRAW THE LINE CHART
const lineChartOptions = {
    'chart':{
        'type': 'line', // what kind of chart, so in this case it will be a line chart
        'height': '100%', // will fill the height of its parent div
    },
    // determines what lines are displayed
    'series':[
        // array of objects
        // one object is one series (i.e one line -- y axis)
        {
            'name':'sightings',
            'data':[10, 13, 15, 22, 34,23, 55,,78, 44] // sample data
        }     
    ],
    // what do we show on the x-axis?
    xaxis:{
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    }
}

const lineChart = new ApexCharts(
    document.querySelector('#line-chart'),
    lineChartOptions
)
lineChart.render();

// DRAW THE BAR CHART
const barChartOptions = {
    'chart':{
        'type': 'bar', // what kind of chart, so in this case it will be a line chart
        'height': '100%', // will fill the height of its parent div
    },
    // determines what lines are displayed
    'series':[      
        {
            'name':'temperature',
            'data':[33,21,22,24,25,26,26,21,31,44]
        }
    ],
    // what do we show on the x-axis?
    xaxis:{
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    }
}
const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
)
barChart.render();