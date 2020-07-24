import React from 'react';

const TimeLineItem = ({data}) => ( 
    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='tag' style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <time>{data.Date}</time>
            <p>{data.text}</p>
            <a href={data.link.url}>{data.link.text}</a>
            <span className='circle'></span>
        </div>
    </div>
)

export default TimeLineItem;