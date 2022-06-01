// --- CAMPAIGN CHART ---
// 1. chart options
let campaignOptions = {
    'chart': {
        'type': 'line',
        'height': '100%',
        'group': 'campaigns',
        'id': 'campaign-chart', // assign an unique name to the chart
                               // nothing to do with id inside css or the html
    },
    'series':[
        {
            'name':'campaigns',
            'data':[3,5,1,8,4,10]
        },       
    ],
    'xaxis':{
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }   
}
// 2. create the chart object
let campaignChart = new ApexCharts(
    document.querySelector('#campaign-chart'),
    campaignOptions
)
// 3. draw
campaignChart.render();

// --- REACH CHART ---
let reachOptions = {
    'chart': {
        'type': 'line',
        'height': '100%',
        'id':'reach-chart',
        'group':'campaigns'
    },
    'series':[
        {
            'name':'reach',
            'data':[5000,17000,2400,25000,14000,55000]
        },       
    ],
    'xaxis':{
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }   
}
let reachChart = new ApexCharts(
    document.querySelector('#reach-chart'),
    reachOptions
)
reachChart.render();