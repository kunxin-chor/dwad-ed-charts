// 1. define the options for the chart
// provide the data that the chart will have
// and other settings that define how the chart
// looks like and will behave
const options = {
    'chart':{
        'type': 'bar', // what kind of chart, so in this case it will be a line chart
        'height': '100%', // will fill the height of its parent div
    },
    // determines what lines are displayed
    'series':[
        // array of objects
        // one object is one series (i.e one line -- y axis)
        {
            'name':'sightings',
            'data':[10, 13, 15, 22, 34,23, 55,,78, 44] // sample data
        },
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
// 2. create the chart
// `new Apexcharts` is the name of the function
// that allows us to create a new chart object
const chart = new ApexCharts(
    document.querySelector('#chart'),
    options
)
// 3. display the chart
chart.render();