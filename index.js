window.onload = function () {
    getCovidStats();
}

function getCovidStats() {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/153')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            
            let confirmedCases = data.location.latest.confirmed;
            let deaths = data.location.latest.deaths;


            document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
            document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');





        })
        .catch(function () {
            console.log("error");
        })
    //setTimeout(getCovidStats, 43200000) // update every 12 hours
}