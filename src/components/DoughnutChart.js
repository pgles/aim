import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Card} from 'reactstrap';

function DoughnutChart() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','June'],
        datasets: [
            {
                label:'Participants in 2020(k)',
                data:[3,2,1,2,5,9],
                backgroundColor: ['rgba(255, 206, 86, 0.2)', '#F0F8FF',' #40e0d0',' #40e0d0','#99badd','#73c2fb']
            },
            {       
                label:'Participants in 2019(k)',
                data:[6,5,8,2,5,7],
                backgroundColor: ['rgba(54, 162, 235, 0.2)','#FFA07A']
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        responsive:true,
        title: {
            display:true,
            text:'Doughnut Chart'
        },
    }
    return (
        <Card style={{height:'400px'}}>
            <Doughnut data={data} options={options} style={{height:'400px'}}/>
        </Card>
    )
}

export default DoughnutChart;
