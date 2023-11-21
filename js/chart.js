const ctx = document.getElementById('myChart');

                const chart1 = new Chart(ctx, {
                    type: 'line',
                    data: {
                        // labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                        datasets: [
                            {
                                label: 'Touch Value',
                                borderColor: 'red',
                                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                                pointRadius: 0,
                                yAxisID: 'y-axis',
                            },
                            {
                                label: 'Light Touch Threshold',
                                borderColor: 'blue',
                                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                                pointRadius: 0,
                                yAxisID: 'y-axis',
                            },
                            {
                                label: 'Strong Touch Threshold',
                                borderColor: 'green',
                                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                                pointRadius: 0,
                                yAxisID: 'y-axis',
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'right',
                                align: 'center',
                                reverse: true,
                                color: 'black',
                                labels: {
                                    padding: 20,
                                    boxWidth: 50,
                                    boxHeight: 40,
                                    useBorderRadius: false,
                                    font: {
                                        size: 17
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: '1 Zone HOD Touch Status', // TODO replace with code that changes text based on wheel attached
                                padding: 20,
                                color: 'black',
                                font: {
                                    size: 34
                                }
                            },
                            subtitle: {
                                display: true,
                                text: 'Volkswagon Gen 2 Steering Wheel', // TODO replace with code that changes text based on wheel attached
                                padding: 20,
                                font: {
                                    size: 20
                                }
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time in Milliseconds',
                                    padding: 20,
                                    font: {
                                        size: 20
                                    }
                                }
                            },
                            'y-axis': {
                                title: {
                                  display: true,
                                  text: 'ADC',
                                  padding: 20,
                                  font: {
                                    size: 20,
                                  },
                                },
                                // beginAtZero: true,
                                // ticks: {
                                //     // Include the units in the ticks
                                //     callback: function(value, index, ticks) {
                                //         return Chart.Ticks.formatters.numeric.apply(this, [value, index, ticks]) + ' ADC'
                                //     }
                                // }
                            }
                        }
                    }
                });

                const startTime = Date.now();
                const lightThresh = 34; //TODO update with real values
                const strongThresh = 41;

                function updateChart() {
                    const currentTime = Date.now();

                    chart1.data.labels.push(Math.floor(((currentTime - startTime))) - 1);
                    chart1.data.datasets[0].data.push(24 + Math.random() * 1); // TODO Replace with CAN message updates (message sent every 50ms, take three and average to get sample)
                    chart1.data.datasets[1].data.push(lightThresh);
                    chart1.data.datasets[2].data.push(strongThresh);

                    //This portion deletes oldest chart entry
                    if (chart1.data.labels.length > 30) {
                        chart1.data.labels.splice(0, 1);
                        chart1.data.datasets.forEach((dataset) => {
                            dataset.data.splice(0, 1);
                        })
                    };

                    chart1.update('none');
                }
                
                setInterval(updateChart, 150);