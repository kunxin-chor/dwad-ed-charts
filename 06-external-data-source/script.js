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
    let response = await axios.get('data.json');
    return response.data
}

// DOMContentLoaded means the HTML file has 
// been processed completely
window.addEventListener('DOMContentLoaded', async function(){
    let data = await loadData();
    chart.updateSeries([{
        'name': 'Sales',
        'data': data.yearly
    }]);
})
