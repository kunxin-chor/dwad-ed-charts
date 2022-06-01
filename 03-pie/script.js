// 1. create the options
const options = {
    'chart':{
        'type':'pie',
        'height':'100%'
    },
    // a pie charat can have only one series,
    'series':[21, 23, 22, 27, 45, 31],
    'labels':["Thai", "Western", "Fast Food", "Japanese", "French", "Italian"],
    'colors':['#EAF7CF', '#BA5C12', '#00A6ED', '#0D2C54', '#4B1D3F', '#F78764'] // store the colours of the slice, have to start in hexdecimal
}
// 2. create the chart
const chart = new ApexCharts(
    document.querySelector('#chart'),
    options
)
// 3. render the chart (i.e we display the chart)
chart.render();