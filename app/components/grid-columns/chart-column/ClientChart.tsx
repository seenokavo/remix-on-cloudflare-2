import React from 'react';

import {SparkLineChart} from '@mui/x-charts';

interface Props {
    data: [number, number][];
    color: 'red' | 'green';
}

const green: string = 'rgb(76, 175, 80)';
const red: string = 'rgb(244, 67, 54)';

export function ClientChart({data, color}: Props) {
    const targetColor = color === 'red' ? red : green;
    return (
        <div>
            <SparkLineChart data={data.map(d => d[1])} width={140} height={40} colors={[targetColor]}/>
        </div>
    );
}