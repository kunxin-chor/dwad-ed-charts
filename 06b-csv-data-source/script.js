let options = {
    'chart':{
        'type':'line',
        'height':'100%'
    },
    series: [],  // no data!
    noData:{
        "text":"Loading data...."
    }
}
const chart = new ApexCharts(
    document.querySelector('#chart'),
    options
)
chart.render();


async function loadData() {
    let response = await axios.get('data.csv');
    let json = await csv().fromString(response.data);
    let population = [];
    for (let dataPoint of json) {
        if (dataPoint.ethnic_group == 'Others') {
            population.push({
                'x': parseInt(dataPoint.year),
                'y': parseFloat(dataPoint.natural_increase)
            });
        }
    }
    
    return population;
}

// DOMContentLoaded means the HTML file has 
// been processed completely
window.addEventListener('DOMContentLoaded', async function(){
    let data = await loadData();
    chart.updateSeries([{
        'name': 'Population',
        'data': data
    }]);
})
