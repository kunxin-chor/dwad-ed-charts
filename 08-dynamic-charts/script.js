let options = {
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    'series': [],
    'noData': {
        'text': 'Loading'
    }
}

let chart = new ApexCharts(
    document.querySelector('#chart'),
    options
);

chart.render();



window.addEventListener('DOMContentLoaded', async function () {
    let data = await loadData();
    let series = transformData(data);
    chart.updateSeries([
        {
            'name': 'Revenue',
            'data': series
        }
    ])

    document.querySelector('#btnUpdate').addEventListener('click', function () {
        let year = document.querySelector('#year').value;
        let country = document.querySelector("#country").value;
        let series = transformData(data, year, country);
        chart.updateSeries([{
            'name': 'Revenue',
            'data': series
        }])
    })
})