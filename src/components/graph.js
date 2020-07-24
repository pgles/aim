import React from 'react';
import { Line } from 'react-chartjs-2';
import {Card} from 'reactstrap';

const data = {
    labels: ['Jan','Feb','Mar','Apr','May','June'],
    datasets: [
        {
            label:'Participants in 2020(k)',
            data:[3,5,4,2,5,5],
            borderColor: ['rgba(255, 206, 86, 0.2)'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            pointBorderColor: ['rgba(255, 206, 86, 0.2)'],
            pointBackgroundColor: ['rgba(255, 206, 86, 0.2)']
        },
        {       
            label:'Participants in 2019(k)',
            data:[3,1,1,2,5,2],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBorderColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: ['rgba(54, 162, 235, 0.2)']
        }
    ]
}
const options = {
    scales:{
        yAxes: [
            {
                ticks: {
                stepSize: 1
            }
            }
        ]
    }
}
export default function Graph() {
    return (
        <div>
            <Card>
                <h1>Graph about Hackathon activity</h1>
                <Line height={200} width={500}  data = {data} options={options}/>
            </Card>
        </div>
    )
}

