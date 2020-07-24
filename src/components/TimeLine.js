import React from 'react';
import tldata from '../data.js';
import TimeLineItem from './TimeLineItem.js';
import {Card} from 'reactstrap';

const TimeLine = () => tldata.length > 0 && (
    <Card className='tlc'>
    <div className='timeline-container'>
        {tldata.map((data, idx) => (
            <TimeLineItem data={data} key={idx} />
        ))}
    </div>
    </Card>
)

export default TimeLine;