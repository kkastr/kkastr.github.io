import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react'

import React from 'react'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// export default function StyleConfig(
//     {title, xlabel, ylabel}:
//     {title: string, xlabel:string, ylabel: string}) {

export default function DashboardItem({title, dat}) {
    const lineRef = React.useRef(null)
    const resetZoomline = () => { lineRef.current.resetZoom(); }


    // const config = {
    //     responsive: true,
    //     maintainAspectRatio: true,
    //     scales: {
    //         y: {
    //             title: {
    //                 display: true,
    //                 text: {ylabel},
    //                 color: 'rgba(255, 255, 255, 0.86)'
    //             },
    //             ticks: {
    //                 color: 'rgba(255, 255, 255, 0.86)'
    //             }
    //         },
    //         x: {
    //             title: {
    //                 display: true,
    //                 text: {xlabel},
    //                 color: 'rgba(255, 255, 255, 0.86)'
    //             },
    //             ticks: {
    //                 color: 'rgba(255, 255, 255, 0.86)'
    //             }
    //         },
    //     },
    //     plugins: {
    //         legend: {
    //             position: 'top' as const,
    //             labels: {
    //                 color: 'rgba(255, 255, 255, 0.86)',
    //             },
    //         },
    //         title: {
    //             display: true,
    //             text: {title},
    //             color: 'rgba(255, 255, 255, 0.86)',
    //         },
    //     },
    //     }
    const loss_config = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'MSE Loss',
                    color: 'rgba(255, 255, 255, 0.86)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.86)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Epoch',
                    color: 'rgba(255, 255, 255, 0.86)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.86)'
                }
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'rgba(255, 255, 255, 0.86)',
                },
            },
            title: {
                display: true,
                text: title,
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.86)',
            },
        },
        }

        const values_config = {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Value (USD)',
                        color: 'rgba(255, 255, 255, 0.86)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.86)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Days',
                        color: 'rgba(255, 255, 255, 0.86)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.86)'
                    }
                },
            },
            plugins: {
                legend: {
                    position: 'top' as const,
                    labels: {
                        color: 'rgba(255, 255, 255, 0.86)',
                    },
                },
                title: {
                    display: true,
                    text: title,
                    fontSize: 24,
                    color: 'rgba(255, 255, 255, 0.86)',
                },
            },
            }
        const loss_data = {
            datasets: [
                {
                label: 'Training',
                data: dat.train_loss,
                borderColor: 'rgba(53, 162, 235, 0.5)',
                backgroundColor: 'rgba(53, 162, 235)',
                pointRadius: 2,
                },
                {
                label: 'Validation',
                data: dat.val_loss,
                borderColor: 'rgba(150, 99, 132, 0.5)',
                backgroundColor: 'rgba(150, 99, 132)',
                pointRadius: 2,
                }
            ]
        }

        const values_data = {
        datasets: [
                {
                label: 'Actual',
                data: dat.actual,
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgba(53, 162, 235, 0.5)',
                backgroundColor: 'rgba(53, 162, 235)',
                pointRadius: 2,
                order: 2
                },
                {
                label: 'Predicted',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: dat.predicted,
                borderColor: 'rgba(255, 99, 132, 0.5)',
                backgroundColor: 'rgba(255, 99, 132)',
                pointRadius: 2,
                order: 1
                },
                {
                label: 'Forecast',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: dat.forecast,
                borderColor: 'rgba(154, 226, 155, 0.5 )',
                backgroundColor: 'rgba(154, 226, 155)',
                pointRadius: 2,
                order: 0
                },
        ],
        }


    return(
        <>
        <Box>
            <Line options={loss_config} data={loss_data}/>
            {/* <Button size='xs' onClick={resetZoomline} > Reset Zoom </Button> */}
        </Box>
        <Box>
            <Line options={values_config} data={values_data}/>
            {/* <Button size='xs' onClick={resetZoomval} > Reset Zoom </Button> */}
        </Box>
        </>

    )
}