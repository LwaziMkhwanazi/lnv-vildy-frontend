import React from 'react'
import {Line} from "react-chartjs-2"
function DashboardCharts() {

    const data = {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
            {
                label:'Rentals for 2020',
                data: [20,35,55,40,30,60,75,70,60,50,75,100],
                borderColor:['rgb(170, 0, 255)'],
                backgroundColor:['rgb(170, 0, 255)'],
                pointBackgroundColor:['rgb(170, 0, 255)'],
                pointBorderColor:['rgb(170, 0, 255)']
            },
            {
                label:'Rentals for 2021',
                data: [28,35,20,15],
                borderColor:['rgb(255, 64, 129)'],
                backgroundColor:['rgb(255, 64, 129)'],
                pointBackgroundColor:['rgb(255, 64, 129)'],
                pointBorderColor:['rgb(255, 64, 129)']
            }

        ]
    }

    return (
        <div>
            <Line data = {data}/>
        </div>
    )
}

export default DashboardCharts
