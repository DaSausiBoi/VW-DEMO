const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
            {
                label: 'Touch Value',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                yAxisID: 'y-axis',
                data: [],
            },
            {
                label: 'Light Touch Threshold',
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                yAxisID: 'y-axis', 
                data: [],
            },
            {
                label: 'Strong Touch Threshold',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                yAxisID: 'y-axis',
                data: [],
            },
        ],
    },
    options: {
        plugins: {
            x: {
                type: 'realtime',
                realtime: {
                    duration: 20000, // Display 20 seconds of data
                    refresh: 1000,   // Refresh every 1 second
                    delay: 1000,     // Delay by 1 second
                },
            },
            y: {
                beginAtZero: true,
            },
            title: {
                display: true,
                text: '1 Zone HOD Touch Status'
            },
            subtitle: {
                display: true,
                text: 'VW Gen 2 Steering Wheel'
            },
        },
    },
});

// Function to add new data to the chart
function addDataToChart() {
    const newDataPoint = {
        x: Date.now(),
        y: Math.random() * 100, // Replace with your actual data source
    };

    chart.data.datasets[0].data.push(newDataPoint);
    chart.data.datasets[1].data.push(newDataPoint);
    chart.data.datasets[2].data.push(newDataPoint);
}

// Simulate receiving new data and updating the chart
setInterval(addDataToChart, 1000); // Update every 1 second (adjust as needed)