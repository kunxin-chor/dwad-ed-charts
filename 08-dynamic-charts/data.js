const DATA_URL = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json ";
async function loadData() {
    let response = await axios.get(DATA_URL);
    return response.data;
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// if the year argument is false or undefined, or NaN, then we will won't filter by  year
// if the country argument is false, undefined, or NaN, then we will won't fitler by country
function transformData(data, year, country){
    // the earnings array should store objects which have the date and amount of payment made.
    // mapping: create a new array from the original one
    //          but with some differences in elements
    // let earnings = [];
    // for(let dataPoint of data){
    //     earnings.push({
    //         'amount': dataPoint.payment.amount,
    //         'date': new Date(dataPoint.completed_at)
    //     })
    // }
    let earnings = data.map(function(dataPoint){
        return {
            'amount': dataPoint.payment.amount,
            'date': new Date(dataPoint.completed_at),
            'country': dataPoint.customer.country
        }
    })

    // FILTERING
    // We only shortlist items that meet certain criteria
    // eg. we only want transactions that are made in 2020
    // let filtered = [];
    // for(let dataPoint of earnings) {
    //     if (dataPoint.date.getFullYear() == 2020) {
    //         filtered.push(dataPoint)
    //     }
    // }
    // console.log(filtered);

    let filtered = earnings;

    // NaN,"",0,false are equv. to false
    // if year is defined or given a non-false value, then we attempt to search by year
    if (year) {
        filtered = filtered.filter(function(dataPoint){
            if (dataPoint.date.getFullYear() == year) {
                return true;
            } else {
                return false;
            }
        })
    }
    // if the country argument is not falsely (not "", null, undefined, 0, NaN, false)
    if (country) {
        filtered = filtered.filter(function(dataPoint){
            // use includes we have partial matches
            // if we type "america" then can search "united states of america"
            if (dataPoint.country.toLowerCase().includes(country.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        })
    }
      
    // create the possible 'buckets' (i.e groups)
    // so months[0] will have the array for January
    // months[1] will have the array for Feburary
    // months[2] will have the array for March ..and so on and so forth
    let months = {};  // create an object to hold the arrays for each month
    
    for (let i =0; i < 12; i++) {
        months[i] = [];
    }

    for (let dataPoint of filtered) { 
        let monthNumber = dataPoint.date.getMonth(); // getMonth() will return the month number of the date
                                                     // if the date is 2020-01-10, getMonth() will return 0
                                                     // if the date is 2020-06-03, getMonth() will return 5
        // add the data point to the month that it belongs to
        months[monthNumber].push(dataPoint);
    }

    let total = [];
    // months is an object, not an array
    // so to extract each key from the object, we use `let monthNumber in months`
    for (let monthNumber in months) {
        let transactions = months[monthNumber];

        // reducing: find a single numerical result from the array
        // let sum = 0;
        // for(let dataPoint of transactions) {
        //     sum = sum + dataPoint.amount;
        // }
        // total.push(sum);

        // the reduce function has two arguments
        // argument 1 -- the reducer function (which also has two arguments)
        //                arg 1 of the reducer function: previousValue of the last calculation
        //                arg 2 of the reducer function: the current value from the array
        // argument 2 -- the initial value of previousValue 
        let sum = transactions.reduce(function(previousValue, currentValue ){
            return previousValue + currentValue.amount;
        }, 0)
        total.push({
            'x': monthNames[monthNumber],
            'y': sum
        });
    }
    return total;
    

}
