const options = {
    chart: {
        height: 450,
        width: "1000",
        type: "bar",
        background: "#f4f4f4",
        foreColor: "#333",
},
plotOptions: {
    bar: {
        horizontal: false,
        }
    },
series: [{
    name: "Population",
    data: [199812341, 112374333, 104099452, 91276115, 72626809, 72147030, 68548437, 61095297, 60439692, 49577103 ]
}],
xaxis:{
    categories: [ 'Uttar Pradesh','Maharashtra','Bihar','West Bengal','Madhya Pradesh','Tamil Nadu','Rajasthan','Karnataka','Gujarat','Andhra Pradesh']
},
fill: {
    colors: ['#f44336']
},
dataLabels: {
    enabled: false
},
title: {
    text: "10 Most Populated states of India",
    align: "center",
    margin: 20,
    offsetY: 20,
    style:{
        fontSize:"25px"
    }
}
};

const chart = new ApexCharts(document.querySelector("#chart"), options);


chart.render();

document.getElementById("change").addEventListener("click", () =>
chart.updateOptions({
  plotOptions: {
    bar: {
      horizontal: true
    }
}
})
);
